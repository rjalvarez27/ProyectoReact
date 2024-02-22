import '../styles/navbar.css'

function Navbar() {
  return (
    <>
        <div className="navbar-conten">
          <div className="flex flex-row items-center bg-neutral-500 text-center text-white dark:bg-neutral-800 	text-lg  justify-center gap-2 h-[50px] rounded-t-lg m-0 p-0">
            <i className='bx bxs-data' ></i>
            <h3>DataBase ©</h3>
          </div>
        </div>
    </>
  )
}

export default Navbar