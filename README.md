# Spotter API

This is the graphQL api for the Spotter app.

**Note**: this api is not suitable for production use yet - for the sake of simplicity, the data is read and written to the file system in `data.json`.

## Developer setup

To run this api locally, first clone the repo, then install the dependencies using your favourite package manager:

```bash
yarn
# or
npm install
```

Then run the api loally with

```bash
yarn start
# or
npm start
```

This will start the api at [`http://localhost:3000/graphql`](http://localhost:3000/graphql).
