// import { Grid } from "@mui/material";
// import { Container } from "@mui/system";
// import { useState } from "react";
// import SMButton from "../../config/components/SMButton";
// import MyInput from "../../config/components/MyInput";
// import { sendData } from "../../config/firebasemethods";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import MyFbSelect from "../../components/myFbSelect";
// import SMButton from "../../config/components/SMButton";
import MyGrid from "../../components/myGrid";
// import MySelect from "../../components/mySelect";
import {
  Button,
   
} from "@mui/material";
import MyInput from "../../components/myInput";
// import MySelect from "../../config/components/mySelect";
import { getData, sendData } from "../../config/firebaseMethods";
function Countries() {
  const [model, setModel] = useState({});

  let saveCurrency = () => {
    console.log(model);
    sendData(model, "countries")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h1>Countries</h1>
        <Container>
          <Grid container>
            <Grid sx={{ padding: 2 }} md={4} item>
              <MyInput
                label={"Country Name"}
                focused
                  color={"primary"}
                  variant={"filled"}
                onChange={(e) =>
                  setModel({ ...model, countryName: e.target.value })
                }
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <MyInput
                label={"Country Code"}
                focused
                color={"primary"}
                variant={"filled"}
                onChange={(e) =>
                  setModel({ ...model, countryCode: e.target.value })
                }
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <MyInput
                label={"Currency"}
                 focused
                  color={"primary"}
                  variant={"filled"}
                onChange={(e) =>
                  setModel({ ...model, currency: e.target.value })
                }
              />
            </Grid>
            <Grid md={4} item>
              <Button variant="contained" onClick={saveCurrency} >

            Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default Countries;