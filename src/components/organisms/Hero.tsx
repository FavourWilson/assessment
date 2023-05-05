import Navbar from '../atoms/Navbar'
import Header from '../atoms/header'
import CategoryProducts from '../molecules/CategoryProducts'
import Search from '../molecules/Search'

const Hero = () => {
  return (
      <div className='flex flex-col gap-5 w-full '>
          <Navbar/>
          <Search />
          <div className='bg-white h-[100px] flex flex-col gap-5 justify-center items-center'>
              <Header />
              <div className="flex gap-5">
                   {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => (
            
              <CategoryProducts key={`a${i}`}/>
          ))}
              </div>
              
          </div>
           
         
      </div>
  )
}

export default Hero