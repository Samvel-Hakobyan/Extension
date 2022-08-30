import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function BalanceRequest(props) {
  const [balances, setBalance] = useState([]);

  useEffect(() => {
    axios
      .get("https://630b3c26f280658a59d82ec1.mockapi.io/balance")
      .then((res) => {
        return setBalance(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      {balances.map((balance) => (
        <span key={balance.id}>{balance.coins}</span>
      ))}
    </div>
  );
}

export default BalanceRequest;
