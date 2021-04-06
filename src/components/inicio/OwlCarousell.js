import React, {useState} from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './owl.css';
import DetailsIcon from '@material-ui/icons/Details';
import {
    Link
  } from "react-router-dom";

export const OwlCarousell = () => {

    return (
        <>
            <div className="main-articles" style={{backgroundColor: '#1abc9c'}}>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="text-center mt-5 mb-5">Productos Mas Recientes</h2>

                                <div className='container-fluid d-md-flex' >            
                                    <OwlCarousel items={3}  
                                        className="owl-theme"  
                                        loop    
                                        margin={8} >  
                                        <div className="s-product">
                                            <div className="product-container">
                                                <img  className="img" src= {`./assets/img/0147.png`} alt="Second slide"/>
                                                <div className="hover">
                                                    
                                                    <button className="card-button btn btn-outline-success d-flex">
                                                        <div className="btn-container">
                                                            <DetailsIcon fontSize="small"/>
                                                            
                                                        </div>
                                                        &nbsp;&nbsp;
                                                        <div className="text-container">
                                                            Detalles
                                                            
                                                        </div>
                                                        
                                                    </button>

                                                </div>
                                            </div>  
                                        </div>
                                        <div className="s-product">
                                            <div className="product-container">
                                                <img  className="img" src= {`./assets/img/0147.png`} alt="Second slide"/>
                                                <div className="hover" /* onMouseOver={handlemove} */>

                                                    <button className="card-button btn btn-outline-success d-flex">
                                                        <div className="btn-container">
                                                            <DetailsIcon fontSize="small"/>
                                                            
                                                        </div>
                                                        &nbsp;&nbsp;
                                                        <div className="text-container">
                                                            Detalles
                                                            
                                                        </div>
                                                        
                                                    </button>

                                                </div>
                                            </div>  
                                        </div>
                                        <div className="s-product">
                                            <div className="product-container">
                                                <img  className="img" src= {`./assets/img/0147.png`} alt="Second slide"/>
                                                <div className="hover" /* onMouseOver={handlemove} */>
                                                    <button className="card-button btn btn-outline-success d-flex">
                                                        <div className="btn-container">
                                                            <DetailsIcon fontSize="small"/>
                                                            
                                                        </div>
                                                        &nbsp;&nbsp;
                                                        <div className="text-container">
                                                            Detalles
                                                            
                                                        </div>
                                                        
                                                    </button>

                                                </div>
                                            </div>  
                                        </div>
                                        <div className="s-product">
                                            <div className="product-container">
                                                <img  className="img" src= {`./assets/img/0147.png`} alt="Second slide"/>
                                                <div className="hover" /* onMouseOver={handlemove} */>
                                                    <button className="card-button btn btn-outline-success d-flex">
                                                        <div className="btn-container">
                                                            <DetailsIcon fontSize="small"/>
                                                            
                                                        </div>
                                                        &nbsp;&nbsp;
                                                        <div className="text-container">
                                                            Detalles
                                                            
                                                        </div>
                                                        
                                                    </button>

                                                </div>
                                            </div>  
                                        </div>
                                        <div className="s-product">
                                            <div className="product-container">
                                                <img  className="img" src= {`./assets/img/0147.png`} alt="Second slide"/>
                                                <div className="hover" /* onMouseOver={handlemove} */>
                                                    <button className="card-button btn btn-outline-success d-flex">
                                                        <div className="btn-container">
                                                            <DetailsIcon fontSize="small"/>
                                                            
                                                        </div>
                                                        &nbsp;&nbsp;
                                                        <div className="text-container">
                                                            Detalles
                                                            
                                                        </div>
                                                        
                                                    </button>

                                                </div>
                                            </div> 
                                        </div>
                                        <div className="s-product">
                                            <div className="product-container">
                                                <img  className="img" src= {`./assets/img/0147.png`} alt="Second slide"/>
                                                <div className="hover" >
                                                    <button className="card-button btn btn-outline-success d-flex">
                                                        <div className="btn-container">
                                                            <DetailsIcon fontSize="small"/>
                                                            
                                                        </div>
                                                        &nbsp;&nbsp;
                                                        <div className="text-container">
                                                            Detalles
                                                            
                                                        </div>
                                                        
                                                    </button>

                                                </div>
                                            </div>  
                                        </div>  
                                    </OwlCarousel>  
                                </div>  

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </>
    )
}
