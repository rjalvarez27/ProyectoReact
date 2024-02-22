import { useState } from "react";
import { validName, validCorreo, validPassword } from "../components/Regext.js";
import { Link } from "react-router-dom";
import "../styles/register.css";
import { dataEncrypt } from "../components/functionEncryp.jsx";


function Registrarse() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombreErr, setNombrerr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);


  const handleValidate = (e) => {
    e.preventDefault();
    //Verificaion de datos vacios 
    if (nombre.length == 0 || email.length == 0 || password.length == 0) {
      alert("Datos vacios");
      return
    } if (
      validName.test(nombre) &&
      validCorreo.test(email) &&
      validPassword.test(password)
    ) {
      const data = JSON.parse(localStorage.getItem("usuarios")) || [];
      // verificacion de datos repetidos 
      const check = data.find((event) => event.email === email);
      if (check) {
        alert("correo electronico ya esta registrado en la base");
        setNombre("")
        setEmail("")
        setPassword("")
        return;
      }
      // encryptar password
      let key = dataEncrypt(password)
      const user = {
        nombre, email, key, rol: 'user'
      }
      const newData = [...data, user]
      localStorage.setItem("usuarios", JSON.stringify(newData))
      // limpiar datos de los inputs 
      setNombre("");
      setEmail("");
      setPassword("");
      window.location.href = "/login";
    } else {
      setNombrerr(true);
      setEmailErr(true);
      setPwdError(true);
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <>
      <div className="container-form ">
        <div className="information">
          <h2 className="text-4xl font-semibold text-white bg-transparent ">
            Bienvenido
          </h2>
          <p className=" text-base text-white font-semibold m-3 text-justify p-3 bg-transparent">
            Inicia sesion con tus datos, Recuerda que somos la mejor empresa de
            gestion de perfiles
          </p>
          <Link to="/login">
            <input
              type="button"
              value="Iniciar Sesion "
              className="bg-cyan-600   hover:bg-cyan-400  text-white font-bold py-2 px-4  rounded-xl shadow"
            />
          </Link>
        </div>
        <div className="form-information">
          <div className="form-information-childs bg-transparent ">
            <h2 className="text-xl font-semibold m-4 text-center bg-transparent">
              Crear una Cuenta
            </h2>
            <div className="icons m-4 text-center bg-transparent">
              <i className="bx bxl-google bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-3 px-3 border border-gray-400 rounded-full shadow m-2 hover:text-red-500"></i>
              <i className="bx bxl-github bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-3 px-3 border border-gray-400 rounded-full shadow m-2 hover:text-violet-700"></i>
              <i className="bx bxl-linkedin bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-3 px-3 border border-gray-400 rounded-full shadow m-2 hover:text-blue-500"></i>
            </div>
            <p className="text-base font-semibold m-4 bg-transparent">
              O usa tu Email para registrarte
            </p>
            <form className="flex flex-col m-2 gap-2 items-center bg-transparent">
              <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white">
                <i className="bx bx-user-circle m-2"></i>
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className=" p-1 "
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                />
              </label>
              <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white">
                <i className="bx bx-envelope m-2"></i>
                <input
                  type="Email"
                  placeholder="Ingresa tu Email"
                  className="p-1"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label className="flex items-center border border-gray-800 rounded-lg gap-2 p-1 shadow-lg bg-white">
                <i className="bx bx-lock-alt m-2"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className=" p-1 "
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>
              <input
                type="submit"
                value="Empezar"
                className="bg-cyan-600 hover:bg-cyan-400  text-white font-bold py-2 px-6 rounded-full m-8"
                onClick={handleValidate}
              />
              {emailErr && pwdError && nombreErr && (
                <p className="text-red-600 text-base">
                  Tus Datos son incorrectos
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrarse;
