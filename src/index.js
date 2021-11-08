import { htmlPrefilter } from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

// Install the react-router-dom: $ npm install react-router-dom@5
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from "./Home"
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import Message from './Message';

/*
// Add basic styling for NavLinks
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () => (
  <div>
    <NavLink
      to="/"
      // set exact so it knows to only set activeStyle when route is deeply equal to link
      exact
      // add styling to NavLink
      style={link}
      // add prop for activeStyle
      activeStyle={{
        background: 'darkblue'
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >
      Login
    </NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >
      Signup
    </NavLink>
    <NavLink
      to="/message"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >
      Message
    </NavLink>
  </div>
)

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
const Home = () => <h1>Home!</h1>

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   )
// }
const About = () => <h1>This is my about component!</h1>

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   )
// }
const Login = () => (
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>
)

const Signup = () => (
  <form>
    <h1>Signup</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Signup" />
    </div>
  </form>
)

const Message = () => <h1>Message board!</h1>

*/

// Step 2. Changed to have router coordinate what is displayed
// Router (our alias for BrowserRouter) component is the base for our application's routing. 
// It is where we declare how React Router will be used

// Route component has two props in our example: path and component. 
// The Route component is in charge of saying: "when the URL matches this specified path, render this specified component".

// setting an attribute of exact, which explicitly states that you will only see the rendered component if you go to /about not /about/something_else or /abo
ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Route exact path="/" render={() => <h1>Home!</h1>} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/message" component={Message} />
    </div>
  </Router>,
  document.getElementById('root')
);
