const express = require("express");
const app = express();
const optiic = new (require("optiic"))({
  apiKey: "7hagb6RKxJECkWiESUQHmUkFVMXvAoTvUxiTyACA718n",
  // "api_test_key", // Not required, but having one removes limits (get your key at https://optiic.dev).
});

app.use(express.json());

app.post("/", (req, res) => {
  const img = req.body.url;
  let options = {
    image: img, // url of the image
    mode: "ocr", // ocr
  };
  optiic.process(options).then((result) => {
    res.send(result ? result.text : "This image doesn't contain any text!");
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
