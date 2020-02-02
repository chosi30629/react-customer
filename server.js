const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "조성일",
      birthday: "920920",
      gender: "남자",
      job: "개발자"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "홍길동",
      birthday: "900710",
      gender: "남자",
      job: "디자이너"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "김하하",
      birthday: "910310",
      gender: "여자",
      job: "사장"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
