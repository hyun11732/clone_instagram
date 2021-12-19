/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase, FieldValue} from './lib/firebase';



ReactDOM.render(
    <FirebaseContext.Provider value={{firebase, FieldValue}}>
           <App /> 
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

// client side rendered app : react(cra)
// -> database which is Firevbase
// react loading skeleton
// tailwind

//architecture, folderr structure
    // -> components, 
    // constrants, 
    //context, 
    //helpers, 
    //lib(firebase is going to live here) 
    //, services(firebase functions in here) 
    // -> styles(talwind's folder(app/tailwind)) 
