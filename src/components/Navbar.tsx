import { Box, IconButton, Typography, Divider } from "@mui/material";
import Searchbar from "./Searchbar";
import Logo from "../assets/keep-icon.png";
import { ICONS } from "../constants/icons.constants";
import { useState } from "react";

const Navbar = () => {
  const [listView, setListView] = useState(true);

  const toggleView = () => setListView((prev) => !prev);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <ICONS.MENU />
          </IconButton>
          <img src={Logo} alt="logo" style={{ width: 40, height: 40 }} />
          <Typography variant="h5">Keep</Typography>
        </Box>
        <Searchbar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={toggleView}>
            {listView ? <ICONS.LIST_VIEW /> : <ICONS.GRID_VIEW />}
          </IconButton>
          <IconButton>
            <ICONS.DARK_MODE />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default Navbar;
