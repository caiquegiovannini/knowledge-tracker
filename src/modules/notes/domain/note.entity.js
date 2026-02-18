
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

export { createNote };