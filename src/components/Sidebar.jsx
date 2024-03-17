import PropTypes from 'prop-types';

const Sidebar = ({ cooksCount, currentCooks, handlePreparingBtn, totalTime, totalCalories }) => {

    return (
        <div className="border rounded-2xl text-center shadow-xl font-secondary  py-4">
            <h1 className="font-semibold text-2xl border-b-2 pb-3 mx-16 font-primary">Want to Cook: {cooksCount.length}</h1>


            {/* table */}
            <div className="overflow-x-auto text-[#878787]  mt-5">
                <table className="table">
                    {/* head */}
                    <thead className="font-medium  text-base">
                        <tr className="">

                            <th></th>
                            <th >Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>

                        </tr>
                    </thead>

                    {
                        cooksCount.map((recipe, index) => (

                            <tbody key={index} className="">
                                {/* row 1 */}
                                <tr className="text-xs bg-base-200 ">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.recipe_calories} calories</td>
                                    <td><button onClick={() => handlePreparingBtn(recipe.recipe_id, recipe, recipe.preparing_time, recipe.recipe_calories)} className="bg-[#0BE58A] text-black p-2 font-medium rounded-full">preparing</button></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>

            <h1 className="font-semibold text-2xl border-b-2 pb-3 mx-16 my-5 font-primary">Currently Cooking: {currentCooks.length}</h1>
            <div className="overflow-x-auto text-[#878787]  ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-medium  text-base">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    {
                        currentCooks.map((recipe, index) => (

                            <tbody key={index} className="">
                                {/* row 1 */}
                                <tr className=" bg-base-200 ">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.recipe_calories} calories</td>

                                </tr>
                            </tbody>
                        ))
                    }

                    <tfoot>
                        <tr >
                            <th></th>
                            <th></th>
                            <th >Total Time: <br />{totalTime} minutes</th>
                            <th>Total Calories: <br />{totalCalories} calories</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    cooksCount: PropTypes.array,
    currentCooks: PropTypes.array,
    handlePreparingBtn: PropTypes.func,
    totalTime:PropTypes.number,
    totalCalories:PropTypes.number

}
export default Sidebar;