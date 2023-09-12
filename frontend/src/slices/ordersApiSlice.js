import { apiSlice } from './apiSlice';


export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: '/api/orders',
                method: 'POST',
                body: { ...order },
            }),
        }),
        getOrderDetails: builder.query({
            query: (id) => ({
                url: `/api/orders/order/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),

        getMyOrders: builder.query({
            query: () => ({
                url: '/api/orders/myorders',
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useGetOrderDetailsQuery,
    useGetMyOrdersQuery,
} = orderApiSlice;