import {FC, memo} from "react";

export const ColorfulPaper:FC<{frameBg:string; index:number; indexBg:string; title:string; image:string}> = memo(({frameBg, indexBg, title, index, image}) => {
    return (
        <div className={`rounded-md lg:rounded-xl ${frameBg} px-6 lg:px-12 pt-0 `}>
            <div className={`flex flex-row justify-start items-center my-3 md:my-6 xl:my-6 p-3 gap-3`}>
                <div className={`justify-center items-center py-1 px-2 ${indexBg} text-white rounded-full font-ubuntu font-bold text-white text-sm lg:text-lg `}>
                    {index}
                </div>
                <h4 className={`font-ubuntu font-medium uppercase text-[#000000] text-sm lg:text-sm tracking-wide`}>{title}</h4>
            </div>
            <img src={image} className={"mb-0 "} alt={""}/>
        </div>
    )
})