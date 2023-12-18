const SbCard = (props) => {
    return (
        <>
            <div className="flex flex-col space-y-2 border border-green-700 rounded-lg">
                <h2 className="text-xl bg-green-700 p-1 rounded-t-lg text-white">{props.title}</h2>
                <ul className="flex flex-col space-y-2 pl-2">
                    <li className="">শিক্ষা মন্ত্রণালয়</li>
                    <li className="">আন্ত: শিক্ষা বোর্ড</li>
                    <li className="">আই-বুক</li>
                    <li className="">কোভিড-১৯ ও ডায়াবেটিস</li>
                    <li className="">কারিগরি শিক্ষা অধিদপ্তর</li>
                </ul>
                <p className="text-xl bg-green-700 p-1 rounded-b-lg text-white">সকল লিংক</p>
            </div>
        </>
    );
}

export default SbCard;