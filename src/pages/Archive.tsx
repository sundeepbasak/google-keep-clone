import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { ICONS } from "../constants/icons.constants";
import { INote } from "./Notes";
import useLocalStorage from "../hooks/useLocalStorage";
import { useOutletContext } from "react-router-dom";
import NoteCard from "../components/NoteCard";

const Archive = () => {
  const { listView } = useOutletContext<{ listView: boolean }>();
  const [storageNotes, setStorageNotes] = useLocalStorage<INote[]>("notes", []);
  const [archivedNotes, setArchiveNotes] = useState<INote[]>(storageNotes);

  return (
    <>
      {archivedNotes.length > 0 ? (
        archivedNotes.map((item, idx) => (
          <Grid
            key={idx}
            container
            spacing={2}
            sx={{
              maxWidth: listView ? "800px" : "none",
              margin: listView ? "auto" : "none",
            }}
          >
            <Grid item xs={12} sm={listView ? 12 : 6} md={listView ? 12 : 2}>
              {/* <NoteCard isActive={false} noteItem={item} onPin={handlePin} /> */}
            </Grid>
          </Grid>
        ))
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
            <ICONS.ARCHIVE sx={{ fontSize: "7em" }} color="disabled" />
            <Typography sx={{ fontSize: "1.4em", color: "gray" }}>
              Your archived notes appear here
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Archive;

/* 
  
*/
