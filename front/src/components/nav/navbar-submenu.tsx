import { type DefaultFrontContainer } from "../../utils";
import { useEffect } from "react";
import { cn } from "../../utils";
import { isOpen } from './navbar-state';
import { useStore } from '@nanostores/react';

const SubMenu = ({ children, className }: DefaultFrontContainer) => {

  const $isOpen = useStore(isOpen);

  useEffect(() => {
    console.log($isOpen);
  }, [$isOpen]);

  return (
    <div
      className={cn(
        "bg-white rounded-sm p-4 shadow-sm flex justify-between items-center",
        className
      )}
    >
      {"Value is " + $isOpen} 
      <br />
      {children}
    </div>
  );
};
export default SubMenu;
