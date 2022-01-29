import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import "./App.css";
import UserService from "../services/UserService";
import login from "../images/login.png";

function Login() {
  const initialValues = { userName: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "userName is required!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const handleLogin = (e) => {
    UserService.signIn(formValues.userName, formValues.password)
      .then((response) => {
        console.log(response);
        console.log("Login successful");
        if (isLogin === false) {
          console.log("Enter All fields correctly to Login");
        } else {
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => console.log("Something went wrong"));
  };

  return (
    <div
      style={{
        backgroundColor: "oldlace",
        height: "100vh",
        paddingTop: "20px",
      }}
    >
      <div className="container">
        <div className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-10" style={{ marginLeft: "13rem" }}>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div
                    className="ui message success text-center"
                    style={{ color: "cadetblue" }}
                  >
                    Login successfully
                  </div>
                ) : (
                  <pre>{JSON.stringify(undefined)}</pre>
                )}

                <form onSubmit={handleSubmit}>
                  <h1 className="text-center">Login Form</h1>
                  <hr />
                  <div className="ui divider"></div>
                  <div className="ui form">
                    <div className="row">
                      <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          userName
                        </label>
                        <input
                          type="userName"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="userName"
                          placeholder="userName"
                          value={formValues.userName}
                          onChange={handleChange}
                        />
                      </div>
                      <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.userName}
                      </p>

                      <div className="field">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="password"
                          placeholder="Password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                      </div>
                      <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.password}
                      </p>
                      <br />
                      <div class="mb-3 form-check">
                        <label class="form-check-label" for="exampleCheck1">
                          Not Registered Yet?{" "}
                          <Link to={"/signup"}>Register Here</Link>
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          class="btn btn-primary"
                          onClick={(e) => {
                            setIsLogin(!isLogin);
                            handleLogin(e);
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-10" style={{ marginLeft: "7rem" }}>
                <img src={login} alt="login-img" height={"300px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
