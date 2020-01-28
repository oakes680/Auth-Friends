import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
    console.log('protected route ', {rest})
    return (
        <Route
         {...rest}
         render={props => {
             console.log('pppppp', props)
             if(localStorage.getItem('token')) {
                 return <Component {...props} /> 
             } else {
                 return <Redirect to='/login'/>
             }
         }}
        />
    )
}

export default ProtectedRoute
