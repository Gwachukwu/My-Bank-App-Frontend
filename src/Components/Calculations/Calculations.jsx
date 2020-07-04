import React from "react";
import Credit from "./Credit";
import Debit from "./Debit";
import Balance from "./Balance";

const Calculations = ({ transactions }) => {
  return (
    <div className="calculations">
      <Credit transactions={transactions} />
      <Debit transactions={transactions} />
      <Balance transactions={transactions}/>
    </div>
  );
};

export default Calculations;
