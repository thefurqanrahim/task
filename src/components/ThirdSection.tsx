
export default function ThirdSection() {
    return (
        <div className="bg-thirdSec-gradient rounded-3xl text-white py-24 px-4 md:px-8 lg:px-12 mx-3 mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col justify-center items-start p-4 md:p-6 lg:p-8">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-snug">
                        Transforming your <span className="font-bold">Ideas into Reality</span>
                    </h3>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                        Let's build something extraordinary together to captivate your audience.
                    </p>
                </div>
                <div className="circleDirection items-center p-4 md:p-6 lg:p-8">
                    <div className="flex lg:justify-center items-center px-6 py-4 md:px-8 md:py-6 rounded-full border-white border-2  w-56 h-56">
                        <h3 className="text-lg text-center">
                            Let’s Work Together!
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
}
