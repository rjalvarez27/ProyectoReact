
import "../styles/chart.css"


export default function Chart (props){
 
    

 return(
    <>
    <div className="chart-t">
    <h2>Nombre: {props.nombre}</h2>
    <h2>Correo: {props.correo}</h2>
    <h2>rol:{props.rol}</h2>
    </div>
    </>
 )
}