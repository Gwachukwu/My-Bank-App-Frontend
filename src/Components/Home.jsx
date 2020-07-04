import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../Context/authContext";
import Loading from "../Images/loading.gif";

const Home = (props) => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = React.useState({ username: "", password: "" });
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://limitless-journey-30846.herokuapp.com/auth", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["x-auth-token"] = res.data.token;
        authContext.loginUser();
        localStorage.setItem("isAuthenticated", true);
        setLoading(false);
        props.history.push("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.msg);
        setTimeout(() => setError(""), 2000);
      });
  };
  return (
    <div className="header">
      <div className="header-form">
        <h4>Please enter your login details</h4>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <p>{error}</p>
          {loading && (
            <img src={Loading} alt="loading..." className="loading-gif" />
          )}
          <button type="button" onClick={handleSubmit}>
            Enter
          </button>
        </form>
      </div>
      <p className="login-details">
        Use "access" as both username and password
      </p>
    </div>
  );
};

export default Home;
