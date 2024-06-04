import { NOTE_FUNCTIONS } from "../../functions/notes.functions";
import useLocalStorage from "../../hooks/useLocalStorage";
import { INote } from "../../interfaces/notes.interfaces";
import { NotesContext } from "./NotesContext";

const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [storageNotes, setStorageNotes] = useLocalStorage<INote[]>("notes", []);

  return (
    <NotesContext.Provider
      value={{
        notes: storageNotes,
        addNote: (data: INote) => NOTE_FUNCTIONS.addNote(data),
        editNote: () => {},
        deleteNote: () => {},
        deleteFromTrash: () => {},
        archiveNote: () => {},
        pinNote: () => {},
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
