import {FC, ReactNode} from "react";

export const CalculatorWrapper:FC<{children:ReactNode; className?:string}> = ({children,className}) => {
    return (
        <div className={`bg-shade rounded-lg h-72 ${className}`}>
            {children}
        </div>
    )
}