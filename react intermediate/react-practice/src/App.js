import Profile from "./component/index";
import ToggleStatus from "./component/newindex";

const details = [{
  id: 1,
  name: "jhon",
  role: "ux designer",
},
{
  id: 2,
  name: "jane",
  role: "web developer"
},
{
  id: 3,
  name: "marry",
  role: "architect"
},
{
  id: 4,
  name: "steve",
  role: "designer"
},
{
  id: 5,
  name: "michal",
  role: "CEO"
}]


function App() {
  return (<div className="list-container">
    <h1> Profile List</h1>
    <ul>
      {details.map((each) => (
        <Profile key={each.id} hello={each} />))}

    </ul>
    <ToggleStatus />

  </div>
  );
}

export default App;
