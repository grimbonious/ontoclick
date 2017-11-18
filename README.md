# OntoClick v0.0.1

> Turn your clinical description into a proper ontology term.

OntoClick is a Chrome browser extension used by bio researchers to reference ontology class identifiers and preferred labels.

It uses the [NCBO BioPortal REST API](http://bioportal.bioontology.org/) to fulfil search requests.

OntoClick was prototyped at [Health Hack](https://www.healthhack.com.au/) Sydney Nov 2017 by Dr Andreas Zankl's Team OntoClick and subsequently developed by [LivingryLabs](https://www.livingrylabs.net/).

## Usage

1. Visit a web page in the Chrome browser
* Select any clinical description text e.g. 'bowed femur'
* Right click to show browser context menu
* Left click OntoClick menu item
* Copy desired result to clipboard

## Alpha Limitations

* 'Filter by Ontology' is hard coded to the Human Phenotype Ontology
* Does not have 'replace' feature
* Does not have configurable identifier structure e.g. "notation: preferred label"
* Does not work with custom context menus e.g. Google Sheets
* Does not have class detail view

## Installation

TODO: Add installation instructions for a release

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
