import HomeLayout from "../layouts/HomeLayout";
import aboutMainImage from "../assets/Images/aboutMainImage.png"
// import steveJobs from "../assets/Images/steveJobs.png"
import apj from "../assets/Images/apj.png"
import billGates from "../assets/Images/billGates.png"
import einstein from "../assets/Images/einstein.png"
import nelsonMandela from "../assets/Images/nelsonMandela.png"

function Aboutus(){
    return(
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold ">
                            Affordable and quality education.
                        </h1>
                        <p className="text-xl text-gray-200 ">
                            Our goal is to provide affordable and quality education to the world. We are providing the platform for aspiring teachers and students to share their skills, creativity and knowledge with each other to empower and contribute in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2 ">
                        <img 
                            src={aboutMainImage} 
                            className="drop-shadow-2xl" 
                            alt="about main page" 
                            id="test1" 

                        /> 
                    </div>
                </div>

                <div className="carousel w-1/2 my-10 mx-auto">
                    
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400 " />
                            <p className="text-xl text-gray-200">"Teaching is a very noble profession that shapes the character, calibre, and future of an individual."</p>
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 

                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={billGates} className="w-40 rounded-full border-2 border-gray-400 " />
                            <p className="text-xl text-gray-200">"I really had a lot of dreams when I was a kid, and I think a great deal of that grew out of the fact that I had a chance to read a lot."</p>
                            <h3 className="text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 

                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={einstein} className="w-40 rounded-full border-2 border-gray-400 " />
                            <p className="text-xl text-gray-200">"It is the supreme art of the teacher to awaken joy in creative expression and knowledge."</p>
                            <h3 className="text-2xl font-semibold">ALbert Einstein</h3>
                            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 

                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400 " />
                            <p className="text-xl text-gray-200">"Education is the most powerful weapon which you can use to change the world."</p>
                            <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </HomeLayout>
    );
}

export default Aboutus