import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebaseIntegration";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/page");
  }, [user, loading]);
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
		{error && <span>error.message</span>}
        <button
          className=""
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div>
          No account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;