import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../State/Authentication/Action';

const UserProfile = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate('/');
    dispatch(logout());
  };

  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
                 <div className='mt-10 px-4'>
        <h2 className='text-xl font-semibold'>Welcome to Forksy Food Delivery!</h2>
        <p className='mt-2'>
          Forksy Food Delivery App offers a seamless and efficient food delivery experience in Coimbatore. 
          With a wide variety of restaurants and cuisines to choose from, we ensure that you get your favorite meals delivered right to your doorstep.
        </p>
        <p className='mt-2'>
          Enjoy fast delivery, special discounts, and excellent customer service at Forksy. 
          Whether you're craving local delicacies or international cuisines, we’ve got you covered!
        </p>
      </div>

     
      <div className='mt-10 bg-yellow-200 p-4 rounded-md w-full max-w-md'>
        <h3 className='font-semibold text-lg'>Notice:</h3>
        <p>
          Currently, our delivery service is available only in Coimbatore. 
          We will expand  oue service soon!
        </p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className='py-5 text-2xl font-semibold'>{auth.user?.fullName}</h1>
        <p>Email: {auth.user?.email}</p>
        <Button onClick={handleLogout} variant='contained' sx={{ margin: "2rem 0rem" }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
