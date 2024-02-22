function closeSesion(){

    const hanledClose= () =>{
        const token = localStorage.getItem('token');
        const data = JSON.parse(localStorage.getItem('usuarios'));
        if(token && data){
            localStorage.removeItem('token')
            const dataNueva = data.map((e)=>{
                if(e.token == token){
                    e.token = "";
                    return e;
                }
                return e;
            })

            localStorage.setItem('usuarios', JSON.stringify(dataNueva));
        }
        window.location.reload()
    }

    return(
        <button onClick={hanledClose} className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-3 px-4 rounded-full m-8 justify-center "><i className='bx bx-log-out-circle '></i></button>
    )
}

export default closeSesion