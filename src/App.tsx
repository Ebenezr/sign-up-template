import "./scss/style.scss";
import Signup from "./components/Signup";
export interface SignupComponent {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
}
const App: React.FC = () => {
  return (
    <section className="Signup">
      <h2>Create new account.</h2>
      <small>Already A Member? Log In</small>
      <Signup />
    </section>
  );
};

export default App;
