import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import { LinksPages } from "./pages/LinksPages" 
import { CreatePage } from "./pages/CreatePage"
import { DetailPage } from "./pages/DetailPage"
import { AuthPage } from "./pages/AuthPage"

export const useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (
        <Switch>
            <Route path="/links" exact>
                <LinksPages />
            </Route>
            <Route path="/create" exact>
                <CreatePage />
            </Route>
            <Route path="/detail" exact>
                <DetailPage />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/create" />
        </Switch>            
        )
    }
    return (
        <Switch>
            <Route path="/">
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}