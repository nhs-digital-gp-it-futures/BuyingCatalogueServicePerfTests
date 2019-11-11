# BuyingCatalogueServicePerfTests

## Installation
Ensure you have Nodejs installed on your system

1. Clone this repo
2. In a console window (cmd, powershell, bash etc) navigate to the repo
3. Navigate to the `src/` folder
4. Run `npm install`
5. Choose the test you would like to perform from the below table

| Command | Usage | Description |
|---------|---------|-----------|
| `test:quick` | `npm run test:quick` | To be used only when running the BuyingCatalogueService locally to ensure the performance tests will run correctly |
| `test:solutions-static` | `npm run test:solutions-static` | Tests all basic endpoints for the solutions controller with a static number of users per second |
| `test:solutions-ramp` | `npm run test:solutions-ramp` | As above, but ramps the users up to a constant value, the ramps down to 0 users|
| `test:solutions-fuzz` | `npm run test:solutions-fuzz` | Tests the above endpoints using a variety of dirty/naughty strings that attempt to break the endpoints |

Each of the above scripts (with the exception of `test:quick`) can be overloaded to run against different targets/deployments. This is done by adding `-- --target={http://your.url:port}` to set the base url of the api under test

## Storing results
To save the results into a file add the option flag to the above command:
`npm run test:solutions-ramp -- -o <resultsfile>.json`

## Viewing results
To generate a html report, run the following command:
`artillery report -o <filename>.html <resultsfile>.json`
Open the html file in your browser