import React from 'react';
import styles from '../styles/Login.module.css';

function Login() {


    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img className={styles.imageSize} src="login.png" alt="login" />
            </div>
            <div className={styles.login}>
                <img className={styles.imagePosition} src="logo.png" alt="logo" />
                <h1 className={styles.title}>See what's <br></br>happening</h1>
                <h2 className={styles.subtitle}>Join Hackatweet today</h2>
                <button className={styles.btnSignUp}>Sign up</button>
                <p className={styles.little}>Already have an account ?</p>
                <button className={styles.btnSignIn}>Sign in</button>
            </div>
        </div>
    )
}

export default Login