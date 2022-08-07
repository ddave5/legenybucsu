import React, { useState } from 'react';
import './App.css';
import TaskList from './feladatok.json';
import Footer from './footer/Footer';

function App() {

  const [feladat, setFeladat] = useState();
  let lastfeladat = TaskList.at(0);

  const sorsolas = () => {
    let tmp = undefined
    while (1){
      tmp = TaskList.at(Math.floor(Math.random() * TaskList.length));
      if( tmp.feladat !== lastfeladat.feladat) break;
    } 
    lastfeladat = feladat
    setFeladat(tmp)
  }

  return (
    <React.Fragment>
      <h1>Legénybúcsú</h1>
      <div className='gombDiv'>
        <button onClick={sorsolas} > {feladat === undefined ? 'Pörgetés' : 'Újrapörgetés' }</button>
        </div>
      
      { feladat !== undefined && (
        <>
          <div className='titleDiv'>
            <h2>{feladat.title}</h2>
          </div> 
          <div className='feladatDiv'>
            <p>{feladat.feladat}</p>
          </div>
        </>
      )}
      <Footer/>
    </React.Fragment>
  );
}

export default App;
