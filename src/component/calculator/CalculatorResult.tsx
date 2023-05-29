import {FC, ReactNode, useMemo} from "react";
import {ShowAmount} from "../ShowAmount";
import classes from "./calculator.module.scss";

export const CalculatorResult:FC<{data:{period:number; amount:number; periodInMonths:number}}> = ({data}) => {
    const months = useMemo(() => data.period === 1 ? data.periodInMonths : (data.period === 2 && data.periodInMonths === 1 ? 12 : 12 * data.periodInMonths), [data]);
    const interest:number = useMemo(() => data.amount * .02 * months, [data])
    const tB:number = useMemo(() => interest + data.amount, [data, interest])

    return (
        <div className={`bg-gray-100 rounded-tr-md rounded-tl-md px-12 py-12 mb-0 w-auto ${classes.result} absolute bottom-0 md:right-4 xl:right-36 2xl:right-44 md:w-5/12 xl:w-4/12`}>
            <div className={`flex flex-col justify-between h-full items-start`}>
                <ShowAmount title={`Total Balance`} amount={tB}/>
                <p className={`text-gray-500 text-sm font-cab-medium font-normal my-4`}>Saving
                    <span className={`font-extrabold font-cab-medium px-1`}>&#8358;{new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(data.amount)}</span>
                    monthly for {months} months will result in a balance of
                    <span className={`font-extrabold font-cab-medium px-1`}>&#8358;{new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(tB)}</span>
                </p>
                <div className={``}>
                    <ShowAmount title={`Interest`} amount={interest} sub={true} subData={2}/>
                </div>
                <div className={``}>
                    <ShowAmount title={`Total Saving`} amount={tB} sub={true} subData={2}/>
                </div>

                <div>
                    <button className={`rounded-full text-white bg-create-account-button px-3 py-1 w-auto h-8 font-ubuntu text-xs font-normal`}>
                        Start Saving Now
                    </button>
                </div>
            </div>
        </div>
    )
}