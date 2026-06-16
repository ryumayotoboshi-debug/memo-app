import {
    getNotes
} from "./notes.js";

const noteList =
    document.getElementById("noteList");

const charCount =
    document.getElementById("charCount");

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

export function updateCharCount(text) {

    charCount.textContent =
        `文字数：${text.length}`;

}