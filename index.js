const http = require("http");
const httpProxy = require("http-proxy");
const express = require("express");
const app = express();

const proxy = httpProxy.createProxyServer({ ignorePath: true });

app.get("/stop-points", (req, res) => {
  proxy.web(req, res, {
    target: "http://data.itsfactory.fi/journeys/api/1/stop-points"
  });
});

app.get("/stop-monitoring/:stop", (req, res) => {
  proxy.web(req, res, {
    target:
      "http://data.itsfactory.fi/journeys/api/1/stop-monitoring?stops=" +
      req.params.stop
  });
});

app.listen(process.env.PORT || 8080);
