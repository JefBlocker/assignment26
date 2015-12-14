## Assigment 26: Classic Science Fiction Movie Posters

Demo: dependent-help.surge.sh


Learning Objectives

-Demonstrate that you can create an AngularJS project from scratch

-Demonstrate that you have an understanding of AngularJS directives

-Demonstrate that you can break your AngularJS application into sub modules


Deliverables

-Link to your repo

-Link to your app deployed on surge.sh


Details

Requires at least two routes

Home Page - this will show a list of all images

Add Page - this will be a page where you can upload another image

No need for a single or edit view. This app just focuses on the CR of CRUD

Each image will need to be inside of a younameImage directive. So mine would be called timImage and would look like <tim-image></tim-image> in my HTML.

When doubleclicking the image, it should show a heart or star icon in the middle (think Instagram) and it should visibly show the likes count increase on the page.


Requirements

-Three States (root, root.home, root.add)

-Four Modules (app, app.core, app.layout, app.images)


## Usage

- Clone this repo
- Run `npm install` to install all necessary dependencies
- Run `gulp start` to start the server and a handful of other tasks


## Assets Installed By Default

- [Normalize CSS](https://necolas.github.io/normalize.css/)

## Assets Setup and ready for use

- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
- [Foundation 5](http://foundation.zurb.com/)

#### How to use them?

At the top of your `main.scss` file, just import any of the following:

```scss
@import "bourbon";
@import "neat";

@import "foundation";

@import "font-awesome";
```

> Note: You probably don't want to use BOTH Bourbon/Neat & Foundation. Just pick one.

## NPM Tools Used

- [Babel](https://babeljs.io/)
- [Browserify](http://browserify.org/)
- [JavaScript Code Style](http://jscs.info/)
- [SASS](http://sass-lang.com/)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
