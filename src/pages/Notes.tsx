import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";

export interface INote {
  id: string;
  title: string;
  text: string;
  isCompleted: boolean;
  isArchived: boolean;
  isTrashed: boolean;
  isPinned: boolean;
  bgColor: string;
  image: string;
}

const Notes = () => {
  const { listView } = useOutletContext<{ listView: boolean }>();
  const [allNotes, setAllNotes] = useState<INote[]>([]);
  const [note, setNote] = useState<INote>({
    id: nanoid(),
    title: "",
    text: "",
    bgColor: "",
    isCompleted: false,
    isArchived: false,
    isPinned: false,
    isTrashed: false,
    image: "",
  });

  console.log("ALL NOTES", allNotes);

  return (
    <>
      <AddNote note={note} setNote={setNote} setAllNotes={setAllNotes} />
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: listView ? "800px" : "none",
          margin: listView ? "auto" : "none",
        }}
      >
        {allNotes.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={listView ? 12 : 6}
            md={listView ? 12 : 2}
            key={idx}
          >
            <NoteCard noteItem={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Notes;
