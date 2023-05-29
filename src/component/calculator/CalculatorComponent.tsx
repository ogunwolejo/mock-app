import {FC, memo, useEffect, useMemo, useState} from "react";
import classes from "./calculator.module.scss";

export const CalculatorComponet:FC<{selectYearHandler:Function, selectAmountHandler:Function, selectPeriodHandler:Function, data:{period:number; amount:number; periodInMonths:number} }> = ({data, selectAmountHandler, selectYearHandler, selectPeriodHandler}) => {
       return (
        <div className={`flex flex-col  pl w-12/12  md:w-3/6 absolute container mt-3 md:mt-0 md:top-44 xl:top-36 md:left-8 xl:left-40 2xl:left-64 p-4`}>
            <h3 className={` ml-8 md:ml-0 text-white cab-extra-bold text-xl md:text-2xl lg:text-4xl`}>Calculate Your Interests</h3>
            <div className={`md:mt-20 ml-8 md:ml-0`}>
                <SelectDropdown period={data.period} handler={selectYearHandler}/>
                <InputField amount={data.amount} handler={selectAmountHandler}/>
                <InputFieldForMonths noOfMonths={data.periodInMonths} handler={selectPeriodHandler} i={data.period}/>
            </div>
        </div>
    )
}

const SelectDropdown:FC<{period:number; handler:Function}> = memo(({period, handler}) => {
    const options = useMemo(() => [
        { value: 1, label: 'Months' },
        { value: 2, label: 'Year' }
    ],[])

    return (
        <div className={`flex flex-col w-100`}>
            <label className={`mb-4 text-gray-400 font-ubuntu text-xs font-medium`}>How often are you saving?</label>
            <select value={period} onChange={(e) => handler(e)} className={`font-cab-medium rounded-md ${classes.select} py-1 px-6 bg-transparent border border-white text-white min-w-max w-10/12 md:w-8/12 xl:w-6/12 2xl:w-4/12 h-12 font-normal text-sm`}>
                {
                    options.map((el, i) => (<option key={i} className={`bg-transparent hover:bg-transparent text-white font-normal text-sm`} value={el.value}>{el.label}</option>))
                }
            </select>
        </div>
    )
})


const InputField:FC<{amount:number; handler:Function}> = (({amount, handler}) => {
   // const v:string = amount.toLocaleString(`us`);
    return (
        <div className={`flex flex-col w-100 mt-8`}>
            <label className={`mb-4 text-gray-400 font-ubuntu text-xs font-medium`}>How much are you saving?</label>
            <input
                type={"text"}
                className={`font-cab-medium py-2 pr-6 border-b border-white text-3xl text-white w-10/12 md:w-8/12 xl:w-6/12 2xl:w-4/12 bg-transparent outline-none`}
                value={amount}
                onChange={(e) => handler(e)}
            />
        </div>
    )
})

const InputFieldForMonths:FC<{noOfMonths:number; handler:Function; i:number}> = ({noOfMonths, handler, i}) => {
    return (
        <div className={`flex flex-col w-100 mt-8`}>
            <label className={`mb-4 text-gray-400 font-ubuntu text-xs font-medium`}>How long are you saving for? {i === 1 ? `(In months)` : `(In Years)`}</label>
            <input
                type={"text"}
                className={`font-cab-medium py-2 pr-6 border-b border-white text-3xl text-white w-10/12 md:w-8/12 xl:w-6/12 2xl:w-4/12 bg-transparent outline-none`}
                value={noOfMonths}
                onChange={(e) => handler(e)}
            />
        </div>
    )
}