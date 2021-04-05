import { useState, useEffect} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom'

const useForm = (callback,validate) => {
  const history = useHistory();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('sending');
    Axios.post('http://localhost:8080/submitCustomerDetails',values)
    .then( response => {
      console.log('sent');
      localStorage.setItem("loggedInUser", response.data.email);
       history.push("/book");
    })
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
          //callback();
        //  console.log ("this is call back")
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;