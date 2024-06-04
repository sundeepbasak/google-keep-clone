import { Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";
import useLocalStorage from "../hooks/useLocalStorage";
import ModalNoteCard from "../components/ModalNoteCard";
import { INote } from "../interfaces/notes.interfaces";

const Notes = () => {
  const { listView } = useOutletContext<{ listView: boolean }>();
  const [storageNotes, setStorageNotes] = useLocalStorage<INote[]>("notes", []);
  const [allNotes, setAllNotes] = useState<INote[]>(storageNotes);
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
  const [pinnedNotes, setPinnedNotes] = useState<INote[]>([]);
  const [otherNotes, setOtherNotes] = useState<INote[]>([]);
  const [activeNote, setActiveNote] = useState<INote>();

  // console.log("ALL NOTES", allNotes);

  const handlePin = (id: string, pinVal: boolean) => {
    const updateNotes = allNotes.map((item) =>
      item.id === id ? { ...item, isPinned: pinVal } : item
    );
    setAllNotes(updateNotes);
    setStorageNotes(updateNotes);
  };

  const handlePinnedNotes = () => {
    let pinnedList: INote[] = [];
    pinnedList = allNotes.filter((item) => item.isPinned === true);
    setPinnedNotes(pinnedList);
  };

  const handleOtherNotes = () => {
    let otherList: INote[] = [];
    otherList = allNotes.filter(
      (item) => !item.isPinned && !item.isArchived && !item.isTrashed
    );
    setOtherNotes(otherList);
  };

  useEffect(() => {
    handleOtherNotes();
    handlePinnedNotes();
  }, [allNotes]);

  return (
    <>
      <AddNote note={note} setNote={setNote} setAllNotes={setAllNotes} />
      {pinnedNotes.length > 0 && (
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: listView ? "800px" : "none",
            margin: listView ? "auto" : "none",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontSize: ".7em",
                fontWeight: 600,
                color: "gray",
                textTransform: "uppercase",
                letterSpacing: ".08em",
              }}
            >
              Pinned
            </Typography>
          </Grid>
          {pinnedNotes.map((item, idx) => (
            <Grid
              item
              xs={12}
              sm={listView ? 12 : 6}
              md={listView ? 12 : 2}
              key={idx}
              onClick={() => {
                console.log("HIT CLICKED");
                setActiveNote(item);
              }}
            >
              <NoteCard
                isActive={item.id === activeNote?.id}
                noteItem={item}
                onPin={handlePin}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: listView ? "800px" : "none",
          margin: listView ? "auto" : "none",
        }}
      >
        <Grid item xs={12}>
          {pinnedNotes.length > 0 && (
            <Typography
              variant="body1"
              sx={{
                fontSize: ".7em",
                fontWeight: 600,
                color: "gray",
                textTransform: "uppercase",
                letterSpacing: ".08em",
              }}
            >
              Others
            </Typography>
          )}
        </Grid>
        {otherNotes.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={listView ? 12 : 6}
            md={listView ? 12 : 2}
            key={idx}
            onClick={() => {
              setActiveNote(item);
            }}
          >
            <NoteCard
              isActive={item.id === activeNote?.id}
              noteItem={item}
              onPin={handlePin}
            />
          </Grid>
        ))}
      </Grid>
      <ModalNoteCard
        noteItem={activeNote}
        open={!!activeNote}
        onClose={() => setActiveNote(undefined)}
      />
    </>
  );
};

export default Notes;
