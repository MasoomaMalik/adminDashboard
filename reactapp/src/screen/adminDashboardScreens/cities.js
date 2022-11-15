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

function Cities() {
  const [model, setModel] = useState({});
  const [citiesList, setCitiesList] = useState([]);
const arr=["pakistan","canada"]
  let saveCity = () => {
    console.log(model);
    sendData(model, "cities")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getCityData = () => {
    getData("cities")
      .then((res) => {
        setCitiesList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCityData();
  }, []);

  return (
    <>
      <div>
        <h1>Cities</h1>
        <Container>
          <Grid container>
            <Grid sx={{ padding: 2 }} md={4} item>
              <MyFbSelect

              // arr={arr}
                displayField="countryName"
                valueField="countryCode"
                label="Country"
                nodeName="countries"
                onChange={(e) =>
                  setModel({ ...model, countryCode: e.target.value })
                }
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <MyInput
                label="City Name"
                focused
                color={"primary"}
                variant={"filled"}
                onChange={(e) =>
                  setModel({ ...model, cityName: e.target.value })
                }
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <MyInput
                label="City Code"
                focused
                color={"primary"}
                variant={"filled"}
                onChange={(e) =>
                  setModel({ ...model, cityCode: e.target.value })
                }
              />
            </Grid>
            <Grid md={4} item>
              <Button variant="contained" onClick={saveCity}>Save</Button>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <MyGrid
            datasource={citiesList}
            Cols={[
              {
                 key: "id",
                displayName: "Id",
              },
              {
                key: "cityName",
                displayName: "City Name",
              },
              {
                key: "cityCode",
                displayName: "City Code",
              },
              {
                key: "countryCode",
                displayName: "Country Code",
              },
            ]}
          />
        </Container>
      </div>
    </>
  );
}
export default Cities;