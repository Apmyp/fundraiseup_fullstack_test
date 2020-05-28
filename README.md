# Checkout form — Fundraiseup fullstack test

![](docs/demo.gif)

This demo Node.js application is about checkout form. User can select amount from one of the presets or type something on his own. When donation is submitted application saves it into mongodb's collection.

## How to start
- `npm install`
- `npm run build`
- `npm run build:start` — simple way to start what you have build

## How to develop
- `npm install`
- `npm run server:start`
- `npm run front:watch`
- `npm run test:watch`

## Docker Compose
If you need mongodb dependency you can use provided docker-compose.

`docker-compose up`

## Requirements
- Node.js v13.11.0
- MongoDB

## ENV variables
- NODE_PORT (default: 3000)
- MONGO_URI (default: mongodb://localhost/fullstack_test)
- ASSETS_PATH (default: ./dist/assets)
