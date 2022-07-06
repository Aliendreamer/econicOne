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
	<section className="h-screen">
	<div className="px-6 h-full text-gray-800">
		<div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
		<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
			<img
			src="https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5f61480845b551637e3c3969_Dimensions-Transport-Bicycles-Fixed-Gear-Bicycle-Fixie-Icon.svg"
			className="w-full"
			alt="Sample image"
			/>
		</div>
	<div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
		<div className="px-6 h-full text-gray-800">
		<form className="border-0">
			<input
			type="text"
			className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
			placeholder="E-mail Address"
			/>
			<input
			type="password"
			className="mt-2 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
			placeholder="Password"
			/>
		</form>
		{error && <span className="mx-1 mb-1 text-red-900">error.message</span>}
		<button
			className="inline-block mt-3 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
		onClick={register}
		>
		Register
		</button>
		<div className="mt-4 flex-auto">
		<Link to="/login"> <p className="text-base underline underline-offset-1 font-semibold  pt-1 mb-0">Already have an account? Login now.</p></Link>
	</div>
	</div>
	</div>
	</div>
	</div>
	</section>
 );
}
export default Register;
