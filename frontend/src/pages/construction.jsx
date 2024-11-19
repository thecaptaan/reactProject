import { Link } from "react-router-dom";
export default function Construction() {
  return (
    <div className="construction cent">
      <div className="construction-item col">
        <h1>Early Access is Available for Incubora</h1>
        <p>
          <b>
            Incubora is under heavy development & may not be stable. Please
            report any issues to the
            <Link to="/dev/report">here</Link>
          </b>
        </p>
        <div>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}
