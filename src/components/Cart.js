import { NavLink } from "react-router-dom"
import './Cart.css'
import { useDispatch,useSelector } from "react-redux"
import { addToCart} from "../features/shoppingCart/shoppingCartSlice"
import { useState } from "react"
import ContentCart from "./ContentCart"
import API from '../fakeApi.json'


function Cart(){
    const contentStore = useSelector(state => state.shoppingCart.contents)
    const dispatch = useDispatch()

    const displayCart = (e) =>{        
        e.preventDefault()
        document.getElementById('sideNav').style.width = '350px'
        console.log(contentStore)
       
    }
    const closeCart = (e) =>{
        e.preventDefault()
        document.getElementById('sideNav').style.width = '0'
    }

    return(
        <>                    
            <div className={"sideNav bg-danger"} id='sideNav'>
                <a className={"fa fa-close closebtn"} onClick={closeCart}></a>
                <p className="" style={{margin:'auto',marginLeft:'30px',marginTop:'10px',fontSize:'22px',fontWeight:550,color:'whitesmoke'}}>
                    Cart<i className="fa fa-cart-plus fa-sm" style={{marginLeft:'5px',color:'whitesmoke'}}></i>
                </p>
                {                                
                    contentStore?.map((content) =>(
                        <ContentCart 
                            key={content.id} 
                            id={content.id} 
                            name={content.name} 
                            prix={content.prix}
                            quantity={content.quantity}
                        />
                        )
                    )
                        
                }
                   
                
            </div>
            <button onClick={displayCart} style={{background:'none'}}>
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </button>

        </>
    )
}
export default Cart