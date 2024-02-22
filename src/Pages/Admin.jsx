import imagen from "../img/user.jpg"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import CloseSesion from '../components/CloseSession.jsx'
import Chart from "../components/Chart.jsx";
import { useState, useEffect } from "react";
import "../styles/admin.css"
let arrA = []


function Admin() {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [toggle, setToggle] = useState("light");
    const [info,setInfo] = useState(arrA)

    const hanledMode = () => {
        setToggle(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    // datos de local que no son admin
    const database = JSON.parse(localStorage.getItem("usuarios"))
    const user = database.filter((e) => e.rol != "admin")
    if (user) {
        arrA.push(user)
    }
    console.log(info)

    const hanledEliminate = () => {
       
    }

  

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('usuarios'))
        const usuario = data.find((e) => e.rol == "admin")
        if (usuario) {
            console.log("paso a admin")
        } else {
            setToken("")
            setInfo("")
            window.location.href = '/login'
        }
    }, [token])



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
                            < Chart nombre={info[0].nombre} correo={info[0].email} rol={info[0].rol} />
                            <button onClick={hanledEliminate} className="bg-red-600 text-white font-bold  rounded-lg py-3 px-3 ml-2"><i className='bx bx-x-circle'></i></button>
                           
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