import React from 'react'
import {
    Link
  } from "react-router-dom";

export const Products = () => {
    return (
        <>
            <div className="productos">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="individual-product">
                                <div className="top">
                                    <img className="img-shop" src={`./assets/img/0147.png`} alt=""/>   
                                </div>
                                <h2 className="title-product">
                                    <Link to="">Producto 1</Link>
                                </h2>
                                <div className="product-price">
                                    <ins>$800</ins>
                                </div>
                                <div className="agregar-btn">
                                    <Link className="btn-add btn btn-success" to="">Agregar al carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="individual-product">
                                <div className="top">
                                    <img className="img-shop" src={`./assets/img/0147.png`} alt=""/>
                                </div>
                                <h2 className="title-product">
                                    <Link to="">Producto 2</Link>
                                </h2>
                                <div className="product-price">
                                    <ins>$800</ins>
                                </div>
                                <div className="agregar-btn">
                                    <Link className="btn-add btn btn-success" to="">Agregar al carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="individual-product">
                                <div className="top">
                                    <img className="img-shop" src={`./assets/img/0147.png`} alt=""/>
                                </div>
                                <h2 className="title-product">
                                    <Link to="">Producto 3</Link>
                                </h2>
                                <div className="product-price">
                                    <ins>$800</ins>
                                </div>
                                <div className="agregar-btn">
                                    <Link className="btn-add btn btn-success" to="">Agregar al carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="individual-product">
                                <div className="top">
                                    <img className="img-shop" src={`./assets/img/0147.png`} alt=""/>
                                </div>
                                <h2 className="title-product">
                                    <Link to="">Producto 4</Link>
                                </h2>
                                <div className="product-price">
                                    <ins>$800</ins>
                                </div>
                                <div className="agregar-btn">
                                    <Link className="btn-add btn btn-success" to="">Agregar al carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="individual-product">
                                <div className="top">
                                    <img className="img-shop" src={`./assets/img/0147.png`} alt=""/>
                                </div>
                                <h2 className="title-product">
                                    <Link to="">Producto 5</Link>
                                </h2>
                                <div className="product-price">
                                    <ins>$800</ins>
                                </div>
                                <div className="agregar-btn">
                                    <Link className="btn-add btn btn-success" to="">Agregar al carrito</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="individual-product">
                                <div className="top">
                                    <img className="img-shop" src={`./assets/img/0147.png`} alt=""/>
                                </div>
                                <h2 className="title-product">
                                    <Link to="">Producto 6</Link>
                                </h2>
                                <div className="product-price">
                                    <ins>$800</ins>
                                </div>
                                <div className="agregar-btn">
                                    <Link className="btn-add btn btn-success" to="">Agregar al carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
