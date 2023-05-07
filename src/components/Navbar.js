import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { changeStatus } from "../features/shoppingCart/shoppingCartSlice"
import { NavLink } from "react-router-dom"
import Cart from "./Cart"
import './Navbar.module.css'

function Navbar() {
    const [cartIsOpen, setCartisOpen] = useState(false)
    const displayCart = (e) =>{
        e.preventDefault()
        setCartisOpen(!cartIsOpen)
    }
    return(
        <>
            <div style={{top:'0'}}>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:'white',color:'black',padding:'15px',top:0}}>
                    <div className="container-fluid">
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerDemo" 
                            aria-controls="navbarTogglerDemo" 
                            aria-expanded='false'
                            aria-label="Toggle navigation"
                            onClick={displayCart}                           
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="navbar-brand title" to="/">
                            <span style={{fontWeight:'bolder',fontFamily:'Poppins',flex:1,textAlign:'start',fontSize:'22px'}}>Cphone</span>
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" style={{color:'black',fontWeight:520}}>
                                    Home
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/shop" style={{color:'black'}}>
                                    Shop
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to='/wishlist' style={{color:'black'}}>
                                    Wishlist
                                </NavLink>
                                </li>
                            </ul>
                            <div style={{paddingLeft:'20px'}}>
                            <NavLink to='/signin' style={{paddingRight:'10px',color:'black',textDecoration:'none',display:'inline-block'}}>
                                <span>Sign in</span>
                            </NavLink>   
                                                                    
                            </div>
                        </div>
                        <NavLink to={'/signup'}>
                            <i className="fa-solid fa-user-circle fa-lg t-0 r-0" style={{color:'black'}}></i> 
                        </NavLink>
                        <Cart/>                        
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar