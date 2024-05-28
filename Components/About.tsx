import React from "react"

const About = () => {
    return (
        <div className="bg-[#121121] pb-[3rem] pl-[8rem] pt-[4rem] md:pt-[8rem]">
            <div className="w=[80%] mx-auto items-center">
                <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                    ABOUT <span className="text-yellow-400">ME</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <p className="text-[19px] text-slate-300 w-[88%]">
                        Tech enthusiast driven by a relentless curiosity and a deep-seated desire to explore the frontiers of innovation. I am eager to contribute my skills  to a company that values dedication and fosters a culture of discovery. In pursuit of a position where my potential can flourish, I am committed to bringing my best to every task.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default About;