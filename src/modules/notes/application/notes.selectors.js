/** @import { NotesState } from './notes.reducer.js' */

/** @param {NotesState} state */
function selectNotes(state) {
    return state.notes;
};

export {
    selectNotes
}