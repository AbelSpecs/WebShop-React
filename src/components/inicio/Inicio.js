import React, {useState, useEffect} from 'react';

import { Logo } from './Logo';
import {Carousell} from './Carousell'
import { OwlCarousell } from './OwlCarousell';
import { Topproducts } from './Topproducts';
 



export const Inicio = () => {

    return (
        <>
            <Logo /> 
            {/* Aca termina encabezado */}
            <Carousell />
            {/* aca termina carrousel */}
            <div className="green-div margin-bottom">
                <div className="zigzag-bottom-inverse"></div>
            </div>
            {/* aca termina seccion de productos */}
            <OwlCarousell />
            <div className="green-div margin-top">
                <div className="zigzag-bottom-inverse"></div>
            </div>
            {/*aca termina seccion de productos mas recientes*/}
            <Topproducts />
        </>
    )
}
