import { Link } from "react-router-dom";
import datas from './data.js'
const SectionTwoHero = () => {
    return (
        <>

            <div className="grid grid-cols-4 p-4 justify-between items-center gap-2">
                {datas.map(data =>
                    <div className="flex flex-col p-4 items-center justify-center" key={data.id}>
                        <img src={data.img} alt="Src Img" />
                        <h1 className="text-lg font-poppins">{data.name}</h1>
                        <h2>Co-Ordinetor</h2>
                        <p className="text-sm font-roboto">{data.techer}</p>
                        <Link to={`/courses/${data.id}`}>See more...</Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default SectionTwoHero;