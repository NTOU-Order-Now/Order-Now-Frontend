import OrderCard from "./OrderCard.jsx";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useOrderInfiniteQuery } from "../../../../hooks/order/useOrderInfiniteQuery.jsx";
function AcceptedList() {
    const { ref, inView } = useInView({
        rootMargin: "100px",
    });

    const {
        orders,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useOrderInfiniteQuery("ALL");

    const filterOrders = orders?.pages.map((page) =>
        page.content.filter((order) => order.status !== "PENDING"),
    );
    useEffect(() => {
        if (inView && !isFetchingNextPage && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetchingNextPage, hasNextPage, fetchNextPage]);
    if (isLoading) {
        return <div className="text-center pt-20">Loading...</div>;
    }

    if (isError) {
        return <div className="text-center pt-20">Error: {error.message}</div>;
    }
    // console.debug("filterOrders", filterOrders);
    // if (filterOrders.map) {
    //     return <div className="text-center pt-20">目前沒有已接訂單</div>;
    // }
    return (
        <div className="flex flex-col text-center justify-between ">
            {filterOrders.map((page) =>
                page.map((order, _) => {
                    return <OrderCard key={_} order={order} />;
                }),
            )}
            <div ref={ref}>
                {hasNextPage && isFetchingNextPage && (
                    <div className="text-center py-4">Loading more...</div>
                )}
            </div>
        </div>
    );
}

AcceptedList.prototype = {
    orderData: PropTypes.object,
};

export default AcceptedList;
