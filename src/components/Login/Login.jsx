import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {useState} from 'react';
import './Login.css';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Login Enviado"), {email,password}
    };
 
  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-fd'>
                <input type="email"
                id='email'
                placeholder='E-mail' 
                required
                 onChange={(e) => setEmail (e.target.value)}/>
                <FaUser className='icon'/>
            </div>
            <div className='input-fd'>
                <input type="password"
                id='password'
                 placeholder='senha'
                  required
                   onChange={(e) => setPassword (e.target.value)}/>
                <FaLock className='icon'/>
            </div>
            <div className="lembrar">
                <label>
                    <input type="checkbox" name="" id="" />
                    Lembrar
                </label>
                <a href="#">Esqueceu a Senha</a>
            </div>
            <button type='submit'>Entrar</button>
            <div className="register1">
                <p>Não tem conta ? <Link to="/register">Registrar</Link></p>
            </div>
        </form>
        
    </div>
    
    );
};

export default Login;