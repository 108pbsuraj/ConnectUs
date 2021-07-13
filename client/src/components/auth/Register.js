import React, { Fragment, useState } from 'react';
import {Link, Redirect } from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        password: '',
        password2:''
    });

    const {name, email, password, password2} = formData;
    
    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onsubmit = async e => {
        e.preventDefault();
        if(password!== password2){
            // console.log("password do not match");
            setAlert('password do not match', 'danger');
        }else{
            register({name, email, password});
            //console.log('Success');
            // const newUser={
            //     name,
            //     email,
            //     password
            // }
            // try {
            //     const config = {
            //         headers:{
            //             'Content-Type': 'application/json'
            //         }
            //     }
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
        }
    }
    if(isAuthenticated){
        return <Redirect to= "/dashboard"/>
    }
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit = {e => onsubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e => onchange(e)} />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email Address" autoComplete="email" name="email" value={email} onChange={e => onchange(e)}/>
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    name="password"
                    value={password} onChange={e => onchange(e)}
                    
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                    name="password2"
                    value={password2} onChange={e => onchange(e)}
                    
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );
};
Register.propTypes={
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool
}
const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
});
export default connect(mapStateToProps, {setAlert, register})(Register); 