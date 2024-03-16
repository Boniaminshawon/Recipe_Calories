


const Banner = () => {
    return (
        <div className='mt-4'>
            <div style={{backgroundImage:"url('../src/assets/images/Rectangle 1.png')"}} className='text-white text-center flex flex-col rounded-3xl justify-center items-center bg-cover bg-no-repeat bg-center space-y-8 p-[85px]' >
                <h1 className="font-bold text-4xl mx-10 mt-2">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mx-5 ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="font-semibold text-lg space-x-8">
                    <button className="bg-[#0BE58A] border border-[#0BE58A] text-black rounded-full py-1 px-3">Explore Now</button>
                    <button className="rounded-full py-1 px-3 border  ">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;