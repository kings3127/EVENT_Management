import React from "react";
const WithExtra = (WrappedComponent) => {
    return(props) => {
        console.log('Logging from HOC');
        return <WrappedComponent {...props} />;
    };
};

const MyComponent = (props) => {
    return <div>My Component</div>
}
const MyComponent1 = (props) => {
    return <div>My Component1</div>
}
const MyComponentWithLogging =WithExtra(MyComponent)
const MyComponentWithLogging1 =WithExtra(MyComponent1)

const Appl = () =>{
    return(
        <div>
            <MyComponentWithLogging/>
            <MyComponentWithLogging1/>
        </div>
    )
}
export default Appl;