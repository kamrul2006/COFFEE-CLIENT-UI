import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsers = () => {

    const Users = useLoaderData()
    //  { Email, Name, Photo, CreatedTIme}
    const [AllUsers, setAllUsers] = useState(Users)



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
                    fetch(`https://coffi-back.vercel.app/users/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = Users.filter(user => user._id !== id)
                                setAllUsers(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "User has been deleted.",
                                    icon: "success"
                                });
                            }
                        });
                }
            })
    }


    return (
        <div className="text-center">
            <h2 className="text-xl">Total User: {AllUsers.length}</h2>
            <div className="grid grid-cols-2 mx-20 my-10">
                {AllUsers.map(user => <div className=" shadow-md my-4 flex items-center gap-5 mx-2 px-5 py-3 border rounded-md bg-[#fce2bf88]" key={user._id}>

                    <div className="">
                        <img src={user.Photo} className="w-28 rounded-full ring-2 ring-yellow-950" />
                    </div>

                    <div className=" flex justify-between items-center gap-4">

                        {/* ----------------------text-------------------------- */}
                        <div>
                            <h1 className="my-2 bg-white text-center py-1 rounded-full text-yellow-950 text-lg font-serif italic font-semibold flex items-center justify-between px-5">Name: {user.Name}

                                {/* --------------buttons---------------------- */}
                                <div className="flex items-center gap-2">

                                    {/*-----update */}
                                    <Link>
                                        <button className="btn btn-xs btn-circle">
                                            <img src="https://img.icons8.com/pulsar-gradient/50/edit.png" className="w-7" />
                                        </button>
                                    </Link>

                                    {/* -----delete */}
                                    <button onClick={() => handleRemove(user._id)} className="btn btn-xs btn-circle mx-2 md:mx-0">
                                        <img className="w-7" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever" />
                                    </button>
                                </div>
                            </h1>
                            <p className="text-justify">
                                Email: {user.Email}
                            </p>

                            <p className=" text-center py-1 text-yellow-950 ">Created Time: {user.CreatedTIme} .</p>
                            {user.lastSignInTime && <p className=" text-center py-1 text-yellow-950 ">Last log in : {user.lastSignInTime} .</p>}

                        </div>

                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllUsers;