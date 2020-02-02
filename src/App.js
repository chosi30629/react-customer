import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
