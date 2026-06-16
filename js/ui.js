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

        const title =
            document.createElement("div");

        title.className =
            "note-title";

        title.textContent =
            note.title || "無題";

        const preview =
            document.createElement("div");

        preview.className =
            "note-preview";

        const firstLine =
            (note.content || "")
                .split("\n")[0];

        preview.textContent =
            firstLine;

        li.appendChild(title);
        li.appendChild(preview);

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