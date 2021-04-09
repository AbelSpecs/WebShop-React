import React from 'react'
import { Title } from '../shop/Title';
import { Logo } from '../inicio/Logo';
import {useDispatch, useSelector} from 'react-redux';

export const SearchProduct = () => {

    const {activeProduct} = useSelector(state => state.product)

    const {name, price} = activeProduct;

    return (
        <>
            <Logo />

            <Title title="Producto"/>

            <div className="product-area mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="search-bar">
                                <h2 className="search-bar-title mb-5">
                                    Buscar Producto
                                </h2>
                                <form>
                                    <input type="text" placeholder="Buscar Productos" className="search-input"/>
                                    <button type="submit" className="btn btn-success form-btn">Buscar</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-8 product-section">
                            <div className="product-content">
                                <div className="breadcroumb-menu">
                                    
                                </div>
                                <div className="row row-product">
                                    <div className="col-sm-6">
                                        <div className="product-image">
                                            <div className="product-main-images">
                                                <img className="product-image" src={`./assets/img/0147.png`} alt=""/>
                                            </div>

                                        </div>
                                    </div> 

                                    <div className="col-sm-6">
                                        <div className="product-container">
                                            <h2 className="p-name">
                                                {name}
                                            </h2>
                                            <div className="product-price">
                                                <ins>{price}</ins>
                                        
                                            </div>
                                            <form className="quantity-form">
                                                <div className="quantity-container">
                                                    <input className="quantity" type="number"/>
                                                </div>
                                                <button className="add-btn btn btn-success">
                                                    Agregar al carrito
                                                </button>
                                            </form>
                                            <div role="tabpanel">
                                                <ul className="tab" role="tablist">
                                                    <li className="active" role="presentation">
                                                        <button className="btn-descrip btn btn-success" role="tab">Descripción</button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane fade active in" role="tabpanel">
                                                        <h2 className="title-descrip">Descripción de Producto</h2>
                                                        <p className="descrip">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nam tristique, diam in consequat iaculis, est purus iaculis mauris, 
                                                            imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, 
                                                            id maximus ex aliquet ut. Suspendisse potenti. 
                                                            Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, 
                                                            blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. 
                                                            Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada
                                                            aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.
                                                        </p>
                                                        <p className="descrip">
                                                            Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. 
                                                            Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. 
                                                            In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, 
                                                            non malesuada sem accumsan in. Morbi vel sodales libero.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
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
