import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Logo } from '../inicio/Logo';
import { Title } from '../shop/Title';
import { LockOutlined } from '@material-ui/icons';
import './login.css';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const ColorButton = withStyles((theme) => ({
root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: '#1ABC9C',
    width: '100%' ,
    '&:hover': {
    backgroundColor: green[700],
    
    },
},
}))(Button);

export const RegisterScreen = () => {

    const classes = useStyles();

    return (
        <>
           <Title title="Registro"/>

            <div className="container login-container">
                
                    
                <div className="container login-container mb-5">
                <div className="row">
                    <div className="col-md-6 mx-auto login-form-1 login-radius">
                        <h3>Registrese</h3>
                        <form >
                            <TextField
                                className={`${classes.margin} input`}
                                id="input-with-icon-textfield"
                                label="User"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                                }}
                                type="text"
                                placeholder="name"
                                name="name"

                            />

                            <TextField
                                className={`${classes.margin} input`}
                                id="input-with-icon-textfield"
                                label="Email"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <MailOutlineIcon />
                                    </InputAdornment>
                                ),
                                }}
                                type="text"
                                placeholder="email@gmail.com"
                                name="email"

                            />
                            <TextField
                                className={`${classes.margin} input`}
                                id="input-with-icon-textfield"
                                label="Password"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LockOutlined />
                                    </InputAdornment>
                                ),
                                }}
                                type="password"
                                placeholder="password"
                                name="password1"

                            />

                            <TextField
                                className={`${classes.margin} input`}
                                id="input-with-icon-textfield"
                                label="Repita Password"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <LockOutlined />
                                    </InputAdornment>
                                ),
                                }}
                                type="password"
                                placeholder="repita password"
                                name="password2"

                            />

                            <ColorButton variant="contained" color="primary" className={classes.margin}>
                                    Sign up
                            </ColorButton>

                        
                        </form>
                    </div>

                    
                </div>
            </div>

            </div> 
        </>
    )
}
