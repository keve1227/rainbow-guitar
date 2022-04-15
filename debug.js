import { fileURLToPath, URL } from "url";
import express from "express";

const app = express();

app.use("/rainbow-guitar", express.static(fileURLToPath(new URL("./docs", import.meta.url))));

app.listen(6060, () => {
    console.log("Server listening on port 6060.");
});
