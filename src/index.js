import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { ContextProvider } from './context/ContextProvider';

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//     <ContextProvider>
//        <App tab="home" />
//     </ContextProvider>
// );

ReactDOM.render(
<ContextProvider>   
    <App tab="home" />
</ContextProvider>, document.getElementById('root'));