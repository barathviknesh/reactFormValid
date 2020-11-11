import React, {useState} from 'react';
import "./Form.css";
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmit, SetisSubmit] =useState(false);

    function submitForm(){
        SetisSubmit(true);
    }
    return (
        <div>
            
            {!isSubmit ? <FormSignup submitForm={submitForm}/> : <FormSuccess/>}
        </div>
    );
}

export default Form
