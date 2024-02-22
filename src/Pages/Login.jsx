import { useState } from "react"
import { dataDecrypt } from "../components/functionEncryp";
import { validador } from "../constant/secretkey";
import '../styles/login.css'
import { NavLink } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanledVerified = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('usuarios'));
        if (data) {
            // verificar correo
            const usuario = data.find((e) => e.email === email)
            if (usuario) {
                //desencriptar clave 
                let clave = dataDecrypt(usuario.key)
                // comprobar contrasenas
                if (clave === password) {
                    const newData = data.map((e) => {
                        if (e.email === email) {
                            e.token = validador;
                            return e
                        }
                        return e
                    })
                    localStorage.setItem("usuarios", JSON.stringify(newData))
                    localStorage.setItem("token", validador)
                    setEmail("")
                    setPassword("")
                    window.location.href = '/dashboard'
                } else {
                    console.log("La clave no es correcto")
                }
            } else {
                console.log('El correo no existe en nuestra base de datos')
            }
        }
    }

    return (
        <>
            <div className="container">
                <h2 className='text-4xl font-semibold m-4 bg-transparent text-black'>Inicio</h2>
                <i className='bx bxs-user-rectangle text-9xl text-cyan-600'></i>
                <form className='flex flex-col m-3 gap-4 items-center bg-transparent'>
                    <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white'>
                        <i className='bx bx-envelope m-2' ></i>
                        <input type="Email" placeholder="Ingresa tu Email" className='p-1 rounded-md' value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </label>
                    <label className='flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white '>
                        <i className='bx bx-lock-alt m-2' ></i>
                        <input type="password" placeholder="Contraseña" className='p-1 rounded-md ' value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </label>
                    <input type="submit" value="Iniciar Sesión" className='bg-cyan-600 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-full m-8' onClick={hanledVerified} />
                </form>
                <div className="icons m-4 text-center bg-transparent">
                    <i className='bx bxl-google bg-white text-red-600 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-3 border border-black rounded-full shadow m-2'></i>
                    <i className='bx bxl-github bg-white text-black hover:bg-gray-400 hover:text-black font-semibold py-3 px-3 border border-black rounded-full shadow m-2' ></i>
                    <i className='bx bxl-linkedin bg-white text-blue-700 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-3 border border-black rounded-full shadow m-2' ></i>
                </div>
                <div>
                    <NavLink to="/" className="text-white hover:text-gray-500">Registro</NavLink>
                </div>
            </div>
        </>
    )
}

export default Login 