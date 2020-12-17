import React, { useEffect, useState } from "react";
// import axios from 'axios';
import json from "../json/ark.json";
import client from "../json/client_id.json";
import '../scss/ark.scss';

// const CLIENTID = client.web.client_id;
// const APIKEY = "AIzaSyAyU0FVgtwjDEj0NrkNQo-l0g5bc28Jl3w";

const funds = ["arkk", "arkg", "arkk", "arkq", "arkw"];

const arkk = [
  {
    company: "",
    ticker: "",
    marketPrice: 0,
    shares: 0,
    weight: 0.5
  },
];

const Ark = props => {
  // const [ticker, setTicker] = useState();
  return (
    <table className="day">
      <tr>
        <th>date</th>
        <th>name</th>
        <th>direction</th>
        <th>shares</th>
        <th>fund</th>
      </tr>
      {json.map((item, key) => {
        var directionStyle;
        if (item.direction === "buy") {
          directionStyle = "direction green";
        } else {
          directionStyle = "direction red";
        }
        return (
          <tr key={key}>
            <td className="date">{item.date}</td>
            <td className="name">{item.name}</td>
            <td className={directionStyle}>{item.direction}</td>
            <td className="shares">{item.shares}</td>
            <td className="fund">{item.fund} <span className="percentage">{item.percentage}%</span></td>
          </tr>
        )
      })}
    </table>
  )
}

export default Ark;