import imagen from "../img/user.jpg"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import CloseSesion from '../components/CloseSession.jsx'
import { validador } from "../constant/secretkey.js"
import { validName, validCorreo, validPassword } from "../components/Regext.js";
import { dataEncrypt } from "../components/functionEncryp.jsx";
import { useState, useEffect } from "react";
import '../styles/dashboard.css'

const arr = [];



function Dashboard() {


    const [token, setToken] = useState(localStorage.getItem('token'));
    const [todo, setTodo] = useState(arr)
    const [secret, setSecret] = useState("")
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    //datos 
    const database = JSON.parse(localStorage.getItem("usuarios"))
    const user = database.find((e) => e.token == token)
    if (user) {
        arr.push(user)
    }


    // cambiar Nombre
    const handleName = (e) => {
        e.preventDefault();
        if (nombre.length == 0) {
            alert("Campo vacio")
            return
        } if (validName.test(nombre)) {
            const data = JSON.parse(localStorage.getItem("usuarios"))
            const usuario = data.find((e) => e.token === todo[0].token)
            if (usuario) {
                const newData = data.map((e) => {
                    if (e.nombre === todo[0].nombre) {
                        e.nombre = nombre;
                        return e
                    }
                    return e
                })
                localStorage.setItem("usuarios", JSON.stringify(newData))
                setNombre("");
                setEmail("");
                setPassword("");
                window.location.reload()
            }
        } else {
            alert("No se pudo cambiar el nombre")
        }
    }
    // cambiar Email
    const handleEmail = (e) => {
        e.preventDefault();
        if (email.length == 0) {
            alert("Campo vacio")
            return
        } if (validCorreo.test(email)) {
            const data = JSON.parse(localStorage.getItem("usuarios"))
            const usuario = data.find((e) => e.token === todo[0].token)
            if (usuario) {
                const newData = data.map((e) => {
                    if (e.email === todo[0].email) {
                        e.email = email;
                        return e
                    }
                    return e
                })
                localStorage.setItem("usuarios", JSON.stringify(newData))
                setNombre("");
                setEmail("");
                setPassword("");
                window.location.reload()
            }
        } else {
            alert("No se pudo cambiar el correo")
        }
    }

    // cambiar password
    const handlePassword = (e) => {
        e.preventDefault();
        if (password.length == 0) {
            alert("Campo vacio")
            return
        } if (validPassword.test(password)) {
            const base = JSON.parse(localStorage.getItem("usuarios"))
            const user = base.find((e) => e.token === todo[0].token)
            if (user) {
                const end = dataEncrypt(password)
                const newData = base.map((e) => {
                    if (e.key === todo[0].key) {
                        e.key = end;
                        return e
                    }
                    return e
                })
                localStorage.setItem("usuarios", JSON.stringify(newData))
                setNombre("");
                setEmail("");
                setPassword("");
                window.location.reload()
            }
        } else {
            alert("Password no valido")
        }
    }

    // verficar el rol de Administrador
    const handlecheck = (e) => {
        e.preventDefault();
        if (secret.length === 0) {
            alert("Campo vacio")
            return
        } if (secret == todo[0].token) {
            const database = JSON.parse(localStorage.getItem("usuarios"))
            const user = database.find((e) => e.token == validador)
            if (user) {
                const newData = database.map((e) => {
                    if (e.token === secret) {
                        e.rol = "admin";
                        return e
                    }
                    return e
                })
                localStorage.setItem("usuarios", JSON.stringify(newData))
                window.location.href = '/admin'
            } else {
                console.log("no aprobado")
            }
        } else {
            alert("ADVERTENCIA")
        }
    }


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('usuarios'))
        const usuario = data.find((e) => e.token == token)
        if (usuario) {
            console.log("Exito")
        } else {
            setToken("")
            setTodo("")
            window.location.href = '/login'
        }
    }, [token])

    return (
        <>
            <Navbar />
            <div className='container-t'>
                <div className='container-dash1'>
                    <img src={imagen} alt="" />
                    <p className="text-4xl font-semibold text-cyan-600 bg-transparent ">Bienvenido</p>
                </div>
                <div className='container-dash2'>
                    <div className="container-data">
                        <p className="text-lg text-white text-center m-2 ">Hola {todo[0].nombre}</p>
                        <p className="text-lg text-white text-center m-2 ">Datos</p>
                        <p className="text-lg text-white text-center m-2 ">Correo: {todo[0].email}</p>
                        <p className="text-lg text-white text-center m-2 ">Rol: {todo[0].rol}</p>
                        <form className="flex flex-col m-2 gap-2 items-center bg-transparent">
                            <label className="flex items-center border border-gray-800 rounded-lg gap-1 p-1 shadow-lg bg-white">
                                <i className="bx bx-user-circle m-2"></i>
                                <input
                                    type="text"
                                    placeholder="Cambiar Nombre"
                                    className=" p-1 "
                                    value={nombre}
                                    onChange={(event) => setNombre(event.target.value)}
                                />
                            </label>
                            <input
                                type="submit"
                                value="Cambiar"
                                className="bg-cyan-600 hover:bg-cyan-400  text-white font-bold py-2 px-6 rounded-full "
                                onClick={handleName}
                            />
                            <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white">
                                <i className="bx bx-envelope m-2"></i>
                                <input
                                    type="Email"
                                    placeholder="Cambiar Email"
                                    className="p-1"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}

                                />
                            </label>
                            <input
                                type="submit"
                                value="Cambiar"
                                className="bg-cyan-600 hover:bg-cyan-400  text-white font-bold py-2 px-6 rounded-full "
                                onClick={handleEmail}
                            />
                            <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white">
                                <i className="bx bx-lock-alt m-2"></i>
                                <input
                                    type="password"
                                    placeholder="Cambiar Contraseña"
                                    className=" p-1 "
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}

                                />
                            </label>
                            <input
                                type="submit"
                                value="Cambiar"
                                className="bg-cyan-600 hover:bg-cyan-400  text-white font-bold py-2 px-6 rounded-full"
                                onClick={handlePassword}
                            />
                        </form>
                        <p className="text-sm text-white text-center m-2 ">Introduzca el Secret Key si es Administrador</p>
                        <label className='flex border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white m-2'>
                            <i className='bx bx-lock-alt m-2' ></i>
                            <input type="password" placeholder="Token" className='text-center p-1 rounded-md' value={secret} onChange={(event) => setSecret(event.target.value)} />
                            <button className=" text-green-500 text-end " onClick={handlecheck}> Verificar <i className='bx bxs-check-circle'></i></button>
                        </label>
                    </div>
                    <div>
                        <p className="text-lg text-white text-center m-2">La mejor opcion para almacenar tus datos </p>
                        <h3 className="text-lg text-white text-center m-2">DataBase ©</h3>
                    </div>
                    <div>
                        <CloseSesion />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Dashboard