import bg from '../../public/more/3.png'
const Banner = () => {
    return (
        <div className='bg-cover bg-center py-52 grid grid-cols-2'
            style={{ backgroundImage: `url(${bg})` }}>
            <div>

            </div>
            <div className='px-20 '>
                <h3 className='text-4xl text-white font-bold'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='text-white my-10'>
                    {"  It's"} coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>
                <button className='bg-yellow-700 px-4 py-1 hover:text-white font-bold text-xl'>Learn More</button>
            </div>

        </div>
    );
};

export default Banner;