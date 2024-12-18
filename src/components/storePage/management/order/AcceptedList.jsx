import OrderCard from "./OrderCard.jsx";
import useOrderStore from "../../../../stores/orderStore.js";
import PropTypes from "prop-types";

function AcceptedList() {
    const orders = useOrderStore((state) => state.orders);
    console.debug("orders", orders);
    const filteredOrders = orders.filter((order) => order.status !== "PENDING");

    return (
        <div className="flex flex-col text-center justify-between ">
            {filteredOrders.length > 0 ? (
                filteredOrders?.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))
            ) : (
                <p className="text-gray-500 pt-20">目前沒有已接單的訂單</p>
            )}
        </div>
    );
}
AcceptedList.prototype = {
    orderData: PropTypes.object,
};

export default AcceptedList;
