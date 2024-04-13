import React from 'react';
import logo from './logo.svg';
import DarkModeHandler from './DarkModeHandler';
function App() {
  return (
    <div className="flex flex-col w-screen h-screen dark:bg-[#282c34]">
      <div className='flex flex-row w-full justify-end p-5'>
      <DarkModeHandler/>
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
        <img src={logo} className="w-[33rem] h-[33rem] object-cover" alt="logo" />
        <div className='flex flex-col gap-1'>
        <p className='text-sm text-gray-800 dark:text-purple-400'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-sm text-gray-800 dark:text-purple-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
        </div>
        
    </div>
  );
}

export default App;
