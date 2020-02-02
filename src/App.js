import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "조성일",
  birthday: "920920",
  gender: "남자",
  job: "개발자"
};

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
