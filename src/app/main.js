import { selectNotes } from '../modules/notes/application/notes.selectors.js';
import { notesReducer } from '../modules/notes/application/notes.reducer.js';
import { createStore } from './store/create-store.js';

const {
    getState,
    dispatch,
    subscribe,
} = createStore(notesReducer, { notes: [] });

function render() {
    const state = getState();
    const notes = selectNotes(state);

    const notesList = document.querySelector('#notes-list');
    notesList.innerHTML = '';

    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note.title;
        notesList.appendChild(li);
    });
};

subscribe(render);

document
    .querySelector('#form')
    ?.addEventListener('submit', event => {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;

        dispatch({
            type: 'ADD_NOTE',
            payload: { title, content }
        });

        event.target.reset();
    });

render();