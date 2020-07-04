import React from "react";

const Balance = ({ transactions }) => {
  const creditObject = transactions.filter((item) => item.type === "credit");
  const creditArray = [];
  creditObject.map((item) => creditArray.push(item.amount));
  const credit = creditArray.reduce((a, b) => a + b, 0);
  const debitObject = transactions.filter((item) => item.type === "debit");
  const debitArray = [];
  debitObject.map((item) => debitArray.push(item.amount));
  const debit = debitArray.reduce((a, b) => a + b, 0);
  const balance = credit - debit;
  return (
    <div>
      <div className="balance">
        <p>Balance</p>
        <p>
          &#8358;{balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
};

export default Balance;
