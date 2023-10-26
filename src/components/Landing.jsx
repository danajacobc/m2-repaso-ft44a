import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
// Validación de email:
const emailRegExp = /\S+@\S+\.\S+/;

export default function Landing(props) {

const [input, setInput] = React.useState({
  name: "", 
  email: ""
})
const [errors, setErrors] = React.useState({
  name: "Please enter your name",
  email: "",
})

const handleChange = (e) => { 
  const { value, name } = e.target;

  setInput({ //guardo lo que el usuario ingresa en el estado local.
    ...input,
    [name]: value, //a la propiedad que vale 'name' modificale su value
  })

  if(name === "name") {   // INICIO CON LAS VALIDACIONES! :)
    if(value.length < 2 || value.length > 16) {
      setErrors({
        ...errors,
        name: "Name between 2 and 16 characters"
      }) 
    } else {
        setErrors({
          ...errors,
          name: ""
        })
    }
  }
  if(name === "email") {
    if(!emailRegExp.test(value)) {
      setErrors({
        ...errors,
          email: "You must enter a valid email",
      })
    } else {
      setErrors({
        ...errors,
        email: "",
      })
  }
 }
}

const dispatch = useDispatch();
const navigate = useNavigate();

const handleSubmit = event => {
  event.preventDefault(),
  dispatch(setUser(input));
  navigate("/home");
}

  return (
    <div>
      <h2>Welcome!!!</h2>

    <form onSubmit={handleSubmit}>
      <label>Please, enter name: </label>
      <input
      type="text"
      name="name"
      value={input.name}
      onChange={handleChange}
      />
      <p style={{color: "red"}}>{errors.name && errors.name}</p>
      <br />
      <label>Please, enter email: </label>
      <input
      type="email"
      name="email"
      value={input.email}
      onChange={handleChange}
      />
      <p style={{color: "red"}}>{errors.email ? errors.email : null}</p>
      <br />
      <button type="submit">Set Name</button>

    </form>

    </div>
  );
}
