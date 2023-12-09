import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("../zk"));
app.listen(8000, () => console.log("Serving at http://localhost:8000!"));
