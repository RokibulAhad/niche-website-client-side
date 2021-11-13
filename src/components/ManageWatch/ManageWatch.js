import React, { useState } from 'react';

import './ManageWatch.css'

const ManageWatch = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const {key,name,img,description, _id} = props.watch

    const handleDelete =(id)=>{
        const confirmation =window.confirm('Are you Sure? want to delete this item?')
        if(confirmation){
            fetch(`https://gruesome-labyrinth-21556.herokuapp.com/deleteproduct/${id}`,{
                method:'DELETE',
                headers:{'content-type':'application/json'}
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining = allProduct.filter(order=>order._id !== id);
                setAllProduct(remaining);
            })
            
        }
        
        } 
    
    return (
        <div >
            <div className="">
                <div className="col">
                    <div className="card service shadow">
                        <img className="p-3 card-img-top" src={img}  alt="..."/>
                        <div className="card-body">
                            <h5> {name}</h5>
                            <p className="card-text">{description}</p>
                            <button className="info_btn3 mx-1" onClick={()=>handleDelete(_id)} >Delete</button>
                            
                        </div>                        
                    </div>
                </div> 
            </div>                     
        </div>
    );
};

export default ManageWatch;