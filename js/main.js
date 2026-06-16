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

const titleInput =
    document.getElementById("titleInput");

const contentInput =
    document.getElementById("contentInput");

const saveBtn =
    document.getElementById("saveBtn");
    
const backBtn =
    document.getElementById("backBtn");

let currentNoteId = null;

renderNoteList(selectNote);

updateCharCount("");

const listScreen =
    document.getElementById("listScreen");

newNoteBtn.addEventListener(
    "click",
    () => {

        currentNoteId = null;

        titleInput.value = "";
        contentInput.value = "";

        updateCharCount("");

        listScreen.classList.add(
            "hidden"
        );

        editor.classList.remove(
            "hidden"
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

    updateCharCount(
        note.content
    );

    listScreen.classList.add(
    "hidden"
);

editor.classList.remove(
    "hidden"
);

}