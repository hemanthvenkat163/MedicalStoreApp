import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//import "./App.css";
import UserService from "../services/UserService";

function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    age: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

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
    if (!values.firstName) {
      errors.firstName = "firstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required!";
    }
    if (!values.userName) {
      errors.userName = "Username is required!";
    }
    if (!values.age) {
      errors.age = "Age is required!";
    }
    if (values.age > 100) {
      errors.age = "Age not valid";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  const handleRegistration = (e) => {
    // const data = { userName, firstName, lastName, email, age, password };
    UserService.signUp(
      formValues.userName,
      formValues.firstName,
      formValues.lastName,
      formValues.email,
      formValues.age,
      formValues.password
    )
      .then((response) => {
        console.log(response.data);
        console.log("Register successful");
        if (isRegister === false) {
          console.log("Enter All fields correctly to Register");
        } else {
          navigate("/signup");
          setFormValues(initialValues);
        }
      })
      .catch((error) => console.log("Something went wrong"));
  };

  return (
    <div
      style={{
        backgroundColor: "oldlace",
        height: "160vh",
        paddingTop: "20px",
      }}
    >
      <div className="container">
        <div className="my-5">
          <div className="container login_div">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className="ui message success">
                    <h2 style={{ color: "cadetblue" }}>
                      {" "}
                      Registered successfully
                    </h2>
                  </div>
                ) : (
                  <pre>{JSON.stringify(undefined)}</pre>
                )}

                <form onSubmit={handleSubmit}>
                  <h1 className="text-center">Register Form</h1>
                  <hr />
                  <div className="ui divider"></div>
                  <div className="ui form">
                    <div className="row">
                      <div className="mb-3">
                        <label for="UserName" class="form-label">
                          User Name
                        </label>
                        <input
                          type="userName"
                          class="form-control"
                          id="UserName"
                          aria-describedby="emailHelp"
                          name="userName"
                          placeholder="Enter your userName"
                          value={formValues.userName}
                          onChange={handleChange}
                        />
                      </div>
                      <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.userName}
                      </p>

                      <div className="mb-3">
                        <label for="firstName" class="form-label">
                          First Name
                        </label>
                        <input
                          type="firstName"
                          class="form-control"
                          id="firstName"
                          aria-describedby="emailHelp"
                          name="firstName"
                          placeholder="Enter your firstName"
                          value={formValues.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <p style={{ color: "red", fontWeight: "bold" }}>
                        {formErrors.firstName}
                      </p>

                      <label for="lastName" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="lastName"
                        class="form-control"
                        id="lastName"
                        aria-describedby="emailHelp"
                        name="lastName"
                        placeholder="Enter your lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      {formErrors.lastName}
                    </p>

                    <label for="Age" class="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="Age"
                      aria-describedby="emailHelp"
                      name="age"
                      placeholder="Enter age"
                      value={formValues.age}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    {formErrors.age}
                  </p>

                  <div className="field">
                    <label for="Email" class="form-label">
                      Email ID
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      placeholder="Enter your Email ID"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <p>{formErrors.email}</p>
                  <div className="field">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                      name="password"
                      placeholder="Enter password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                  </div>
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    {formErrors.password}
                  </p>
                  <div class="mb-3 form-check">
                    <label class="form-check-label" for="exampleCheck1">
                      Already Registered? <Link to={"/login"}>Login Here</Link>
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={(e) => {
                        setIsRegister(!isRegister);
                        handleRegistration(e);
                      }}
                    >
                      Register
                    </button>
                  </div>
                </form>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
