import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   //console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   // console.log("printing Last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState( { firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: ""});

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }
  return (
    <div className="App">
      <form>
        <br/>
        <input 
        type = "text"
        placeholder='first name' 
        onChange={changeHandler}
        name = "firstName"
        value = {formData.firstName}
        />
        <br/>
        <br/>
       <input 
        type = "text"
        placeholder='Last name' 
        onChange={changeHandler}
        name = "lastName"
        value = {formData.lastName}

        />

        <br/>
        <br/>
        <input 
        type = "email"
        placeholder='Enter your email'
        onChange = {changeHandler} 
        name= "email" 
        value = {formData.email}
        />
        <br/> <br/>
        <textarea
        placeholder='Enter your comments'
        onChange={changeHandler}
        name = "comoments"
        value = {formData.comments}
        />

        <input 
        type = "checkbox"
        onChange = {changeHandler}
        name = "isVisible"
        id = "isVisible"
        checked = {formData.isVisible}
        />
        <label htmlFor = 'isVisible'>Am I visible</label>

        <br/>
        <br/>
        <input 
        type = "radio"
        onChange={changeHandler}
        name = "mode"
        value = "Online-Mode"
        id = "Online-Mode"
        checked = {formData.mode === "Online-mode"}
        />
        <label htmlFor='Online-Mode'>Online Mode
          </label>

          <input 
        type = "radio"
        onChange={changeHandler}
        name = "mode"
        value = "Offline-Mode"
        id = "Offline-Mode"
        checked = {formData.mode === "Offline-Mode"}
        />
        <label htmlFor='Offline-Mode'>Offline Mode
          </label>

          <select
          name = "favCar"
          id= "favCar"
          value={formData.favCar}
          onChange={changeHandler}>
            <option value = "Aston martin">Aston martin</option>
            <option value = "Lamborghini">Lamborghini</option>
            <option value = "Ferrari">Ferrari</option>
            <option value = "Rolls Royce">Rolls Royce</option>

          </select>

      </form>

    </div>
  )
}

export default App;
