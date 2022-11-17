// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
// import Heading from "./Heading";

// // import { makeStyles } from "@mui/styles";
// // import {
// //   ThemeProvider,
// //   createTheme,
// //   makeStyles,
// // } from "@material-ui/core/styles";
// // import { ThemeProvider, createTheme } from "@mui/material/styles";
// // import { makeStyles } from "@mui/styles";
// import { Button } from "@mui/material";
// import Heading2 from "./Heading2";
// import UsersRecord from "../screen/adminDashboardScreens/usersRecord";
// import { createTheme, ThemeProvider } from "@mui/system";

// const drawerWidth = 200;

// function MyResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   // const [selectedCategory,setSelectedCategory]=useState("")
//   const { userId } = props;
//   // console.log(userId)
//   const sideBarArr = [
//     {
//       label: "Users Record",
//       // route: `/adminDashboard/${userId}/usersRecord`,
//       route: "/adminDashboard/usersRecord",
//     },
//     {
//       label: "Course Form",
//       route: "/adminDashboard/courseForm",
//     },
//     {
//       label: "Courses List",
//       route: "/adminDashboard/courseFormResult",
//     },
//     {
//       label: "Quiz Form",
//       route: "/adminDashboard/quizForm",
//     },
//     {
//       label: "Quiz List",
//       route: "/adminDashboard/quizList&Preview",
//     },
//   ];
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const navigate = useNavigate();

//   // const useStyles = makeStyles((theme) => ({
//   //   root: {
//   //     display: "flex",
//   //   },
//   //   drawer: {
//   //     width: drawerWidth,
//   //     flexShrink: 0,
//   //   },
//   //   drawerPaper: {
//   //     width: drawerWidth,
//   //   },
//   //   drawerContainer: {
//   //     overflow: "auto",
//   //   },
//   //   content: {
//   //     flexGrow: 1,
//   //     padding: theme.spacing(3),
//   //   },
//   // }));

//   // const zIndexTheme = createTheme({
//   //   zIndex: {
//   //     appBar:2000,
//   //     drawer: 1250,
//   //   },
//   // });
//   // const theme = createTheme({
//   //   palette: {
//   //     primary: {
//   //       main: red[500],
//   //     },
//   //   },
//   // });
  

//   const drawer = (
//     <div>
//       <Toolbar />
//       <List>
//         {sideBarArr.map((value, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemButton>
//               <ListItemText
//                 primary={value.label}
//                 onClick={() => {
//                   navigate(value.route);
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       {/* <List>
//         {[
//           {
//             label: "Course Form",
//             route: "/courseForm",
//           },
//           {
//             label: "Courses List",
//             route: "/courseFormResult",
//           },
//         ].map((value, index) => (
//           <ListItem key={value} disablePadding>
//             <ListItemButton>
//               <ListItemText
//                 primary={value.label}
//                 onClick={() => {
//                   navigate(value.route);
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//       {/* <Divider />
//       <List>
//         {[
//           {
//             label: "Quiz Form",
//             route: "/quizForm",
//           },
//           {
//             label: "Quiz List",
//             route: "/quizList&Preview",
//           },
//         ].map((value, index) => (
//           <ListItem key={value} disablePadding>
//             <ListItemButton>
//               <ListItemText
//                 primary={value.label}
//                 onClick={() => {
//                   navigate(value.route);
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   // const classes = useStyles();
//   return (
//     <>
//     {/* <ThemeProvider
//      theme={zIndexTheme}
//      > */}

//       <Box
//       //  className={classes.root}
//       >
//         <CssBaseline />

//         {/* <ThemeProvider theme={zIndexTheme}> */}
//           <AppBar
//             component="nav"
//             position="fixed"
//             // zIndex=2000
//             // className={classes.appBar}
//             style={{ zIndex: 1251, backgroundColor:"#E7D045" }}
//             sx={{
//               // width: { sm: `calc(100% - ${drawerWidth}px)` },
//               width: "100vw",
//               ml: { sm: `${drawerWidth}px` },

//               flexGrow: 1,
//             }}
//           >
//             <Toolbar>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 onClick={handleDrawerToggle}
//                 sx={{
//                   // mr: 2,
//                   display: { sm: "none" },
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Box sx={{ flexGrow: 1 }}>
//                 <Heading2 title={"My Dashboard"} />
//               </Box>

//               <Button variant="outlined">Logout</Button>
//             </Toolbar>
//           </AppBar>
//         {/* </ThemeProvider> */}

//         <Box
//           component="nav"
//           sx={{
//             border: 2,
//             width: { sm: drawerWidth },
//             flexShrink: { sm: 0 },
//           }}
//           aria-label="mailbox folders"
//         >
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
       
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//           {/* <ThemeProvider theme={zIndexTheme}> */}
       
//           <Drawer
//             variant="permanent"
//             // className={classes.drawer}
//             // style={{ zIndex: 1250 }}
//             // className={classes.drawer}
//             sx={{
//               // marginTop:5,
//               display: { xs: "none", sm: "block" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//             open
//           >
//             {drawer}
//           </Drawer>
//        {/* </ThemeProvider> */}
//         </Box>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             width: { sm: `calc(100% - ${drawerWidth}px)` },
//             border: 2,
//           }}
//         >
//           {/* <UsersRecord/>  */}
//         </Box>
//       </Box>
//       {/* </ThemeProvider> */}

//     </>
//   );
// }

// MyResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default MyResponsiveDrawer;
