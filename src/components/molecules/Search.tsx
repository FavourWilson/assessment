import { BsSearch } from 'react-icons/bs'
import { RiArrowDownSLine } from 'react-icons/ri'
const Search = () => {
  return (
    <div className='-translate-y-12 flex justify-center'>
      <label className='flex justify-between items-center bg-white border-3 shadow-md rounded-md px-4 py-4 w-[250px] lg:w-[400px]'>
          <BsSearch className="w-50" />
          <input className='border-none bg-none outline-none' placeholder='Search for a product' />
          <div className='flex lg:items-center'>
              <span className='hidden lg:flex'>Category</span>
              <RiArrowDownSLine className='w-50'/>
          </div>
      </label> 
    </div>
      
  )
}

export default Search