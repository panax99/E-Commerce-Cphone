import {useDispatch, useSelector} from 'react-redux'
import { incrementQtt,decrementQtt,addToCart,removeToCart } from '../features/shoppingCart/shoppingCartSlice'             
import './ContentCart.css'

export default function ContentCart ({id,name,prix,quantity=0}) {
    const dispatch = useDispatch()
    const dataID = useSelector(state => state.shoppingCart.contents.find(item => item.id))
    const data = useSelector(state => state.shoppingCart.contents)
    console.log(data);
    
    const showContent = (e) => {
        e.preventDefault()
        dispatch(addToCart({id,name,prix,quantity}))
    }
    return(
        <>
        {   
            dataID ?  
            <div className="content slide-up shadow" key={id}>
                        <h4 className="card-title ml-10" style={{marginLeft:'20px',marginTop:'30px',paddingTop:'20px'}}>{name}</h4>
                        <h6 style={{marginLeft:'20px',marginTop:'10px'}}>Price: {prix} Ar</h6>
                        <button className='btn btn-danger'
                                style={{borderRadius:'50%',width:'40px',marginLeft:'60px',marginTop:'20px'}}
                                onClick={()=> dispatch(decrementQtt(id))}
                        >
                            -
                        </button>
                        <h5 style={{marginLeft:'126px',marginTop:'-30px'}}>{quantity}</h5>
                        <button className='btn btn-danger'
                                onClick={()=> dispatch(incrementQtt(id))} 
                                style={{borderRadius:'50%',width:'40px',marginLeft:'160px',marginTop:'-65px'}}
                        >
                            +
                        </button>
                               
            </div>
            :
            null
        }
        </>
        
    )
}