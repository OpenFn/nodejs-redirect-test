const { Client, RedirectHandler } = require("undici");

const baseUrl = "http://localhost:3000";

const redirectInterceptor = (dispatch) => {
  return (opts, handler) => {
    const { maxRedirections } = opts;
    if (!maxRedirections) {
      return dispatch(opts, handler);
    }

    const redirectHandler = new RedirectHandler(
      (...args) => {
        console.log("DISPATCH OPTS", args[0]);
        dispatch(...args);
      },
      maxRedirections,
      opts,
      handler
    );

    const modifiedopts = { ...opts };
    return dispatch(modifiedopts, redirectHandler);
  };
};

const client = new Client(baseUrl).compose(redirectInterceptor);

async function request() {
  const res = await client.request({
    path: "/redirect",
    method: "GET",
    maxRedirections: 5,
    origin: baseUrl,
  });

  const body = await res.body.text();
  console.log("Final status:", res.statusCode);
  console.log("Response body:", body);
}

request().catch(console.error);
