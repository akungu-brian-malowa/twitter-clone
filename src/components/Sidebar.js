import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOptoin";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/", {replace : true})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" fullWidth onClick={handleSignOut} className="logoutBtn">
       Logout
      </Button>

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth  >
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;