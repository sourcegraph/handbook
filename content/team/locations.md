# Team locations

The [Sourcegraph team](index.md) is distributed around the world!

<!-- https://docs.github.com/en/github/managing-files-in-a-repository/mapping-geojson-files-on-github#embedding-your-map-elsewhere -->
<script src="https://embed.github.com/view/geojson/sourcegraph/handbook/main/content/team/locations.geojson"></script>

## Adding to the team locations map

Note: this is optional! If you elect to add your location to the map, follow the instructions below. However, it is not mandatory to add this to your bio.

### Option 1

To add your own location:

1. Copy the contents of [`locations.geojson`](https://raw.githubusercontent.com/sourcegraph/handbook/main/content/team/locations.geojson)
1. Paste it in [geojson.io](https://geojson.io)
1. Click the map pin icon (looks like a google map location) on the right side of the map, and drop it in your location.
1. Scroll to the bottom of the text that you pasted in, where your new pin will appear.
1. In the `properties` section, add your name: `"name": "<yourname>"`. The final result will look like:
   ```json
   {
       "type": "Feature",
       "properties": {
           "name": "<YOUR NAME>"
       },
       "geometry": {
           "type": "Point",
           "coordinates": [
               <LONGITUDE>,
               <LATITUDE>
           ]
       }
   }
   ```
1. Copy the new JSON from the right side of the page with your updated info included, and use it to generate a PR for [this file](https://github.com/sourcegraph/handbook/blob/main/content/team/locations.geojson).

### Option 2

1. Use [this site](https://www.latlong.net/) to get your city's latitude and longitude coordinates.
1. Edit the following bit of JSON to include your name and coordinates (be sure to put longitude first):
   ```json
     {
       "type": "Feature",
       "properties": {
           "name": "<YOUR NAME>"
       },
       "geometry": {
           "type": "Point",
           "coordinates": [
               <LONGITUDE>,
               <LATITUDE>
           ]
       }
   }
   ```
1. Edit [this file](https://github.com/sourcegraph/handbook/blob/main/content/team/locations.geojson). Paste in your JSON above the final two lines of the file, leaving the `] }` below what you pasted in.
1. Open a PR for the file and assign a teammate to review.
