import React from 'react';
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export function Home() {

    function logout(){
        <Redirect to={{pathname: "/" }} />
    }

    return (
        <div>
            <Button block size="lg" type="submit" onClick={logout()}>
                Logout
            </Button>
        </div>
    );
}
