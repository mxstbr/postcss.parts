# [postcss.parts](http://postcss.parts)

A searchable catalog of PostCSS plugins, built using React.js and untilising the Flux application architecture.

## Adding a plugin

1. Fork this repo

2. Add your plugin to the `_fullPlugins` variable in `js/stores/AppStore.js` in the correct category and with a `name`, `description` and `url`.

3. Submit a Pull Request

Alternatively, contact me on twitter about the plugin: [@mxstbr](https://twitter.com/mxstbr)

## Setup

1. Clone this repo using `git clone git@github.com:mxstbr/postcss.parts`

2. Run `npm install` to install the dependencies.

3. Run `grunt` to start the local web server.

4. Go to `http://localhost:8000` and you should see the app running!

If you change something in the JavaScript or CSS files, they get compiled and minified automatically on save. Simply look at your browser and you should see the changes you made!

## License

This project is licensed under the MIT license. For more information see `LICENSE.md`.