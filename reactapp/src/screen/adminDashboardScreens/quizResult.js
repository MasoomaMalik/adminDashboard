import React from 'react'
import MyResponsiveDrawer from '../../components/drawer'
import { Box } from "@mui/system";

const QuizResult = () => {
  const drawerWidth=200
  
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#A04EF6",

          display: "flex",
          justifyContent: "start",
        }}
      >
        <MyResponsiveDrawer />
        <Box
          sx={{
            padding: "1rem",
            // width: "97vw",
            width: `calc(100% - ${drawerWidth}px)`,
          }}
        >

        </Box>
      </Box>
    </>
  )
}

export default QuizResult