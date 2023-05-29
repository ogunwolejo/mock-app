import {FC, ReactNode, memo} from "react";
import classes from "./traction.module.scss";

//className={``} title={``} blockContent={``} mainContent={``}

export const TractionLeftCard:FC<{containerColor:string; title:string; blockContent:string; mainContent:string; code:ReactNode; className?:string; dataValue:number}> = memo(({dataValue, containerColor,  code, title, mainContent, blockContent, className}) => {

    return(
        <div className={`flex flex-col justify-center items-center bg-traction1  ${classes.traction_left} ${className}`} >
            <div className={`flex flex-row justify-start items-center`}>
                <h6 className={`font-cab-extra-bold text-traction-text`}>{title} </h6>
                <span className={`font-cab-medium mx-1 pl-1 p-.5 ${containerColor} px-2 text-left text-white`}>{blockContent}</span>
            </div>
            <h2 className={`font-cab-extra-bold text-3xl md:text-3xl lg:text-5xl mt-2`} data-val={dataValue} >
                {code}
                {mainContent}  {`M`}
            </h2>
        </div>
    )
})


export const TractionRightCard:FC<{ref?:any; containerColor:string; title:string; blockContent:string; mainContent:string; className?:string; code:ReactNode; isTrue?:boolean; dataValue:number}> = memo(({ref, dataValue, containerColor, code, title, mainContent, blockContent, className, isTrue=false})=> {

    return(
        <div className={`flex flex-col justify-center items-center bg-traction1  ${classes.traction_right} ${className}`} ref={ref}>
            <div className={`flex flex-row justify-start items-center`}>
                <h6 className={`font-cab-extra-bold text-traction-text`}>{title}</h6>
                <span className={`font-cab-medium mx-1 pl-1 p-.5 px-2 ${containerColor} text-left text-white`}>{blockContent}</span>
            </div>
            <h2 className={`font-cab-extra-bold text-xl md:text-3xl lg:text-5xl mt-2`} data-val={dataValue}>
                {isTrue && 100}
                {code}
                {` ${mainContent}`} {!isTrue && `M`}
            </h2>
        </div>
    )
})