# pythonmap

By Michael Scott McGinn
September 16th, 2023

This code is a collection of tools to create a leaflet map powered by a php api
which reads data from a json file to create a map with mappoints on each state
and territory capital which are links to the state web site

To use the python code to generate the javascript you will need to install the required pip librarys.
Other wise you can just use map4.html and this will work.

Make sure all the files are in the same folder on your server for the api to work.

#ToDO  read in community directory and plot map points geo locations from addresses so the directory
updates the map as data is entered in the drupal system.
make the map points link to the drupal lead posts.
make them display the business name in a popup info bubble.

Create a drupal module that will automaticly geocode an address when it is entered in the location content type at the point of creating the new content type.
