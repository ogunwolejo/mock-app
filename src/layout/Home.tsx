import {FC, Fragment} from "react";
import {Header} from "../component/Header";
import classes from "./styles/home.module.scss";
import {CreateActionButton} from "../component/CreateActionButton";
import Product from "../component/products/Product";


const HomeLayout:FC = () => {
    return (
        <Fragment>
            <section className={`${classes.header_section} h-screen w-100 `}>
                <Header/>
                <div  className={`text-center`}>
                    <h1 className={`mt-8  p-6 font-cab-extra-bold  text-4xl md:text-6xl lg:text-8xl leading-10  bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo text-transparent`}>Your Access To More</h1>
                    <h3 className={"mx-3 mt-4 text-sm md:text-base text-white font-cab-medium leading-8"}>Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to <br/> grow your funds.</h3>
                </div>
                <div className={"mt-6 flex flex-row justify-center"}>
                    <CreateActionButton clickHandler={() => null} label={"Get Started"} clName={"font-cab-medium text-l-blue justify-center bg-white w-36 h-8 md:w-40 md:h-14"}/>
                </div>
                <div className={"relative"}>
                    <img id={classes.header_section_image} src={"/asset/svg/phone.svg"} className={"bottom-0"} alt={"phone-svg"} />
                    <Product/>
                </div>
            </section>


        </Fragment>
    )
}

export default HomeLayout