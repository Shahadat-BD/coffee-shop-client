import React from 'react';

const AddCoffe = () => {
    const handleFormSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const category = form.category.value
        const details = form.details.value
        const photo =  form.photo.value
        const productInfo = {name,chef,supplier,category,details,photo}
        fetch("http://localhost:4000/add-coffee",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(productInfo)
        })
        .then(res=> res.json())
        .then(data => {
            if (data.acknowledged === true) {
                alert("product created successfully in database")
            }
        })
    }
    return (
        <div className='w-[60%] m-auto my-20 bg-gray-200 text-center'>
             <h3 className='text-2xl font-bold p-3'>Add New Coffee</h3>
            <p className='text-gray-500 mb-5 p-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleFormSubmit} className='p-10'>
                <div className='grid grid-cols-2 gap-5'>
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='coffee name' name="name" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='chef' name="chef" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='supplier' name="supplier" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='taste' name="taste" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='category' name="category" id="" />
                <input className='py-2 pl-2 rounded-sm' type="text" required placeholder='details' name="details" id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2 rounded-sm' type="text" required placeholder='photo' name="photo" id="" /> 
                <input className='w-full cursor-pointer bg-orange-300 text-white py-2 font-bold rounded-sm' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffe;