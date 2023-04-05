# NowListening | A simple standalone webpage for your album of the week

## Introduction
NowListening is a very simple, lightweight, standalone webpage with easy customizability through the use of a short javascript file.

The current customizable features are :
* Album Name
* Album Artist
* Links to Streaming Services
* Album Art

## Example
An example is available, just clone this repo or download the .ZIP archive, and you will find an `Example` directory, in this directory you will find an `index.html` which can be opened and everything should work with a demo album. 

**Please note** that this example is for demostration and testing purpouses only and that for a release you must populate your own page using the `Source` as is insturcted in the **Setup** section below

## Directory Structure
The project follows a simple sturcture with all the `html`, `javascript` and `css` being located in the main folder and all of the fonts and image assets being located in a `static` subdirectory

    .
    └── Example/
        ├── data.js
        ├── favicon.ico
        ├── handle.js
        ├── index.html
        ├── style.css
        └── static/
            ├── image.jpg
            ├── MontserratBold.woff
            ├── MontserratBold.woff2
            ├── MontserratRegular.woff
            ├── MontserratRegular.woff2
            ├── MontserratThin.woff
            └── MontserratThin.woff2

> The directory tree of the Example directory

## Setup
The set up to getting a working website is very quick and easy the files that you need to worry about are listed in **bold**

* **`data.js`**
* `favicon.ico`
* `handle.js`
* `index.html`
* `style.css`
* **`image.jpg`**
* `MontserratBold.woff`
* `MontserratBold.woff2`
* `MontserratRegular.woff`
* `MontserratRegular.woff2`
* `MontserratThin.woff`
* `MontserratThin.woff2`

#### Step One

Starting with `setup.js`. When opening the file you will see that it is very short and well commented, everything should be straight forward, but here is a reiteration in more detail of the comments present in the file. All that the file does is declare some variable that are then processed by `handle.js`.

* `var albumTitle = '';` is where you will put (inside of the quotation marks) the title of the album that you are displaying on the site.
* `var albumArtist = '';` is where you will put (inside of the quotation marks) the artist of the album that you are displaying on the site.
* `var spLink = '';` is where you will put (inside of the quotation marks) the spotify link of the album that you are displaying on the site. See the file comments for which streaming service link goes where, the current list of services is :
    * Spotify
    * Tidal
    * Qobuz
    * Apple Music
    * Deezer
    * Amazon Music
    * YouTube Music
* `var darkmode = ;` is the selector for the dark mode setting, `0` will have the page always in dark mode, `1` will have the page always in light mode and `2` will have the page dynamically adjust according to the current OS setting.
* `var bouncylink = ;` is the selector to enable or disable the small bouncing prompt, pointing towards the burger menu, that dissapears after a few seconds when the page is loaded, `true` will have this feature enabled and `false` will have it disabled.

Refer to the `data.js` located in the `Example` directory as a guide as to where to input values should you be confused

#### Step Two

Now an album art needs to be uploaded in the `static` folder, Ideally the album art need to be a high resolution of 1500x1500px and must be in the `.jpg` format. The file must be named `image.jpg` and placed in the `static` folder.

A few sources are reccomended for high resolution album art:

* https://bendodson.com/projects/itunes-artwork-finder/ (This is my top reccomendation, just set the left dropdown to `Album` and away you search)
* https://albumartexchange.com (For this you will need to create an account and not all images are high res or original)

That should be it for the set up of the webpage, now open `index.html` in the `Source` directory that you have just updated with all of the correct information in `data.js` and the `image.jpg` and you should see something similar to what it looks like in `Example` but just with your own album of choice and its corresponding links and text.

## Further Customizations

Further customizations are possible such as changing fonts, layouts/functionality and the favicon.

Changing the favicon is easy, just strip the `Source` directory of the existing `favicon.ico` and replace it with your favicon of choice, if you have an image, search `jpeg to ico` or `png to ico` etc... to convert that image to a compatible `.ico` format

For the font and page layout/functionality, these will not be covered here as they excede the scope of the project and require substantial background knowledge but if you wish to create a branch, feel free to contact me and we can discuss such things.

## Cache Busting

As browsers love to cache files and serve them locally when you reload a webpage, if you modify either `data.js` or `image.jpg` you may not get the updated webpage served to you when you load the page. Note that this is only usually a problem when the webpage is hosted on a webserver. localhost and accessing the files directly on device should not pose this issue.

There are a few methods for overriding cache, also known as Cache Busting. Only one simple method here will be described as the other methods are beyond the scope of this project.

The reccomended method consists in renaming the files to something else than the original ones, so that due to the different names, the webserver serves the new files to the browser and not the browser using its old cached data. A common naming scheme for such methods is for example renaming `data.js` to `data.v1.js` and going up a number ever time the website source is updated on the webserver, so the first would be `data.v1.js`, the second would be `data.v2.js` etc...

As you will only likely be modifiying `data.js` and `image.jpg`, these are the two files that will need to be renamed, should you change `style.css` or `handle.js` these will also need to be renamed but the exact procedure will not be covered here.

Firstly rename `data.js` to `data.v1.js`, then open up `index.html` in a text editor and find the line

    <script type="text/javascript" src="./data.js"></script>
    
in the document `<head>`, then rename the `./data.js` to `./data.v1.js`, making sure that the name matches up to whatever you named the file.

Secondly rename `image.jpg` to `image.v1.jpg`, then again in `index.html` look for the following line of code that is two lines down from the opening `<body>` tag

    <img id="albumart" class="albumArt widthdesktop" src="./static/image.jpg">
    
Then rename `./static/image.jpg` to `./static/image.v1.jpg` making sure that the name matches up to whatever you named the file.

## Road Map

To make this project a little more useful and interseting, we are looking into adding the following features in the future:

1. Last.fm API integration (This will be the preliminary Spotify connection, Spotify API to be added should demand be high enough)
2. Spotify API integration
3. More API's?
