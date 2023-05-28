import {FC, Fragment} from "react";
import {Header} from "../component/Header";
import classes from "./styles/home.module.scss";
import {CreateActionButton} from "../component/CreateActionButton";
import Product from "../component/products/Product";
import {CalculatorWrapper} from "../component/calculator/CalculatorWrapper";
import {Calculator} from "../component/calculator/Calculator";
import {Box} from "../component/box/Box";


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

                <div className={`px-4 py-10 md:px-8 md:py-20 box-content flex flex-col justify-center items-center xl:flex-row xl:justify-evenly xl:items-start gap-4 xl:gap-6`}>
                    <div className={`flex flex-col justify-between items-center xl:items-start`}>
                        <h3 className={`font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl pt-5  text-l-blue `}>
                            We’re Keen On <br/><span className={`text-l-red`}>Transparency</span>
                        </h3>
                        <h4 className={`mt-6 font-cab-medium text-l-blue text-lg`}> Calculate your interests everytime you save on our platform</h4>

                        <CreateActionButton clickHandler={() => console.log(null)} clName={"mt-4 lg:mt-6 text-white bg-create-account-button font-Ubuntu py-3 px-5 md:h-14 w-36 h-12  capitalize font-bold"}  label={"Get Started"} />
                    </div>
                    <img src={"/asset/svg/frame.svg"} className={``} alt={""}/>
                </div>

                {/** working on theses */}
                 <div className={`bg-card  py-6 px-2`}>
                    <div className={`py-8 px-0 container my-3`}>
                        <h3 className={`text-center w-5/6 font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl pt-5  text-l-blue`}>
                            Unlimited Investment <br/> Opportunities
                        </h3>
                    </div>
                 </div>

                <section className={`${classes.box} px-4 pt-4 flex flex-col justify-start items-center h-auto `}>
                    <div className={`text-left self-center mt-6 mx-4`}>
                        <h3 className={`font-Ubuntu text-3xl md:text-5xl lg:text-7xl font-bold text-white`}>Access More With Your Money</h3>
                        <div className={`mt-3 md:mt-5 text-white font-cab-medium  text-sm md:text-base`}>Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your finger tips. Why not <br/>take advantage today?</div>
                         <button className={`my-4 md:my-6 rounded-full px-6 py-2 border border-white text-white text-sm md:text-base bg-black hover:bg-hover-btn`}>
                             Learn more about savings
                             <img src={"/asset/svg/send.svg"} className={`inline-flex mx-1`} alt={""}/>
                         </button>

                        <Box/>

                    </div>

                </section>

                <section className={`box-border flex flex-col justify-center items-start h-full px-4 pt-4`}>
                    <div className={`text-left mt-8 ml-5 bg-red-400 py-3 px-2`}>
                        <h3 className={`text-l-blue tracking-wider capitalize font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl font-bold  `}>
                            Don’t Take Our <span className={`text-l-red`}>Word</span> For It
                        </h3>
                        <p className={`font-cab-medium text-l-blue text-base mt-3 ml-1`}>Listen to testimonials from Ardilla users building wealth</p>
                    </div>
                </section>

            </section>


        </Fragment>
    )
}

export default HomeLayout