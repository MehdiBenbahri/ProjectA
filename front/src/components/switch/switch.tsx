import { cn } from "../../utils";

export interface SwitchOptions{
    label?: any,
    value: any,
    selectedClassName?: string,
    optionClassName?: string,
    disabled?: boolean
}

interface SwitchProps {
    options: SwitchOptions[],
    selectedValueIndex: number,
    className?: string,
    handleClick?: (click) => any
}


const Switch = ({options, selectedValueIndex, className, handleClick} : SwitchProps) => {

    return (
        <div className={cn("flex justify-between items-center", className)}>
            {
                options.map((opt, index) => {
                    return (
                        <button 
                            key={`switch-buttons-${index}-${options.length}`}
                            onClick={() => handleClick(opt.value)}
                            className={index === selectedValueIndex ? opt.selectedClassName : opt.optionClassName}
                        >
                            {
                                opt.label
                            }
                        </button>
                    )
                })
            }
        </div>
    );

};
export default Switch;
  