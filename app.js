const express = require("express");
const app = express();
const cors = require("cors");

data = {
  username: "mounika",
  password: "mounika@2022",
};
app.use(express.json());
app.use(cors());

app.get("/login", (request, response) => {
  const { username, password } = request.body;

//   if (username == data.username && password == data.password) {
//     response.status(200);
//   } else {
//     response.send("username or password not matched");
//   }
  response.send(data);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server Running at http://localhost:3000/")
);
