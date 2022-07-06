import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../utilities/ProtectedRoute';
import Login from './Login';
import Register from './Register';
import Page from "./Page";
function App() {
  return (
	<div className="flex h-screen">
		<Routes>
			<Route exact index  path="/" element={<Login/>} />
			<Route exact path="/login" element={<Login/>} />
			<Route exact path="/register" element={<Register/>} />
			<Route exact element={<ProtectedRoute/>} >
				<Route path="/page"element={<Page />} />
			</Route>
			<Route path="*" element={<p>There is nothing here: 404!</p>} />
		</Routes>
	</div>
  )
}

export default App
