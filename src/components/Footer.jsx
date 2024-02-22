import '../styles/footer.css'

function Footer() {
    return (
        <>
            <div className="footer-conten">
                <div className="flex flex-row items-center bg-neutral-500 text-center text-white dark:bg-neutral-800 text-lg  justify-center gap-2 h-[50px] rounded-b-lg ">
                <i className='bx bxl-facebook-square'></i>
                <i className='bx bxl-linkedin-square' ></i>
                <i className='bx bxl-github' ></i>
                <h3>DataBase ©</h3>
                 <p>2024</p> 
                </div>
            </div>
        </>
    )
}

export default Footer