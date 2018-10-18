import app from "./app";
const PORT = 3000;
// https://github.com/dalenguyen/rest-api-node-typescript/blob/master/lib/app.ts

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});