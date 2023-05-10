import { useState } from 'react'
import Input from '../atoms/Input'
import { product }  from '../../actions/product'
import {useDispatch,useSelector} from 'react-redux'
const AddProduct = () => {
    const [prodName,setProdName] = useState('')
    const [prodPrice, setProdPrice] = useState('')
    const [prodImg, setProdImg] = useState('')
    const [success,setSuccess] = useState(false)
    const dispatch = useDispatch()
    const { message } = useSelector((state: any) => state.message);
    const initialState = {
        prodName: "",
        prodPrice:"",
        prodImg:""
    }
    const [prods,setProds] = useState(initialState)
    const handleProduct = () =>{
        dispatch(product(prodName,prodPrice,prodImg))
            .then(() => {
            setSuccess(true);
            setProds(initialState)
            }).catch(() => {
            setSuccess(false)
            console.log("successful")
        })
    }
  return (
    <>
    <form className='flex flex-col gap-5'>
          <Input type='text' value={prodName}
              onChange={(e: any) => setProdName(e.target.value)}
          placeHolder="Product Name"/>

           <Input type='number' value={prodPrice}
              onChange={(e: any) => setProdPrice(e.target.value)}
              placeHolder="Product Name" />
          
           <Input type='file' value={prodImg}
              onChange={(e: any) => setProdImg(e.target.value)}
          placeHolder="Product Name"/>

          <button onSubmit={handleProduct} className="bg-[#D78484] border-none w-[10rem] p-4">Save Product</button>
    </form>

    {
              message && <div className={success ? "alert alert-sucess" : "alert alert-danger"}>{ message}</div>
    }
    </>
      
  )
}

export default AddProduct