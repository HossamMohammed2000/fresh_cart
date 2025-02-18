import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
React;
function useProducts() {

    function getProducts() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/products") 
        }
       let productInfo = useQuery({
        queryKey: ["recentProduct"],
        queryFn: getProducts,
        staleTime: 7000,
        // retry: 7,
        // retryDelay:6000,
        // refetchInterval: 5000,
        // refetchIntervalInBackground: true,
        // refetchOnWindowFocus: true,
        gcTime:4000,
        },
      )



return productInfo

}

export default useProducts