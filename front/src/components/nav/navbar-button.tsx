import { type DefaultFrontContainer } from "../../utils";
import { cn } from "../../utils";
import { sidebarCollasped } from '../../layouts/layout-state';
import { useStore } from '@nanostores/react';

const Button = ({ children, className }: DefaultFrontContainer) => {

  const $sidebarCollasped = useStore(sidebarCollasped);

  return (
    <button
      className={cn(
        "rounded-md p-2 flex justify-between items-center",
        className
      )}
      onClick={() => {
        sidebarCollasped.set(!$sidebarCollasped);
      }}
    >
      {children}
    </button>
  );
};
export default Button;
