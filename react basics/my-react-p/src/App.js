import Profile from "./components/index";
import Account from "./saybye component/index";
import React from Node_module;


const details = [{
  name: "Suresh",
  position: "web developer",
},
{
  name: "Akshay Kumar",
  position: "UX designer"
}];

function App() {
  return <div>
    <Profile />
    <Account userdetails={details[0]} />
    <Account />
    <Account />


  </div>
}
export default App;
