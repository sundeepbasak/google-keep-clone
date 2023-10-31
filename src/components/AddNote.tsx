import { Box, Button, IconButton, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { ICONS } from "../constants/icons.constants";
import ColorPalette from "./ColorPalette";
import { INote } from "../pages/Notes";
import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface IAddNoteProps {
  note: INote;
  setNote: React.Dispatch<React.SetStateAction<INote>>;
  setAllNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const AddNote = ({ note, setNote, setAllNotes }: IAddNoteProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [paletteClicked, setPaletteClicked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value === "") return;
    setNote((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createNote = () => {
    if (!note.title || !note.text) return;
    setAllNotes((prev) => [...prev, note]);
    toast.success("Note added", {
      position: "bottom-center",
    });

    setNote({
      id: nanoid(),
      text: "",
      title: "",
      bgColor: "",
      image: "",
      isCompleted: false,
      isArchived: false,
      isPinned: false,
      isTrashed: false,
    });
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        margin: "auto",
        padding: "10px 20px",
        marginBottom: "40px",
        background: note.bgColor,
      }}
    >
      {isClicked && (
        <TextField
          placeholder="Title"
          variant="standard"
          multiline
          rows={1}
          maxRows={4}
          InputProps={{
            disableUnderline: true,
          }}
          name="title"
          value={note.title}
          onChange={(e) => handleChange(e)}
        />
      )}
      <TextField
        placeholder="Take a note"
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        onClick={() => setIsClicked(true)}
        name="text"
        value={note.text}
        onChange={(e) => handleChange(e)}
      />
      {isClicked && (
        <Button variant="contained" size="small" onClick={createNote}>
          Submit
        </Button>
      )}
      <Box sx={{ display: "flex" }}>
        <IconButton
          component="div"
          sx={{ position: "relative" }}
          onClick={() => setPaletteClicked((prev) => !prev)}
        >
          <ICONS.PALETTE fontSize="small" />
          {paletteClicked && <ColorPalette setNote={setNote} />}
        </IconButton>
        <IconButton component="label">
          <VisuallyHiddenInput type="file" />
          <ICONS.IMAGE fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default AddNote;
