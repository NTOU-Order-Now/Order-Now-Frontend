import { useState } from "react";
import UnacceptedList from "../components/storePage/management/order/UnacceptedList.jsx";
import AcceptedList from "../components/storePage/management/order/AcceptedList.jsx";
import ToggleNavBar from "../components/common/ToggleNavBar.jsx";
import { useQueryClient } from "@tanstack/react-query";
import NormalHeader from "../components/common/NormalHeader.jsx";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const HistoryOrders = () => {
    const queryClient = useQueryClient();
    const orderCount = queryClient.getQueryData(["order", "PENDING"]);
    const [navBarStatus, setNavBarStatus] = useState(0);

    const orderCountButton = (
        <button
            onClick={() => {
                console.debug("orderCountButton click");
            }}
            className=" bg-orange-500 text-white rounded-lg px-3 py-1 font-sm shadow-md"
        >
            共計 {orderCount} 筆訂單
        </button>
    );

    const handleToUnaccepted = () => {
        setNavBarStatus(0);
        console.debug("handleToUnaccepted");
    };
    const handleToAccepted = () => {
        setNavBarStatus(1);
        console.debug("handleToAccepted");
    };
    const options = {
        未完成: handleToUnaccepted,
        已完成: handleToAccepted,
    };

    return (
        <div className="flex flex-col h-screen">
            <NormalHeader leftIcon={faArrowLeft} title={"歷史訂單"} />
            <div className="flex-1">
                <div className="sticky top-[40px] mt-[40px] z-20 px-10   h-[85px] bg-white content-center rounded-b-xl shadow-sm ">
                    <ToggleNavBar options={options} InitActiveTab={"未完成"} />
                </div>
                <div className="overflow-auto h-[dvh-64px] px-8 py-2">
                    {navBarStatus === 0 ? <UnacceptedList /> : <AcceptedList />}
                </div>
            </div>
        </div>
    );
};

export default HistoryOrders;