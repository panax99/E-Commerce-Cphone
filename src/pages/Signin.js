
function Signin(){
    return(
        <>
            <div className="container mt-50" style={{padding:'80px'}}>
                <input className="form-control" type={'email'} placeholder='Username'/><br/>
                <input className="form-control" type={'email'} placeholder='Password'/><br/>
                <button className="btn btn-dark">Signin</button>
            </div>
        </>
    )
}
export default Signin