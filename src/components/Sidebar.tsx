import React from "react";
import logo from "../assets/logo.svg";
import dash from "../assets/dash.svg";
import campagn from "../assets/presention.svg";
import aud from "../assets/personalcard.svg";
import chart from "../assets/chart.svg";
import like from "../assets/like.svg";
import profil from "../assets/frame.svg";
import setting from "../assets/setting.svg";
import SideLink from "./SideLink";

const sidebarLinks = [
  {
    title: "DashBoard",
    imgUrl: dash,
  },
  {
    title: "Campaign",
    imgUrl: campagn,
  },
  {
    title: "Audience",
    imgUrl: aud,
  },
  {
    title: "Perfomance",
    imgUrl: chart,
  },
  {
    title: "Promote",
    imgUrl: like,
  },
  {
    title: "Profile",
    imgUrl: profil,
  },
  {
    title: "Setting",
    imgUrl: setting,
  },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-[305px] flex flex-col justify-between items-center pt-8">
      {/* logog */}
      <div className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
      {/* menus  */}
      <div className="flex flex-col gap-[.5rem] w-[231px] mt-[56px]">
        {sidebarLinks.map((sideItem, i) => (
          <SideLink key={i} {...sideItem} />
        ))}
      </div>
      {/* avatar */}
      <div className="flex gap-6 items-center justify-end">
        <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] rounded-full border">
                <img src="https://robohash.org/doloremquesintcorrupti.png" className="w-full h-full object-contain" alt="avatar" />
            </div>
          <p className="text-[18px] font-bold">sheldon</p>
        </div>
        <div className="bg-gray-300 cursor-pointer w-[30px] h-[30px] rounded-md flex justify-center">
          <span>...</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
