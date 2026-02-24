/**
 * @typedef {Object} AddNoteAction
 * @property {'ADD_NOTE'} type
 * @property {{ title: string, content: string }} payload
 */

/**
 * @typedef {Object} UpdateNoteAction
 * @property {'UPDATE_NOTE'} type
 * @property {{ previousNoteId: string, updatePayload: { title?: string, content?: string } }} payload
 */

/**
 * @typedef {AddNoteAction | UpdateNoteAction} NotesAction
 */

export {};