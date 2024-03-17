


const Banner = () => {
    return (
        <div className='mt-4'>
            <div style={{backgroundImage:"url('../src/assets/images/Rectangle 1.png')"}} className='text-white text-center flex flex-col rounded-3xl justify-center items-center bg-cover bg-no-repeat bg-center space-y-8 h-[500px]' >
                <h1 className="font-bold text-[42px] mx-20 mt-2">Discover an exceptional cooking   <br /> class tailored for you!</h1>
                <p className="mx-20 px-16 text-lg ">Learn and Master the basic to advance cooking. You will master a wide range of cuisines, cooking methods, kitchen tips, catering, and gain confidence  to individuals of all skill levels.</p>
                <div className="font-semibold text-lg space-x-8">
                    <button className="bg-[#0BE58A] border border-[#0BE58A] text-black rounded-full py-1 px-3">Explore Now</button>
                    <button className="rounded-full py-1 px-3 border  ">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;