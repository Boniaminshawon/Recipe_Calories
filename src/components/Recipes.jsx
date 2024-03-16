import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])



    return (
        <div className="border-[red] border-4 mt-16">
            <div className="space-y-4 text-center">
                <h1 className="font-semibold text-3xl">Our Recipes</h1>
                <p className="text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex mt-8">
                <div className="w-[70%] border-4 border-black grid grid-cols-2 gap-4">
                    {
                        recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                    }
                </div>





                <div className="w-[30%] border-4 border-[green]"></div>

            </div>
        </div>
    );
};

export default Recipes;