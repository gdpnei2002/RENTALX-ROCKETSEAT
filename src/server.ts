import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello World" })
  });

  app.post("/courses", (request, response) => {
  const { nane } = request.body;

  return response.json({ nane });
  })

app.listen(3333, () => console.log("Server is ru"))