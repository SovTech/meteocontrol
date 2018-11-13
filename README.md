# meteocontrol
> A javascript API wrapper for the meteocontrol VCOM REST API

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

This package provides an easy to use, promise based api wrapper for the meteocontrol vcom rest api.

## Installation

NPM
```sh
npm install meteocontrol --save
```

YARN
```sh
yarn add meteocontrol
```

## Usage example

Below is a simple usage example on how to query systems configured on a vcom account and what to expect from the response.

```js
import Meteocontrol from 'meteocontrol'

const meteocontrol = Meteocontrol.create(METEOCONTROL_API_KEY, METEOCONTROL_AUTH_KEY);

// list all systems
meteocontrol.systems().then(response => {
    // response object is of the form:
    {
        "ok": Boolean, // True is the status code is in the 200's; false otherwise.
        "problem": String, // One of 6 different values
        "data": Object, // this is probably the thing you're after.
        "status": Number, // the HTTP response code
        "headers": Object, // the HTTP response headers
        "config": Object, // the `axios` config object used to make the request
        "duration": Object, // the number of milliseconds it took to run this request
    }
});
```

## Development setup

To get started with development of this package, install the dependencies using yarn, and test.

```sh
yarn
yarn test
```

## Contributing

1. Fork it (<https://github.com/SovTech/meteocontrol/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/meteocontrol.svg?style=flat-square
[npm-url]: https://npmjs.org/package/meteocontrol
[npm-downloads]: https://img.shields.io/npm/dm/meteocontrol.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/SovTech/meteocontrol/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/SovTech/meteocontrol
