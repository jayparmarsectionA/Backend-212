import express from "express";
import lab_router from "./routes/lab_router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use('/', lab_router);