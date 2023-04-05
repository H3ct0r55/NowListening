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

Firstly, starting with `setup.js`. When opening the file you will see that it is very short and well commented, everything should be straight forward, but here is a reiteration in more detail of the comments present in the file. All that the file does is declare some variable that are then processed by `handle.js`.

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

