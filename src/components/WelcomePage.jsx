import React from "react";

const WelcomePage = ({name, role}) => {
    return (
        <div>
            <h3>Welcome {name}</h3>
            <h4>You are a {role} user of this site </h4>
            <p>Read the README file for instructions, to use this code</p>
        </div>
    )
}
export default WelcomePage;