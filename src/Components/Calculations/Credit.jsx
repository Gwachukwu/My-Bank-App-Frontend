import React from "react";

const Credit = ({ transactions }) => {
  const creditObject = transactions.filter((item) => item.type === "credit");
  const creditArray = [];
  creditObject.map((item) => creditArray.push(item.amount));
  const credit = creditArray.reduce((a, b) => a + b, 0);
  return (
    <div>
      <div className="credit">
        <p>Credit</p>
        <p>
          &#8358;{credit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    </div>
  );
};

export default Credit;
