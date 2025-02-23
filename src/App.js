import { useState } from "react";
import { products } from "./data";
import "./styles.css";

import Download from './assets/contact.txt' 
import Cat from './assets/cat.jpg'

const makeBtn = [...new Set(products.map((btn) => btn.category)), "All"];

export default function App() {
  const [show, setShow] = useState(products);
  const [search, setSearch] = useState("");

  const filtetProduct = (category) => {
    if (category === "All") {
      setShow(products);
      return;
    }
    const prod = products.filter((ele) => {
      return ele.category === category;
    });
    setShow(prod);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Contact here *Telegram <a href="https://t.me/thomson0313">@thomson0313</a> *skype: <a href="https://join.skype.com/invite/cWZDLNNAabo2">live:.cid.517cab0ad0fbd6e2</a></h1>
        <h2>Category wise filter product <span><a download="" href={Download}>DOWNLOAD</a></span></h2>
        <input
          type="search"
          placeholder="Search products......."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="btn">
          {/* <button onClick={() => filtetProduct("men clothing")}>
            Men's clothing
          </button>
          <button onClick={() => filtetProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filtetProduct("electronics")}>
            Electronics
          </button>
          <button onClick={() => filtetProduct("women clothing")}>
            Women's clothing
          </button>
          <button onClick={() => setShow(products)}>All</button> */}
          {makeBtn.map((btn) => {
            return <button onClick={() => filtetProduct(btn)}>{btn}</button>;
          })}
        </div>
      </div>
      <div className="card">
        {show
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div key={item.id} className="main-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>
      <a href="https://t.me/@thomson0313"><img src={Cat}  /></a>
    </div>
  );
}
