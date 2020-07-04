import React from "react";
import axios from "axios";
import AuthContext from "../../Context/authContext";
import Loading from "../../Images/loading.gif";

const AddTransaction = () => {
  const [alert, setAlert] = React.useState("");
  const [state, setState] = React.useState({
    date: "",
    amount: "",
    type: "",
    description: "",
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const authContext = React.useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `https://limitless-journey-30846.herokuapp.com/${authContext.route}`,
        state
      )
      .then((res) => {
        setAlert(res.data);
        setLoading(false);
        res.data === "Transaction successful" && window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        setAlert(err.response.data.msg);
      });
    setTimeout(() => setAlert(""), 2000);
  };
  
  return (
    <div className="add-transaction">
      <form>
        <label>
          Date
          <input type="date" name="date" id="" onChange={handleChange} />
        </label>
        <input
          type="number"
          name="amount"
          id=""
          placeholder="Amount"
          onChange={handleChange}
        />
        <select name="type" id="" onChange={handleChange}>
          <option value="">- Choose type -</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input
          type="text"
          name="description"
          id=""
          placeholder="Description"
          onChange={handleChange}
        />
        <p>{alert}</p>
        <br />
        {loading && (
          <img src={Loading} alt="loading..." className="loading-gif gif-margin" />
        )}
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
