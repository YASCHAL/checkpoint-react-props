import "./App.css";
import Profile from "./profile/Profile";
import {useAlert} from 'react-alert'

const Image = (props) =>{
  return (
    <div>
       {props.children}
    </div>
  )
}
const fullName = 'Chalal Yasser'


const bio = (
  <div className="bio">
    <h3>My Biographie </h3>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      deleniti, architecto, itaque dolorem veniam nemo voluptas eveniet atque
      numquam, quod reiciendis a optio accusamus deserunt rem totam soluta
      beatae consectetur possimus explicabo. Nulla at modi, eveniet enim
      corporis architecto obcaecati nostrum accusamus eligendi illum laudantium
      vitae, qui id quidem iste.
    </span>
  </div>
);

const profession = (
  <div className="profession">
    <h3>My Profession</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum eos
      consectetur quasi officiis cum! Doloremque deserunt quidem voluptatibus
      nulla consequatur quos voluptates, vero nesciunt sint nihil. Vel, corrupti
      saepe?
    </p>
    <h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      incidunt, illo consectetur alias quam veniam.
    </h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum, ipsam
      mollitia vero quam fuga doloribus doloremque iusto accusantium quibusdam
      consequuntur! Sint nulla illo reiciendis!
    </p>
  </div>
);

  function handleName() {
    alert(`${fullName}`);
    
    }
  

function App() {
  const alert = useAlert
  return (
    <div className="App">
     <Image>
       <img className="img" src="./imageInpublic.jpeg" alt="" />
     </Image>
     <div className="profile">
       <Profile fullName="Chalal Yasser" bio={bio} profession={profession} />
     </div>
     <button onClick={handleName}>user FullName</button>
      
    </div>
  );
}

export default App;
