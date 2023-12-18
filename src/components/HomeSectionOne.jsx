import LtSideBar from "./LtSideBar"
import Hero from "./Hero"
import RtSideBar from "./RtSideBar"

const HomeSectionOne = () => {
    return (
        <div className="grid grid-cols-6 w-full bg-[#c7ecee]">
            <LtSideBar />
            <Hero />
            <RtSideBar />
        </div>
    );
}

export default HomeSectionOne;