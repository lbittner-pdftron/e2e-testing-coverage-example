# E2E Testing example

This repo shows why reporting on E2E line coverage is not a good idea.

It uses the `vite-plugin-istanbul` plugin to instrument the code and report on line coverage in unison with `playwright` tests using `playwright-test-coverage` to report on the coverage of the E2E tests.

To get test coverage, run:

```bash
yarn test
```

The line coverage report will be displayed in the console. It should look like this:

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files           |     100 |      100 |     100 |     100 |                   
 App.jsx            |     100 |      100 |     100 |     100 |                   
 ReportGenerator.js |     100 |      100 |     100 |     100 |                   
 main.jsx           |     100 |      100 |     100 |     100 |                  

The tests are in `tests/example.spec.js` - notice there is a single test that only tests one simple feature of the app, but the line coverage is still 100%.

## Example 1: Untested useEffect is reported as covered

Notice that in App.tsx, there is an untested useEffect that is not called by the E2E tests, but the line coverage is still 100%. This is because the coverage is based on Javascript that is executed in the browser, and the useEffect is executed when the component is rendered, regardless of whether it is called by the E2E tests or not. This is why line coverage is not a good metric for E2E tests, and why it can be misleading.

## Example 2: Testing one feature can make it look like others are covered

In the onClick callback in App.tsx, we run some code that generates a report using the report generator class. This code is not tested at all by the E2E tests, but is still being invoked by other tests.

This makes it look like the reportGenerator class is being tested, but in reality it is not.



