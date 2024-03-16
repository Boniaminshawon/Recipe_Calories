import calories from '../assets/images/Frame (8).png'
import time from '../assets/images/Frame(9).png'

const Recipe = ({ recipe }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, recipe_calories } = recipe;
    // console.log(recipe)
    return (
        <div>
            <div className="border-4 border-amber-400 p-5">
                <img src={recipe_image} alt="" />
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
                        <img className=' h-[90%] ' src={time} alt="" />
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img className=' h-[90%]' src={calories} alt="" />
                        <p>{recipe_calories} calories</p>
                    </div>
                </div>
                <button className=' px-3 mt-5 py-2 rounded-full text-[#150B2B] font-medium text-lg bg-[#0BE58A] '>Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipe;