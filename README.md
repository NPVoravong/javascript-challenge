# UFO Sightings Data

# Dependencies
  * Javascript
  * D3.js
  * HTML
  * CSS
  * Bootstrap

# Prompt
Using the prodivded dataset create a webpage of ufo sightings that can be filtered and deploy it to GitHub pages.

# Process

1. Initial Setup and HTML

    The focus of this project is creating a searchable table using D3.js. Starter code for the design of the page has been provided. The starter CSS and bootsrap references are called in the head and body as necessary. The data for the page lives as a var in another javascript file. To make this data accesible a script tag is used to reference it. The script tag for the data file needs to be before the reference to `app.js` file otherwise the data will not be available.
    ```
    <script src="static/js/data.js"></script>
    <script src="UFO-D3/app.js"></script>
    </body>
    ```
    
    An `index.html` file will house all the page elements. Bootstrap is used to organize these elements. 

