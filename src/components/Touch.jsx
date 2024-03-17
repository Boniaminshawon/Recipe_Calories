import phone from '../assets/images/Group 1171275317.png'
import email from '../assets/images/Group 1171275318.png'
import location from '../assets/images/Group 1171275321.png'
const Touch = () => {
    return (
        <div className=" mt-16">


            <div className="my-9 ">

                <div className="text-center space-y-7">

                    <h2 className=" font-semibold text-[34px]">Get In Touch</h2>
                    <p className="text-[#150B2B99] mx-20 px-20 font-secondary text-lg">You can get in touch with us . You can call or email us. Also you can
                        visit our club from the belows address. Also you can send us any kinds of massage by this form.
                    </p>

                </div>
                <div>
                    <div className="grid lg:gap-6 gap-10 lg:grid-cols-3 w-full lg:mt-12 mt-8">
                        <div
                            className="text-start col-span-2 lg:col-span-1 border-[1px] rounded-2xl border-[rgba(19, 19, 24, 0.10)] lg:space-y-8 space-y-5 p-5">
                            <div className="bg-[#BCED6D1A] p-7 lg:mt-2 rounded-2xl  shadow-lg  ">
                                <div className="mb-6"><img src={phone} alt="" />

                                </div>
                                <p className="font-semibold">Phone Number : </p>
                                <h3 className="font-medium text-[#150B2B99] font-secondary text-lg">(+62) 123-321-543</h3>
                            </div>
                            <div className="bg-[#FDDD5F1A] p-7 rounded-2xl  shadow-lg  ">
                                <div className="mb-6">
                                    <img src={email} alt="" /></div>
                                <p className="font-semibold ">Email : </p>
                                <h3 className="font-medium text-[#150B2B99] font-secondary text-lg">
                                    cooking@support.com</h3>
                            </div>
                            <div className="bg-[#629CF31A] p-7 rounded-2xl shadow-lg ">
                                <div className="mb-6"><img src={location} alt="" /></div>
                                <p className="font-semibold">Location : </p>
                                <h3 className="font-medium text-[#150B2B99] font-secondary text-lg">
                                    152/1 Mohakhali Wireless Gate</h3>
                            </div>
                        </div>

                        <div className="lg:p-6   text-xl col-span-2 border rounded-2xl ">
                            <div className="gap-7 grid lg:grid-cols-2">
                                <div className="space-y-4 ">
                                    <label className='text-lg font-semibold'>Your Name</label>
                                    <input type="text" placeholder="Enter your full name"
                                        className="input bg-[#13131808] font-secondary input-bordered w-full " />
                                </div>
                                <div className="space-y-4 ">
                                    <label className='text-lg font-semibold'>Your Email</label>
                                    <input type="email" placeholder="Enter your email"
                                        className="input bg-[#13131808] font-secondary input-bordered w-full" />
                                </div >
                                <div className="space-y-4 ">
                                    <label className='text-lg font-semibold'>Subject</label>
                                    <input type="text" placeholder="Enter your Subject"
                                        className="input bg-[#13131808] font-secondary input-bordered w-full" />
                                </div>
                                <div className="space-y-4 ">
                                    <label className='text-lg font-semibold'> Phone Number</label>
                                    <input type="number" placeholder="Enter your phone number"
                                        className="input bg-[#13131808] font-secondary input-bordered w-full" />

                                </div>

                            </div>

                            <div className="space-y-4 mt-6 ">
                                <label className='text-lg font-semibold'>Message</label>
                                <textarea className="textarea  font-secondary textarea-bordered bg-[#13131808] w-full h-[230px]  "
                                    placeholder="Write your message"></textarea>
                            </div>

                            <button
                                className="w-full h-14 rounded-xl mt-8 bg-[#0BE58A]  border-[2px] border-black text-black text-2xl font-semibold">Send
                                Message</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

Touch.propTypes = {

}
export default Touch;