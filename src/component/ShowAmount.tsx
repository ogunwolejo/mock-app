import {FC, memo} from "react";

export const ShowAmount:FC<{title:string; amount:number; sub?:boolean; subData?:number}> = memo(({title, amount, subData, sub=false}) => {
    return (
        <div>
            <label className={`text-gray-400 font-ubuntu text-xs font-medium`}>{title}</label>
            <h3 className={`font-ubuntu text-xs font-bold text-lg md:text-2xl text-l-blue`}>
                <span>&#8358;</span>
                {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(amount)}
                {sub && <span className={`font-ubuntu ml-1 text-sm font-normal text-l-blue inline-flex`}>
                     ({subData} &#37;)
                </span>
                }
            </h3>
        </div>
    )
})