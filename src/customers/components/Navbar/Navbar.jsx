import React, { useState } from "react";
import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Support";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import { pink } from "@mui/material/colors";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // state for hamburger menu
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigateToCart = () => {
    navigate("/cart");
    setMenuOpen(false);  // Close the menu when navigating to cart
  };

  const navigateToProfile = () => {
    auth.user?.role === "ROLE_ADMIN" 
      || auth.user?.role === "ROLE_RESTAURANT_OWNER"
      ? navigate("/admin/restaurant")
      : navigate("/my-profile");
    setMenuOpen(false);  // Close the menu when navigating to profile
  };

  const handleCloseAuthModel = () => {
    navigate("/"); 
  };

  const navigateToHome = () => {
    navigate("/");
    setMenuOpen(false);  // Close the menu when navigating to home
  };

  const navigateToSupport = () => {
    navigate("/support");
    setMenuOpen(false);  // Close the menu when navigating to support
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseMenu();
    setMenuOpen(false);  // Close the menu when logging out
  };

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#2E8B57] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        {/* Logo and Text (hidden on small screens) */}
        <div
          onClick={navigateToHome}
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
        >
          <img
            src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats-thumbnail.png" // Replace with the image URL or path
            alt="Logo"
            className="w-10 h-10" // Adjust size as needed
          />
          <li className="logo font-semibold text-black-300 text-xl  lg:block">
            Forksy
          </li>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="flex items-center space-x-2 lg:space-x-10 hidden lg:flex">
        <div className="flex items-center">
          <IconButton onClick={() => navigate("/search")}>
            <SearchIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          {/* Hide Help Icon on small screens */}
          <IconButton
            onClick={navigateToSupport}
            className="hidden sm:flex"
          >
            <HelpIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          <IconButton onClick={navigateToCart}>
            <Badge
              color="black"
              badgeContent={cart.cartItems.length}
              sx={{ "& .MuiBadge-dot": { top: 6, right: 6 } }}
            >
              <ShoppingCartIcon className="text-4xl" sx={{ fontSize: "2rem" }} />
            </Badge>
          </IconButton>
        </div>

        <div className="flex items-center space-x-2">
          {auth.user?.fullName ? (
            <span
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={
                auth.user?.role === "ROLE_ADMIN"
                  ? handleOpenMenu
                  : navigateToProfile
              }
              className="font-semibold cursor-pointer"
            >
              <Avatar sx={{ bgcolor: "white", color: pink.A400 }} >
                {auth.user.fullName[0].toUpperCase()}
              </Avatar> 
            </span>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() =>
                auth.user?.role === "ROLE_ADMIN"
                  ? navigate("/admin")
                  : navigate("/super-admin")
              }
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center space-x-4">
        <IconButton onClick={toggleMenu}>
          <span className="text-white text-3xl">☰</span>
        </IconButton>
        <IconButton onClick={navigateToCart}>
          <Badge
            color="black"
            badgeContent={cart.cartItems.length}
            sx={{ "& .MuiBadge-dot": { top: 6, right: 6 } }}
          >
            <ShoppingCartIcon className="text-4xl" sx={{ fontSize: "2rem" }} />
          </Badge>
        </IconButton>
      </div>

      {/* Mobile Menu Options */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 right-0 bg-[#2E8B57] w-1/2 py-4 px-6 mt-16">
          <ul className="space-y-4 text-white">
            <li>
              <button onClick={navigateToHome} className="w-full text-left">Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/search")} className="w-full text-left">Search</button>
            </li>
            <li>
              <button onClick={navigateToSupport} className="w-full text-left">Help</button>
            </li>
            <li>
              <button onClick={navigateToProfile} className="w-full text-left">Profile</button>
            </li>
            <li>
              <button onClick={handleLogout} className="w-full text-left">Logout</button>
            </li>
          </ul>
        </div>
      )}

      <Auth handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default Navbar;
