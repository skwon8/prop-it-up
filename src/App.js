import logo from './logo.svg';
import './App.css';
import PersonCard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <h1>Person Card!</h1>
      <hr />
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {"45"} hairColor = {"Black"}></PersonCard>

      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {"88"} hairColor = {"Brown"}></PersonCard>

      <PersonCard firstName = {"Millard"} lastName = {"Fillmore"} age = {"50"} hairColor = {"Brown"}></PersonCard>

      <PersonCard firstName = {"Maria"} lastName = {"Smith"} age = {"62"} hairColor = {"Brown"}></PersonCard>
    </div>
    
  );
}

export default App;

// const PersonCard = [
//   {first_name: "", last_name: "", age: "", hair_color: ""},
//   {first_name: "", last_name: "", age: "", hair_color: ""},
//   {first_name: "", last_name: "", age: "", hair_color: ""},
//   {first_name: "", last_name: "", age: "", hair_color: ""}
// ]