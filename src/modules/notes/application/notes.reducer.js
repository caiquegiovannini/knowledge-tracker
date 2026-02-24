import { createNote, updateNote } from 'notes/domain/note.entity.js';
import { ADD_NOTE, UPDATE_NOTE } from './notes.actions.js';
/** @import { Note } from 'notes/domain/note.types.js' */
/** @import { NotesAction } from './notes.actions.types.js' */

/** @type {{notes: Note[]}} */
const initialState = { notes: [] };

/** 
 * @param {{notes: Note[]}} state
 * @param {NotesAction} action
 */
function notesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            const newNote = createNote(action.payload.note);
            return {
                ...state,
                notes: [
                    ...state.notes,
                    newNote
                ]
            };

        case UPDATE_NOTE:
            const { previousNoteId, updatePayload } = action.payload;
            const noteToUpdate = state.notes.find(note => note.id === previousNoteId);

            if (!noteToUpdate) throw new Error("Note to update not found.");

            const updatedNote = updateNote(noteToUpdate, updatePayload);
            const notesUpdated = state.notes.map(note => {
                if(note.id === previousNoteId) return updatedNote;
                return note;
            })
        return {
            ...state,
            notes: notesUpdated
        }

        default:
            return state;
    }
}

export {
    notesReducer
}