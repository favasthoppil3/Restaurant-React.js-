import {RESTAURANT_LIST_SUCCESS,RESTAURANT_LIST_FAIL} from '../constants'

import axios from 'axios'

export const listRestaurants = ()=> async (dispatch)=>{
    try {
        const {data}=await axios.get('./restaurants.json')
        dispatch({
            type:RESTAURANT_LIST_SUCCESS , payload:data
        })  
    } catch (error) {   
        dispatch({
            type:RESTAURANT_LIST_FAIL , payload:error
        })
    }
}