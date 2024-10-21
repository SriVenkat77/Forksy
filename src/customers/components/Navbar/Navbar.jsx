import React from "react";
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
import {  useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import { pink } from "@mui/material/colors";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToProfile = () => {
    auth.user?.role === "ROLE_ADMIN" 
      || auth.user?.role === "ROLE_RESTAURANT_OWNER"
      ? navigate("/admin/restaurant")
      : navigate("/my-profile");
  };

  const handleCloseAuthModel = () => {
    navigate("/");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToSupport = () => {
    navigate("/support"); 
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseMenu();
  };

  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#2E8B57] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          onClick={navigateToHome}
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
        >
          <img
            src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats-thumbnail.png" // Replace with the image URL or path
            alt="Logo"
            className="w-10 h-10" // Adjust size as needed
          />
          <li className="logo font-semibold text-black-300 text-2xl">
            Forksy
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton onClick={() => navigate("/search")}>
            <SearchIcon sx={{ fontSize: "2rem" }} /><span style={{ fontSize: "1rem" }}>Search</span>
          </IconButton>
          <IconButton onClick={navigateToSupport}>
          <HelpIcon sx={{ fontSize: "2rem" }} /> <span style={{ fontSize: "1rem" }}>Help</span>
        </IconButton>
        
        <IconButton onClick={navigateToCart}>
          <Badge color="black" badgeContent={cart.cartItems.length}>
            <ShoppingCartIcon className="text-4xl" sx={{ fontSize: "2rem" }} /> <span style={{ fontSize: "1rem" }}>Cart</span>
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
              <PersonIcon sx={{ fontSize: "2rem" }} /> <span style={{ fontSize: "1rem" }}>Sign-In</span>
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

      <Auth handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default Navbar;
