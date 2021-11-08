import React from "react";

class Signup extends React.Component {
    render() {
        return (
            <form>
                <h1>Signup</h1>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Signup" />
                </div>
            </form>
        )
    }
}

export default Signup;