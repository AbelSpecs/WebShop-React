import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { About } from '../components/about/About';
import { LoginScreen } from '../components/auth/loginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Inicio } from '../components/inicio/Inicio';
import { SearchProduct } from '../components/search/SearchProduct';
import { Shop } from '../components/shop/Shop';
import {NavBar} from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />

            <div>
                <Switch>
                    <Route exact path="/" component={Inicio}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/register" component={RegisterScreen}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/search" component={SearchProduct}/>
                </Switch>
            </div>
        </Router>
    )
}
