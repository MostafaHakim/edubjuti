import img1 from "../assets/img2.jpg"
import img2 from "../assets/img3.jpg"
import img3 from "../assets/img4.jpg"
import img4 from "../assets/img5.jpg"
import img5 from "../assets/img6.jpg"
import img6 from "../assets/img7.jpg"
import img7 from "../assets/img8.jpg"
import img8 from "../assets/img9.jpg"


const SectionTwoHero = () => {

    let cards = [
        {
            name: 'Web Design & Development',
            img: img1,
            techer: 'Anisul Haque'
        },
        {
            name: 'Degital Marketing',
            img: img2,
            techer: 'Sabbir Rahman'
        },
        {
            name: 'Electronics Engineering',
            img: img3,
            techer: 'Wazed Ali Khan'
        },
        {
            name: 'Electronics Engineering',
            img: img4,
            techer: 'Wazed Ali Khan'
        },
        {
            name: 'Spoken English',
            img: img5,
            techer: 'Amir Hamza'
        },
        {
            name: 'Graphics Design',
            img: img6,
            techer: 'Salma Mortuza'
        },
        {
            name: 'Japanise Language',
            img: img7,
            techer: 'Wangru'
        },
        {
            name: 'Microsoft Office Programe',
            img: img8,
            techer: 'Md Atahar ali khan'
        }

    ]


    return (
        <>
            <div className="grid grid-cols-4 p-4 justify-between items-center gap-2">
                {cards.map(card =>
                    <div className="flex flex-col p-4 items-center justify-center">
                        <img src={card.img} alt="Src Img" />
                        <h1 className="text-lg font-poppins">{card.name}</h1>
                        <h2>Co-Ordinetor</h2>
                        <p className="text-sm font-roboto">{card.techer}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default SectionTwoHero;