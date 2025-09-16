import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Registro enviado", { name, email, password });
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Registrar</h1>
                <div className="input-fd">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome Completo"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-fd">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-fd">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <button type="submit" className="btn">Registrar</button>
                <div className="return">
                    <p>
                        Já tem conta? <Link to="/">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
