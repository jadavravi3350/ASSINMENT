import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
 const [state,setState] = useState(0);
  var array = [
    {name:"ravi 1"},
    {name:"ravi 2"},
    {name:"ravi 3"},
    {name:"ravi 4"},
    {name:"ravi 5"},
    {name:"ravi 6"},
    {name:"ravi 7"},
    {name:"ravi 8"},
    {name:"ravi 9"},
    {name:"ravi 10"}
  ]
  return (
    <div  >
      <h1>MODULE: 9 ReactJs Intro</h1>
      <h5 className="my-4">(1). What is React Js?</h5>
      <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
      -instagram,facebook,whatsapp...and all of. app bani hui he
      {/* is react js ka use single page application babane ke bhi liye use hota he */}
      {/* react js ak open-sourse javascript library he and iskause ham fast kam karne ke liye bhai karte he */}
      {/* or is me 2 dom ka bhi use hota he 1 real dom and virtual dom bhi use hota he */}

      <h5 className="my-4">(2). What is NPM in React Js?</h5>
      <p>NPM, the Node package manager is used for managing and sharing the packages for either React or Angular. NPM will be installed along with Nodejs. Node. js can be downloaded and installed from the official NodeJs website.</p>
      {/* nmp ka full from hota he ki node package manager hota or aa hame node.js application se milta he  */}
      {/* or is se ham app ko run karvate he */}

      <h5 className="my-4">(3). What is Role of Node Js in react Js?</h5>
      <p>Using Node. js and React together empowers web applications to handle heavy server loads and requests. Therefore, it allows you to work easily throughout the development process.</p>
      {/* node.js ak backed bhasa he or ham is ks use load page so sambhalne me bhi use hota he */}
      {/* or is ka 2 use aa he ki is se kam karana iji kho hata he */}

      <h5 className="my-4">(4). What is CLI command In React Js?</h5>
      <p>React has its own command-line interface (CLI) commands. However, these CLI commands are currently only used to create a passable version of a react application using the command line.This will contain a default template as its design, so all the react application created this way will have great consistency as they all have same structure.</p>

      <h5 className="my-4">(5). What is Components in React Js?</h5>
      <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
      {/* react js je prakar ke component ka use hota he 1 Function-Componets 2 Class-Componetns */}
      {/* is 2 ne me se jayda use Function - componets ka ude hota he kayuki is me this ka use karna nahi padata*/}
      {/* or is componet hamko HTML return karta he is liye is me hame esy kam ho jata he */}

      <h5 className="my-4">(6). What is Header and Content Components in React Js?</h5>
      <p>47 headers are developed with React. A header is a section at the top of a page that displays site name and navigation. React is the most popular frontend library for developing component-driven user interfaces. It's used for developing single page, mobile, and server-rendered applications.</p>

      <h5 className="my-4">(7).  How to install React Js on Windows, Linux Operating System? How to Install
        NPM and How to check version of NPM?
      </h5>
      <p><b>Step 1 :- </b> is me babse pahale node js ki app ko download karna padta he</p>
      <p><b>Step 2 :-</b> Open command prompt  to check whether it is completely installed or not type the command = </p>
      <p><b>Step 3 :- </b> npm install -g create-react-app  </p>
      <p><b>Step 4 :- </b> create-react-app --version</p>
      <p><b>Step 3 :- </b> Step 4:Now Create a new folder where you want to make your react app using the below command: </p>
      <p><b>Step 5 :- </b> cd newfolder (your folder name)</p>
      <p><b>Step 6 :- </b> create-react-app reactfirst YOUR_APP_NAME</p>
      <p><b>Step 7 :- </b> Now open the IDE of your choice for eg.  Visual studio code and open the folder where you have installed the react app newfolder (in the above example)  inside the folder you will see your app’s name reactapp (In our example). Use the terminal and move inside your app name folder.Use command  cd reactapp (your app name)</p>
      <p><b>Step 8 :- </b> npm start  </p>
      {/* is me is tarike se sab use hota he stap by stap */}
      {/* is me pahle node js ko donload karna padta he or badme open karke comand dalna padta he */}
      {/* or create app ko karana padta he or code . karke direct vs me open hojati he  */}
      {/* and last kam o karna padta he ki npm start kar ke start ho jati he hamari app */}

      <h5 className="my-4">(8). How to check version of React Js?</h5>
      <p>React is a Javascript front-end library that is used to build single-page applications (SPA). Knowing the version can help you understand the available features, check for updates, and ensure compatibility with other dependencies. In this article, we will explore different methods to check the version of ReactJS.
      </p>
      <p>To check the version of React we can use these 3 approaches:</p>
      <ul>
        <li>Using package.json file{/* is me hame package.json file milta he verstion */}</li>
        <li>Using the command line{/* npm view react version:-is me comand dlana padtahe*/}</li>
        <li>Using the version property of default import from React{/*import React from 'react';
         let a = React.version import redomly milta he */}</li>
      </ul>

      <h5 className="my-4">(9). How to change in components of React Js?</h5>
      <p>Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).</p>
      {/* is me kaya hota he ki isme ham setState ka use kar ke bhi componets me changes kar sakte he  */}
      <h5 className="my-4">(10). How to Create a List View in React Js?</h5>
      <div className='container'>
        <div className='row justify-content-center '>
          <div className='col-8 bg-warning'>
            {
              array.map((data,k)=>(
                <ul key={k}>
                  <li>{data.name}</li>
                </ul>
              ))
            }
          </div>
          
        </div>
        
      </div>

      <h5 className="my-4">(11). Create Increment decrement state change by button click?</h5>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-8 bg-primary text-white text-center  py-5'>
           <h3>React Web</h3>
           <h3> {state} </h3>
           
           <div>
           <button className='btn btn-danger m-2' onClick={()=>{setState(state-1)}}>Decrement</button>
           <button className='btn btn-success m-2'  onClick={()=>{setState(state+1)}}>Increment</button>
           </div>

           <div>
            <button className='btn btn-warning m-4'  onClick={()=>{setState(0)}}>Reset</button>
           </div>

          </div>
          
        </div>
        
      </div>

    </div>
  );
}

export default App;
