import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Anwar", "Jafor", "Alamgir", "Salman", "Bappi"];
  const products = [
    { name: "Photoshop", price: "$90.89" },
    { name: "Illustrator", price: "$50.99" },
    { name: "PDF Reader", price: "29.99" },
    { name: "Premier El", price: "249.99" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
        </ul>
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
        </ul>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>

        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="Footballer"></Person>
        <Person name="Masum" job="Cricketer"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const userStyle = {
    textAlign: "left",
  };
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul style={userStyle}>
        {users.map((user) => (
          <li>
            {user.name}------ {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor: "slateblue",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "10px",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "2px solid yellow", margin: "10px" }}>
      <h3>My Name is {props.name} </h3>
      <p>I am a {props.job} </p>
    </div>
  );
}

export default App;
