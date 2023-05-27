import {FC, useMemo} from "react";
import classes from "./product.module.scss"
import {CheckCircle} from "../CheckCircle";
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

const Product:FC = () => {
    const listOfWords:Array<string> = useMemo(() => ["Create Unlimted savings plans", "Withdraw anytime", "Save with Friends with SAN ID", "Be better at saving", "Accountability profile", "Activity and report"], [])
    return (
        <div className={`bg-card  ${classes.card_product}  rounded-tr-3xl rounded-tl-3xl py-5 flex-column justify-center`}>
            <div className={"mt-8 md:mt-20 lg:mt-32 ml-6 md:ml-20 lg:ml-32 xl:ml-44"}>
                <h2 className={"font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl text-l-blue lg:ml-8"}>Products</h2>

                <section className={"mt-6 md:ml-0 lg:ml-12 xl:ml-24 flex-inline md:flex flex-row justify-start md:gap-4 lg:gap-4 xl:gap-36"}>
                    <div>
                        <h4 className={`font-cab-extra-bold ${classes.card_product_h4} leading-loose text-l-red text-2xl md:text-3xl lg:text-4xl `}>Save</h4>
                        <h6 className={`font-cab-medium text-l-blue text-lg`}>Save at your own pace!</h6>
                        <p className={`font-cab-medium text-gray-400 text-lg md:w-96 lg:w-76 xl:w-auto ${classes.card_product_p}`} >Save your money daily, weekly, or monthly. No pressure. We work at your pace</p>
                        <ul className={"my-2 md:my-4"}>
                            {listOfWords.map((el, i:number) => (
                                <li className={"inline-flex md:flex my-4"} key={i}>
                                    <CheckCircle className={"w-4 h-4 md:w-6 md:h-6 text-l2-red md:inline-flex"}/>
                                    <span className={" text-sm md:text-base mx-1 text-l-blue font-cab-medium capitalize "}>{el}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img src={"/asset/svg/right.svg"} className={"h-40 md:h-60 lg:h-96"} alt="" />
                </section>
            </div>
            <Range dots={false} max={100} min={25} pushable={true} className={`mt-4 md:mt-8 ml-6 md:ml-20 lg:ml-32 xl:ml-44`} />
        </div>
    )
}

export default Product