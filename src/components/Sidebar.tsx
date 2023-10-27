import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ICONS } from "../constants/icons.constants";

export const menuItems = [
  { id: 1, path: "/", text: "Notes", icon: ICONS.NOTES },
  { id: 2, path: "/archive", text: "Archive", icon: ICONS.ARCHIVE },
  { id: 3, path: "/trash", text: "Trash", icon: ICONS.TRASH },
];

const Sidebar = () => {
  return (
    <Box sx={{ width: 200 }}>
      {menuItems.map((item) => {
        return (
          <Link to={`${item.path}`}>
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{item.text}</Typography>
              <IconButton>{<item.icon />}</IconButton>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default Sidebar;
