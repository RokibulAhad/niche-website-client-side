import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import './MyOrder.css'

const MyOrder = () => {
    const [myorder, setMyorder] = useState([])

    const {user} = useAuth();
    const email = user?.email

    const handleDelete =(id)=>{
        const confirmation =window.confirm('Are you Sure? want to delete this item?')
        if(confirmation){
            fetch(`https://gruesome-labyrinth-21556.herokuapp.com/orders/${id}`,{
                method:'DELETE',
                headers:{'content-type':'application/json'}
            })
            .then()
        }
        
        }
       

    useEffect(() =>{
        fetch(`https://gruesome-labyrinth-21556.herokuapp.com/myorder?email=${email}`)
        .then(res => res.json())
        .then(data =>setMyorder(data))
    })
    return (
        <div>
            <div className="container mb-5">
                <h2 className="my-4 section_title">{user.displayName}'s Orders</h2>
                <div className="row">
                    {
                        myorder.map(order=><div key={order._id} className="col-md-4 mt-4">
                        <img className="img-fluid" src={order.img} alt="" />
                        <h4 className="mt-3">{order.productName}</h4>
                        <button className="info_btn3" onClick={()=>handleDelete(order._id)} >Delete</button>
                        </div>)
                    
                    }

                </div>

            </div>
            
        </div>
    );
};

export default MyOrder;