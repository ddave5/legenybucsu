import React, { useState } from 'react';
import './App.css';
import TaskList from './feladatok.json';
import Footer from './footer/Footer';
import {motion} from 'framer-motion';

function App() {

  const [task, setTask] = useState({});
  let prevTask = "";

  const lottery = () => {
    let tmp = undefined;
    while (1){
      tmp = TaskList.at(Math.floor(Math.random() * TaskList.length));
      if( tmp.feladat !== prevTask.feladat) break;
    } 
    prevTask = task
    setTask(tmp)
  }

  const fadeIn = () => {
    const title = document.getElementById('taskTitle');
    const detail = document.getElementById('taskDesc');
    title.classList.add('hide');
    detail.classList.add('hide'); 
    setTimeout(function() { 
        lottery();
        title.textContent = task.title;
        detail.textContent = task.feladat;
    }, 500);
    setTimeout(function() { 
        title.classList.remove('hide');
        detail.classList.remove('hide');
    }, 500);
  }

  const openModal = () => {
    document.getElementById('modal').classList.add("show");
  }

  const closeModal = () => {
    document.getElementById('modal').classList.remove("show");
  }

  return (
    <>
      <h1>Legénybúcsú</h1>
      <div className='gombDiv'>
        <div className='gomb__container'>
          <button onClick={fadeIn}> {task === undefined ? 'Pörgetés' : 'Újrapörgetés' }</button>
          <button onClick={openModal} className='infoButton'>i</button>
        </div>
      </div>
      
      { task !== undefined && (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <div className='titleDiv'>
            <h2 id="taskTitle"></h2>
          </div> 
          <div className='feladatDiv'>
            <p id="taskDesc"></p>
          </div>
        </motion.div>
      )}
      <Footer/>

      <div id="modal" className='modal'>
        <div className='modal__container'>
          <button className='close__button' onClick={closeModal}> X </button>
          <h1>Szabályok</h1>
          <p>
            Ha valaki az alábbi szavakat kimondja, akkor pörgetnie kell egy feladatot. A feladat elvégzése kötelező, ha nem tudja / akarja teljesíteni, akkor a vőlegény szabja ki a büntetést.
          </p>
          <p> Az alábbi szavak tiltottak: </p>
          <p className='word__list'>vőlegény, *vőlegény neve*, *tanú neve*, esküvő, Igyál!, fehér, pálinka, pörget</p>
          <p>
            Bármilyen ragozása esetén is pörgetni kell!
          </p>
          <h4>
            Jó szórakozást!
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
