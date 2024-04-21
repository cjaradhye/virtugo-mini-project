import React from 'react';
import ReactDOM from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/LoginPage';
import Services from './Components/Services';
import Blogs from './Components/Blogs';
import Trending from './Components/Trending';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />)
  },{
    path: "/login",
    element: (<Login />)
  },{
    path: "/services",
    element: (<Services />)
  },{
    path: "/blogs",
    element: (<Blogs />)
  },{
    path: "/trending",
    element: (<Trending />)
  }
])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<RouterProvider router={router} />);