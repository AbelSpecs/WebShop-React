import React from 'react'
import {
    Link
  } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Logo = () => {
    return (
        <div>
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="logo">
                                <h1>
                                    <Link to='/'><span>Disfel</span></Link>  
                                </h1>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="cart">
                                <Link className="link" to="">
                                    Cart -
                                    <span className="cart-amount">$100</span>
                                    &nbsp;&nbsp;
                                    <ShoppingCartIcon />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
