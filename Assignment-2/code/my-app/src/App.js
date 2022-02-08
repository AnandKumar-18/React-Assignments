import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {
        /* Start your React code here */
        <>
          <div className="image-container">
            <img
              src={employee.profileImg}
              alt="profile-pic"
              width="100"
              height="100"
            />
          </div>
          <div className="name-container">
            <h1>{employee.name}</h1>
          </div>
          <div className="info first">
            <span>Location</span>
            <strong>{employee.location}</strong>
          </div>
          <div className="info second">
            <span>Blood group</span>
            <strong>{employee.bloodGroup}</strong>
          </div>
          <div className="info third">
            <span>Age</span>
            <strong>{employee.age}</strong>
          </div>
        </>
      }
    </div>
  );
}

export default App;
