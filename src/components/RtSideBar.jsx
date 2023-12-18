import CardRt from "./CardRt";

const RtSideBar = () => {
    return (
        <div className="flex flex-col space-y-4 p-2 pl-0 col-span-1" id="lt-sidebar">
            <CardRt />
            <CardRt />
        </div>
    );
}

export default RtSideBar;