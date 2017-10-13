// console.log('Hello from typescript')
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App } from './app'
import { AppRouter } from './router'
// import { HelloComponent } from './hello';
// import { Header, About } from './components';
ReactDOM.render(
    // <HelloComponent/>,
    // <div className="container-fluid">
    //     <Header/>
    //     <About/>
    // </div>,
    // <App/>,
    <AppRouter />,
    document.getElementById('root')
)