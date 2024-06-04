import { INote } from "../interfaces/notes.interfaces";
import { nanoid } from "nanoid";

export const NOTE_FUNCTIONS = {

    //add note
    addNote: (note: INote) => {
        return [...allNotes,
        {
            ...note,
            id: nanoid(),
            isComplete: false,
            isArchived: false,
            trashed: false,
        }
        ]
    }


}