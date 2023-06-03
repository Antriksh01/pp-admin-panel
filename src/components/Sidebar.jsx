import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HelpIcon from "@mui/icons-material/Help";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdAddBusiness } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaBloggerB } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdHome } from "react-icons/md";

import { Avatar, Button, Menu, MenuItem, Tooltip } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { useAuth } from "../context/auth";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const settings = ["Profile", "Logout"];

const Sidebar = () => {
  const [auth, setAuth] = useAuth();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  //   const [menuData, setMenuData] = useState("HomePage");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("logout successfully");
    navigate("/login");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={4}
          sx={{ background: "linear-gradient(265deg, #db0f19, #fff, #000)" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Party People Dashboard
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {!auth.user ? (
                <>
                  <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ marginRight: "10px" }}
                    //   onClick={() => setMenuData("login")}
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  {/* <Button
                    color="inherit"
                    variant="outlined"
                    //   onClick={() => setMenuData("register")}
                    component={Link}
                    to="/register"
                  >
                    Register
                  </Button> */}
                </>
              ) : (
                <>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {/* {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                      //
                    ))} */}
                      {/* <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          // onClick={() => setMenuData("Profile")}
                          component={Link}
                          to="/Profile"
                          sx={{ color: "#8dce5d", textDecoration: "none" }}
                        >
                          Profile
                        </Typography>
                      </MenuItem> */}
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" onClick={handleLogout}>
                          Logout
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          style={{ backgroundColor: "red !important" }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {/* <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            component={Link}
            to="/"
          >
            <ListItemButton
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
                }}
              >
                <AiFillHome />
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List> */}
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              component={Link}
              to="/"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MdHome />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              component={Link}
              to="/why-choose-us"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HiQuestionMarkCircle />
                </ListItemIcon>
                <ListItemText
                  primary="Amenities Categories"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              component={Link}
              to="/information"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <GrCircleInformation />
                </ListItemIcon>
                <ListItemText
                  primary="Information"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              component={Link}
              to="/business-opportunity"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MdAddBusiness />
                </ListItemIcon>
                <ListItemText
                  primary="Amenities"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              component={Link}
              to="/Blog"
            >
              <ListItemButton
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
                  }}
                >
                  <FaBloggerB />
                </ListItemIcon>
                <ListItemText
                  primary="All party"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={() => setMenuData("About")}
              component={Link}
              to="/About"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FcAbout />
                </ListItemIcon>
                <ListItemText
                  primary="All organisation"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={() => setMenuData("About")}
              component={Link}
              to="/About"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FcAbout />
                </ListItemIcon>
                <ListItemText
                  primary="Organisation amenities"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={() => setMenuData("About")}
              component={Link}
              to="/About"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FcAbout />
                </ListItemIcon>
                <ListItemText
                  primary="Organisation pdf upload"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={() => setMenuData("About")}
              component={Link}
              to="/About"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FcAbout />
                </ListItemIcon>
                <ListItemText
                  primary="Organisation pdf verification"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={() => setMenuData("About")}
              component={Link}
              to="/About"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#8dce5d",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FcAbout />
                </ListItemIcon>
                <ListItemText
                  primary="Transaction"
                  sx={{ opacity: open ? 1 : 0, color: "#8dce5d" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menuData === "HomePage" && <HomePage />}
        {menuData === "Services" && <Services />}
        {menuData === "Product" && <Products />}
        {menuData === "Blog" && <Blogs />}
        {menuData === "About" && <About />}
        {menuData === "login" && <Login />}
        {menuData === "register" && <Register />}
        {menuData === "Profile" && <ProfilePage />}
      </Box> */}
      </Box>
    </Container>
  );
};
export default Sidebar;
const Container = Styled.div`
.css-12i7wg6-MuiPaper-root-MuiDrawer-paper{
  background-color:transparent !important;
  // width:auto !important;
  @media (max-width:500px){
    background-color:#8dce5d !important;
  }
}
.css-10hburv-MuiTypography-root{
  @media (max-width:500px){
    color:#415f2b;
  }
}

.css-h4y409-MuiList-root {
  padding:0 !important;
}

`;
