import {FC, useLayoutEffect, useState} from "react";
import classes from "./product.module.scss"
import {Budget, Invest, Save, Learn, Insurance} from "./product/index";

const Product:FC = () => {
    /*useLayoutEffect(() => {
        setSlider(1)
    }, [])*/
    const [slider, setSlider] = useState<number>(1)
    const nextHandler = () => {
        if(slider > 5) {
            return setSlider(5)
        }

        if(slider >= 0) {
            setSlider(currentSlider => currentSlider + 1)
        }
    }

    const prevHandler = () => {
        if(slider === 1) {
            return
        }

        setSlider(currentSlider => currentSlider - 1 )
    }

    return (
        <div className={`bg-card  ${classes.card_product}  rounded-tr-3xl rounded-tl-3xl py-5 flex-column justify-center items-center`}>
            <>
                {slider === 1 && <Save/>}
                {slider === 2 && <Learn/>}
                {slider === 3 && <Invest/>}
                {slider === 4 && <Budget/>}
                {slider === 5 && <Insurance/>}
            </>


            <div className={`container mt-12 ml-6 md:ml-20 lg:ml-32 xl:ml-52 h-1.5 rounded-md bg-gray-300 w-4/5 `} onClick={nextHandler}>
                <div className={`rounded-md h-full w-${slider}/5 bg-slider`} onClick={prevHandler}></div>
            </div>

        </div>
    )
}

export default Product