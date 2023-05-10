import productsService from '../services/products.service'
import { CREATE_PRODUCTS, RETRIEVE_PRODUCTS } from './types'
export const CreateProducts = (prodName, prodPrice, prodImg) => async (dispatch) => {
    try {
        const res = await productsService.create({ prodName, prodPrice, prodImg });
        dispatch({
            type: CREATE_PRODUCTS,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};


export const RetrieveProducts = () => async (dispatch) => {
    try {
        const res = await productsService.getAll();
        dispatch({
            type: RETRIEVE_PRODUCTS,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}