import React from 'react';
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
    console.clear()
    const { isLoading } = useAuth0();
    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            <LoginButton />
            <Profile />
        </div>
    );
};

export default App;