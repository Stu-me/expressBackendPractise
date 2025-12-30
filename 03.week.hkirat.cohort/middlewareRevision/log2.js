// index.js

const express = require("express");
const app = express();

// ---------- MIDDLEWARE 1: Logger ----------
// Top 1% habit: ALWAYS log method + path + timestamp for debugging.
function loggerMiddleware(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url}`);
  next(); // pass control to next middleware
}

// ---------- MIDDLEWARE 2: Blocker ----------
// If ?block=true -> short-circuit the request and don't call next()
function blockerMiddleware(req, res, next) {
  const { block } = req.query;

  if (block === "true") {
    // Important: return here so we don't accidentally call next()
    return res.json({ msg: "blocked" });
  }

  next(); // allowed, go ahead
}

// ---------- MIDDLEWARE 3: Delay ----------
// Artificial 2s delay to simulate slow work
function delayMiddleware(req, res, next) {
  setTimeout(() => {
    next();
  }, 5000); // 2000 ms = 2 seconds
}

// ---------- REGISTER MIDDLEWARES (ORDER MATTERS) ----------
app.use(loggerMiddleware);   // 1. logs every request
app.use(blockerMiddleware);  // 2. may block early
app.use(delayMiddleware);    // 3. slow things down if not blocked

// ---------- ROUTE ----------
app.get("/test", (req, res) => {
  // If this runs, it means:
// logger -> blocker -> delay all passed
  res.send("you entered after passing through a logger blocker and delay");
});

// ---------- START SERVER ----------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
