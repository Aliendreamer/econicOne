import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../utilities/ProtectedRoute';
import Login from './Login';
import Register from './Register';
import Page from "./Page";
function App() {
  return (
	<div className="flex h-screen">
		{/* //<Navigation/> */}
		<Routes>
			<Route exact index  path="/" element={<Login/>} />
			<Route exact path="/register" element={<Register/>} />
			<Route exact element={<ProtectedRoute/>} >
				<Route path="/page"element={<Page />} />
			</Route>
			<Route path="*" element={<p>There is nothing here: 404!</p>} />
		</Routes>
	</div>
  )
}
// const Navigation = () => (
// 	<nav>
// 	<Link to="/login">Landing</Link>
// 	<Link to="/register">Register</Link>
// 	<Link to="/page">page</Link>
// 	</nav>
//   );

export default App
