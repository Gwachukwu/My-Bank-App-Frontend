import React, { Component } from "react";
import Calculations from "./Calculations/Calculations";
import Details from "./Details/Details";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "../Context/authContext";
import Loading from "../Images/loading.gif";

class Dashboard extends Component {
  state = {
    privateTransactions: [],
    publicTransactions: [],
  };
  getPrivateTransactions = () =>
    axios.get("https://limitless-journey-30846.herokuapp.com/");
  getPublicTransactions = () =>
    axios.get("https://limitless-journey-30846.herokuapp.com/access");

  async componentDidMount() {
    try {
      const [privateTransactions, publicTransactions] = await axios.all([
        this.getPrivateTransactions(),
        this.getPublicTransactions(),
      ]);
      this.setState({
        privateTransactions: privateTransactions.data,
        publicTransactions: publicTransactions.data,
      });
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }
  static contextType = AuthContext;
  logOut = () => {
    localStorage.clear();
    this.context.logoutUser();
    this.context.removeUser();
  };
  render() {
    let transactions = [];
    if (this.context.user.username === "access") {
      transactions = this.state.publicTransactions; //display to everybody
    } else {
      transactions = this.state.privateTransactions; //display to specific people
    }
    return (
      <div>
        {this.state.publicTransactions.length === 0 && (
          <div className="loading-gif-container">
            <img
              src={Loading}
              alt="loading..."
              className="loading-gif-dashboard"
            />
          </div>
        )}
        <p className="logout">
          <Link to="/login" style={{ color: "#FFF" }} onClick={this.logOut}>
            logout
          </Link>
        </p>
        <div className="dashboard">
          <Calculations transactions={transactions} />
          <Details transactions={transactions} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
