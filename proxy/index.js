const express = require("express");

const app = express();
const PROXY_SECRET = process.env.PROXY_SECRET;
const MANGOFY_BASE = "https://checkout.mangofy.com.br/api/v1";
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use((req, res, next) => {
  if (req.headers["x-proxy-secret"] !== PROXY_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

app.post("/payment", async (req, res) => {
  try {
    const resp = await fetch(`${MANGOFY_BASE}/payment`, {
      method: "POST",
      headers: {
        Authorization: req.headers["authorization"],
        "Store-Code": req.headers["store-code"],
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const data = await resp.json();
    res.status(resp.status).json(data);
  } catch (e) {
    res.status(500).json({ error: "Proxy error", detail: String(e) });
  }
});

app.get("/payment/:id", async (req, res) => {
  try {
    const resp = await fetch(`${MANGOFY_BASE}/payment/${req.params.id}`, {
      headers: {
        Authorization: req.headers["authorization"],
        "Store-Code": req.headers["store-code"],
        Accept: "application/json",
      },
    });
    const data = await resp.json();
    res.status(resp.status).json(data);
  } catch (e) {
    res.status(500).json({ error: "Proxy error", detail: String(e) });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy rodando na porta ${PORT}`);
});
