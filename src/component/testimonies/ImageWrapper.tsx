import {FC, useMemo} from "react";
import {data} from "./ImageData";
import classes from "./imagewrapper.module.scss";

export const ImageWrapper:FC = () => {
    //const pic = useMemo(() =>  data.data[0], [])
    return (
        <div className={`mt-3 ml-3  ${classes.wrapper} h-80 w-80 rounded-xl`}>
           <div className={`h-full flex flex-col justify-center items-center relative`}>
               <div className={`rounded-full h-14 w-14  bg-yellow-500`}></div>
           </div>
        </div>
    )
}

//<img src={data.data[0]} className={"h-full w-full rounded-xl relative"} alt={""}/>
