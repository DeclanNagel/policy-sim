import { useState } from 'react'
import './App.css'
//import { HomeIcon } from '@heroicons/react/24/outline'
import MapChart from './USmap';


function QuestionIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="size-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" 
      />
    </svg>
  )
}

function PolicySelectIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="size-6"
    >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" 
    />
    </svg>
  )
}

function PolicyAnalIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" 
      strokeWidth={1.5} stroke="currentColor" 
      className="size-6"
      >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" 
        />
    </svg>  
  )
}

function GlobeIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="size-6"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" 
        />
    </svg>
  )
}

function SideBarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="w-6 h-6"
      >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" 
      />
    </svg>
  )
}

function LeftSideBar() {
  
  return (
    <div className='mt-4 mb-4 ml-4 w-64 h-[calc(100vh-2rem)] bg-slate-300 text-black p-4 rounded-lg shadow space-y-5'>
      <div className="flex items-center space-x-2 mb-4">
        <SideBarIcon />
        <h1 className="text-lg font-bold">Policy Simulator</h1>
      </div>
      <hr className="border-t border-slate-600 my-4" />
      {/* Globe Button: */}
      <button className='flex items-center gap-4 w-full px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sm text-white font-semibold transition'>
        <GlobeIcon />
        Country Map
      </button>
      {/* Policy Analysis Button: */}
      <button className='flex items-center gap-4 w-full px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sm text-white font-semibold transition'>
        <PolicyAnalIcon />
        Policy Analysis
      </button>
      {/* Policy Selection Button: */}
      <button className='flex items-center gap-4 w-full px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sm text-white font-semibold transition'>
        <PolicySelectIcon />
        Policy Selection
      </button>
      {/* Account Pages Header: */}
      <h2 className='text-center font-semibold'>Other Pages</h2>
      {/* About Button: */}
      <button className='flex items-center gap-4 w-full px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sm text-white font-semibold transition'>
        <QuestionIcon />
        About
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="flex h-screen bg-slate-100">
      <LeftSideBar />
      <div className="flex-1 p-6">
        {/* Main content goes here */}
        <MapChart />
      </div>
    </div>
  );
}

export default App
