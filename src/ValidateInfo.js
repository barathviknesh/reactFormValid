export default function validateInfo(values){
    const errors ={};

    if(!values.uname.trim()){
        errors.uname = 'Name required';
    };
    if(!values.email){
        errors.email = 'Email required';
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Enter Valid Email';
    };
    if(!values.password){
        errors.password = 'password is required';

    }else if (values.password.length < 6){
        errors.password = 'password should be 6 character or more ! ';
    };
    if(!values.conformpassword){
        errors.conformpassword= 'password is required';

    }else if (values.password !== values.conformpassword){
        errors.conformpassword = 'password do not match ! ';
    };

    return errors;
}