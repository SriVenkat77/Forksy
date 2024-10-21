import React, { useEffect } from 'react'
import PaymentCard from '../../components/Order/PaymentCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersOrders } from '../../../State/Customers/Orders/Action';

const Orders = () => {
  const {order,auth}=useSelector(store=>store);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")

  useEffect(()=>{
    dispatch(getUsersOrders(jwt))
  },[auth.jwt, dispatch, jwt])
  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Payments</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
     { order.orders.map((order)=>order.items.map((item)=><PaymentCard status={order.orderStatus} order={item}/>))}
    </div>
    </div>
  )
}

export default Orders
