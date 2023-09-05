import { useState } from "react";
import {Link, UseNavigate, useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const CreateAccountPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

  
    const createAccount = async ()=> {
        try {
            if (password !== confirmPassword){
                setError('Passwords do not match.');
                return;
            } else {
                await createUserWithEmailAndPassword(getAuth(), email,password);                    
                navigate('/articles');
            }
        } catch (error) {
            setError(error.message);
        }
    }
    
    return(
        <>
        <h1>Create Account</h1>
        {error && <p className="error">{error}</p>}
        <input 
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email" />
        <input 
            placeholder="Your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password" />
        <input 
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password" />
        <button onClick={createAccount}>Create Account</button>
        <Link to='/login'>Already have an account? Log in here.</Link>
        </>
    );
};

export default CreateAccountPage;