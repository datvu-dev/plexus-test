# Plexus Test App

A simple, easy to use web form application that allows user to submit some basic details.

Used the following frameworks/libraries:
- `React` and `React DOM` for building front end components.
- `Styled Components` for styling front end components, also making them reusable.
- `Webpack` for bundling JS code.
- `Babel` for making JS code compatible with older browsers.
- `Axios` for handling AJAX requests.
- `Jest` as test runner, assertion library, and mocking library.
- `Enzyme` for providing testing utilities to interact with elements.

### Install

Clone from github
```bash
git clone https://github.com/datvu-dev/plexus-test.git
```

Install packages
```bash
npm install
```

### Run app

```bash
npm start
```

### Run tests

```bash
npm test
```

### Notes

When running the app, you will notice a few warnings related to React functions such as componentWillMount, componentWillReceiveProps..etc., and they all come from Autocomplete component. I tried a few autocomplete libraries and found react-autocomplete the best one for the job, but due to time constraint, I didn't have a chance to test other libraries until I find the most compatible one. For the time being, this is still not a risk for the app.