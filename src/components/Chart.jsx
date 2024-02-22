import "../styles/chart.css"
let arrA = []
export default function Chart() {
    const data = JSON.parse(localStorage.getItem("usuarios"))
    const usuario = data.filter((e) => e.rol != "admin")
    if (usuario) {
        arrA.push(usuario)
    }
 
    const renderListado = () =>{
      return arrA[0].map((value, index) =>{
          return(
            <div key={index} className="chart-t flex " >
              <h2>Nombre:{value.nombre} </h2>
              <h2>Correo:{value.email} </h2>
              <h2>rol:{value.rol}</h2>
            <button className="bg-red-600  text-white py-1 px-2 rounded-full  justify-center " onClick={()=>{
                if(data[index].rol !== "admin"){
                    alert("paso")
                    data.splice(index,1)
                    localStorage.setItem("usuarios", JSON.stringify(data))
                }
            }}><i className='bx bx-x-circle'></i></button>
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