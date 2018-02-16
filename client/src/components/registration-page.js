import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration-page.css';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="registration-page">
            <h2 className="registration-page-header">Register for Fantasy Congress 2018</h2>
            <RegistrationForm />
            <p>
                Already have an account? <Link to="/">Login here</Link>.
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
