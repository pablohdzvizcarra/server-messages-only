import express from "express";

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})