import {
    getNotes
} from "./notes.js";

const noteList =
    document.getElementById("noteList");

export function renderNoteList(onSelect) {

    noteList.innerHTML = "";

    const notes = getNotes();

    notes.forEach(note => {

        const li =
            document.createElement("li");

        li.textContent =
            note.title || "無題";

        li.addEventListener(
            "click",
            () => onSelect(note.id)
        );

        noteList.appendChild(li);

    });

}