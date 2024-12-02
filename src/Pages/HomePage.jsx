import Banner from "../Components/Banner";
import DownBanner from "../Components/DownBanner";
import ico from "../../public/icons/1.png"
import FollowUs from "../Components/FllowUs";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'
import bg from '../../public/more/1.png'


const HomePage = () => {

    const Coffees = useLoaderData()

    const [AllCoffee, setAllCoffee] = useState(Coffees)

    const handleRemove = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://coffi-back.vercel.app/coffees/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = Coffees.filter(user => user._id !== id)
                                setAllCoffee(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Coffee has been deleted.",
                                    icon: "success"
                                });
                            }
                        });
                }
            })
    }

    return (
        <div>
            <Banner></Banner>
            <DownBanner></DownBanner>

            {/* ---------------------------------main part--------------------- */}
            <div className="mx-auto my-20 bg-cover"
                  style={{ backgroundImage: `url(${bg})` }}>

                {/* ------------header----------------------- */}
                <div className="text-center">
                    <p>--- Sip & Savor ---</p>
                    <h3 className="text-4xl text-orange-950 font-bold my-5">Our Popular Products: ({AllCoffee.length})</h3>

                    <Link to={"/addCoffee"}>
                        <button className="py-1 px-4 bg-amber-500 rounded border hover:border-2 border-orange-950 font-semibold text-white flex items-center gap-2 mx-auto">
                            Add Coffee
                            <img src={ico} className="w-5" />
                        </button>
                    </Link>

                </div>

                {/* --------------------------all Coffee--------------------- */}
                <div className="grid grid-cols-2 mx-20 my-10">
                    {AllCoffee.map(coffee => <div className=" shadow-md my-4 flex items-center gap-5 mx-2 px-5 py-3 border rounded-md bg-[#fce2bf88]" key={coffee._id}>

                        <div className="w-1/3 h-[200px]">
                            <img src={coffee.photo} className="w-full h-full object-cover rounded-xl" />
                        </div>

                        <div className="w-2/3 flex justify-between items-center gap-4">

                            {/* ----------------------text-------------------------- */}
                            <div>
                                <h1 className="text-xl font-bold">{coffee.name}</h1>
                                <p className="text-justify">
                                    {coffee.details}
                                </p>

                                <p className="my-2 bg-white text-center py-1 rounded-full text-yellow-950 text-lg font-serif italic font-semibold ">Price: {coffee.price} $ only.</p>
                            </div>


                            {/* --------------buttons---------------------- */}
                            <div className="flex md:flex-col gap-5">

                                {/*-----update */}
                                <Link to={`/updateCoffee/${coffee._id}`}>
                                    <button className="btn btn-sm btn-circle">
                                        <img src="https://img.icons8.com/pulsar-gradient/50/edit.png" className="w-7" />
                                    </button>
                                </Link>

                                {/* -----delete */}
                                <button onClick={() => handleRemove(coffee._id)} className="btn btn-sm btn-circle mx-2 md:mx-0">
                                    <img className="w-7" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever" />
                                </button>

                                {/* ---details */}
                                <button className="btn btn-sm btn-circle">
                                    <img className="w-7" src="https://img.icons8.com/avantgarde/50/about.png" alt="about" />
                                </button>
                            </div>

                        </div>

                    </div>)}

                </div>

            </div>

            <FollowUs></FollowUs>



        </div>
    );
};

export default HomePage;