
/**
 * @typedef {import("notes/domain/note.types.js").Note} Note
 */

/**
 * @param {Object} params
 * @param {string} params.title
 * @param {string} params.content
 * @param {Note|null} [params.revision]
 * @returns {Note}
 */
function createNote({ title, content, revision = null }) {
    if (!title.trim()) throw new Error("Title is required");
    if (!content.trim()) throw new Error("Content is required");

    return Object.freeze({
        id: crypto.randomUUID(),
        title,
        content,
        revision,
        createdAt: new Date()
    });
};

/**
 * @param {Note} previousNote 
 * @param {Object} updatedNote 
 * @param {string} [updatedNote.title] 
 * @param {string} [updatedNote.content] 
 * @returns {Note}
 */
function updateNote(previousNote, { title, content }) {
    if (!previousNote) throw new Error("Previous note is required");

    if (title === undefined && content === undefined) {
        throw new Error("There is nothing to update");
    }

    if (title !== undefined && !title?.trim()) {
        throw new Error("Title cannot be empty");
    }

    if (content !== undefined && !content?.trim()) {
        throw new Error("Content cannot be empty");
    }

    return Object.freeze({
        id: crypto.randomUUID(),
        title: title ?? previousNote.title,
        content: content ?? previousNote.content,
        revision: previousNote,
        createdAt: new Date()
    });
}

/**
 * @param {Note} note 
 */
function getHistory(note) {
    if (!note) throw new Error("Note is required to get the history");
    const history = [];
    /** @type {Note|null} */
    let current = note;

    while (current) {
        history.push(current);
        current = current.revision;
    }

    return Object.freeze(history);
}

/**
 * @param {Note} note 
 */
function getInitialVersion(note) {
    if (!note) throw new Error("A note is required to get initial version of it");

    /** @type {Note|null} */
    let currentNote = note;
    
    while (currentNote.revision !== null) {
        currentNote = currentNote.revision;
    }

    return currentNote;
};

export {
    createNote,
    updateNote,
    getHistory,
    getInitialVersion
};