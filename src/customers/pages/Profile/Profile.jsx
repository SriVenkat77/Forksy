import React from "react";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { Divider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import UsersAddresses from "../UsersAdresses/UsersAddresses";
import Favorite from "../Favorite/Favorite";
import UserProfile from "./UserProfile";
import CustomerEvents from "./CustomerEvents";

import Payment from "../PaymentSuccess/Payments";

const Profile = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation />
      </div>
      <Divider orientation="vertical" flexItem /> 
      <div className="lg:w-[100%]">
        <Routes>
        <Route path="/" element={<UserProfile/>} />
       
        <Route path="/favorites" element={<Favorite/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/address" element={<UsersAddresses/>} />
          <Route path="/events" element={<CustomerEvents/>} />
          <Route path="/payments" element={<Payment/>} />
         
       
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
