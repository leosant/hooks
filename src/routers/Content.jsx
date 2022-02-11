import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/examples/Home'
import Error from '../views/examples/ErrorPage'
import StateHook from '../views/examples/StateHook'



import './Content.css'

const Content = props => {
    return (
        <main className="Content">
            <Switch>

                <Route exact path="/useState">
                    <StateHook />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="*">
                    <Error/>
                </Route>

            </Switch>
        </main>
    )
}

export default Content;