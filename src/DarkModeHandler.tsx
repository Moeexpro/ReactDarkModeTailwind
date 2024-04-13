import React, { useEffect, useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Switch } from "@mui/material";

const DarkModeHandler = ({customClass} : {
    customClass? : string;
}) => {
 const baseClass = "flex w-full p-5 flex-row justify-end gap-2 items-center";
 const [darkTheme,setDarkTheme] = useState(false);
 
 useEffect(()=>{
if(window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
        setDarkTheme(true);
        document.documentElement.classList.add('dark');
    }
    else
    {
        setDarkTheme(false);
        document.documentElement.classList.remove('dark');
    }
 },[])


 const handleDarkThemeToggle = (event : any) => {
 if(event.target.checked)
    {
        setDarkTheme(true);
        document.documentElement.classList.add('dark');
    }
    else
    {
        setDarkTheme(false);
        document.documentElement.classList.remove('dark');
    }
 }

    return(
        <div className={customClass ? customClass : baseClass}>
        <WbSunnyIcon
         className="w-2 text-yellow-200 dark:text-gray-600"
        />
       <Switch
        className="text-center"
        checked= {darkTheme === true ? true : false}
        onClick={(e) =>  handleDarkThemeToggle(e)}
       />
        <DarkModeIcon
         className="w-2 text-gray-600 dark:text-purple-600"
        />
        </div>
    )
}

export default DarkModeHandler;