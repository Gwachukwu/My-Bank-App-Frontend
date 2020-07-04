import React from "react";

const CreditDetails = ({ transactions }) => {
  const creditTransactions = transactions.filter(
    (item) => item.type === "credit"
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {creditTransactions.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>&#8358;{item.amount.toFixed(2)}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditDetails;
