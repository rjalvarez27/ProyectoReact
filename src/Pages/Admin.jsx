import imagen from "../img/user.jpg"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import CloseSesion from '../components/CloseSession.jsx'
import Chart from "../components/Chart.jsx";
import { useState, useEffect } from "react";
import "../styles/admin.css"

function Admin() {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [toggle, setToggle] = useState("light");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('usuarios'))
        const usuario = data.find((e) => e.rol == "admin")
        if (usuario) {
            alert("Bienvenido Adminitrador")
        } else {
            setToken("")
            window.location.href = '/login'
        }
    }, [token])

    const hanledMode = (e) => {
        e.preventDefault();
        setToggle(prevTheme => prevTheme === "light" ? "dark" : "light")
    }



    return (
        <>
            <div className={toggle}>
                <Navbar />
                <div className="container-admin">
                    <div className='container-admin1 dark:bg-black text-white'>
                        <label>
                            <input type="checkbox" onClick={hanledMode} />
                        </label>
                        <img src={imagen} alt="" />
                        <p className="text-4xl font-semibold text-cyan-600 bg-transparent ">Bienvenido</p>
                    </div>
                    <div className='container-admin2 dark:bg-black'>
                        <div className="flex flex-row">
                            < Chart />
                        </div>
                        <div>
                            <CloseSesion />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default Admin