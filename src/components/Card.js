import { NavLink } from "react-router-dom"
import './Card.css'
import ContentCart from "./ContentCart"
import { addToCart } from "../features/shoppingCart/shoppingCartSlice"
import {useDispatch,useSelector} from 'react-redux'
import { useState } from "react"
import datas from '../fakeApi.json'

function Card({id,name,prix,imgURL}){
    const dispatch = useDispatch()  
    
    const setContentToCart = ()=>{               
        dispatch(addToCart({id,name,prix,imgURL,quantity:0}))               
    } 
    return(
        <>
            <div className={`card shadow-sm`} id='cart1' style={{display:'inline-block',alignItems:'center'}} key={id}>
                <img src={imgURL} className="card-img-top imgtop" alt="" style={{backgroundSize:'cover',maxHeight:'120px',height:'120px'}}/>
                <div className={"card-body"}>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text bg-ghostwhite">{prix} Ar</p>
                    <button className={'btn btn-dark'} onClick={setContentToCart}>
                        Add to cart<i className="fa-solid fa-cart-shopping fa-xs" style={{marginLeft:'8px'}}></i>
                    </button>
                    <button className={'btn btn-outline-danger'} style={{marginLeft:'42px',borderRadius:'50%',border:'bolder',width:45,height:45}}>
                        <i className="fa-solid fa-heart fa-md" style={{}}></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Card