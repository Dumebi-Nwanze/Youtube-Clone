import React from "react";
import "./Sidebar.css";
import { sidebarData } from "../sidebar.data";

function Sidebar() {
  return (
    <div className="absolute z-10">
      <div className="sidebarSection close" id="sideBarContainer">
        <div
          id="miniSidebar"
          className="miniSidebar  bg-secondaryColor fixed h-full z-2 pt-[60px] px-[5px]"
        >
          {sidebarData.miniSidebar.map((tab, index) => (
            <div
              key={index}
              className="sidebarTab flex flex-col items-center justify-center py-2.5 px-1 rounded-xl cursor-pointer 
              text-[14px] active:bg-secondaryLight hover:bg-secondaryLight text-textMain 
              "
            >
              <span className="">{tab.icon}</span>
              <p className="mt-1 text-[12px] text-center">{tab.title}</p>
            </div>
          ))}
        </div>
        <div className="sidebarContainer overflow-auto" id="sideBarContainer">
          <div
            className="sidebarTabs fixed top-0 left-0 box-border 
          px-3 pt-2 border-solid border-transparent border-t-[5px] 
          border-r-2 w-[240px] h-[calc(100vh-56px)] text-textMain bg-secondaryColor 
          overflow-auto mt-[56px] z-8"
          >
            <div className="tabContainer w-full">
              {sidebarData.mainContent.map((tab, index) => (
                <div
                  key={index}
                  className="sidebarTab flex justify-start items-center py-[6px] px-4 rounded-xl cursor-pointer 
              text-[14px] active:bg-secondaryLight hover:bg-secondaryLight 
              "
                >
                  <span>{tab.icon}</span>
                  <p className="ml-5 text-md">{tab.title}</p>
                </div>
              ))}
              <div
                className="divider w-full bg-hoverTextColor h-[1px] 
          my-2 relative"
              ></div>
              {sidebarData.secondaryContent.map((tab, index) => (
                <div
                  key={index}
                  className="sidebarTab flex justify-start items-center py-[6px] px-4 rounded-xl cursor-pointer 
              text-[14px] active:bg-secondaryLight hover:bg-secondaryLight 
              "
                >
                  <span>{tab.icon}</span>
                  <p className="ml-5 text-md">{tab.title}</p>
                </div>
              ))}
              <div
                className="divider w-full bg-hoverTextColor h-[1px] 
          my-2 relative"
              ></div>
              <p className="tracking-wider text-[14px] my-2">SUBSCRIPTIONS</p>
              {sidebarData.subs.map((tab, index) => (
                <div
                  key={index}
                  className="sidebarTab flex justify-start items-center py-[6px] px-4 rounded-xl cursor-pointer 
              text-[14px] active:bg-secondaryLight hover:bg-secondaryLight 
              "
                >
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="rounded-full w-[30px] h-[30px] object-cover"
                  />
                  <p className="ml-5 text-md">{tab.title}</p>
                </div>
              ))}
              <div
                className="divider w-full bg-hoverTextColor h-[1px] 
          my-2 relative"
              ></div>
              <p className="tracking-wider text-[14px] my-2">EXPLORE</p>
              {sidebarData.explore.map((tab, index) => (
                <div
                  key={index}
                  className="sidebarTab flex justify-start items-center py-[6px] px-4 rounded-xl cursor-pointer 
              text-[14px] active:bg-secondaryLight hover:bg-secondaryLight 
              "
                >
                  <span>{tab.icon}</span>
                  <p className="ml-5 text-md">{tab.title}</p>
                </div>
              ))}
              <div
                className="divider w-full bg-hoverTextColor h-[1px] 
          my-2 relative"
              ></div>
              {sidebarData.bottom.map((tab, index) => (
                <div
                  key={index}
                  className="sidebarTab flex justify-start items-center py-[6px] px-4 rounded-xl cursor-pointer 
              text-[14px] active:bg-secondaryLight hover:bg-secondaryLight 
              "
                >
                  <span>{tab.icon}</span>
                  <p className="ml-5 text-md">{tab.title}</p>
                </div>
              ))}
              <div
                className="divider w-full bg-hoverTextColor h-[1px] 
          my-2 relative"
              ></div>
              <div className="linkSection my-1 flex flex-wrap text-[10px] text-textLightMain">
                <a href="/">About</a>
                <a href="/">Press</a>
                <a href="/">Copyright</a>
                <a href="/">Contact Us</a>
                <a href="/">Creator</a>
                <a href="/">Advertise</a>
                <a href="/">Developers</a>
              </div>
              <div className="linkSection my-1 mb-4 flex flex-wrap text-[10px] text-textLightMain">
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
                <a href="/">Policy &#38; Safety</a>
                <a href="/">How Youtube Works</a>
                <a href="/">Test New Features</a>
              </div>
              <p className="text-textLightMain text-sm mb-2">
                &#64;d.u.m.e.by 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
