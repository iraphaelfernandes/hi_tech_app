import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./TableContainer";


import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://api.sampleapis.com/baseball/hitsSingleSeason")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Rank",
      accessor: "Rank",
    },
    {
      Header: "Player",
      accessor: "Player",
    },
    {
      Header: "Age",
      accessor: "AgeThatYear",
    },
    {
      Header: "Hits",
      accessor: "Hits",
    },
    {
      Header: "Year",
      accessor: "Year",
    },
    {
      Header: "Bats",
      accessor: "Bats",
    },
  ];

  return (
    <div className="App">
      <h1>
        <center>Hi Tech Table App</center>
      </h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
