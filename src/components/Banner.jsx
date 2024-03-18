


const Banner = () => {
    return (
        <div className='lg:mt-4 mt-[2]'>
            <div style={{ backgroundImage: "url('https://i.ibb.co/HGBzcV7/Rectangle-1.png')" }} className='text-white text-center flex flex-col rounded-3xl justify-center items-center bg-cover bg-no-repeat bg-center space-y-8  lg:pb-0 pb-20 lg:h-[500px]' >
               
                <h1 className="font-bold lg:text-[44px]  lg:mx-40 mx-10  lg:mt-4 mt-20 text-[24px] ">Discover an exceptional cooking  class tailored for you!</h1>

                <p className="lg:mx-20 md:mx20 px:16 mx-3 lg:px-16 lg:text-lg  ">Learn and Master the basic to advance cooking. You will master a wide range of cuisines, cooking methods, kitchen tips, catering, and gain confidence  to individuals of all skill levels.</p>
                <div className="font-semibold text-lg space-x-1 space-y-6 lg:space-x-10">
                    <button className="bg-[#0BE58A] border border-[#0BE58A] text-black rounded-full py-1 px-3">Explore Now</button>
                    <button className="rounded-full py-1 px-3 border  ">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;