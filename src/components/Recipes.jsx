import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cooksCount, setCooksCount] = useState([]);
    const [currentCooks, setCurrentCooks] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])


    const handleToCook = (recipe) => {
        const isExist = cooksCount.find(item => item.recipe_id == recipe.recipe_id);
        if (!isExist) {
            const newCooksCount = [...cooksCount, recipe];
            setCooksCount(newCooksCount);
        }
        else{
            toast.error(`You already select this recipe.
            Please select another one.`);
        }
    }


    const handlePreparingBtn = (recipe_id, recipe, time, calories) => {
        const newCooksCount = cooksCount.filter(item => item.recipe_id !== recipe_id);
        setCooksCount(newCooksCount);


        const isExist = currentCooks.find(item => item.recipe_id == recipe.recipe_id);
        if (!isExist) {
            const newCurrentCooks = [...currentCooks, recipe];
            setCurrentCooks(newCurrentCooks);
        }
        else{
            toast.error(`You already choose this recipe for preparing to cook.
            Please choose another one.`)
        }
        const newTotalTime = time + totalTime;
        setTotalTime(newTotalTime);
        const newTotalCalories = calories + totalCalories;
        setTotalCalories(newTotalCalories);

    }

    return (
        <div className=" mt-16">
            <div className="space-y-4 text-center">
                <h1 className="font-semibold text-[34px]">Our Recipes</h1>
                <p className="text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex gap-3 mt-8">
                <div className="w-[65%] grid grid-cols-2 gap-4">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleToCook={handleToCook}></Recipe>)
                    }
                </div>

                <div className="w-[35%]">
                    <Sidebar handlePreparingBtn={handlePreparingBtn} cooksCount={cooksCount} currentCooks={currentCooks} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>

                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};
export default Recipes;
