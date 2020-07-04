import React, { useContext } from "react";
import axios from "axios";
import DebitDetails from "./DebitDetails";
import CreditDetails from "./CreditDetails";
import AddTransaction from "./AddTransaction";
import AuthContext from "../../Context/authContext";

const Details = ({ transactions }) => {
  const authContext = useContext(AuthContext);
  const [display, setDisplay] = React.useState("debit");

  React.useEffect(() => {
    axios
      .get("https://limitless-journey-30846.herokuapp.com/auth")
      .then((res) => {
        authContext.loadUser(res.data);
        if(res.data.username === "access"){
          authContext.setRoute();
        }
        
      })
      .catch((err) => console.log(err));
  }, [authContext]);
  return (
    <div className="details">
      <div className="details-buttons">
        <p
          className={display === "credit" ? "add-border" : ""}
          onClick={() => setDisplay("credit")}
        >
          Credit Details
        </p>
        <p
          className={display === "debit" ? "add-border" : ""}
          onClick={() => setDisplay("debit")}
        >
          Debit Details
        </p>
        <p
          className={
            display === "add"
              ? "add-border"
              : !authContext.user.isAdmin
              ? "hide"
              : ""
          }
          onClick={() => setDisplay("add")}
        >
          Add Transaction
        </p>
      </div>
      <div className="tables">
        <div className={display === "debit" ? "" : "hide"}>
          <DebitDetails transactions={transactions} />
        </div>
        <div className={display === "credit" ? "" : "hide"}>
          <CreditDetails transactions={transactions} />
        </div>
        <div className={display === "add" ? "" : "hide"}>
          <AddTransaction />
        </div>
      </div>
    </div>
  );
};

export default Details;
