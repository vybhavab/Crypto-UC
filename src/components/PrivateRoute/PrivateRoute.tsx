import  React from  "react";
import { Route } from  "react-router-dom";


const  PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        isAuth: boolean;
    }> = (props) => {

    return (<Route  path={props.path}  component={props.component} />)
    // return  !props.isAuth ? (<Route  path={props.path}  component={props.component} />) : <div/>;
};
export  default  PrivateRoute;

