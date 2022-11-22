import './index.css';
import image from "./images/Successfully.jpg"
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

  //Use states
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [match, setMatch]=useState();

  //Use Effect for API's
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    axios.get(url).then((res) => {
      if(res.data){
        const data = res.data;
        const items = data.map(item => {
          return item.email
        })
        setConfirmEmail(items);
      }
    });
    
  })


  //When button is click this function will be call
  const handelClick = (e) => {
    setMatch(false);
    for(let i = 0; i <= confirmEmail.length; i++) {
        if(confirmEmail[i] === email) {
          setMatch(true);
        }
     }
     
    e.preventDefault();
  }

  //App Return
  return (
    //Ternaroy opertaor
    <div>{match === true ?
     <div>
      <img src={image} alt="images"></img>
    </div>

    :

    <main className="form-signin w-100 m-auto">
  <form>
    <h1 className="h3 mb-3 fw-normal">Match Your Email</h1>
    {match === false && <div>
      <h2>Try Again</h2>
    </div>}

    <div className="form-floating">
      <input type="email" class="form-control" placeholder="name@example.com" onChange={(e) => {
        setEmail(e.target.value);
      }}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handelClick}>Match</button>
  </form>
</main>
    }
</div>

);
}

export default App;
