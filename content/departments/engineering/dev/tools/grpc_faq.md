# gRPC FAQ

## How do I configure Wireshark to analyze Sourcegraph gRPC's traffic?

### Configure Protobuf search paths

Wireshark can provide more meaningful message decoding if it has access to the underlying schema that defines the Protobuf messages that Sourcegraph uses.

You can give Wireshark access by:

1.  Telling Wireshark where to find Sourcegraph's .proto files:

    ![Screenshot of @ggilmore's Protobuf search paths pane](https://storage.googleapis.com/sourcegraph-assets/ProtobufSearchPaths.png)

    1. Navgivate to Preferences > Protocols > ProtoBuf > "Protobuf search paths"
    1. Add the folder that contains your Sourcegraph checkout and check "Load all files."
       - Example: `/Users/ggilmore/dev/go/src/github.com/sourcegraph/sourcegraph`
    1. Add the folder that contains your local copy of Protobufs [well-known types](https://protobuf.dev/reference/protobuf/google.protobuf/) and check "Load all files."

    - If you have installed Protobuf with homebrew, you can use `brew info protobuf` to find the installation folder (example: `/opt/homebrew/Cellar/protobuf/21.12`). From there, the "include" folder in the standard Protobuf installation contains the well-known types (example: `/opt/homebrew/Cellar/protobuf/21.12/include`)
      !["brew info protobuf" output](https://storage.googleapis.com/sourcegraph-assets/BrewInfoProtobuf.png)

1.  Tell Wireshark to load all the `.proto` files on startup.
    ![Screenshot of Preferences > Protocols > ProtoBuf](https://storage.googleapis.com/sourcegraph-assets/ProtobufPreferencesPane.png)

- Navigate to Preferences > Protocols > ProtoBuf and check "Load .proto files on startup."

### Set port traffic type

At this time of writing, each service that implements gRPC is multiplexing and HTTP HTTP2 traffic on the same port. This is an unusual setup, so we'll need to tell Wireshark explicitly to assume that only HTTP2 traffic flows across the port.

You can do this by configuring Wireshark's "Decode As" configuration to have each service's port interpreted as HTTP2.

You can do this by navigating to Analyze > "Decode As", and adding the following entry for each service that implements gRPC:

```text
Field: "TCP Port" Value: "<service port>" Type: "Integer, base 10" Default: "(none)" Current: "HTTP2"
```

![example entry for "Decode As" settings (using default values for symbols, searcher, and gitserver](https://storage.googleapis.com/sourcegraph-assets/WiresharkDecodeAs.png)

Each different has a different method for configuring the ports it listens on, so you'll need to do a mix of reading the source code / consulting your `sg.config.yaml` configuration to see the current port setting.

### Filter for http2 traffic

Now, you can filter your packet capture for `http2` traffic, which should show the gRPC communication between your services:

![example gRPC communcation using http2 filter in Wireshark](https://storage.googleapis.com/sourcegraph-assets/WiresharkgRPCExample.png)

## When implementing a gRPC server, why do I need to embed an "Unimplemented[...]Server" in my go struct?

This is to maintain forward compatibility with newer gRPC definitions. If you take an older server implementation and compile it against a newer Protobuf definition, the server will get a default method implementation for any new RPC methods.

```go
type UnimplementedSymbolsServer struct {}

func (UnimplementedSymbolsServer) Search(context.Context, *SearchRequest) (*SymbolsResponse, error) {
   return nil, status.Errorf(codes.Unimplemented, "method Search not implemented")
}
```

See [https://stackoverflow.com/a/69480218](https://stackoverflow.com/a/69480218) for more information.

## How do I set a "required" field in Protobuf?

You don't. See [https://protobuf.dev/programming-guides/proto3/#default](https://protobuf.dev/programming-guides/proto3/#default):

> ..., once a message is parsed there's no way of telling whether a field was explicitly set to the default value (for example whether a boolean was set to false) or just not set at all: you should bear this in mind when defining your message types. For example, don't have a boolean that switches on some behavior when set to false if you don't want that behavior to also happen by default...

It is always possible to leave a field unset. For Go, this value will be the 0 value when unmarshalled. See [https://protobuf.dev/reference/go/go-generated/#singular-scalar-proto3](https://protobuf.dev/reference/go/go-generated/#singular-scalar-proto3) for more information. Your server implementation needs to handle default values for _any_ field (or fail gracefully).

## How do I communicate errors in my API?

Strongly prefer using the [standard error codes](https://cloud.google.com/apis/design/errors#error_model) that are provided by Google.

See [avinassh/grpc-errors@master/go](https://github.com/avinassh/grpc-errors/tree/master/go) for an example of how this interface works:

Server implementation (sending an error)

```go
package main

import (
	"fmt"

	"golang.org/x/net/context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	api "github.com/avinassh/grpc-errors/go/hello"
)

type HelloServer struct {
	api.UnimplementedHelloServiceServer
}

func (s *HelloServer) SayHelloStrict(ctx context.Context, req *api.HelloReq) (*api.HelloResp, error) {
	if len(req.GetName()) >= 10 {
		return nil, status.Errorf(codes.InvalidArgument,
			"Length of `Name` cannot be more than 10 characters")
	}

	return &api.HelloResp{Result: fmt.Sprintf("Hey, %s!", req.GetName())}, nil
}

```

Client implementation (inspecting the error)

```go
package main

import (
	"fmt"
	"log"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	api "github.com/avinassh/grpc-errors/go/hello"
)

func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Did not connect: %v", err)
	}
	defer conn.Close()

	c := api.NewHelloServiceClient(conn)
	resp, err = c.SayHelloStrict(
		context.Background(),
		&api.HelloReq{Name: "Leonhard Euler"},
	)

	if err != nil {
		// ouch!
		// Let's print the gRPC error message which should be:
		// "Length of `Name` cannot be more than 10 characters"
		// The error returned directly from a gRPC client is always
		// guaranteed to be a status error, so we can assume this
		// will always succeed
		errStatus, _ := status.FromError(err)
		fmt.Println(errStatus.Message())

		// Let's print the error code which is `INVALID_ARGUMENT`
		fmt.Println(errStatus.Code())

		// Want its int version for some reason?
		// You shouldn't actually do this, but if you need for debugging,
		// you can do `int(status_code)` which will give you `3`
		//
		// Want to take specific action based on specific error?

		if codes.InvalidArgument == errStatus.Code() {
			// do your stuff here
			log.Fatal()
		}
	}
	fmt.Println(resp.GetResult())
}
```

If you want to add structured information to your error responses, arbitrary
protobuf messages can be added to a Status using
[`(*Status).WithDetails()`](https://pkg.go.dev/google.golang.org/grpc@v1.52.0/internal/status#Status.WithDetails).
These details can be extracted by the client using
[`(*Status).Details()`](https://pkg.go.dev/google.golang.org/grpc@v1.52.0/internal/status#Status.Details),
which will allow you to iterate over the deserialized messages you attached to
the error.
