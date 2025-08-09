import { useState } from 'react'
import {BrowserRouter,Route,Routes,Router, Navigate} from "react-router-dom"

import './App.css'
import Task from './components/Task'
import Table from './components/Table'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const initialTaskData = {
    task:"",
    completed:false //added for finished table data bgcolor
  }

  const[user,setUser] = useState("")

  const [taskData, settaskData] = useState(initialTaskData)
  
  const [editIndex,setEditIndex] = useState(null);

  const handleTaskDataChange = (key,value)=>{
    console.log(key,value);

    settaskData({
      ...taskData,
      [key]:value
    })
    
  }

  const [tableData,setTableData] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();

    // console.log("task",taskData)
     
    if(editIndex === null){
      setTableData([...tableData,taskData])
      settaskData(initialTaskData)
    }
    else{
      tableData[editIndex] = taskData;
      settaskData(initialTaskData);
      setEditIndex(null);
      setTableData(tableData);
    }
  }

  const handleEdit = (index)=>{
    console.log("clicked on row",index)

    const clickedItem = tableData[index];
    settaskData(clickedItem);
    setEditIndex(index);

  }

  const handleDelete = (index) =>{
    tableData.splice(index,1);
    setTableData([...tableData]);
  }

  const[isOpen,setIsOpen] = useState(false);

  const [checked,setChecked]=useState(false);

  const handlechecked =(index)=>{
   setTableData(prevData =>
    prevData.map((item,i)=>
    i===index ? {...item,completed:!item.completed} : item
   ));
  }

  
  

  return (
    <BrowserRouter>
    <Routes>
   

     <Route  path='/todo' element={
       <>
       <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
     <Task user={user} setUser={setUser}  handleTaskDataChange={handleTaskDataChange} handleSubmit={handleSubmit} editIndex={editIndex} taskData={taskData}/>
       <Table tableData={tableData} handleEdit={handleEdit} handleDelete={handleDelete} checked={checked} handlechecked={handlechecked} />
       <Footer />
     </>} />

      <Route path='/home' element={<><Navbar isOpen={isOpen} setIsOpen={setIsOpen}/> <Home user={user} setUser={setUser} isOpen={isOpen} setIsOpen={setIsOpen} handleSubmit={handleSubmit} /> <Footer /> </>} /> 
      
      <Route path='/about' element={<><Navbar isOpen={isOpen} setIsOpen={setIsOpen}  /><About  isOpen={isOpen} setIsOpen={setIsOpen} /> <Footer  /> </>}/>
      
      <Route path='/contact' element={<> <Navbar isOpen={isOpen} setIsOpen={setIsOpen}  /><Contact isOpen={isOpen} setIsOpen={setIsOpen}    /> <Footer /></> }/>

      {/* <Route path='/footer' element={<Footer />} /> */}
      
      <Route path='*' element={<Navigate to= "/home" />} />


     </Routes>
    </BrowserRouter>
  )
}

export default App
