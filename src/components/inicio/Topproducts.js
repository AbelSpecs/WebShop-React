import React from 'react'
import {
    Link
  } from "react-router-dom";

export const Topproducts = () => {
    return (
        <>
            <div className="top-products" >
                
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="productos">
                                <h2 className=" mt-5 mb-5 text-left gray-text">Productos mas vendidos</h2>
                                <div className="container products">
                                    <div className="producto">
                                        <Link to="">
                                            <img className="thumb" src={`./assets/img/0147.png`} alt="producto1"/>
                                        </Link>
                                        <h2>
                                            <Link className="text-color" to="">Producto 1</Link>
                                        </h2>
                                        <div className="prices">
                                            <ins>$400</ins>
                                            &nbsp;&nbsp;
                                            <del>$425</del>
                                        </div>
                                    </div>
                                    <div className="producto">
                                        <Link to="">
                                            <img className="thumb" src={`./assets/img/0147.png`} alt="producto2"/>
                                        </Link>
                                        <h2>
                                            <Link className="text-color" to="">Producto 2</Link>
                                        </h2>
                                        <div className="prices">
                                            <ins>$400</ins>
                                            &nbsp;&nbsp;
                                            <del>$425</del>
                                        </div>
                                    </div>
                                    <div className="producto">
                                        <Link to="">
                                            <img className="thumb" src={`./assets/img/0147.png`} alt="producto3"/>
                                        </Link>
                                        <h2>
                                            <Link className="text-color" to="">Producto 3</Link>
                                        </h2>
                                        <div className="prices">
                                            <ins>$400</ins>
                                            &nbsp;&nbsp;
                                            <del>$425</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
