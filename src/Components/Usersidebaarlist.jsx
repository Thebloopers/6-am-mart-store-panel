import React from 'react'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FaCarSide } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMan } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { MdLoyalty } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import BadgeIcon from '@mui/icons-material/Badge';

function Usersidebaarlist() {
    const CustomerWallet = [
        { to: "", label: "Add Fund" },
        { to: "", label: "Report" },
        { to: "", label: "Bonus" }
       
      ];
      const CustomerLoyaltyPoint = [
        { to: "", label: "Report" }
       
       
      ];

      const employee = [
        { to: "", label: "Add New" },
        { to: "", label: "List" }, 
      ];

    const [open, setOpen] = React.useState(true);
    const [Isopen, setIsOpen] = React.useState({
      Dropdown1: false,
      Dropdown2: false,
      Dropdown3: false,
      
    });
  
    const toggleDropdown = (dropdown) => {
      setIsOpen((prevState) => ({
        ...Object.fromEntries(
          Object.entries(prevState).map(([key]) => [key, key === dropdown])
        ),
        [dropdown]: !prevState[dropdown],
      }));
    };
  return (
    <>
     <List>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <GoHome/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="User Overview" />
            </ListItemButton>
          </ListItem>
        </Link>
        <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2 ">
        DELIVERYMAN MANAGEMENT
        </div>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FaCarSide/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Vehicles Category" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <IoIosAddCircleOutline/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Add Delivery Man" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <IoMan/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="New Delivery Man" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <TbTruckDelivery/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Deliveryman List" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MdReviews/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Reviews" />
            </ListItemButton>
          </ListItem>
        </Link>
        <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
        CUSTOMER MANAGEMENT
        </div>
      </List>
      <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <IoIosContacts/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Customers" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => toggleDropdown("Dropdown1")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: "black",
            }}
           
          >
           <CiWallet/>
          </ListItemIcon>
          <ListItemText primary="Customer Wallet" sx={{ opacity: open ? 1 : 0 }} />
          {Isopen.Dropdown1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
      </ListItem>
      <Collapse in={Isopen.Dropdown1} timeout={"auto"} unmountOnExit>
        {CustomerWallet.map((link, index) => (
          <Link key={index} to={link.to}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>
              <ListItemText primary={link.label} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        ))}
      </Collapse>

      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => toggleDropdown("Dropdown2")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: "black",
            }}
          >
          <MdLoyalty/>
          </ListItemIcon>
          <ListItemText primary="Customer Loyalty Point" sx={{ opacity: open ? 1 : 0 }} />
          {Isopen.Dropdown2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
      </ListItem>
      <Collapse in={Isopen.Dropdown2} timeout={"auto"} unmountOnExit>
        {CustomerLoyaltyPoint.map((link, index) => (
          <Link key={index} to={link.to}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>
              <ListItemText primary={link.label} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        ))}
      </Collapse>
      <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <CiMail/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Subscribed Mail List" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <IoIosContact/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Contact Messages" />
            </ListItemButton>
          </ListItem>
        </Link>
        <div className="flex justify-start items-center mx-3 text-sm mt-5 mb-2">
        EMPLOYEE MANAGEMENT
        </div>
        <Link className='' to="">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <BadgeIcon/>
              </ListItemIcon>
              <ListItemText className='-mx-3' primary="Employee Role" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => toggleDropdown("Dropdown3")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: "black",
            }}
          >
          <RiTeamLine/>
          </ListItemIcon>
          <ListItemText primary="Employee" sx={{ opacity: open ? 1 : 0 }} />
          {Isopen.Dropdown3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
      </ListItem>

        <Collapse in={Isopen.Dropdown3} timeout={"auto"} unmountOnExit>
        {employee.map((link, index) => (
          <Link key={index} to={link.to}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 5 : "auto",
                  justifyContent: "center",
                }}
              ></ListItemIcon>
              <ListItemText primary={link.label} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        ))}
      </Collapse>
    </>
  )
}

export default Usersidebaarlist
