import "./scss/style.scss";
import Signup from "./components/Signup";
import { MdDonutSmall } from "react-icons/md";
export interface SignupComponent {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}
const App: React.FC = () => {
  return (
    <section className="Signup">
      <header>
        <nav>
          <span>
            <MdDonutSmall className="logo__icon" /> BlindInc
          </span>
          <span> Home</span>
          <span> Join</span>
        </nav>
      </header>
      <h2>Create new account.</h2>
      <small>
        Already A Member? <span>Log In</span>
      </small>
      <Signup />
      <div>Logo</div>
    </section>
  );
};

export default App;
