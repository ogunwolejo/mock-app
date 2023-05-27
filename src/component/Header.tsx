import {FC} from "react";
import {CreateActionButton} from "./CreateActionButton";
import {AiOutlineCaretDown} from "react-icons/ai"

export const Header:FC = () => {
    return (
        <nav className={'w-100 font-cab-regular bg-header-blue text-center py-3 align-middle flex flex-row items-center'}>
            <div className={"basis-3/3 md:basis-2/3"}>
                <div className={"flex flex-row justify-evenly items-center "}>
                    <img src={"/asset/images/LOGO.png"} className={"cursor-pointer"} />
                    <ul className={"font-cab-medium text-sm text-white list-none grid grid-cols-4 gap-3 lg:gap-4"}>
                        <li>Products <i className={"inline-flex align-middle"}> <AiOutlineCaretDown style={{height:"5px"}}/> </i></li>
                        <li>Business <span className={"text-white border border-white text-sm md:ml-.5 lg:ml-1 rounded"}>Beta</span></li>
                        <li>Company <i className={"inline-flex align-middle "}> <AiOutlineCaretDown style={{height:"5px"}}/> </i> </li>
                        <li>Learn</li>
                    </ul>
                </div>
            </div>
            <div className={"md:basis-1/3"}>
                <div className={"flex flex-row justify-center gap-3 items-center"}>
                    <div className={"text-white font-cab-medium text-sm cursor-pointer"}>Sign In</div>
                    <div>
                        <CreateActionButton clickHandler={() => console.log(null)} clName={"text-white bg-create-account-button font-cab-bold text-sm capitalize  md:py-2 md:px-3 lg:px-4"} label={"create Account"} />
                    </div>
                    <div className={"rounded-full p-1 border-solid border border-[#FFEAFA] bg-[#D6ABFC] hover:cursor-pointer"}>
                        <img src={"/asset/images/earth.png"} />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white w-6 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>
        </nav>
    )
}