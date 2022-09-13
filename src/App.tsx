import { useState } from "react";
import validator from "validator"; //npm install -D @types/module-name
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdContacts, MdEmail, MdError } from "react-icons/md";
import "./scss/style.scss";

const App: React.FC = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [emailError, setEmailError] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

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
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  //password validation
  const validatePassword = (password: any) => {
    if (validator.isStrongPassword(password)) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  //handle change
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const key = event.target.id;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    formData.email ? validateEmail(formData?.email) : null;
    formData.password ? validatePassword(formData?.password) : null;
    setFormData({ ...formData, [key]: value });
  };

  //form submission
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="Signup">
      <form className="signup--form" onSubmit={handleSubmit}>
        <span className="firstname">
          <label>First name</label>
          <input
            className="signup--input"
            type="text"
            placeholder="First Name"
            name="firstname"
            id="firstname"
            value={formData?.firstname}
            onChange={handleOnChange}
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
            name="lastname"
            id="lastname"
            value={formData?.lastname}
            onChange={handleOnChange}
            required
          />
          <MdContacts className="form--icons" />
        </span>

        <span className={emailError ? "email" : "active"}>
          <label>Email</label>
          <input
            className="signup--input"
            type="email"
            placeholder="name@mail.com"
            name="email"
            id="email"
            value={formData?.email}
            onChange={handleOnChange}
            required
          />
          {emailError ? (
            <MdEmail className="form--icons" />
          ) : (
            <MdError color="#ff7782" className="form--icons" />
          )}
          {!emailError ? (
            <div className="error">
              You have entered an invalid e-mail address. Please try again.
            </div>
          ) : null}
        </span>

        <span className={isValidPassword ? "password" : "activepassword"}>
          <label>Password</label>
          <input
            className="signup--input"
            type={passwordType}
            placeholder="********"
            name="password"
            id="password"
            value={formData?.password}
            onChange={handleOnChange}
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
          {!isValidPassword ? (
            <div className="error">
              Your password should contain, Uppercase,lowercase,symbol and
              number.
            </div>
          ) : null}
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
};

export default App;
