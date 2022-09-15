import { useState } from "react";
import validator from "validator"; //npm install -D @types/module-name
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdContacts, MdEmail, MdError } from "react-icons/md";
import { SignupComponent } from "../App";

const Signup: React.FC = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [emailError, setEmailError] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [formData, setFormData] = useState<SignupComponent>({
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
    <form className="signup--form" onSubmit={handleSubmit}>
      <span className="firstname">
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
        <label>First name</label>
        <button>
          <MdContacts className="form--icons" />
        </button>
      </span>
      <span className="lastname">
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
        <label>Last name</label>
        <button>
          <MdContacts className="form--icons" />
        </button>
      </span>

      <span className={emailError ? "email" : "active"}>
        <input
          className="signup--input"
          type="email"
          placeholder="name@mail.com"
          name="email"
          id="email"
          value={formData?.email}
          onChange={handleOnChange}
          required
        />{" "}
        <label>Email</label>
        {emailError ? (
          <button>
            <MdEmail className="form--icons" />
          </button>
        ) : (
          <button>
            <MdError color="#ff7782" className="form--icons" />
          </button>
        )}
        {!emailError ? (
          <div className="error">
            You have entered an invalid e-mail address. Please try again.
          </div>
        ) : null}
      </span>

      <span className={isValidPassword ? "password" : "activepassword"}>
        <input
          className="signup--input"
          type={passwordType}
          placeholder="********"
          name="password"
          id="password"
          value={formData?.password}
          onChange={handleOnChange}
          required
        />{" "}
        <label>Password</label>
        {passwordType === "password" ? (
          <button onClick={togglePassword}>
            <AiFillEyeInvisible className="form--icons" />
          </button>
        ) : (
          <button onClick={togglePassword}>
            <AiFillEye className="form--icons" />
          </button>
        )}
        {!isValidPassword ? (
          <div className="error">
            Your password should contain, Uppercase,lowercase,symbol and number.
          </div>
        ) : null}
      </span>

      <button className="pry-btn change" type="submit">
        Change method
      </button>
      <button className="pry-btn active submit" type="submit">
        Create account
      </button>
    </form>
  );
};

export default Signup;
