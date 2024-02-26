import { useEffect, useState } from 'react';
import Switch from '../../components/switch/switch';
import { FaMoon, FaSun } from "react-icons/fa6";
import Cookies from 'universal-cookie';

const NavBarThemeSwitch = () => {

    const options = [
        {
            label: <div className='mx-2'><FaSun /></div>,
            value: false,
            selectedClassName: "text-warning-600 transition-all"
        },
        {
            label: <div className='mx-2'><FaMoon /></div>,
            value: true,
            selectedClassName: "text-primary-300 transition-all"
        }
    ];
     
    const cookies = new Cookies(null, { path: '/' });
    const [darkMode, setDarkMode] = useState(window.localStorage.getItem('dark-theme-state') === "true");

    const onChange = (val) => {
        if (val){
            document.documentElement.classList.add('dark');
            cookies.set('dark-theme-state', true);
            window.localStorage.setItem('dark-theme-state', "true");
            setDarkMode(true);
        }
        else{
            document.documentElement.classList.remove('dark');
            cookies.set('dark-theme-state', false);
            window.localStorage.setItem('dark-theme-state', "false");
            setDarkMode(false);
        }
    };

    return (
        <div>
            <Switch options={options} 
                    selectedValueIndex={darkMode ? 1 : 0}
                    handleClick={onChange}
                    className='py-2 dark:bg-panel-900 bg-panel-100 border border-panel-400 dark:border-panel-700 rounded-full' 
            />
        </div>
    );
};
export default NavBarThemeSwitch;
