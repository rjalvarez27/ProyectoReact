import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom"

export function PrivateRoute() {

    // eslint-disable-next-line no-unused-vars
    const [valido, setValido] = useState(localStorage.getItem("token"));

    return (
            valido ? <Outlet/>  : <Navigate to="/login"/>
    )
}