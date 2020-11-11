import {useState, useEffect } from 'react';


const useForm = (callback, validate) =>{
    const [values, setvalues] = useState({
        uname:"",
        email:"",
        password:"",
        conformpassword:""

    });

    const[errors, setErrors] = useState({});
    const[submitting, setsubmitting] = useState(false);

    const handleChange = e =>{
        const {name, value} = e.target;
        setvalues({
            ...values,
            [name]:value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values));
        setsubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitting){
            callback();
        }
    },[errors])
    return { handleChange, values, handleSubmit, errors };
};

export default useForm;