import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const Home = ({ user,setUser,handleSubmit }) => {

const navigate = useNavigate();
   
    
    return (
        <div className="animated-bg  sticky md:sticky sm:sticky lg:sticky m-10 rounded-xl" style={{
            backgroundImage: "url('https://cdn.wedevs.com/uploads/2020/06/Task-Manager-App-.png')", height: "100%", backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            animation: "zoomFade 15s ease-in-out infinite",
        }} >

            <div className='flex justify-around p-3 m-5 sticky'>
            <h1 className='text-xl   md:text-xl md:sticky lg:text-5xl font-bold text-purple-800 mt-16'>WELCOME TO TASK MANAGER!</h1>
            </div>
              
              <div className=' text-xs m-5 text-start  lg:text-xl md:text-sm md:sticky sticky text-gray-900 lg:ml-60 backdrop-blur-sm md:p-5 space-y-3 md:justify-items-start w-[70%] mt-8 font-bold '>
                <p >1. Welcome to your personal productivity hub! Create, edit, and track tasks with ease. </p>
                <p>2. Stay organized, meet deadlines, and boost efficiency.</p> 
                <p>3.Our clean interface and smart features help you focus on what matters most.</p> 
                <p>4. Manage work, life, and goals effortlessly—all in one simple, powerful app.</p></div>
                
                <input type="text" className='w-[60%] p-5 mb-3 rounded-md bg-gray-200 outline-none' placeholder='Enter Your Name and Get Started..' onChange={(e)=>{
                    setUser(e.target.value);
                }}  required value={user}/>
            <button setUser="" disabled={user.length === 0} onClick={() => navigate("/todo")} className=' text-xs md:w-50 bg-purple-800  text-purple-100 font-bold md:text-xl m-5  p-3 rounded-lg lg:mt-36'>Get started</button><br />
       
        </div>  
    )
}

export default Home