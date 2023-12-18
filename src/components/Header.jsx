import logo from '../assets/logo.png'
import Navbar from './Navbar';
const Header = () => {
    return (
        <>
            <div className='flex flex-row items-center justify-start p-8 space-x-4'>
                <img className='w-24 h-24' src={logo} alt="Logo" />
                <div className='space-y-2 pl-4'>
                    <h1 className='text-4xl font-roboto'>BEGUMGONJ JUBO UNNAYAN TRAINING INSTITUTE</h1>
                    <p className='text-xl font-poppins'>কারিগরি শিক্ষা গ্রহণ করবো, স্মার্ট বালাদেশ গড়বো।</p>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Header;