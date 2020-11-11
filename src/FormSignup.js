import React from 'react';
import "./FormSignup.css";
import useForm from "./Useform";
import validate from "./ValidateInfo";

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors } 
    = useForm(submitForm,validate);

    return (
        <>
        <div className="formContainer"> 
            <div className = "from-content-right" onSubmit={handleSubmit}>
                <form className = "form">
                    <h1>fillup the below form !</h1>
                    <div className="Form-inputs">
                        <label 
                        htmlFor="name"
                        className = "form-label">Name    
                            </label>
                    <input 
                    id="uname"
                    type="text"
                    name="uname"
                    className="forminput"
                    placeholder="enter your Name"
                    value = {values.uname}
                    onChange={handleChange}
                    
                    />
                    {errors.uname && <p>{errors.uname}</p>}
                        
                    </div>
                    {/* email */}
                    <div className="Form-inputs">
                        <label 
                        htmlFor="email"
                        className = "form-label">Email    
                            </label>
                    <input 
                    id="email"
                    type="email"
                    name="email"
                    className="forminput"
                    placeholder="enter your email-ID"
                    value = {values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}    
                    </div>
                    {/* password */}
                    <div className="Form-inputs">
                        <label 
                        htmlFor="password"
                        className = "form-label">Password   
                            </label>
                    <input 
                    id="password"
                    type="password"
                    name="password"
                    className="forminput"
                    placeholder="enter your Password"
                    value = {values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}     
                    </div>
                    {/* conform password */}
                    <div className="Form-inputs">
                        <label 
                        htmlFor="conformpassword"
                        className = "form-label">ConformPassword   
                            </label>
                    <input 
                    id="conformpassword"
                    type="password"
                    name="conformpassword"
                    className="forminput"
                    placeholder="enter your Password"
                    value = {values.conformpassword}
                    onChange={handleChange}
                    />
                      {errors.conformpassword && <p>{errors.conformpassword}</p>}     
                    </div>
                    <button type="submit" className="Form-inputs-btn">Sign-Up</button>
                    <span>Already have account Login here<a href="#">Here</a></span>


                </form>
            </div>
            </div>
        </>
    )
}

export default FormSignup
