import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddCoffees = () => {


    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo, price};
        console.log(newCoffee);
        console.log(photo);

        fetch('https://espresso-emporium-server-phi.vercel.app/coffees', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                

                if(data.insertedId){
                    form.reset();

                
                }
            })

    }

    return (

        <div className="bg-[url('https://i.imgur.com/CvCEuhS.png')]">
            <div className="max-w-[1320px] mx-auto pb-20 xl:pb-28">
                <div className="p-10">
                    <Link to='/' className="text-3xl flex items-center gap-4 font-rancho">
                        <BsArrowLeft />
                        Back to home
                    </Link>
                </div>

                <div className="bg-[#F4F3F0] py-16 rounded-md p-3">
                    <div className="text-center xl:my-8 ">
                        <h1 className="text-[24px] xl:text-[45px] font-rancho dark mb-4">Add New Coffee</h1>
                        <p className="max-w-[932px] mx-auto xl:text-lg dark font-raleway xl:leading-loose">
                            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>


                    <div className="max-w-[1096px] mx-auto p-3">

                        <form onSubmit={handleAddCoffee}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-raleway py-4">

                                <div>
                                    <label className="text-xl font-medium dark">Name</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="name" placeholder="Enter coffee name" />
                                </div>
                                <div>
                                    <label className="text-xl font-medium dark">Quantity</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="quantity" placeholder="Enter coffee quantity" />
                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-raleway py-4">

                                <div>
                                    <label className="text-xl font-medium dark">Supplier</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="supplier" placeholder="Enter coffee supplier" />
                                </div>
                                <div>
                                    <label className="text-xl font-medium dark">Taste</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="taste" placeholder="Enter coffee taste" />
                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-raleway py-4">

                                <div>
                                    <label className="text-xl font-medium dark">Category</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="category" placeholder="Enter coffee category" />
                                </div>
                                <div>
                                    <label className="text-xl font-medium dark">Details</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="details" placeholder="Enter coffee details" />
                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-raleway py-4">

                                <div>
                                    <label className="text-xl font-medium dark">Photo</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="photo" placeholder="Enter coffee photo" />
                                </div>

                                <div>
                                    <label className="text-xl font-medium dark">Price</label>
                                    <input className="w-full px-4 py-3 font-raleway input-focus rounded-md mt-3" type="text" name="price" placeholder="Enter coffee price" />
                                </div>

                            </div>

                            <div className="font-raleway py-4">

                                <div>
                                    <input className="w-full add-btn rounded-md mt-3" type="submit" placeholder="Enter coffee photo" />
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default AddCoffees;