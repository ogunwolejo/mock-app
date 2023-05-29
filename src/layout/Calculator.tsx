import {FC, Fragment, memo, useEffect, useMemo, useState} from "react";
import {Header} from "../component/Header";
import {CalculatorResult} from "../component/calculator/CalculatorResult";
import classes from "./styles/calculatorlayout.module.scss";
import {CalculatorComponet} from "../component/calculator/CalculatorComponent";
import {ColorfulPaper} from "../component/ColorfulPaper";
import {Footer} from "../component/footer/Footer";

const CalculatorLayout:FC = () => {
    // note for period 1 = month and 2 = year
    const [calData, setCalData] = useState<{period:number; amount:number; periodInMonths:number; }> ({
        amount:2000,
        period:1,
        periodInMonths:1
    })


    const amountEntryHandler = (e:any) => {
        const data = +e.target.value
        setCalData(current => ({...current, amount:data}))
        //calculation(data)
    }

    const investingPeriodHandler = (e:any) => {
        const data = +e.target.value
        setCalData(current => ({...current, periodInMonths:data }))
        //calculation(data)
    }

    const changeTimeFrame = (e:any) => {
        const data = +e.target.value
        setCalData(current => ({...current, period:data}))
        //calculation(data)
    }



    const questions:string[] = useMemo(() => ["What are your interest rates?", "What happens to my interest when i switch to Halal?", "What is the minimum interest rate I am entitled to?", "What is Ardilla", "What is Ardilla"], [])
    return (
        <Fragment>
            <section className={`w-screen h-screen`}>

                <section className={`bg-shade h-full w-100 `}>
                    <Header bg={"bg-transparent"} btnBg={"bg-white"} btnColor={"text-create-account-button"} earthBg={"bg-white"}/>
                    <div className={`flex flex-row justify-start  ${classes.calculator}`}>
                        <CalculatorComponet selectYearHandler={changeTimeFrame} selectAmountHandler={amountEntryHandler} selectPeriodHandler={investingPeriodHandler} data={calData}/>
                        <CalculatorResult data={calData}/>
                    </div>
                </section>

                <section className={`bg-white h-full w-100`}>
                    <div className={`flex flex-col justify-start h-full w-100`}>
                        <h3 className={`mt-6 md:mt-12 xl:mt-44 container text-center w-12/12   xl:w-3/5 font-cab-extra-bold font-bold text-l-blue text-4xl md:text-6xl`}>Interest you can count on</h3>
                        <div className={`w-100 container flex flex-col justify-evenly md:mt-16 bg-purple-700`}>
                            <div className={`md:ml-20 lg:ml-5 xl:ml-0 2xl:ml-20 self-center container w-12/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 px-3 py-2 flex flex-col justify-start items-start`}>
                                <ul className={`flex flex-col lg:flex-row justify-center items-start gap-2 `}>
                                    <li>
                                        <Content
                                            content={ "Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan."}
                                            title={"More Interest"}
                                            //className={`w-12/12  xl:w-10/12`}
                                        />
                                    </li>
                                    <li>
                                        <Content
                                            content={"Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans."}
                                            title={"Values"}
                                            className={`w-12/12  xl:w-10/12`}
                                        />
                                    </li>
                                </ul>

                                <ul className={`flex flex-col lg:flex-row justify-center items-start gap-2 mt-8`}>
                                    <li>
                                        <Content
                                            content={"No hidden charges and no vague deductions. Save with Ardilla and get your full interests."}
                                            title={"Transparency"}
                                        />
                                    </li>
                                    <li>
                                        <Content
                                            content={"Withdraw your entire savings+ interest upon maturity. No minimum balance."}
                                            title={"Complete Withdraws"}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`w-100 mt-6 md:mt-12 xl:mt-44 hidden xl:flex flex-col`}>
                        <h3 className={`text-center w-12/12 md:w-7/12 lg:w-8/12  xl:w-2/5  font-cab-extra-bold font-bold text-l-blue text-4xl md:text-6xl`}>How It Works</h3>
                        <div className={`justify-evenly w-100 flex flex-row gap-2 items-start xl:p-2 flex-wrap mt-16`}>
                            <ColorfulPaper title={"Create a plan"} index={1} indexBg={"bg-l-red"} frameBg={"bg-[#FDEDF2]"} image={"/asset/svg/colorframe1.svg"}/>
                            <ColorfulPaper title={"Set your target amount"} index={2} indexBg={"bg-slider"} frameBg={"bg-[#FAF5FF]"} image={"/asset/svg/colorframe2.svg"}/>
                            <ColorfulPaper title={"Get Your interest"} index={3} indexBg={"bg-blue-600"} frameBg={"bg-[#F1F5FE]"} image={"/asset/svg/colorframe3.svg"}/>
                        </div>
                    </div>


                    <div className={`my-16 relative`}>
                        <h3 className={`mt-6 md:mt-12 xl:mt-44 container xl:ml-8  text-center w-12/12 xl:w-3/5 font-cab-extra-bold font-bold text-l-blue text-4xl xl:text-6xl`}>Questions We Have been Asked</h3>
                        <div className={`mt-6 md:mt-8 xl:mt-16 flex flex-col justify-start items-start w-100 mx-8 lg:mx-24 xl:mx-8 2xl:mx-48 `}>
                            {questions.map((q, i) => <Questions key={i} ques={q} /> ) }
                        </div>

                        <div className={"absolute top-50  lg:left-10 xl:left-56 2xl:left-96 mx-3 xl:mx-0"}>
                            <img src={"/asset/svg/footer-frame.svg"} className={``} alt={""} />
                        </div>
                        
                    </div>


                    <Footer/>


                </section>



            </section>



        </Fragment>
    )
}

const CirclePurple:FC<{className?:string}> = memo(({className}) => (<div className={`border border-4 border-header-blue bg-white ${className} rounded-full h-4 w-4`}></div>))

const Content:FC<{content:string; title:string; className?:string}> = memo(({content, title, className}) => {
    return (
        <div className={`flex flex-col justify-start items-start `}>
            <h4 className={`text-l-blue font-cab-extra-bold font-bold text-base md:text-2xl capitalize`}>
                {title}
            </h4>
            <p className={`font-cab-light font-normal text-header-blue w-12/12 md:w-auto xl:w-10/12  text-xs md:text-sm mt-4 break-word`}>
                {content}
            </p>
        </div>
    )
})

export default CalculatorLayout

const Questions:FC<{ques:string}> = memo(({ques}) => <div className={`flex flex-row justify-between items-center rounded-lg bg-[#F9FAFB] px-3 py-3 xl:px-12 xl:py-8 w-full mb-8`}>
    <h3 className={`font-normal text-base text-slider font-cab-medium`}>{ques}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
</div>)