import "../styles/chart.css"
let arrA = []
export default function Chart() {
    const data = JSON.parse(localStorage.getItem("usuarios"))
    const usuario = data.filter((e) => e.rol != "admin")
    if (usuario) {
        arrA.push(usuario)
    }
    console.log(arrA[0])
    
    const renderListado = () =>{
        const hanledEliminate = () =>{
           
           
          

        }
      return arrA[0].map((value, index) =>{
          return(
            <div key={index} className="chart-t flex " >
              <h2>Nombre:{value.nombre} </h2>
              <h2>Correo:{value.email} </h2>
              <h2>rol:{value.rol}</h2>
            <button onClick={hanledEliminate} className="bg-red-600  text-white py-1 px-2 rounded-full  justify-center "><i className='bx bx-x-circle'></i></button>
            </div>
          )
       })
    }
    return (
       <> 
       <div >
        {renderListado()}
       </div>
       </>  
    )
}