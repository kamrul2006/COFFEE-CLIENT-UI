import ico1 from "../../public/icons/1.png"
import ico2 from "../../public/icons/2.png"
import ico3 from "../../public/icons/3.png"
import ico4 from "../../public/icons/4.png"
const DownBanner = () => {
    return (
        <div className="bg-amber-50 px-20 flex items-center gap-8 justify-between py-5 md:py-10">
            {/* ------------------------item  1 ------------------------ */}
            <div className="text-center text-orange-950">
                <img src={ico1} alt="" className="mx-auto" />
                <h3 className="text-2xl font-semibold my-3">Awesome Aroma</h3>
                <p>
                    You will definitely be a fan of the design & aroma of your coffee
                </p>
            </div>

            {/* ------------------------item  2 ------------------------ */}
            <div className="text-center text-orange-950">
                <img src={ico2} alt="" className="mx-auto" />
                <h3 className="text-2xl font-semibold my-3">High Quality</h3>
                <p>
                    We served the coffee to you maintaining the best quality
                </p>
            </div>

            {/* ------------------------item  3 ------------------------ */}
            <div className="text-center text-orange-950">
                <img src={ico3} alt="" className="mx-auto" />
                <h3 className="text-2xl font-semibold my-3">Pure Grades</h3>
                <p>
                    The coffee is made of the green coffee beans which you will love
                </p>
            </div>

            {/* ------------------------item  4 ------------------------ */}
            <div className="text-center text-orange-950">
                <img src={ico4} alt="" className="mx-auto" />
                <h3 className="text-2xl font-semibold my-3">Proper Roasting</h3>
                <p>
                    Your coffee is brewed by first roasting the green coffee beans
                </p>
            </div>

        </div>
    );
};

export default DownBanner;