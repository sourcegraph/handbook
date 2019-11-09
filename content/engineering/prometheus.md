# Prometheus

The Prometheus stack is based on Borgmon, which is how Google does monitoring /
alerting for service level metrics. It is great at instrumenting a specific
metric (counter, gauge, histogram, etc) in the Sourcegraph app. To see the raw
metrics just visit <http://localhost:6060/metrics> when running a local
Sourcegraph instance.  Sourcegraph specific metrics are usually prefixed with
`src_`.

Public documentation for using Prometheus with Sourcegraph exists here:

* [Data Center admin guide](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/admin-guide.md)
* [Sourcegraph Prometheus metrics](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/docs/prom-metrics.md)

## External Resources

Prometheus has a lot of traction (e.g., Kubernetes exports prometheus metrics),
but it can still be tricky to understand effective ways of using it. Here are
some resources that are useful:

* [Official Documentation](https://prometheus.io/docs/introduction/overview/)
* [Prometheus: A practical guide to alerting at scale](https://docs.google.com/presentation/d/1X1rKozAUuF2MVc1YXElFWq9wkcWv3Axdldl8LOH9Vik/edit)
* Supporting examples for the above talk https://github.com/jaqx0r/blts/tree/master/prom

## Track a service

Metrics are available over HTTP, and Prometheus scrapes them. By default it is
under the path `/metrics`. For example, run your local Sourcegraph dev server
and visit <http://localhost:6060/metrics>.

Prometheus uses Kubernetes' API to discover endpoints to scrape. Just add to
your service the following annotation:

```
Annotations: map[string]string{
        "prometheus.io/scrape": "true",
        "prometheus.io/port":   "6060",
},
```

## Add a metric

Example commits:
* [pgsql: Export OpenConnections to prometheus](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@ccc69ef5cfaa6486e31a5fd1a263f3797a5320be/-/commit)
* [builds: Track final build states in prometheus](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@bff33142f6017b9c2cc552d3c0a2cea7427208ca/-/commit)

## Alerts

See the `alert*.rules` files under
[kubernetes/resources/configmap/prometheus in the infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/master/kubernetes/resources/configmap/prometheus) for all
of the alerts. You can simply just copy paste the IF condition into
[prometheus.sgdev.org](https://prometheus.sgdev.org/) to see when the condition is true and
alerts. To see the graph remove the comparison part at the end of the expression.

Notice that nearly all the rules include `ns="prod"`. This is to limit the alert
to only instances in our production kubernetes namespace.

Our CI will validate the rules files, but you can also do the validation
locally:

```
$ go get github.com/prometheus/prometheus/cmd/promtool
$ cd kubernetes/resources/configmap/prometheus
$ promtool check-rules *.rules
```

### Silencing an Alert

Just go to https://alertmanager.sgdev.org/ and silence the
corresponding alert. The UI is pretty bad, and only provides useful fields if
the alert is firing. But if you need to manually specify it, just silence
`alertname = MyAlertName`.

## Testing

Connect to the Kubernetes cluster VPN. Then fetch the service account details + run the docker
image.

```
$ kubectl --namespace=monitoring exec prometheus-g1uyy -i -- tar c -C /var/run/secrets/kubernetes.io/ serviceaccount | tar x
$ cp -r ../kubernetes/resources/configmap/prometheus .
$ docker run --rm -p 9090:9090 --add-host kubernetes.default.svc:10.191.240.1 \
  -v $PWD/serviceaccount:/var/run/secrets/kubernetes.io/serviceaccount:ro \
  -v $PWD/prometheus:/etc/prometheus:ro \
  prom/prometheus:0.18.0
```


## Updating the configuration

You can update the configuration without restarting the prometheus
container. We use a Kubernetes' ConfigMap feature to manage the configuration
for Prometheus, so when updating the ConfigMap the changes are deployed to the
prometheus container:

```
$ ./generate.sh
$ kubectl --namespace=monitoring apply --record -f gen/monitoring/prometheus.ConfigMap.json
```

I suggest checking that prometheus reflects the new configuration. If it does
not, check prometheus' logs. It may take a minute or two for the ConfigMap
changes to propagate.
