import CategoryCard from "../molecules/CategoryCard"
import Collection from "../molecules/Collection"

const Products = () => {
    return (
      
      <div className="bg-[#D9D9D9] w-full h-auto flex flex-col items-center gap-10 p-6 lg:p-20">
            <Collection />
            <div className="max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5">
                 {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => (
            
              <CategoryCard key={`a${i}`}/>
          ))}
            </div>
           
    </div>
  )
}

export default Products