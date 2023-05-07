import React, { useEffect } from "react";
import { useState } from "react";
import API from '../fakeApi.json'
import Card from "../components/Card";
import './Home.css'


function Home() {
    const [articles, setArticles] = useState(API)

    return(
    <>
        <div className="row home" style={{alignItems:'center',margin:'auto'}}>    
            <div className="img">
                <div className="container" id="text1" style={{padding:'80px',marginLeft:'0px',maxWidth:'600px'}}>
                    <h2 className="slide-left" style={{ fontWeight:'bolder',color:'white'}}>Buy your phone here!</h2>
                    <h3 className="slide-left h3" style={{ fontWeight:'bolder',color:'white'}}>
                        We have <span className="text-warning" style={{fontWeight:'bolder'}}>5% discount</span> for the 50 first customers.
                    </h3>
                    <br></br>
                    <button 
                        className="btn btn-warning btn-lg sign slide-left" 
                        style={{borderRadius:4}}>
                        <span style={{fontWeight:600}}>Sign up  </span>
                        <i className="fa fa-arrow-right fa-md" style={{}}></i>
                    </button>
                </div>
            </div>
            <div className="container" style={{marginTop:'20px',marginBottom:'20px'}}>
                <h3 className="mx-auto" style={{marginTop:'20px',display:''}}>
                    <center>Our articles are here!</center>
                </h3>
                <h6><center>We have a catalog of a phone devices that you can buy here.</center></h6>
            </div>
                 
            <div className="container justify-content-center" style={{margin:'auto'}}>
                <div className="col-md-9 col-lg-12 slide-up">
                    <div style={{justifyContent:'center'}}>
                        <center>

                        {
                            articles.map(article => <Card key={article.id_ar} id={article.id_ar} name={article.nom_ar} prix={article.prix_ar} imgURL={article.img_ar}/>)
                        }
                                              
                        </center>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    )
}

export default Home