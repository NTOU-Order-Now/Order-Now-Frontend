import PropTypes from "prop-types";
import { useCartUpdateMutation } from "../../hooks/cart/useCartUpdateMutation";
const CartOrderSection = ({ orderDetail }) => {
    const { totalSpend, estimateTime, cartData } = orderDetail;
    const { ispatchCartError } = useCartUpdateMutation();
    const sendButtonColor = ispatchCartError ? "bg-gray-300" : "bg-white";
    return (
        <div className=" fixed bottom-0 w-full bg-orange-400 px-4 py-2 rounded-t-lg  text-white font-notoTC font-medium">
            <div className="flex justify-between mb-3 px-2 text-sm">
                <span>總金額</span>
                <span>$ {totalSpend}</span>
            </div>
            {cartData.orderedDishes.length > 0 && <div className="flex justify-between mb-3 px-2 text-sm">
                <span>預估完成時間</span>
                <span>
                    {estimateTime} ~ {estimateTime + 20} 分鐘
                </span>
            </div>}
            <button className={`w-full ${sendButtonColor} text-orange-500 py-2 px-2 rounded-full font-semibold `} disabled={ispatchCartError}>
                送出訂單
            </button>
        </div>
    );
};

CartOrderSection.propTypes = {
    orderDetail: PropTypes.shape({
        cartData: PropTypes.object.isRequired,
        totalSpend: PropTypes.number.isRequired,
        estimateTime: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartOrderSection;
