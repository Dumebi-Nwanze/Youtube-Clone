import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Avatar } from "@mui/material";
import { useState } from "react";

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSideBar = () => {
    const sidebarContainer = document.getElementById("sideBarContainer");
    const homeContainer = document.getElementById("homeContainer");
    sidebarContainer.classList.toggle("close");
    homeContainer.classList.toggle("extraMargin");
  };
  const handleSearch = () => {
    if (search !== "") {
      const searchLink = `https://www.youtube.com/results?search_query=${search}`;
      window.location.href = searchLink;
    }
  };
  return (
    <div>
      <header className="fixed w-screen z-20 mb-0">
        <div
          className="headerDiv m-0 py-3 px-6 bg-secondaryColor
         font-normal w-full h-14 box-border flex justify-between
         items-center text-textMain"
        >
          <div className="flex items-center">
            <span
              onClick={toggleSideBar}
              className="cursor-pointer mr-10 sm:mr-4"
            >
              <MenuIcon />
            </span>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-4baf1.appspot.com/o/youtube.png?alt=media&token=a1f29c5f-c10c-4af8-8f50-c36be872bcb5"
              alt="Youtube Logo"
              className="hidden cursor-pointer py-0 px-4 h-14 sm:inline"
            />
          </div>
          <div className="searchContainer flex items-center h-10 relative sm:min-w-[650px]">
            <div className="searchBox w-full relative flex items-center">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="outline-none border-[1px] border-solid
                 border-secondaryLight bg-primaryColor text-textMain 
                 text-base py-[6px] px-[9px] w-full"
              />
              {search !== "" && (
                <span
                  onClick={() => setSearch("")}
                  className="absolute right-[10px] cursor-pointer"
                >
                  <CloseIcon />
                </span>
              )}
            </div>
            <div
              className="searchBtn  
            bg-secondaryLight h-[38px] items-center justify-center w-[70px] 
            cursor-pointer"
            >
              <span className="flex items-center justify-center h-full">
                <SearchIcon onClick={handleSearch} />
              </span>
            </div>
            <div className="searchMic ml-3">
              <MicIcon />
            </div>
          </div>
          <div
            className="profileContainer sm:mr-6 text-[28px] cursor-pointer 
          flex"
          >
            <span className="mx-2 sm:mx-4">
              <AddBoxIcon />
            </span>
            <span className="mx-2 sm:mx-4">
              <NotificationsNoneIcon />
            </span>
            <button
              className="mx-2 sm:mx-4"
              onClick={() => setNavOpen(!isNavOpen)}
            >
              <Avatar sx={{ bgcolor: "purple" }}>D</Avatar>
            </button>
          </div>
        </div>
        {isNavOpen && (
          <div
            className="profileBtns absolute top-[60px] py-3 
        box-border right-[20px] bg-secondaryColor text-textMain 
        "
          >
            <div
              className="flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
            >
              <Avatar sx={{ bgcolor: "purple" }}>D</Avatar>
              <p className="m-0 text-[15px] ml-[15px]">Davis Nwanze</p>
            </div>
            <div
              className="divider w-full bg-hoverTextColor h-[1px] 
          my-3 relative"
            ></div>
            <div className="profileTabs">
              <div
                className="profileTab flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
              >
                <span className="">
                  <AccountBoxIcon sx={{ fontSize: 30 }} />
                </span>
                <p className="m-0 text-[15px] ml-[15px]">Your Channel</p>
              </div>
              <div
                className="profileTab flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
              >
                <span className="">
                  <PlayCircleIcon sx={{ fontSize: 30 }} />
                </span>
                <p className="m-0 text-[15px] ml-[15px]">YouTube Studio</p>
              </div>
              <div
                className="profileTab flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
              >
                <span className="">
                  <LogoutIcon sx={{ fontSize: 30 }} />
                </span>
                <p className="m-0 text-[15px] ml-[15px]">Sign Out</p>
              </div>
            </div>
            <div
              className="divider w-full bg-hoverTextColor h-[1px] 
          my-3 relative"
            ></div>
            <div className="profileTabs">
              <div
                className="profileTab flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
              >
                <span className="">
                  <MonetizationOnOutlinedIcon sx={{ fontSize: 30 }} />
                </span>
                <p className="m-0 text-[15px] ml-[15px]">Memberships</p>
              </div>
              <div
                className="profileTab flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
              >
                <span className="">
                  <AdminPanelSettingsIcon sx={{ fontSize: 30 }} />
                </span>
                <p className="m-0 text-[15px] ml-[15px]">Privacy Policy</p>
              </div>
            </div>
            <div
              className="divider w-full bg-hoverTextColor h-[1px] 
          my-3 relative"
            ></div>
            <div className="profileTabs">
              <div
                className="profileTab flex items-center py-[7px] px-5 
          cursor-pointer transition-all duration-200 hover:bg-secondaryLight"
              >
                <span className="">
                  <SettingsIcon sx={{ fontSize: 30 }} />
                </span>
                <p className="m-0 text-[15px] ml-[15px]">Settings</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;
