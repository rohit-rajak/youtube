import React from 'react';
import './App.css';

import MainContainer from './Components/MainContainer';
import Head from './Components/Head';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
  import InnerContainer from './Components/InnerContainer'; 
  import Shimmer from './Components/Shimmer'; 
function App() {
  const appRouter = createBrowserRouter
  ([
    { path:"/", 
      element: <MainContainer/>,
      children:[
        {
          path:"/", 
         element: <InnerContainer/>,},
      {
        path:"/history",
        element:<h1>History page</h1>
      },
      {
        path:"/watch",
        element:<h1>Watch page</h1>
      }
    ] },
    {
      path:"/demo",
      element:<h1>This is demo page</h1>
    }
  ]);
  return (
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;