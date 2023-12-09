import { useNavigate } from "react-router-dom";
import { useZk } from "../providers/zkProvider";
import robot from "/public/robot.png";
import { useEffect } from "react";

const Landing = () => {
    const { wallet } = useZk();
    const navigate = useNavigate();

    useEffect(() => {
        if (!wallet.address) return;
        navigate(`/${wallet.address}`);
    }, [wallet.address, navigate]);

    return (
        <div className="relative font-eightbit flex h-full">
            <div className=" w-[30%] text-white bg-white h-full ">
                <img
                    className="absolute left-[15%] top-[30%]"
                    src={robot}
                    width="400"
                    height="500"
                    alt="robot"
                />
            </div>
            <div className="w-[70%] text-4xl bg-inherit flex flex-col align-middle items-center text-white h-full whitespace-nowrap">
                <div className="text-8xl font-extrabold text-white mt-20">
                    N A T T Y
                </div>
                <div className="text-3xl mt-4 text-white">
                    not just another chat bot
                </div>
                <div className="w-full flex flex-col items-end justify-start gap-y-8 mt-16 mr-28">
                    <div className="text-5xl font-bold">No mnemonic needed</div>
                    <div className="text-5xl font-bold">
                        Access from anywhere
                    </div>
                    <div className="text-5xl font-bold">
                        Your keys = Your coins
                    </div>
                    <div className="text-5xl font-bold">
                        Not a telegram bot - your funds are SAFU
                    </div>
                    <button className="text-5xl font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
