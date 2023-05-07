
function Signup(){
    return(
        <>
            <div className="container mt-50" style={{padding:'20px'}}>
                <input className="form-control" type={'text'} placeholder='First name'/><br/>
                <input className="form-control" type={'text'} placeholder='Last name'/><br/>
                <input className="form-control" type={'text'} placeholder='Email'/><br/>
                <input className="form-control" type={'text'} placeholder='Password'/><br/>
                <button className="btn btn-dark">Signup</button>
            </div>
        </>
    )
}
export default Signup