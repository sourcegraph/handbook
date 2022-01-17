# Collecting and inspecting metrics dumps

## What is a metrics dump?

Metrics dumps are a snapshot of the entire Prometheus database. This includes detailed information from the past 7d about the health of Sourcegraph, which alerts were firing, resource utilization, request performance, and more—but all aggregate / statistical information containing no code, personal information, etc.

Metrics dumps are very heavy (often in the range of ~8GB uncompressed to ~3GB compressed), and take ~10mins of an admins time to collect + some time to upload the file somewhere. It is most useful when debugging performance problems—but should be considered a last resort of sorts (with alerts being the first thing to check).

## How to ask a site admin for a metrics dump

To ask a site admin for a metrics dump, create a shared Google Drive folder where they will be able to upload the dump and ask them to follow these instructions to create and upload their `sourcegraph-metrics-dump.tgz` file: https://docs.sourcegraph.com/admin/troubleshooting#submitting-a-metrics-dump

## How to inspect a metrics dump

Simply extract the dump file to the location of Prometheus's `--storage.tsdb.path` flag in any Sourcegraph deployment of the same version.

For example, if the snapshot was created using 3.17.1 and is located in `~/Downloads/sourcegraph-metrics-dump.tgz` then extract it to `~/.sourcegraph/data/prometheus` by first wiping out that directory:

```sh
rm -rf $HOME/.sourcegraph
```

And then extracting the snapshot:

```
export DATA_DIR="$HOME/.sourcegraph/data/prometheus"; rm -rf $DATA_DIR && mkdir -p $DATA_DIR && cd $DATA_DIR && tar -xzf ~/Downloads/sourcegraph-metrics-dump.tgz && mv */* .
```

Now if you launch a 3.17.1 server following the [quickstart guide](https://docs.sourcegraph.com/) and navigate to Grafana (`http://localhost:7080/-/debug/grafana`) you can begin exploring the data.
