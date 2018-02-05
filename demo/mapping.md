## Intro to Mapping Data

![Satellite](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/losing.jpg)
ProPublica, [_Losing Ground_](http://projects.propublica.org/louisiana/).


### Outline

1. Mapping Basics
	+ You are Here.
	+ Types + Topics
	+ Anatomy of a Webmap
2. Mapping Data
	+ Data + Date Formats
	+ Collecting + Sync Tables
	+ Storing
3. Mapping Tools
	+ Examples
	+ Tour of the interface
	+ APIs / JS Libs
  	+ Data Import + Sync Tables
	+ Customizing UI + CartoCSS
4. Creating Custom Maps
    + Mapping in the Editor
	+ Mapping in Code
		+ Python
		+ Node
		+ R
5. Building A Narrative
	+ Case Study 1: [NYC Building Choropleth Map](https://auremoser.carto.com/builder/6ed6133a-8f5a-11e6-b82e-0ecd1babdde5/embed)
	+ Case Study 2: [NYC Bikelane Category Map](https://auremoser.carto.com/builder/491805b6-95c8-11e7-82c9-0e13ef3858cc/embed)
	+ Cast Study 3: [Multivariate Data Map App](https://twitter.com/bikestorming)
	+ Tell Time/Stories: Odyssey + Torque
	+ Partner Graphics: Graphs + Charts
	+ Bl.ocks for Mapping display
6. Resources

#### YOU ARE HERE.


Where are you? If I gave you directions here, you could say you were at

> 721 Broadway, New York, NY 10003

But if I wanted to describe the location as a point on a map, I might describe the same location using latitude and longitude:

> 40° 43' 46.2936'' N, 73° 59' 37.8384'' W

It reads as "40 degrees, 43 minutes and 46.29 seconds, 73 degrees, 59 minutes and 37.84 seconds"


We describe locations with a [spatiotemporal notation](https://en.wikipedia.org/wiki/Longitude_(book)), it's also somewhat obscure. So let's describe the same place using longitude and longitude but using decimal degrees instead of minutes and seconds. There are a number of conversion tools available online to do this:

> 40.726322, -73.998392

### Types + Topics

![Gallery of maps](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/gallery.jpg)

There are many different types of map you can make, browse [this gallery](https://cartodb.com/gallery/) to view some options. Most maps illustrate some kind of geospatial change.

**DYNAMIC MAPSs**
![Time Travel Map](https://raw.githubusercontent.com/auremoser/hasadna/master/img/rainbow.jpg)

Source: [Time Travel Between Counties](http://mdweaver.github.io/times_year/), Carto.JS

**WEATHER MAPS**
![Realtime Precipitation](https://raw.githubusercontent.com/auremoser/140realtime/master/img/precip.jpg)

Source: [Realtime Precipitation Map](https://team.cartodb.com/u/andrew/viz/13062538-b129-11e4-a9f5-0e9d821ea90d/embed_map) | [NOAA Weather data](http://www.srh.noaa.gov/ridge2/RFC_Precip/)

![Realtime Climate Tracking](https://raw.githubusercontent.com/auremoser/140realtime/master/img/climate.jpg)

Source: [Vizonomy + NOAA collaboration on Asterra's Climate Dashboard](http://coast.noaa.gov/digitalcoast/stories/vizonomy)

**TRAFFIC MAPS**
![Realtime Traffic Map](https://raw.githubusercontent.com/auremoser/140realtime/master/img/muni-animated.gif)

Source: [Traffic Change Data for SF](https://publicdata-transit.firebaseio.com/sf-muni) | [Municipal Traffic in SF App](http://track-sf-muni.cartodb.io/) | [CartoDB + Firebase](https://www.firebase.com/blog/2015-04-10-realtime-maps-cartodb-firebase.html)

**CRISIS MONITORING MAPS**

[![Realtime Earthquake Map](http://i.imgur.com/n5pVfee.png)](https://team.cartodb.com/u/eschbacher/viz/8075e1f2-33c5-11e5-bd0a-0e4fddd5de28/embed_map)

Source: [Andy's Earthquake Workshop](https://gist.github.com/andy-esch/4c6b8dc877dc6c870322)

**DATA SEARCH TOOLS**
![GDELT Geographic News Search Tool](https://raw.githubusercontent.com/auremoser/140realtime/master/img/gdelt.jpg)

Source: [GDELT Geographic News Search Tool](http://gns.gdeltproject.org/)

Journalists have used the [GDELT](http://gdeltproject.org/) data to [track wildlife crime](http://news.nationalgeographic.com/2015/07/150706-wildlife-crime-technology-poaching-endangered-animals/), and the [spread of the Islamic State in the Middle East](http://foreignpolicy.com/2015/06/19/islamc-state-big-data-middle-east/) among other things.

You can fork the GDELT hourly synced data set from the CartoDB DataLibrary and add it as a layer on your map or use the [Geographic Search Tool](http://blog.gdeltproject.org/announcing-gdelt-geographic-news-search/) linked above to search for tags of interest.

**CHART GRAPHICS**

![County Chart](https://raw.githubusercontent.com/auremoser/hasadna/master/img/chart.jpg)

Source: [Geogia County Car Crash Counts](http://bl.ocks.org/auremoser/6236a61e5383ab0bc71d), C3.JS

**COMPARISON NARRATIVE**

![Michael's Syrian Refugee visualization](https://raw.githubusercontent.com/auremoser/images/master/syria.jpg)
[Map population by relative density](http://projects.aljazeera.com/2013/syrias-refugees/)

* Maps give you more context than most visualizations.
* They allow you to apply data to a recognizable topography.

**Sources**

* [**Carto**](https://carto.com/): light open source library and graphical user interface application for hosting and visualizing geospatial data
* [**ChartJS**](http://www.chartjs.org/): light library for creating charts and graphs
* [**GDELT**](http://gdeltproject.org/): the global database of events languages and tones

### Anatomy of a WebMap

![Webmap Gif](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/slippy.gif)

Maps are composed of:

#### 1. Tiles (often)

![Stamen Tiles](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/stamen.jpg)

Tiles are 256x256 pixels squares that plot one next to the other to stitch together a pseudo-seamless image; the tiles draw dynamically as you focus and zoom in on your map so that the map draws on a continuous canvas

![zoom pyramid](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/pyramid.jpeg)

#### 2. Feature Layers

Map layers that populate on top of your basemap

#### 3. Javascript/HTML/CSS for rendering on the web

With these languages you can publish your map with the basetiles loaded and your data layers appropriately geocoded; with javascript you can also add to the interactivity of your map, revealing metadata in the tooltips.

### Mapping Data
#### Formats + Free Sources

You can get geospatial data for your feature layers in lots of places, here's a [nice resource with a list of common data formats that you might encounter](http://gisgeography.com/gis-formats/). Here are some examples.

* [Columbia University GeoSpatial Datasets](http://library.columbia.edu/locations/dssc/data/nyc.html)
* [Curated List of NYC Data](https://nycitymap.wordpress.com/2014/11/18/nycgeo-data/)
* [NYC DOT DataFeeds](http://www.nyc.gov/html/dot/html/about/datafeeds.shtml)
* [NYC Open Data Portal](https://nycopendata.socrata.com/)
* [Beta NYC's NYC Open Data Sources](http://bit.ly/nyc-data-resources)
* [NYC Citizen Complaint Review Board](http://www.nyc.gov/html/ccrb/html/news/statistics.shtml)
* [Federal Data Resources](https://etherpad.mozilla.org/fed-data)
* [Awesome Public Datasets](https://github.com/caesar0301/awesome-public-datasets)

#### Collecting + Sync Tables

We'll be collecting data from multiple sources. Most of which are available in [the repository](https://github.com/sva-dsi/2017-fall-course/tree/master/practice/data) where our data will be stored. In this case, point (library), lines (bikelanes), and polygons (building footprints).

**BIKELANES**

* [NYC Open Data](https://nycopendata.socrata.com/)

**LIBRARIES**
* OSM: Open StreetMap + [Overpass Turbo](http://overpass-turbo.eu/)

![Overpass](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/turbo.jpg)

You can read more about Overpass on the [Open Street Map Wiki](http://wiki.openstreetmap.org/wiki/Overpass_turbo).

Steps:
* Pan manually to an area in OverPass Turbo
* Go to the "Wizard"
* Look up the appropriate OSM tag in the OSM wiki
* Search for "amenity=library" or whatever
* Export your data as GeoJson or KML
* Upload into CartoDB or another interface

Notes:
* only nodes, only ways, only relations (-> limit so it doesn't map data you're not interested in)
* search for something that is too large it freezes (-> define your bounding box)

![Turbo Interface](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/overpass.jpg)

**BUILDINGS**
* CartoDB Data Library

![Data Library](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/datalibrary.jpg)

* [NYC Pluto Data Downloader](http://chriswhong.github.io/plutoplus/)

![NYC Pluto Downloader](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/pluto.jpg)


There are lots of geospatial data formats that may or may not be easy to parse. Here's [a short list](https://carto.com/docs/carto-editor/datasets/#supported-geospatial-data-formats) of ones that are commonly imported into CartoDB.

#### Case Study 1: Libraries!

So let's take a look at this library data. You want to lead people to all of the libraries in NYC. You can use the kml file [here in the data folder](https://github.com/sva-dsi/2017-fall-course/blob/master/practice/data/libraries.kml).

You can get the libraries from OSM or NYC Open Data but let's go with the KML from OSM that we extracted with OverPass.

`.kml` which is a notation for XML that first made popular by Google Earth before becoming standardized. Google Mapping Products happily use kml files. Check to see how the locations are described:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"><Document>
<name>overpass-turbo.eu export</name>
<description>Filtered OSM data converted to KML by overpass turbo.
Copyright: The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.
Timestamp: 2015-08-19T17:02:03Z</description>
<Placemark><name>SC Williams Library</name><Polygon>
	<outerBoundaryIs>
		<LinearRing><coordinates>-74.0254348,40.7450718 -74.0255769,40.7445846 -74.0251885,40.7445156 -74.0251471,40.7446466 -74.0251306,40.7446862 -74.0250324,40.7450032 -74.0254348,40.7450718</coordinates>
		</LinearRing>
	</outerBoundaryIs></Polygon><ExtendedData><Data name="@id"><value>way/26974141</value></Data>
	<Data name="amenity"><value>library</value></Data>
	...
```

Notice that the point coordinates are in the format <coordinates>longitude, latitude</latitude>. Some geoformats are long, lat and others are long, lat. This makes everyone sad.

When coordinates cannot easily be parsed they go to "null island," a fictional place at coordinates (0,0).

![Null-island](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/null_island.jpg)

In a bit, we'll show how you can convert, process and use a file like this to plot data on your map!

#### Storing

CartoDB is a PostGres database in the cloud, which means it handles a lot of your backend data needs and allows you to query for data and pull those data and basemap tiles into your front-end code.

You can also store your data in Github, or in another service that makes it web accessible. Read more about [that here](https://github.com/blog/1541-geojson-rendering-improvements) and [here](https://github.com/blog/1528-there-s-a-map-for-that).


### Mapping Tools

There are loads of ways to approach a map here are a few approaches to mapping the same dataset.

#### Map Making Exercise

We can make a map with the libraries data, or other data in the [data folder](https://github.com/sva-dsi/2017-fall-course/blob/master/practice/data/) for this workshop.

**Using Google Maps**

* <https://www.google.com/maps/d/>
* create account if you don't already have a Gmail account
* click on Import Map in top left hand menu (or My Maps -> Create map in some Google Maps UIs)
* upload `libraries.kml`
* explore changing the map features if you would like

**Using Mapbox**

* <https://mapbox.com/>
* create account if you don't already have a Mapbox account
* click on the Data tab at the top right hand corner of the screen; * click on import
* upload `libraries.kml`
* select map features if you would like then click on Import Features
explore changing the map features if you would like

**Using CartoDB**

* <https://cartodb.com/>
* create account if you don't already have a CartoDB account, [use this URL](https://cartodb.com/signup?plan=academy) to get boosted features
* click on Create Map; select Map View at the top of the screen
* click on the '+' or Add Layer option at the top of the right side menu
* upload `libraries.kml`
* explore changing the map features if you would like

**Using Leaflet**

You can also make a map from scratch using Leaflet.js (http://leafletjs.com/) to attach a set of points to a map made of tiles provided by OpenStreetMap.

You will first need to convert your kml file into GeoJSON (although I have both in the [data folder](https://github.com/sva-dsi/2017-fall-course/blob/master/practice/data/)) for this workshop.

GeoJSON is a file format that is easily digestable by JavaScript. If you have a data format (shp, kml) that is not geojson you can convert it to the right format for your code with [GeoJSON.io](http://geojson.io/)/

* go to http://geojson.io/
* from the menu *Open* select *File* and upload our kml file: https://github.com/copystar/do15/blob/master/combined-library-data.kml
* notice how GeoJSON looks like in the side-menu


```
{
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2015-08-19T17:02:03Z",
  "features": [
    {
      "type": "Feature",
      "id": "way/26974141",
      "properties": {
        "@id": "way/26974141",
        "amenity": "library",
        "designation": "Library",
        "name": "SC Williams Library"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -74.0254348,
              40.7450718
            ],

```

* after the map is drawn, from the menu *Save*, select *GeoJSON"
* refer to "Adding GeoJSON to Leaflet with Link Relations" : <http://lyzidiamond.com/posts/osgeo-august-meeting> to find the HTML that use can use as a template that will import GeoJSON into a map created by Leaflet.js
* use *http://{s}.tile.osm.org/{z}/{x}/{y}.png* for your map tiles
* use libraries.geojson for your geojson layer: https://github.com/auremoser/gdi-webmap/blob/master/libraries.geojson
* explore changing the map features if you would like using Leaflet.js: http://leafletjs.com/

#### Examples
+ [Alcatraz Escape Revisited](http://www.washingtonpost.com/news/morning-mix/wp/2014/12/15/the-alcatraz-escapees-could-have-survived-and-this-interactive-model-proves-it/)
+ [LA Sheriff Election Results](http://graphics.latimes.com/2014-la-sheriff-primary-map/)
+ [Starwars Galaxy Map](http://www.swgalaxymap.com/)
+ [Demonstrations in Brazil](https://carto.com/blog/mapping-the-world-ongoing-demonstrations-in-brazil/)
+ [Global Forest Watch](http://www.globalforestwatch.org/map/3/15.00/27.00/ALL/grayscale/loss,forestgain?begin=2001-01-01&end=2013-12-31&threshold=30)
+ [Urban Reviewer](http://www.urbanreviewer.org/#map=12/40.7400/-73.9998&sidebar=plans)

![urban-interface](https://raw.githubusercontent.com/auremoser/uofm-2015/master/img/urban.png)

![urban-reviewer](https://raw.githubusercontent.com/auremoser/nicar-test/master/img/urban_reviewer_code_example.png)

#### Tour of the interface

We'll use CartoDB for the subsequent exercises because of it's flexibility, support for SQL and JS, and backend handling for data management and geocoding.

![carto-gif](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/carto.gif)

#### APIs / JS Libs
You can read more about the [CartoDB APIs and JS Library here](https://carto.com/docs/)

* [CartoJS](https://carto.com/docs/carto-engine/carto-js/) - JS library for interacting with CartoDB
* [Maps API](https://carto.com/docs/carto-engine/maps-api/) - generate public/private maps with data hosted on your CDB account
* [SQL API](https://carto.com/docs/carto-engine/sql-api/) - run sql in your code to dynamically filter/request/query your mapped data stored in CartoDB via http calls
* [Import API](https://carto.com/docs/carto-engine/import-api/) - push data to your CartoDB Account

#### Data Import + Sync Tables

**Geospatial data** is info that ids a geolocation and its characteristic features/frontiers, typically represented by points, lines, polygons, and/or complex geographic features.

**Issues:**
+ Comes in multiple formats ([supported formats for Carto](https://carto.com/docs/carto-editor/datasets/#supported-geospatial-data-formats))
+ Sources uncertain
+ Contains errors

**Geocoding + SQL/PostGIS**
The most basic SQL statement is:

```sql
SELECT * FROM table_name
```
1. `SELECT` is what you're requesting (required)
2. `FROM` is where the data is located (required)
3. `WHERE` is the filter on the data you're requesting (optional)
4. `GROUP BY` and `ORDER BY` are optional additions, you can read more about aggregate/other functions below.

There are two special columns in CartoDB:

1. `the_geom`
2. `the_geom_webmercator`

The first of these is in the units of standard latitude/longitude, while the second is a projection based on the [original Mercator projection](http://en.wikipedia.org/wiki/Mercator_projection) but [optimized for the web](http://en.wikipedia.org/wiki/Web_Mercator).

If you want to run SQL commands and see your map update, make sure to `SELECT` the `the_geom_webmercator` because this is the column that's used for mapping--the other is more of a convenience column since most datasets use lat/long.

**Sync Tables**

![Sync Tables](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/sync.png)

The Builder is especially setup to process realtime data updates via [sync tables](https://carto.com/blog/synced-tables-create-real-time-maps-from-data-anywhere/).

You can import data that lives online via a URL, and set it to pull and update your map at regular intervals.

Check the [file types supported](https://carto.com/docs/carto-editor/datasets/#supported-geospatial-data-formats) in sync tables; keep in mind that it also works with dropbox + google drive.

Notes:

* to auto-geocode a sync table, verify that it contains the following:
	* country column, a latitude column and a separate longitude column
	* a column of IP addresses
* to edit sync tables you need to be disconnected from the datasource, so during syncing, you can use SQL to manipulate the dataset on the fly
* you can create sync tables in both the Builder and via the Import API

#### Customizing UI + CartoCSS

There are many types of geospatial visualizations:

+ `Simple` -- most basic visualization
+ `Cluster` -- counts number of points within a certain binned region
+ `Choropleth` -- makes a histogram of your data and gives bins different colors depending on the color ramp
+ `Category` -- color data based on unique category (works best for a handful of unique types)
+ `Bubble` -- size markers based on column values
+ `Intensity` -- colors by density
+ `Density` -- data aggregated by number of points within a hexagon
+ `Torque` -- temporal visualization of data
+ `Heat` -- more fluid map of concentration; emphasis on far over near-view

In Carto you can style "by value" which means it uses your data to drive the color/design of your map (ie. a Choropleth visualization would pull a numerical column from your dataset and allow you to style points/lines/polygons accordingly).

### Creating Custom Maps

![builder](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/data.png)

#### Mapping in the Builder
The Builder GUI allows you to select your visualization "type" and customize color palettes, design details, and otherwise set the tone for your map. It also gives you ways to run sql and set your cartocss in the browser before you input those things as templates in your code.

You have myriad customization options in the in-browser builder:

* `data/sql` - view histograms of datarun sql and postgis functions across your data
* `analysis` - add complex macros to analyze your data set and create clusters, collect cross-layer stats
* `style/css` - adjust the type, colors and fills in your map
* `pop-up` - create hovers, tooltips with information from your datatables
* `legends` - create keys for your map

**Styles**

* `Fill:` change the size, color, and opacity of all markers
* `Stroke:` change the width, color, and opacity of every marker's border
* `Blending:` change the color of markers when they overlap
* `Labels:` Text appearing by a marker (can be from columns)

**Infowindows**

![Infowindow options](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/popup.png)

+ Select which column data appear in infowindow by toggling column on
+ Customize further by selecting HTML-view

**Basemaps**

![Basemap options](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/basemap.png)

Check out the base [CartoDB Basemaps from Stamen](https://github.com/stamen/cartodb-basemaps).

#### Mapping in Code

`Python`
Use the [CartoDB Python module](https://github.com/Vizzuality/cartodb-python) to create and update tables; check out [Andy's IPythonNB demos](http://nbviewer.ipython.org/gist/ohasselblad/b2475c95a23c5e070264).

`Node`
Use the [CartoDB Uploader](https://www.npmjs.com/package/cartodb-uploader) package available in NPM for working in Node.js

`R`
Use Kyle Walker's [R2CartoDB](https://rpubs.com/walkerke/r2cartodb) project to create and update tables in R.

### Building a Narrative

#### Case Study 1: [NYC Building Choropleth Map](https://auremoser.carto.com/builder/6ed6133a-8f5a-11e6-b82e-0ecd1babdde5/embed)

The data folder includes some point (libraries), line (bikelanes), and polygons (building footprints) for NYC. You can make a map with any one of these, or a dataset of your choosing.

Let's try the Building Footprint Data, making something like [this](http://cdb.io/1Nvepxt).

* Navigate to your Data Library in Carto
* Search for 'PLUTO' and select the NYC data; or Use the NYC PLUTO data Downloader linked above
* "Connect Dataset"
* "Create Map"
* Adjust aspects in the GUI

![Pluto Map](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/pluto-map.png)

**EXPLORE THE DATA**

![Pluto Data](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/pluto-data.png)

**CHANGE YOUR BASEMAP**

![Pluto Basemap](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/pluto-basemap.png)

**MAKE A CHOROPLETH IN THE BUILDER**

![Pluto Editor](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/pluto-choropleth.png)

**STYLE IT WITH CARTOCSS**

![Pluto Data](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/pluto-css.png)

**CREATE TOOLTIPS AND LEGENDS**

![Pluto Legend](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/pluto-legend.png)

#### Case Study 2: [NYC Bikelane Category Map](https://auremoser.carto.com/builder/491805b6-95c8-11e7-82c9-0e13ef3858cc/embed)

Let's try the Bikelane Data, making something like [this](https://auremoser.carto.com/builder/491805b6-95c8-11e7-82c9-0e13ef3858cc/embed).

* Go to the [Class Repo](https://github.com/sva-dsi/2017-fall-course/tree/master/practice/data)
* Clone the repository to access the biklane data
* Upload it to Carto

**EXPLORE THE DATA**

![Bike Data](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/bike-data.png)

**CHANGE YOUR BASEMAP**

![Bike Basemap](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/bike-base.png)

**MAKE A CATEGORY MAP IN THE WIZARD**

![Bike Editor](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/bike-style-cat.png)

**STYLE IT WITH CARTOCSS**

![Bike CSS](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/bike-css.png)

**CREATE TOOLTIPS AND LEGENDS**

![Bike Info](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/bike-tool.png)

You can publish your map as is via the "Share" button in the interface, but if you would like to build a more custom version you can use the JS libraries and APIs mentioned above, and use CartoDB as your Data Store.

In the [class repo](https://github.com/sva-dsi/2017-fall-course/blob/master/practice/maps/), you'll find a template for making your map as a site online:

* [index.html](https://github.com/sva-dsi/2017-fall-course/blob/master/practice/maps/index.html): setting up your map div and canvas
* [main.js](https://github.com/sva-dsi/2017-fall-course/blob/master/practice/maps/main.js): pulling in your basemap, cartodb feature layers and other details

If you run this locally, you'll get a map that looks like this:

![Blackout Map](https://raw.githubusercontent.com/sva-dsi/2017-fall-course/master/imgs/blackout-map.png)

Here's an example of [BikeData from Madrid](http://bl.ocks.org/auremoser/6e984c0ff866e04686c8) modified with SQL and hosted on Github.

#### Cast Study 3: [Multivariate Data Map App](https://twitter.com/bikestorming?lang=en)
Bikestorming is a mobile app for urban cycling built with open data on CartoDB with MapBox Baselayers. They extract from public and social data sources to build both the iOS app and their open data portal for bike info.

![Bkx Data Store](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/bkx-profile.jpg)

![Bkx Mobile screens](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/bkx.jpg)

![BiciDB](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/bicidb.jpg)


#### Tell Time/Stories: Odyssey + Torque

Outside of the CartoJS library, we have others to help you build dynamic narrative with your data.

**Maps that tell Time** - **[Torque](https://carto.com/torque/)**

![Realtime Traffic Map](https://raw.githubusercontent.com/auremoser/140realtime/master/img/muni-animated.gif)

1. [Demonstrations in Brazil](http://blog.cartodb.com/mapping-the-world-ongoing-demonstrations-in-brazil/)
2. [Animal migration patterns](http://robbykraft.github.io/AnimalTrack/)
3. [Diwali Celebrated](http://bl.ocks.org/anonymous/raw/b9b7c7d6de1c6398e435/)
4. [Ramadan Tweets w/OdysseyJS](http://bl.ocks.org/anonymous/raw/2f1e9a5a74ceeb88e977/)
5. [Alcatraz Escapees](http://www.washingtonpost.com/news/morning-mix/wp/2014/12/15/the-alcatraz-escapees-could-have-survived-and-this-interactive-model-proves-it/?tid=hp_mm&hpid=z3)
6. [Lynching and the Press](http://yale.cartodb.com/u/mdweaver/viz/ffd06ece-8545-11e4-a898-0e018d66dc29/embed_map)

**Maps that tell Stories** - **[Odyssey JS](http://cartodb.github.io/odyssey.js/index.html)**

1. [*Al Jazeera*: Israeli-Palestinian Conflict by Tweets](http://stream.aljazeera.com/projects/socialmediaconversation/)
2. [The Sounds of 11M](http://www.cadenaser.com/sonidos-11m/)
3. [Berlin Wall Historic Tour](http://bl.ocks.org/namessanti/e7432a85159fca12978e)

#### Partner Graphics: Graphs + Charts

You can use CartoDB's SQL API to query your data and pull it into any charting library of your choosing.

![chart](https://raw.githubusercontent.com/auremoser/hasadna/master/img/7-chart.jpg)

Learn more about it [here](https://carto.com/docs/tips-and-tricks/charts-and-graphs/)!

Here are some examples:

Type | Title | Link/Demo | BlogPost
---- |------ | --------- | ---------
[Chart.js](http://www.chartjs.org/) Bar Graph | Traffic Data| [Aurelia's Block](http://bl.ocks.org/auremoser/af95a29cd76267d3925e)
[Highcharts](http://www.highcharts.com/) | Sensor Data  | [Github](https://github.com/auremoser/VitalSigns-water/) / [Demo](http://auremoser.github.io/VitalSigns-water/)  | [MOW Post](https://carto.com/blog/map-of-the-week-pulse-plotting/)
[Highcharts](http://www.highcharts.com/) | Weather Data | [Aurelia's Block](http://bl.ocks.org/auremoser/96b70f6dbcc724ecc973) | [Tutorial](https://stackedit.io/viewer#!provider=gist&gistId=e2d4f0f0b71f258f3ac9&filename=beirut.md)
[Plot.ly](https://plot.ly/) | Earthquake Data  | [Plotly Tutorial](https://plot.ly/ipython-notebooks/cartodb/) | [CartoDB Blog](https://carto.com/blog/plotly/)

### Resources

![XKCD](https://raw.githubusercontent.com/auremoser/gdi-webmap/master/img/xkcd.jpg)

#### GeoSpatial Data

1. [Local Data Resources](http://bit.ly/nyc-data-resources)
2. [National Data Resources](https://old.etherpad-mozilla.org/fed-data)

#### Mapping + CartoDB

1. [Map Academy](https://carto.com/academy/)
    + [CartoDB.js](https://carto.com/academy/courses/cartojs-ground-up/) -- build a web app to visualize your data, allowing for user interaction
	+ [SQL and PostGIS](https://carto.com/academy/courses/sql-postgis/)
2. [CartoDB Tutorials](https://carto.com/docs/tutorials/)
3. [CartoDB Editor Documentation](https://carto.com/docs/carto-editor/)
4. [CartoDB APIs](https://carto.com/docs/)
5. [Community help on StackExchange](http://gis.stackexchange.com/questions/tagged/cartodb)
6. [CartoDB Map Gallery](https://carto.com/gallery/)
7. [CartoDB Bootstrap Template by Chris Whong](https://github.com/chriswhong/cartodb-github-template)
8. [Listing of Map Data Formats](http://gisgeography.com/gis-formats/)

#### Visualization
1. [Charting Tools Repository](https://github.com/auremoser/chart-tools)
2. [Workshops @ CartoDB](http://cartodb.github.io/training/)
3. [Recommended tools for Visualizations](http://selection.datavisualization.ch/)
4. [Perception Concerns](https://github.com/tmcw/perception)
5. [Gestalt Theory](http://emeeks.github.io/gestaltdataviz/section1.html)
6. [Color Brewer](http://colorbrewer2.org/) or [Geocolor](http://geocolor.io/)