import {FC} from "react";
import {Link} from "react-router-dom"

export const InnerContent:FC<{circleBgColor:string; header:string; content:string; to:string; image:string}> = ({circleBgColor, header, content, to, image }) => {
    return (
        <div className={`flex flex-col justify-between items-start bg:transparent hover:bg-hover-box hover:rounded-xl p-6 `}>
            <div className={`flex flex-col self-start justify-center items-center rounded-full p-2 ${circleBgColor} md:h-14 md:w-14 h-8 w-8`}>
                <img src={image}/>
            </div>
            <div className={`text-left md:w-52 lg:w-72 mt-6`}>
                <h3 className={`font-bold font-cab-extra-bold text-card2  text-lg md:text-2xl`}>{header}</h3>
                <p className={`font-cab-thin text-white mt-4 md:text-base text-xs`}>
                    {content}
                </p>
            </div>
            <Link to={`/${to}`} className={" font-bold font-cab-extra-bold mt-6 text-white md:text-base text-sm"}>Learn</Link>
        </div>
    )
}