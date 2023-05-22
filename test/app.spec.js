const request = require("supertest");
const app = require("../app");

describe("Testing the server", () => {
  it("can run the express server and return a 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  // add your own tests here

  test("GET / should render the home page", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html");
    expect(response.text).toContain(
      "<title>Financial Times Technical Test</title>"
    ); // Replace with the expected content in your home page
  });

  test("GET /jsx should render the SecuritiesQuotes page", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        // Customize the response here if needed
        status: 200,
        json: () => {
          return Promise.resolve({ data: {} });
        },
      })
    );
    const response = await request(app).get("/jsx");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html");
    expect(response.text).toContain("SecuritiesQuotes"); // Replace with the expected content in your about page
  });

  test("GET /jsx should render FTSE:FSI security in SecuritiesQuotes component", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        // Customize the response here if needed
        status: 200,
        json: () => {
          const testData = {
            data: {
              items: [
                {
                  symbolInput: "FTSE:FSI",
                  basic: {
                    symbol: "FTSE:FSI",
                    name: "FTSE 100 Index",
                    exchange: "FTSE International",
                    exhangeCode: "FSI",
                    bridgeExchangeCode: "GBFT",
                    currency: "GBP",
                  },
                  quote: {
                    lastPrice: 7756.87,
                    change1DayPercent: 0.18818697286335725,
                  },
                },
              ],
            },
          };
          return Promise.resolve(testData);
        },
      })
    );

    const response = await request(app).get("/jsx");
    expect(response.headers["content-type"]).toContain("text/html");
    expect(response.text).toContain("FTSE 100");
  });

  test("GET /jsx with 500 errpr should render Internal Server Error in SecuritiesQuotes page", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        // Customize the response here if needed
        status: 500,
        json: () => {
          const testData = {
            error: "Internal Server Error",
          };
          return Promise.reject(testData);
        },
      })
    );

    const response = await request(app).get("/jsx");
    expect(response.text).toContain("Internal Server Error");
  });
});
