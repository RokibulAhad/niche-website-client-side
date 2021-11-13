import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img1 from '../../../images/logo.png';
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user,registerUser,isLoading,authError} = useAuth();

    const handleOnBlur = e => {
       
        const feild = e.target.name;
        const value = e.target.value;
        console.log(feild,value)
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
    
}

const handleLogin = e =>{
   if(loginData.password !== loginData.password2){
       alert('Password did not match')
       return
   }
   registerUser(loginData.email, loginData.password, loginData.name, history)
    e.preventDefault();
}



    return (
        <div>
            <h2>This is Register</h2>
            <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6"> 
                       <h2>Please Register</h2>
                       <img className="mb-3" src={img1} alt="" /><br /> 
                       {!isLoading && <form onSubmit={handleLogin}>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                <input type="text" name="name" onBlur={handleOnBlur}class="form-control" id="inputEmail3"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                <input type="email" name="email" onBlur={handleOnBlur}class="form-control" id="inputEmail3"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                <input type="password" name="password" onBlur={handleOnBlur} class="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                                <div class="col-sm-10">
                                <input type="password" name="password2" onBlur={handleOnBlur} class="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            <Link className="link" to="/login">Already User? Please login</Link> <br />
                            
                                                  
                            <button type="submit" className="mt-2 g-button">Register</button>
                        </form>} 
                        {isLoading && <div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span>
                            </div>}<br /> 
                        {user?.email && <div class="alert alert-success d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg></svg>
                        <div>
                            Successfully Register
                        </div>
                        </div>}
                        {authError && <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                         </svg></svg>
                        <div>
                            {authError}
                        </div>
                        </div>}                
                        <button  className="mt-5 g-button">sign in with google</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="img" alt="" />
                    </div>

                </div>
            </div>


           
            
        </div>
        </div>
    );
};

export default Register;