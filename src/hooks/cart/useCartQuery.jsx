import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api/cart/getCart";

export const useCartQuery = (isEnable = true) => {
    const {
        data: cartData,
        isLoading,
        isError,
        refetch: refetchCart,
    } = useQuery({
        queryKey: ["cart"],
        queryFn: async ({ signal }) => {
            const res = await getCart(signal);
            return res.data;
        },
        enabled: isEnable,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 ** 1, //10 min
        retry: 5,
    });
    return {
        cartData,
        isLoading,
        isError,
        refetchCart,
    };
};
