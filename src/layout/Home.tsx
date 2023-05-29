import {FC, Fragment, useEffect, useRef} from "react";
import {Header} from "../component/Header";
import classes from "./styles/home.module.scss";
import {CreateActionButton} from "../component/CreateActionButton";
import Product from "../component/products/Product";
import {Box} from "../component/box/Box";
import {TractionLeftCard, TractionRightCard} from "../component/traction/TrackionCards";
import {Footer} from "../component/footer/Footer";
import {useNavigate} from "react-router-dom";


const HomeLayout:FC = () => {
    const navigate = useNavigate()
    const divRef = useRef<HTMLDivElement>(null)

    const counter = (e:any) => {
        return
        // @ts-ignore
        let children = divRef.current.childNodes
        children.forEach(e => {
            // @ts-ignore
            let content = e.lastChild.textContent;
            //console.log(content, typeof content)
            // @ts-ignore
            if(content === riskRef.current.textContent) {
                console.log(1)
            }

        })



    }


    return (
        <Fragment>
            <section className={`${classes.header_section} h-screen w-100 `}>
                <Header/>
                <div  className={`text-center`}>
                    <h1 className={`mt-8  p-6 font-cab-extra-bold  text-4xl md:text-6xl lg:text-8xl leading-10  bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo text-transparent`}>Your Access To More</h1>
                    <h3 className={"mx-3 mt-2 text-sm md:text-base text-white font-cab-medium leading-8"}>Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to <br/> grow your funds.</h3>
                </div>
                <div className={"mt-3 flex flex-row justify-center"}>
                    <CreateActionButton clickHandler={() => navigate("/calculator")} label={"Get Started"} clName={"font-cab-medium text-l-blue justify-center bg-white w-36 h-8 md:w-40 md:h-14"}/>
                </div>
                <div className={"relative"}>
                    <img id={classes.header_section_image} src={"/asset/svg/phone.svg"} className={"bottom-0 xl:ml-72 2xl:ml-96 "} alt={"phone-svg"} />
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
                 <div className={`bg-card  py-6 px-2 h-full`}>
                    <div className={`py-8 px-0  my-3 flex flex-col justify-center items-start`}>
                        <h3 className={`text-left  w-3/5 bg-red-400 font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl pt-5  text-l-blue`}>
                            Unlimited Investment Opportunities
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

                {/** section for testimonies */}
                <section className={`box-border flex flex-col justify-center items-start h-full px-4 pt-4 bg-gray-100`}>
                    <div className={`text-left mt-8 ml-5 py-3 px-2`}>
                        <h3 className={`text-l-blue tracking-wider capitalize font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl font-bold  `}>
                            Don’t Take Our <span className={`text-l-red`}>Word</span> For It
                        </h3>
                        <p className={`font-cab-medium text-l-blue text-base mt-3 ml-1`}>Listen to testimonials from Ardilla users building wealth</p>
                    </div>
                    <div>

                    </div>
                </section>


                <section className={`flex flex-col justify-evenly items-center h-full px-4 w-100`}>
                    <div className={`self-center px-1 py-2`}>
                        <section className={`grid grid-rows-1 grid-cols-5 items-center gap-0 lg:gap-1`}>
                            <img src={"/asset/svg/image-removebg-preview.svg"}/>
                            <img src={"/asset/svg/Thelogo.svg"}/>
                            <img src={"/asset/svg/TechCrunchlogo.svg"}/>
                            <div className="divide-y h-10 text-black "></div>
                            <img src={"/asset/svg/Pressreviews.svg"}/>
                        </section>
                    </div>

                    <div className={`drop-shadow-lg rounded-lg self-center px-8 pt-8 mt-6 bg-gray-100 ${classes.card}  flex flex-col justify-start items-center`}>
                        <div className={`m-6 text-l-blue text-center `}>
                            <h2 className={`capitalize font-cab-extra-bold text-base md:text-3xl tracking-widest`}>Also Available on the Web</h2>
                            <p className={`mt-3 mx-2 text-xs px-2 font-cab-medium font-medium`}>
                                Increase your bread & butter on the app or on the web.The Ardilla app <br/> services are also available on the web.
                            </p>
                        </div>
                        <img src={"/asset/svg/headersvg.svg"} alt={""} className={`mt-3`}/>

                    </div>
                </section>


                <section className={`flex flex-col justify-evenly items-center h-full px-4 bg-black w-100 `} /*onMouseOver={() => console.log(1)}*/ onPointerOver={(e:any) => counter(e)}>
                    <div className={`self-center text-center`}>
                        <h3 className={`text-white tracking-wider capitalize font-cab-extra-bold text-3xl md:text-5xl lg:text-7xl font-bold  `}>
                            Traction
                        </h3>
                        <h5 className={`font-cab-medium sm:text-sm md:text-base text-white mt-2`}>Our products and investments grossed 1.1 billion in 2022</h5>
                    </div>

                    <div className={`${classes.traction} relative`} >
                        <div className={`${classes.traction_box} py-8 px-8 flex flex-col md:flex-row justify-center gap-3`} ref={divRef}>
                            <TractionLeftCard dataValue={1.1} containerColor={`bg-green`} className={classes.box1} title={`Investment in `} blockContent={`2022`} mainContent={`100`} code={<span>&#8358;</span>}/>
                            <TractionRightCard  dataValue={0} containerColor={`bg-purple`} isTrue={true} className={classes.box2} title={`Risk `} blockContent={`Management`} mainContent={`Risk`} code={<span className={`mr-2`}>&#37;</span>}/>
                            <TractionRightCard dataValue={1.1} containerColor={`bg-yellow`} className={classes.box3} title={`Investment in `} blockContent={`paid back`} mainContent={`100`} code={<span>&#8358;</span>}/>
                        </div>

                        <div className={"absolute top-50  lg:left-5 xl:left-20 "}>
                            <img src={"/asset/svg/footer-frame.svg"} alt={""} />
                        </div>
                    </div>
                </section>
                <Footer/>
            </section>


        </Fragment>
    )
}

export default HomeLayout