import React from 'react';
import { Logo } from '../inicio/Logo';


import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Title } from './Title';
import { Products } from './Products';

export const Shop = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginTop: theme.spacing(2),
            margin: '0 auto',
            width: '50%',
          },
        },
        ul: {
            '& > .MuiPaginationItem-ul': {
                color: 'green',
            }
        }
      }));


    const classes = useStyles();


    return (
        <>
            <Logo />
        
            {/* titulo de seccion */}
            <Title />

            {/* seccion de tienda de productos */}
            <Products />

            {/* paginacion */}

            <div className={`${classes.root} mb-5 `}>
                <Pagination className={classes.ul} count={10} variant="outlined" shape="rounded" />
            </div>
        </>
    )
}
