import { useState } from "react";
import validator from "validator"; //npm install -D @types/module-name
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdContacts, MdEmail } from "react-icons/md";
import "./scss/style.scss";

function App() {
  const [passwordType, setPasswordType] = useState("password");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  //show/hide password
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  //email validator
  const validateEmail = (email: string) => {
    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <section className="Signup">
      <form className="signup--form">
        <span className="firstname">
          <label>First name</label>
          <input
            className="signup--input"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData?.firstname}
            required
          />
          <MdContacts className="form--icons" />
        </span>
        <span className="lastname">
          <label>Last name</label>
          <input
            className="signup--input"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData?.lastname}
            required
          />
          <MdContacts className="form--icons" />
        </span>
        <span className="email">
          <label>Email</label>
          <input
            className="signup--input"
            type="email"
            placeholder="name@mail.com"
            name="email"
            value={formData?.email}
            required
          />
          <MdEmail className="form--icons" />
        </span>
        <span className="password">
          <label>Password</label>
          <input
            className="signup--input"
            type={passwordType}
            placeholder="********"
            name="password"
            value={formData?.password}
            required
          />
          {passwordType === "password" ? (
            <AiFillEyeInvisible
              className="form--icons"
              onClick={togglePassword}
            />
          ) : (
            <AiFillEye className="form--icons" onClick={togglePassword} />
          )}
        </span>
        <div className="buttons">
          <button className="pry-btn change" type="submit">
            Change method
          </button>
          <button className="pry-btn active submit" type="submit">
            Create account
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
