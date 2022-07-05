/* eslint-disable react/prop-types */
import { Navigate,Outlet } from 'react-router-dom';
import { auth } from "./firebaseIntegration";
import { useAuthState } from 'react-firebase-hooks/auth';

const ProtectedRoute = ({redirectPath = '/login',children}) => {
	const [user] = useAuthState(auth);
	if (!user) {
		return <Navigate to={redirectPath} replace />;
	}
	return children ? children : <Outlet />;
  };

export default ProtectedRoute;