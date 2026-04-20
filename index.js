
import express from "express";
import validateYearQuery from "./Exercise02/middleware/validateyearQuery.js";


const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
    availableRoutes: [
      "/year",
      "/year?year=2020"
    ]
  });
});

app.get("/year", validateYearQuery, (req, res) => {
  const { year } = req.query;

  res.json({
    message: year ? "Valid year query" : "No year query provided",
    year: year ?? null
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
