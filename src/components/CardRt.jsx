import cardImage from "../assets/Deputy Minister1.jpg"

const CardRt = () => {
    return (
        <>
            <div className="flex flex-col space-y-2 border border-green-700 rounded-lg bg-white">
                <h2 className="text-sm bg-green-700 p-1 rounded-t-lg text-white">চেয়ারম্যান, বাংলাদেশ কারিগরি শিক্ষা বোর্ড</h2>
                <img className="" src={cardImage} alt="Image" />
                <p className="text-center text-sm">মহিবুল হাসান চৌধুরী এম.পি.</p>
                <span className="text-xs bg-green-700 p-1 rounded-b-lg text-white">বিস্তারিত</span>
            </div>
        </>
    );
}

export default CardRt;