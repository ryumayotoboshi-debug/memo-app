import {
    addNote,
    updateNote,
    getNote
}
from "./notes.js";

import {
    renderNoteList
}
from "./ui.js";

const newNoteBtn =
    document.getElementById("newNoteBtn");

const editor =
    document.getElementById("editor");

const titleInput =
    document.getElementById("titleInput");

const contentInput =
    document.getElementById("contentInput");

const saveBtn =
    document.getElementById("saveBtn");

let currentNoteId = null;

renderNoteList(selectNote);

newNoteBtn.addEventListener(
    "click",
    () => {

        currentNoteId = null;

        titleInput.value = "";
        contentInput.value = "";

        editor.classList.remove(
            "hidden"
        );

    }
);

saveBtn.addEventListener(
    "click",
    () => {

        const title =
            titleInput.value;

        const content =
            contentInput.value;

        if (currentNoteId) {

            updateNote(
                currentNoteId,
                title,
                content
            );

        } else {

            const note =
                addNote(
                    title,
                    content
                );

            currentNoteId =
                note.id;
        }

        renderNoteList(
            selectNote
        );

    }
);

function selectNote(id) {

    const note =
        getNote(id);

    if (!note) {
        return;
    }

    currentNoteId = id;

    titleInput.value =
        note.title;

    contentInput.value =
        note.content;

    editor.classList.remove(
        "hidden"
    );

}