import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>Hello</div>
);

let users = [
  {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'London',
      country: 'UK'
    }
    
  },
  {
    name: 'Sarah Parker',
    age: 25,
    address: {
      city: 'Oslo',
      country: 'Norway'
    }
  }
]

console.log(users[0].address);
//let b: any; //default
let b: string; //assigning a type to the variable b
//let b: boolean = true; //unnecessary type assignment

//arrays
let myArray: Array<number>;

//mixed-up array
let myMixedArray: Array<string | number>;