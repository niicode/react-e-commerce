import React from 'react';
import Context from "./context";


const withContext = WrappedComponent =>{
    const WithHOC = props => {
        return(
            <Context.Consumer>
                {context => <WrappedComponent{...props} context={context}/>}
            </Context.Consumer>
        );
    };
    WithHOC.WrappedComponent = WrappedComponent;
    return WithHOC;
};


export default withContext;