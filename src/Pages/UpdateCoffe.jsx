import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const Coffee = useLoaderData()
    const { name, supplier, chef, taste, category, details, photo, price, _id } = Coffee

    const HandleUpdateCoffee = e => {
        e.preventDefault()

        const name = e.target.coffee_name.value
        const supplier = e.target.coffee_supplier.value
        const chef = e.target.coffee_chef.value
        const taste = e.target.coffee_taste.value
        const category = e.target.coffee_category.value
        const details = e.target.coffee_details.value
        const photo = e.target.coffee_photo.value
        const price = e.target.coffee_price.value


        const newCoffee = { name, supplier, chef, taste, category, details, photo, price }
        // console.log(newCoffee)

        //------------------sending data to server----------------------
        fetch(`https://coffi-back.vercel.app/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'Coffee Added Properly.',
                        icon: 'success',
                        confirmButtonText: "It's Great"
                    })
                }

            })
    }



    return (
        <div className="mx-20 my-10">
            <Link to={"/"} className="w-fit">
                <p className="text-3xl font-bold text-orange-950 flex items-center gap-3 w-fit">
                    <img src="https://img.icons8.com/fluency/48/long-arrow-left.png" className="w-7" />
                    Go back
                </p>
            </Link>

            <div className="bg-gray-100 my-10 py-8 px-10 rounded-lg">
                {/* -------------header-------------------------- */}
                <div>
                    <h3 className="text-5xl text-center font-bold text-orange-950">Update Existing Coffee Details</h3>
                    <p className="my-5 text-center px-36">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                {/* -------------form---------------------------- */}
                <form onSubmit={HandleUpdateCoffee} className="card-body">

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Coffee Name:</span>
                            </label>
                            <input defaultValue={name} name="coffee_name" type="text" placeholder="Enter coffee name" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Chef :</span>
                            </label>
                            <input defaultValue={chef} name="coffee_chef" type="text" placeholder="Enter coffee chef" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Supplier :</span>
                            </label>
                            <input defaultValue={supplier} name="coffee_supplier" type="text" placeholder="Enter coffee Supplier" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Taste :</span>
                            </label>
                            <input defaultValue={taste} name="coffee_taste" type="text" placeholder="Enter coffee Taste" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Category :</span>
                            </label>
                            <input defaultValue={category} name="coffee_category" type="text" placeholder="Enter coffee Category" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Price :</span>
                            </label>
                            <input defaultValue={price} name="coffee_price" type="number" placeholder="Enter coffee Price" className="input input-bordered" required />
                        </div>



                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Details:</span>
                        </label>
                        <input defaultValue={details} name="coffee_details" type="text" placeholder="Enter coffee Details" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Photo Url:</span>
                        </label>
                        <input defaultValue={photo} name="coffee_photo" type="text" placeholder="Enter photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="bg-[#D2B48C] py-2 text-orange-950 font-serif italic hover:font-semibold text-xl rounded-md hover:border-2 border-orange-950">Update Coffee Details</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateCoffee;