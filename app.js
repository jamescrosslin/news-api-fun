import express from "express";
import home from "./routes/home.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", home);

app.listen(port, () => console.log(`Server is running on port ${port}`));
