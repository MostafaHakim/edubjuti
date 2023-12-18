import SbCard from "./SbCard";

const LtSideBar = () => {

    return (
        <div className="flex flex-col space-y-3 p-2 pr-0 col-span-1" id="lt-sidebar">
            <SbCard title="গুরুত্বপূর্ণ লিংক" />
            <SbCard title="সামাজিক যোগাযোগ" />
        </div>
    );
}

export default LtSideBar;