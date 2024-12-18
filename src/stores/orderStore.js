import { create } from "zustand";

const useOrderStore = create((set) => ({
    orders: [
        {
            id: "1234567",
            customerId: "2147483647",
            cost: 1030,
            status: "PENDING",
            orderTime: "2024-12-01 19:09:21",
            acceptTime: "2024-12-01 19:09:32",
            estimatedTime: 25,
            note: "我的水餃不要不要皮我的水餃不要皮...",
            orderedDishes: [
                {
                    id: 1,
                    storeId: 123,
                    dishId: 456,
                    dishName: "好好吃水餃",
                    // imageUrl: "https://picsum.photos/200/300",
                    price: 343,
                    quantity: 3,
                    note: "不吃香菜",
                    chosenAttributes: [
                        { attributeName: "辣度", chosenOption: "中辣", extraCost: 10 },
                        { attributeName: "醬料", chosenOption: "蒜泥", extraCost: 5 }
                    ]
                },
                {
                    id: 2,
                    storeId: 789,
                    dishId: 654,
                    dishName: "好好吃水餃",
                    // imageUrl: "https://picsum.photos/200/300",
                    price: 3433,
                    quantity: 1,
                    note: "不吃香菜",
                    chosenAttributes: [
                        { attributeName: "辣度", chosenOption: "中辣", extraCost: 10 },
                        { attributeName: "醬料", chosenOption: "蒜泥", extraCost: 5 }
                    ]
                }
            ]
        },
        {
            id: "1234567",
            customerId: "2147483647",
            cost: 1030,
            status: "PROCESSING",
            orderTime: "2024-12-01 19:09:21",
            acceptTime: "2024-12-01 19:09:32",
            estimatedTime: 25,
            note: "我的水餃不要不要皮我的水餃不要皮...",
            orderedDishes: [
                {
                    id: 1,
                    storeId: 123,
                    dishId: 456,
                    dishName: "好好吃水餃",
                    // imageUrl: "https://picsum.photos/200/300",
                    price: 343,
                    quantity: 3,
                    note: "不吃香菜",
                    chosenAttributes: [
                        { attributeName: "辣度", chosenOption: "中辣", extraCost: 10 },
                        { attributeName: "醬料", chosenOption: "蒜泥", extraCost: 5 }
                    ]
                },
                {
                    id: 2,
                    storeId: 789,
                    dishId: 654,
                    dishName: "好好吃水餃",
                    // imageUrl: "https://picsum.photos/200/300",
                    price: 3433,
                    quantity: 1,
                    note: "不吃香菜",
                    chosenAttributes: [
                        { attributeName: "辣度", chosenOption: "中辣", extraCost: 10 },
                        { attributeName: "醬料", chosenOption: "蒜泥", extraCost: 5 }
                    ]
                }
            ]
        }
    ],

}));

export default useOrderStore;
