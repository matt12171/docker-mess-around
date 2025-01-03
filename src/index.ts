import express, { Request, Response } from "express";

const cors = require('cors')

const app = express();
const port = 3000;
const db = require("./queries");

app.use(cors())
app.use(express.json());

// Turbines
app.get('/turbines', db.getTurbines)
app.get('/turbines/:id', db.getTurbineById)
app.post('/turbine', db.postTurbine)

// Sites
app.get('/sites', db.getSites)
app.get('/sites/:id', db.getSiteById)



// Define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
