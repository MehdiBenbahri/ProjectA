
import { useStore } from '@nanostores/react';
import { FaAlignJustify, FaAlignCenter } from "react-icons/fa6";
import { sidebarCollasped } from '../layouts/layout-state';

const ToggleIcon = () => {

    const $toggle = useStore(sidebarCollasped);
  
    return (
      <span>
        {
          $toggle ? <FaAlignJustify /> : <FaAlignCenter />
        }
      </span>
    );
  };
  export default ToggleIcon;
  