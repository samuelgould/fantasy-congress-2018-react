import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    const demoLogIn = () => {
        return props.dispatch(login('Demo', 'demopassword'));
    }

    return (
        <div className="landing-page-container">
            <LoginForm />
            
            <p className="log-in-page-link-block">
                Don't have an account? <Link to="/register">Register today.</Link>
            </p>
            <p className='log-in-page-link-block'>
                Or play with Fantasy Congress 2018 using our <Link to='/dashboard' onClick={() => demoLogIn()}><span className='log-in-links-text'>Demo Account.</span></Link>
            </p>
            <h3 className='first-time-link-block'>
                First time? Here's more information about <Link to='/about'>Fantasty Congress 2018</Link>.
            </h3>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
