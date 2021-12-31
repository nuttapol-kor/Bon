import React, { useState, useEffect } from "react";
import axios from "axios";
import BonCard from "./bon-card";
import Row from "react-bootstrap/Row"

function BonList() {
  const [bons, setBons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/bons")
      .then((res) => {
        setBons(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bon-list mt-5">
        <Row xs={1} md={2} className="g-4">
            {bons.map((bon, i) => {
            return <BonCard bon={bon} key={i} />;
            })}
        </Row>
    </div>
  );
}

export default BonList;
