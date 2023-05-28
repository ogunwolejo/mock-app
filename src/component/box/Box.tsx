import {FC} from "react";
import classes from "./box.module.scss";
import {InnerContent} from "./component/InnerContent";

export const Box:FC = () => {
    return (
        <div className={classes.wrapper}>
            <div className={`mt-8 drop-shadow-2xl rounded-tr-md rounded-tl-md ${classes.box} bg-box py-8 px-4 box-content flex flex-col justify-evenly `}>
                <div className={`flex flex-col md:flex-row justify-evenly items-start `}>
                    <InnerContent content={`Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.`} circleBgColor={"bg-l-red"} header={"Dreams"} image={"/asset/svg/col1.svg"} to={""}/>
                    <InnerContent content={"Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund."} circleBgColor={"bg-yellow-500"} header={"DIB"} image={"/asset/svg/col2.svg"} to={""}/>
                </div>
                <div className={`flex flex-col md:flex-row justify-evenly items-start md:mt-24`}>
                    <InnerContent content={"Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to."} circleBgColor={"bg-create-account-button"} header={"Vault"} image={"/asset/svg/col3.svg"} to={""}/>
                    <InnerContent content={"Become a VIP when you save more money with us. Enjoy better benefits."} circleBgColor={"bg-green-500"} header={"Grit"} image={"/asset/svg/col4.svg"} to={""}/>
                </div>
            </div>
        </div>
    )
}