import cu from '../../public/cups/Rectangle 9.png';
import cup from '../../public/cups/Rectangle 10.png';
import cup1 from '../../public/cups/Rectangle 11.png';
import cup2 from '../../public/cups/Rectangle 12.png';
import cup3 from '../../public/cups/Rectangle 13.png';
import cup4 from '../../public/cups/Rectangle 14.png';
import cup5 from '../../public/cups/Rectangle 15.png';
import cup6 from '../../public/cups/Rectangle 16.png';

const FollowUs = () => {
    return (
        <div className='my-5 '>
            {/* ------------header--------------- */}
            <div className="text-center">
                <p>Follow Us Now</p>

                <h3 className="text-4xl text-orange-950 font-bold my-5">Follow on Instagram</h3>

            </div>

            <div className='grid grid-cols-4 gap-4 mx-32 my-10'>
                <img src={cu} className="w-56 h-52 mx-auto" />
                <img src={cup1} className="w-56 h-52 mx-auto" />
                <img src={cup2} className="w-56 h-52 mx-auto" />
                <img src={cup3} className="w-56 h-52 mx-auto" />
                <img src={cup4} className="w-56 h-52 mx-auto" />
                <img src={cup5} className="w-56 h-52 mx-auto" />
                <img src={cup6} className="w-56 h-52 mx-auto" />
                <img src={cup} className="w-56 h-52 mx-auto" />
            </div>
        </div>
    );
};

export default FollowUs;