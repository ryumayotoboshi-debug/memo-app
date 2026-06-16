import { loadNotes, saveNotes } from "./storage.js";

let notes = loadNotes();

export function getNotes() {
    return notes;
}

export function getNote(id) {

    return notes.find(
        note => note.id === id
    );

}

export function addNote(title, content) {

    const note = {
        id: crypto.randomUUID(),
        title,
        content
    };

    notes.push(note);

    saveNotes(notes);

    return note;
}

export function updateNote(id, title, content) {

    const note = getNote(id);

    if (!note) {
        return;
    }

    note.title = title;
    note.content = content;

    saveNotes(notes);
}

export function deleteNote(id) {

    notes = notes.filter(
        note => note.id !== id
    );

    saveNotes(notes);
}