import banner from '../assets/banner.jpg'



const Hero = () => {
    return (

        <div className="p-2 col-span-4 rounded-md" id="hero">
            <img className='rounded-md' src={banner} alt="Banner" />
        </div>

    );
}

export default Hero;