import Shoe from '../../assets/shoe.png'
import Addidas from '../../assets/addidas.png'
const Collection = () => {
  const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
      <div className="hidden lg:grid lg:grid-cols-6 max-w-3xl mx-auto lg:py-5 lg:px-4 lg:shadow-md lg:bg-white ">
          <div className='cols-span-1 '>
              <img src={Shoe} className='w-[50px] h-[50px] rounded-full' />
      </div>
      <div className='cols-span-5 flex items-center justify-between w-[600px]'>
        <h2 className='font-bold'>Addidas sports wears</h2>
          {/* <div className=' space-x-10'> */}
        {Arr.slice(0, 6).map((x, i) => (
          <div className='pb-7 pr-5'>
            <img src={Addidas} className='w-10 absolute' />
            {i === 5 && (<span className='w-10 h-10 font-semibold text-base flex items-center justify-center absolute bg-gray-900 text-white bg-opacity-50 rounded-md'>{Arr.length}+</span>)}
          </div>
            
        ))}
         {/* </div> */}
          
          
               
          </div>
    </div>
  )
}

export default Collection