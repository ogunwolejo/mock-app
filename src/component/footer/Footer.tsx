import {FC, memo, ReactNode} from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"

export const Footer:FC = memo(() => {
    return (
        <div className={`bg-create-account-button h-full flex flex-col justify-center items-center md:justify-center md:items-stretch`}>
            <div className={`grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-evenly md:items-start w-100`}>
                <div>
                    <Title title={"Products"}/>
                    <ul className={`list-none flex flex-col justify-between items-start mt-1 h-max`}>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Savings
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Dilla
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Financial Coach
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Halal
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3 flex flex-row items-center gap-2`}>
                            Budgeting
                            <Wrapper />
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3 flex flex-row items-center gap-2`}>
                            Investment
                            <Wrapper />
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3 flex flex-row items-center gap-2`}>
                            Insurance
                            <Wrapper />
                        </li>
                    </ul>
                </div>
                <div>
                    <Title title={"Company"}/>
                    <ul className={`list-none flex flex-col justify-between items-start mt-1 h-max`}>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            About us
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Careers
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            FAQS
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Press
                        </li>

                    </ul>
                </div>
                <div>
                    <Title title={"Transparency"}/>
                    <ul className={`list-none flex flex-col justify-between items-start mt-1 h-max`}>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Terms & conditions
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Information security policy
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Privacy policy
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            Interest Tool
                        </li>

                    </ul>
                </div>
                <div>
                    <Title title={"Developer"}/>
                    <ul className={`list-none flex flex-col justify-between items-start mt-1 h-max`}>
                        <li className={`text-xs font-cab-thin text-white mt-3 flex flex-row items-center gap-2`}>
                            Connect API
                            <Wrapper />
                        </li>
                    </ul>
                </div>
                <div>
                    <Title title={"Address"}/>
                    <ul className={`list-none flex flex-col justify-between items-start mt-1 mb-3 h-max`}>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            33B, Ogundana street, Allen, Ikeja.
                        </li>
                    </ul>
                    <Title title={"Contact"} />
                    <ul className={`list-none flex flex-col justify-between items-start mt-1  h-max`}>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            support@ardilla.africa
                        </li>
                        <li className={`text-xs font-cab-thin text-white mt-3`}>
                            (234)801 000 1234
                        </li>
                    </ul>
                </div>
            </div>
            <hr className={`divider-y text-white container self-center my-6 `}/>
            <div className={`flex flex-col container self-center `}>
                <div className={`flex flex-row justify-between items-center `}>
                    <div className={`text-white font-cab-thin ml-3 text-xs`}>
                        <span className={`mx-1`}>&#169;</span>
                        <span className={`mr-1`}>{new Date().getFullYear()} </span>
                        Ardilla. All right reserved
                    </div>
                    <div className={`flex flex-row justify-center gap-1 lg:gap-2 mr-3`}>
                        <SocialMedia icon={<FaInstagram />}/>
                        <SocialMedia icon={<FaFacebookF />}/>
                        <SocialMedia icon={<FaLinkedinIn />}/>
                        <SocialMedia icon={<FaTwitter />}/>
                    </div>
                </div>
                <p className={`mt-1 ml-3 font-cab-thin text-white text-xs`}>Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users</p>
            </div>
        </div>
    )
})



const Title:FC<{title:string}> = memo(({title}) => <h3 className={`text-white font-cab-extra-bold text-xs`}>{title}</h3>)

const Wrapper:FC = memo(() => {
    return (
        <div className={`flex flex-row justify-center px-1 py-.5 rounded-2xl text-white font-cab-thin border border-white `} style={{fontSize:`5px`}}>
            Coming Soon
        </div>
    )
})

const SocialMedia:FC<{icon:ReactNode}> = memo(({icon}) => <div className={`text-sm rounded-full p-2 flex flex-row justify-center items-center border border-white text-white`}>{icon}</div>)