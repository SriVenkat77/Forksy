import React, { useState } from "react";
import {
  Divider,
  Drawer,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EventIcon from "@mui/icons-material/Event";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


import Orders from "../Orders/Orders";
import UsersAddresses from "../UsersAdresses/UsersAddresses";
import Favorite from "../Favorite/Favorite";
import CustomerEvents from "./CustomerEvents";
import Payment from "../PaymentSuccess/Payments";

// Menu items
const menu = [
  { title: "Profile", icon: <AccountCircleIcon />, path: "/" },
  { title: "Orders", icon: <ShoppingBagIcon />, path: "/orders" },
  { title: "Favorites", icon: <FavoriteIcon />, path: "/favorites" },
  { title: "Addresses", icon: <HomeIcon />, path: "/addresses" },
  { title: "Payments", icon: <AccountBalanceWalletIcon />, path: "/payments" },
  { title: "Events", icon: <EventIcon />, path: "/events" },
];

const ProfileNavigation = ({ handleClose, open }) => {
  const isSmallScreen = useMediaQuery("(max-width:1020px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      handleLogout();
    } else {
      navigate(`/my-profile${item.path}`);
    }
    if (isSmallScreen) handleClose?.();
  };

  return (
    <Drawer
    sx={{
      zIndex: 1,
      position: 'fixed',
      top: '30px', // Ensure the sidebar starts 20px below the top of the screen
    }}
      anchor="left"
      open={open}
      onClose={handleClose}
      variant={isSmallScreen ? "temporary" : "permanent"}
    >
      <div className="w-[20vw] lg:w-[15vw] h-[100vh] flex flex-col justify-center text-xl space-y-8 pt-16">
        {menu.map((item, i) => (
          <React.Fragment key={i}>
            <div
              onClick={() => handleNavigate(item)}
              className="px-5 flex items-center space-x-5 cursor-pointer"
            >
              {item.icon}
              <span className="hidden lg:block">{item.title}</span> {/* Hide title on small screens */}
            </div>
            {i !== menu.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </Drawer>
  );
};

const UserProfile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="mt-10 px-4">
        <h2 className="text-xl font-semibold">Welcome to Forksy Food Delivery!</h2>
        <p className="mt-2">
          Forksy Food Delivery App offers a seamless and efficient food delivery experience in Coimbatore.
          With a wide variety of restaurants and cuisines to choose from, we ensure that you get your favorite meals delivered right to your doorstep.
        </p>
        <p className="mt-2">
          Enjoy fast delivery, special discounts, and excellent customer service at Forksy.
          Whether you're craving local delicacies or international cuisines, we’ve got you covered!
        </p>
      </div>

      <div className="mt-10 bg-yellow-200 p-4 rounded-md w-full max-w-md">
        <h3 className="font-semibold text-lg">Notice:</h3>
        <p>
          Currently, our delivery service is available only in Coimbatore.
          We will expand our service soon!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">{auth.user?.fullName}</h1>
        <p>Email: {auth.user?.email}</p>
        <Button onClick={handleLogout} variant="contained" sx={{ margin: "2rem 0rem" }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 1020px)");

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={`flex ${isSmallScreen ? "flex-col" : "lg:flex-row"} justify-between`}>
      {/* Hamburger button for small screens */}
      {isSmallScreen && (
        <IconButton
          onClick={handleMenuToggle}
          style={{
            position: "fixed",
            top: 70,
            left: 15,
            zIndex: 1000,
            color: "#fff",
                      }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      )}

      {/* Profile Navigation */}
      <div className={`w-full ${isSmallScreen ? "mb-4" : "lg:w-[20%]"}`}>
        <ProfileNavigation open={menuOpen} handleClose={handleMenuToggle} />
      </div>

      {/* Divider for larger screens */}
      {!isSmallScreen && <Divider orientation="vertical" flexItem />}

      {/* Main Content */}
      <div className={`w-full ${isSmallScreen ? "" : "lg:w-[80%]"}`}>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/addresses" element={<UsersAddresses />} />
          <Route path="/events" element={<CustomerEvents />} />
          <Route path="/payments" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
