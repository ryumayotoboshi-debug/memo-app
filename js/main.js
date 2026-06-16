import {
    addNote,
    updateNote,
    getNote
}
from "./notes.js";

import {
    renderNoteList,
    updateCharCount
}
from "./ui.js";

const newNoteBtn =
    document.getElementById("newNoteBtn");

const editor =
    document.getElementById("editor");

const contentInput =
    document.getElementById("contentInput");

const saveBtn =
    document.getElementById("saveBtn");

const backBtn =
    document.getElementById("backBtn");

const listScreen =
    document.getElementById("listScreen");

let currentNoteId = null;

renderNoteList(selectNote);

updateCharCount("");

newNoteBtn.addEventListener(
    "click",
    () => {

        currentNoteId = null;

        contentInput.value = "";

        updateCharCount("");

        listScreen.classList.add(
            "hidden"
        );

        editor.classList.remove(
            "hidden"
        );

    }
);

backBtn.addEventListener(
    "click",
    () => {

        editor.classList.add(
            "hidden"
        );

        listScreen.classList.remove(
            "hidden"
        );

    }
);

contentInput.addEventListener(
    "input",
    () => {

        updateCharCount(
            contentInput.value
        );

    }
);

saveBtn.addEventListener(
    "click",
    () => {

        const content =
            contentInput.value;

        const title =
            content
                .split("\n")[0] || "";

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

        editor.classList.add(
            "hidden"
        );

        listScreen.classList.remove(
            "hidden"
        );

    }
);

function selectNote(id) {

    const note =
        getNote(id);

    if (!note) {
        return;
    }

    listScreen.classList.add(
        "hidden"
    );

    editor.classList.remove(
        "hidden"
    );

    currentNoteId = id;

    contentInput.value =
        note.content;

    updateCharCount(
        note.content
    );

}