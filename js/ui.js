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

        const lines =
            (note.content || "")
                .split("\n");

        const titleText =
            lines[0] || "無題";

        const previewText =
            lines.slice(1).join(" ");

        const title =
            document.createElement("div");

        title.className =
            "note-title";

        title.textContent =
            titleText;

        const preview =
            document.createElement("div");

        preview.className =
            "note-preview";

        preview.textContent =
            previewText;

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

    const count =
        text
            .replace(/\s/g, "")
            .length;

    charCount.textContent =
        `文字数：${count}`;

}