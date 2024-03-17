import calories from '../assets/images/Frame (8).png'
import time from '../assets/images/Frame(9).png'


const Recipe = ({ recipe ,handleToCook}) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, recipe_calories } = recipe;
    





    return (
        <div>
            <div className="border shadow-xl  rounded-2xl p-4">
                <img className='h-[180px] w-full rounded-2xl' src={recipe_image} alt="" />
                <h2 className="font-semibold text-lg mt-5">{recipe_name}</h2>
                <p className='font-secondary text-[#878787] text-sm mt-3'>{short_description}</p>
                <div className='border-y-[2px] mt-4 py-4'>
                    <h4 className='font-medium '>Ingredients: {ingredients.length}</h4>
                    {
                        ingredients.map((ingredient, index) => <li key={index} className='font-secondary pl-2 text-sm mb-1 text-[#878787]'>{ingredient}</li>)
                    }
                </div>

                <div className='flex justify-between  gap- font-secondary text-[#282828CC] text-sm pt-6'>
                    <div className='flex justify-between items-center'>
                        <img className=' h-[85%] ' src={time} alt="" />
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img className=' h-[85%]' src={calories} alt="" />
                        <p>{recipe_calories} calories</p>
                    </div>
                </div>
                <button onClick={()=>handleToCook(recipe)} className=' px-3 mt-5 py-[6px] rounded-full text-[#150B2B] font-medium text-lg bg-[#0BE58A] '>Want To Cook</button>
            </div>
        </div>
    );
};

export default Recipe;