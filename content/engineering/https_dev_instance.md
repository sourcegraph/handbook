# How to run an HTTPS reverse proxy for a Sourcegraph instance on a local dev machine

> NOTE: These instructions have been verified on a Mac running Catalina (the most common dev machine configuration).
> It should fundamentally work the same on Linux with commands tailored accordingly. All the big pieces work
> on both Linux and Mac.

## Method One

> More involved but works without outside internet.

> NOTE: On a Mac installation this method requires one restart of the machine to bounce the DNS resolving machinery
> of the operating system. The `/etc/resolver` entry will otherwise be ignored until the next restart. 

This method uses:

* [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) (optional)
* [mkcert](https://github.com/FiloSottile/mkcert)
* [caddy2](https://caddyserver.com/) (optional)

### Installing and setting up domain name resolution of .test domains to 127.0.0.1.

We choose `.test` at the recommendation of [rfc6761](https://tools.ietf.org/html/rfc6761) (see section for .test)

There are two options to achieve the resolution: one involving `dnsmasq` and the other adding entries to `/etc/hosts`.

> Using dnsmasq has the advantage that any DNS names under .test is going to resolve to 127.0.0.1. Using entries
> in /etc/hosts has the advantage of being much simpler to set up.

#### Option one for DNS: New entry in `/etc/hosts`

Add a line to `/etc/hosts`:

```text
127.0.0.1 sourcegraph.test
``` 

#### Option two for DNS: Using dnsmasq

* `brew install dnsmasq`
* Edit `/usr/local/etc/dnsmasq.conf` to add this entry:

```text
address=/test/127.0.0.1
```

* Add an entry to `/etc/resolver`:

```shell script
sudo tee /etc/resolver/test >/dev/null <<EOF
nameserver 127.0.0.1
EOF
``` 

* Add dnsmasq to launchd:

```shell script
sudo brew services start dnsmasq 
```
* If you're on a Mac, restart the machine.
* Verify that `.test` domains resolve to your local machine:

```shell script
dig sourcegraph.test @127.0.0.1
``` 

You should see something like this (look for the answer section):

```text
; <<>> DiG 9.10.6 <<>> sourcegraph.test @127.0.0.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 15978
;; flags: qr aa rd ra ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;sourcegraph.test.		IN	A

;; ANSWER SECTION:
sourcegraph.test.	0	IN	A	127.0.0.1

;; Query time: 0 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Tue Mar 10 21:05:49 PDT 2020
;; MSG SIZE  rcvd: 61
```

* `ping -c 1 this.is.a.test ` should also work:

```text
PING this.is.a.test (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.025 ms

--- this.is.a.test ping statistics ---
1 packets transmitted, 1 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.025/0.025/0.025/0.000 ms
``` 

### Installing and setting up mkcert

* `brew install mkcert nss`
* Generate and install a certificate authority:

```shell script
mkcert -install
```

This puts a root certificate and its private key in ` ~/Library/Application\ Support/mkcert`. It also declares
this root certificate to the system, to Firefox (via nss) and to Java (you can control which certificate stores
it gets added to with command-line flags to mkcert).

> SECURITY NOTE: Be very careful to protect and not share the root private key. Set up reminders to re-generate
> this certificate every couple of months. If the private key leaks it gives man in-the-middle powers to an attacker.

* Generate a certificate:

```shell script
mkcert -cert-file sourcegraph.crt -key-file sourcegraph.key sourcegraph.test
``` 

The Caddy2 reverse proxy will use this certificate.

### Installing and setting up a reverse proxy

There are many choices here. We will present two: 

* adding a server block to the existing nginx server we already dev
* using Caddy2

#### Option one for reverse proxy: New entry in nginx.conf

In your local git clone of sourcegraph/sourcegraph, add this server block to `dev/nginx.conf` as a peer to the
existing server block:

```text
server {
        listen              443 ssl;
        server_name         sourcegraph.test;

        ssl_certificate     <path to your>/sourcegraph.crt;
        ssl_certificate_key <path to your>/sourcegraph.key;

        location / {
            proxy_pass http://localhost:3080;
        }
}
```

Replace `<path to your>` with the path to the certificate you created before.

#### Option two for reverse proxy: Using Caddy2

Caddy2 is still in active development, so we use HEAD of master to get the latest bugfixes 
(tested with commit 891446d06340db2912c9a970bfe862bd54efbb70).

* Clone `https://github.com/caddyserver/caddy`
* cd into your clone and `go install .`

Add the following content to a text file called `Caddyfile` in a directory which has
the certificate `sourcegraph.{crt|key}`:

```text
https://sourcegraph.test {
  reverse_proxy 127.0.0.1:3080
  tls sourcegraph.crt sourcegraph.key
}
```

* In this same directory start Caddy:

```shell script
caddy run
```

### Sourcegraph instance

You are now ready to run a local Sourcegraph instance:

* `dev/start.sh` (or `enterprise/dev/start.sh`)

Open a browser window and visit `https://sourcegraph.test`.
Don't forget to set the external URL of your instance to `https://sourcegraph.test`.

## Method Two

> Super easy to install but makes a roundtrip to an outside (AWS server) for what is basically a local request.
> On the other hand you can invite your co-workers to use your instance by sharing the ngrok.io URL.
> This is useful for shared debugging, demos and presentations.

This method uses [ngrok](https://ngrok.com/).

1. Follow [instructions](https://ngrok.com/download) for downloading and setting up ngrok.
1. Start your instance (`dev/start.sh` or `enterprise/dev/start.sh`)
1. Run this command: `ngrok http 3080`

Output will look something like this:

```text
ngrok by @inconshreveable                                                                                                            
                                                                                                                                                                                                                        
Session Status                online                                                                                                                                                                                    
Account                       xxxxxx (Plan: xxxxx)                                                                                                                                                                 
Version                       2.3.35                                                                                                                                                                                    
Region                        United States (us)                                                                                                                                                                        
Web Interface                 http://127.0.0.1:4040                                                                                                                                                                     
Forwarding                    http://xxxxxx.ngrok.io -> http://localhost:3080                                                                                                                                         
Forwarding                    https://xxxxxxx.ngrok.io -> http://localhost:3080                                                                                                                                        
                                                                                                                                                                                                                        
Connections                   ttl     opn     rt1     rt5     p50     p90                                                                                                                                               
                              0       0       0.00    0.00    0.00    0.00                                                                                                                                              
```

You can use the exposed HTTPS endpoint to access your instance.

> SECURITY NOTE: The ngrok URLS are by definition accesible from the outside internet. Even though the URLs
> are hard to guess anyone that guesses the URL has access to your Sourcegraph instance. It is recommended to
> kill the ngrok proxy when you are done and not let it run for long periods of time.


