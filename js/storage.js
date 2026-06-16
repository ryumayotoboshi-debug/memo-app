const STORAGE_KEY = "memoAppNotes";

export function loadNotes() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return [];
    }

    return JSON.parse(data);
}

export function saveNotes(notes) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notes)
    );

}