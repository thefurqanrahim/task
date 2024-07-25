
export default function Navbar() {
    return (
        <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
            <div className="w-full md:w-10/12 lg:w-8/12 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-bannerHeadingColor leading-tight">
                    Your Ultimate Resource Hub for Digital Success
                </h1>
            </div>

            <div className="w-full md:w-10/12 lg:w-8/12 text-center mt-4">
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                    Explore our comprehensive library of tools and templates for developers, designers, marketers, and branding experts
                </p>
            </div>
        </div>
    );
}
