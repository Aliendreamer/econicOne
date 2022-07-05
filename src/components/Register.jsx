import  { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword  } from "react-firebase-hooks/auth";
import { Link , useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebaseIntegration";

const  Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!email) alert("Please enter email");
	if (!password) alert("Please enter password");
    createUserWithEmailAndPassword( email, password);
  };
  useEffect(() => {
    if (loading) return;
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
		{error && <span>{error.message}</span>}
        <button className="" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;