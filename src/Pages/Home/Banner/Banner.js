import React from 'react';

const Banner = () => {
    return (
        <div className="lg:px-6 xl:px-0">
            <div className="mx-auto container relative z-0 px-4 xl:px-0">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-25">
                        <h1 className="text-3xl  xl:text-6xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-9/12 leading-tight text-heading-color">ONE WALLET TO RULE THEM ALL</h1>
                        <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Do you want to control your expenses and be always aware of how much money you have spent? </h2>
                        <div className="w-full flex justify-center md:block">
                            <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                        {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                        <img className="md:absolute md:w-1/2 md:-ml-28" src="https://pro-theme.com/html/keymoto/assets/img/img-info.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;