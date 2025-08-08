import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../features/auth/authSlice';

function Dashboard() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="dashboard">
            <h2>Welcome, {user?.username}!</h2>
            <p>you have successfully logged in.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;