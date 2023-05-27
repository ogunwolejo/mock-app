import {FC} from "react";

export const CreateActionButton:FC<{clickHandler:Function, label:string; clName?:string }> = ({clickHandler, label, clName}) => {
    return (
        <button className={`rounded-full ${clName}`} onClick={() => clickHandler()}>{label}</button>
    )
}