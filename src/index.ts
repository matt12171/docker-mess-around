import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
