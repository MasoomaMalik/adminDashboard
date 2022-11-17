import React from "react";
import {Box} from "@mui/system"
import {Grid} from "@mui/material"
import Heading from "../../components/Heading";
const Page2 = () => {
const drawerWidth=200;
    return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: {
            md: `calc(100% - ${drawerWidth}px)`,
           
          },
          marginTop: 7,
          marginLeft: { sm: 25, xs:0 },

        //   padding: "1.5rem",
          height: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          // backgroundColor:"#E2F0F9",
        }}
      >
        <Grid
          container
          sx={{
            // border:1,
            backgroundColor: "#E2F0F9",
            width: "100vw",
            height: "100%",
            minHeight: "100vh",
            display: "flex",
            paddingX: 5,
            paddingY: 2,
            justifyContent: "center",
          }}
        >
          {/* 
//item grid */}
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
<Heading title="Page2" variant="h4" color="#292826" fontFamily="comfortaa" />

          </Grid>
        </Grid>
        <Grid
            item
            md={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >

          </Grid>
        
      </Box>
    </>
  );
};

export default Page2;
