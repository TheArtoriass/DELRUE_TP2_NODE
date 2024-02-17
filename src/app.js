const app = require("./routes/index");
const port = 3000;
const { connectTodB } = require("./services/db/connection");
// const apiKey = "dfa57566";

app.get("/", (req, res) => {
  res.send("Bienvenue");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectTodB();
});
