import { Details } from "../atoms/Details"
const UserDetails = () => {
  return (
      <div className='bg-white w-full h-auto flex flex-col items-center gap-10 p-6 lg:p-20'>
          {
              Details.map((x,i) => (
                  <label className="bg-white shadow-md text-[#000] w-[20rem] px-4 py-3" key={`b${i}`}>
                      {x.title}
                  </label>
              ))
          }
          <label className='w-[20rem] bg-white p-5'>
              
          </label>
    </div>
  )
}

export default UserDetails