import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;