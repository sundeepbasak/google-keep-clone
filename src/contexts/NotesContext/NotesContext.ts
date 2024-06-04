import { createContext, useContext } from "react"
import { INote } from "../../interfaces/notes.interfaces"

type NotesContext = {
    notes: INote[],
    addNote: (data: INote) => void;
    editNote: () => void;
    deleteNote: () => void;
    deleteFromTrash: () => void;
    archiveNote: () => void;
    pinNote: () => void;
}

export const NotesContext = createContext<NotesContext | null>(null);
export const useNotes = () => useContext(NotesContext)



