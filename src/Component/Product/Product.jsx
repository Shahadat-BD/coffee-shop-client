import React, { useEffect, useState } from 'react';
import {AiOutlineDelete, AiOutlineEdit, AiOutlineEye} from 'react-icons/ai'
const Product = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/add-coffee")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    // coffee deleted handler

    const handleDelete = id =>{
         fetch(`http://localhost:4000/add-coffee/${id}`,{
            method:"DELETE",
         })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
                 alert("deleted coffee successfully")
                 const remainingProduct = product.filter(prd => prd._id !== id)
                 setProduct(remainingProduct)
            }
         })
    }

    return (
        <div className='w-[60%] m-auto'>
            <div className='grid grid-cols-2 '>
             {
                product.map(prd => <div className='flex justify-around items-center m-5 py-5 rounded-md bg-gray-100 '>
                    <div className='ml-4'>
                      <img className='h-[100px] w-[100px]' src={prd.photo} alt="" srcset="" />
                    </div>
                    <div className='flex-1 ml-3'>
                        <p key={prd._id}  className='text-lg'>Name : {prd.name}</p>
                        <p className='text-lg'> chef : {prd.chef}</p>
                        <p className='text-lg'> category : {prd.category}</p>
                    </div>
                    <div className='mr-4'>
                         <AiOutlineEye className='text-3xl cursor-pointer rounded-md bg-[#D2B48C] text-white p-2 mb-2'/>
                         <AiOutlineEdit className='text-3xl cursor-pointer rounded-md bg-black text-white p-2 mb-2'/>
                         <AiOutlineDelete onClick={()=>handleDelete(prd._id)} className='text-3xl cursor-pointer rounded-md bg-red-500 text-white p-2 mb-2'/>
        
                    </div>
                </div>)
             }
        </div>
        </div>
    );
};

export default Product;