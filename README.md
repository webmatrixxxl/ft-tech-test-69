# Financial Times Technical Test
Simple UI showing securities quotes from Finencial Times securities quotes API. This is task given as Test as a step in a process for Lead Software Engineer - FT Enterprise position.

Exercises: 
1. Retrieve the data
Use the [securities quotes api](#using-our-securities-quotes-api) (also known as stock prices) to get the data for the items below and output the results in plain HTML.
2. Build the UI
Build the component in the design below. If you are doing this one at home and the other part pairing in the office, you can use this [sample JSON](test/fixtures/securities-response.json).

![Screenshot of an example securities data component](https://user-images.githubusercontent.com/51677/67555386-b6c5fc80-f700-11e9-86bd-55e975be0441.png)


## My submission on which one of these points addressed in the assignment

The project could:
- Be responsive \
-- Items are adjusted to fit the resizable screen size.  

- Be accessible \
-- The main "SecuritiesQuotes" component is compliant with WAI-ARIA.

- Not be reliant on client-side frameworks (i.e. Angular, React) or libraries like jQuery \
-- For the sake of simplicity and following the requirements I have not used any client-side lib.
It has only one meaningful component with no interactions. No neead for extra code.

- Built using Javascript and node.js \
-- Yes it is. But there are many other approaches. Currently, the code is server-side rendered with React components but it could be rehydrated after the user sees the initial HTML page load. Other toolchains can be used for that purpose like Gatsby.js for example which offers hybrid SSR mods and a lot of other configurations out of the box. What about TypeScript? I haven't started a pure JS project for years.

- Use Origami Components \
-- I haven't seen the need to add JS components. I used only "o-typography" and "o-color" from Origami.

- Be progressively enhanced \
-- If you meant rehydration of static HTML it could be done yea. If you mean stacking commits in git, usually in my projects I use "commitizen", "cz-conventional-changelog" and "standard-version" NPM packages to standardize and lint commit messages then automaticity generate changelog based on that. Software releases are based on Semantic Versioning.

- Have a similar look and feel as ft.com \
-- It has a similar look and feels as the task was described. Nothing more nothing less.
- Perform well over 3G networks \
-- A lot can be said here. From HTTP protocol versioning, "brotli" over GZIP compression, WEBP and AVIF images. Along with bundling, lazy loading, tree-shaking (CSS, JS, SVG, ...) and CDNs, load balancers, and so on.


## Prerequisites

Running this project requires [Node.js](https://nodejs.org/en/) 18.x or greater, and [npm](https://www.npmjs.com/).

## Getting started

1. Clone this repository to your machine.
1. Install the dependencies with `npm install`.
1. Start the app with `npm start`. Any changes you make will be automatically updated.
   - Used JSX? http://localhost:3000/jsx
   - Used Handlebars? http://localhost:3000/handlebars
1. Run tests with `npm test`.
1. You man need to run `npx @financial-times/origami-workshop` to build FT Origami CSS if not loading


## Using Securities Quotes API

To fetch the day's percentage change for a security you can use our Securities Quotes API.

### HTTP Request

`GET https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes`

### URL Query Parameters

| Parameter | Description |
|-----------|-------------|
| `symbols` | Any valid [symbol](Symbols) for a security, or a comma-separated list of [symbols](Symbols), e.g. for the FTSE 100, use `FTSE:FSI`. For the FTSE 100 and S&P 500, use `FTSE:FSI,INX:IOM`.  |

### Symbols

We would like you to display the information from the following symbols (these are the securities we show on the [FT.com front page](https://www.ft.com) 📰).

| Security        | Symbol     |
|-----------------|------------|
| FTSE 100        | `FTSE:FSI` |
| S&P 500         | `INX:IOM`  |
| Euro/Dollar     | `EURUSD`   |
| Pound/Dollar    | `GBPUSD`   |
| Brent Crude Oil | `IB.1:IEU` |

