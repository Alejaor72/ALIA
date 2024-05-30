import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { logIn } from '../../services/firebase';

function FormLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginSuccess = await logIn(email, password);
        if (loginSuccess) {
            navigate('/upload');
            console.log("User logged")
        } else {
            setErrorMessage("Login failed");
            console.log("Login Failed")

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputLoginDiv">
                <h3 className='subtitleLogin'>Iniciar Sesión</h3>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className='inputsLog'>
                <input
                    type="text"
                    placeholder='Email'
                    className='inputLogin'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Contraseña'
                    className='inputLogin'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <Button label="Iniciar Sesión" type="submit" onClick={() => {}} />
            </div>
        </form>
    );
}

export default FormLogin;