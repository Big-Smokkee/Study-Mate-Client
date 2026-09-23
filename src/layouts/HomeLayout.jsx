import { useLoaderData } from "react-router";
import HeroSection from "./HeroSection";



const HomeLayout = () => {
    const slidesData = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto px-6 py-4">
            <HeroSection slidesData={slidesData}></HeroSection>
        </div>
    );
};

export default HomeLayout;