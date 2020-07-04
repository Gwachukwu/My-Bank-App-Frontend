import React from "react";

const Debit = ({ transactions }) => {
  const debitObject = transactions.filter((item) => item.type === "debit");
  const debitArray = [];
  debitObject.map((item) => debitArray.push(item.amount));
  const debit = debitArray.reduce((a, b) => a + b, 0);
  return (
    <div>
      <div className="debit">
        <p>Debit</p>
        <p>&#8358;{debit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
    </div>
  );
};

export default Debit;
