import { type DefaultFrontContainer } from "../../utils";
import { cn } from "../../utils";
import { isOpen } from './navbar-state';
import { useStore } from '@nanostores/react';

const Button = ({ children, className }: DefaultFrontContainer) => {

  const $isOpen = useStore(isOpen);

  return (
    <button
      className={cn(
        "bg-white rounded-md p-2 border border-slate-600 flex justify-between items-center",
        className
      )}
      onClick={() => {
        isOpen.set(!$isOpen);
      }}
    >
      {children}
    </button>
  );
};
export default Button;
