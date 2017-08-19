# getethic.com

[![Circle CI](https://circleci.com/gh/m-vdb/getethic.com.svg?style=shield&circle-token=6ba37f823f016247657cbc9e0a127f07ee3250a5)](https://circleci.com/gh/m-vdb/getethic.com/tree/master)

Ethic is a platform built on the blockchain for consumers to anonymously
and directly cover each other’s small claims. Each member’s carrier
only steps in for larger claims. Consumers will lower their premiums by
buying less coverage from their carrier without carrying any more risk.

Ethic project is divided in several parts:

- a [Web app](https://github.com/m-vdb/ethic-app)
- a [Web API](https://github.com/m-vdb/ethic-backend)
- an [Ethereum contract](https://github.com/m-vdb/ethic-contracts)

This repository contains the source code for our product website:

![Landing page](/screenshots/website-0.png?raw=true "Landing page")

![Coverage](/screenshots/website-1.png?raw=true "Coverage")

![Benefits](/screenshots/website-2.png?raw=true "Benefits")

![Save big](/screenshots/website-3.png?raw=true "Save big")

![Transparency](/screenshots/website-4.png?raw=true "Transparency")

## Installation

You should have node installed. You can use [nvm](https://github.com/creationix/nvm).
Then you can do the following:
```bash
$ npm install .
```

Install compass:
```bash
$ gem update --system
$ gem install compass
```

You can now use the following commands:
```bash
$ gulp  # will compile the sass files into css, and bundle the javascript files
$ gulp compass:watch  # will watch your sass files for changes and compile them
$ gulp js:watch # will watch your js files for changes and bundle them
```

## Up and running

The only thing to do to access to the website locally is the following:
```bash
$ npm start
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.
