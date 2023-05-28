import {FC, useMemo, memo} from "react";
import classes from "../product.module.scss";
import {CheckCircle} from "../../CheckCircle";

export const Budget:FC = memo(() => {
    const listOfWords:Array<string> = useMemo(() => ["Save as you spend", "Track your expenses", "Organize your finances", "Sync and share budgets", "Financial guide", "Better decision-making"], [])
    return (
        <>
            <div className={"mt-8  ml-6 md:ml-20 lg:ml-32 xl:ml-44"}>
                <h2 className={"font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl text-l-blue md:w-2/5 text-center"}>Products</h2>

                <section className={"md:flex md:flex-row items-center justify-evenly"}>
                    <div>
                        <h4 className={`font-cab-extra-bold ${classes.card_product_h4} leading-loose text-l-red text-2xl md:text-3xl lg:text-4xl `}>Budget</h4>
                        <h6 className={`font-cab-medium text-l-blue text-lg`}>Plan your money</h6>
                        <p className={`font-cab-medium text-gray-400 text-lg md:w-96 lg:w-76 xl:w-auto ${classes.card_product_p}`} >Every good budget starts with a good plan for your money</p>
                        <ul className={"my-2 md:my-4"}>
                            {listOfWords.map((el, i:number) => (
                                <li className={"inline-flex md:flex my-4"} key={i}>
                                    <CheckCircle className={"w-4 h-4 md:w-6 md:h-6 text-l2-red md:inline-flex"}/>
                                    <span className={" text-sm md:text-base mx-1 text-l-blue font-cab-medium capitalize "}>{el}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img src={"/asset/svg/budget.svg"} className={"h-40 md:h-60 lg:h-96"} alt="" />
                </section>

            </div>
        </>
    )
})