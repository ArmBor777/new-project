
import './App.css';
import { Counter } from './Counter';
import { Product } from './Product';

function Greeting(){

  const name = "Alex";


  return (
    <div>
      <h4>Hello, I am a function component!!!</h4>
      <h3>Hello, I am {name}!</h3>
    </div>
  );
}

function Name(props){
  return(
    <span>{props.name}</span>
  );
}


function Surname(props){


  return(
    <span>{props.surname}</span>
  );
}

function User(props){

  let surname;
  if(props.surname){
    surname = props.surname;
  } else{
    surname = "no surname";
  }


  return(
    <div>
    <h3>Hello, I am {props.name}, and I am {props.age}!</h3>
    <h3>Hello, I am <Name name = {props.name}/> <Surname surname = {surname}/>, and I am {props.age}!</h3>

    <a href = {props.href}>GO to Google</a>
    </div>
  );
}








function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Product
        ProductName = "Bananas"
        Price = "1$"
        Description = "Fresh bananas from Ecuador"
        />
        <Product
        ProductName = "Tandz"
        Price = "10$"
        Description = "Fresh tandz from Kirovakan"
        />

        <Counter defaultValue = {0}/>

        <Greeting />

        <User 
        name = "Alex" 
        age = {25}
        surname = "Yong"
        />

        <User 
        name = "Harut" 
        age = {20}
        />

        <User 
        name = "Tigo" 
        age = {24} 
        href = "https://google.com"/>

      </header>
    </div>
  );
}

export default App;
