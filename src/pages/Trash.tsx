import { useState } from "react";
import { INote } from "./Notes";
import { Box, Typography } from "@mui/material";
import { ICONS } from "../constants/icons.constants";

const Trash = () => {
  const [trashedNotes, setTrashedNotes] = useState<INote[]>([]);

  return (
    <>
      {trashedNotes.length > 0 ? (
        <Box></Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            minHeight: "70vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ICONS.TRASH sx={{ fontSize: "7em" }} color="disabled" />
            <Typography sx={{ fontSize: "1.4em", color: "gray" }}>
              No Notes in Trash
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Trash;
