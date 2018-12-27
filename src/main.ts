import addShortcut from "./shortcut.js";

addShortcut({
    callback: () => {
        console.log(`Saved`);
    },
    hotkey: "^s",
});

addShortcut({
    callback: () => {
        console.log(`Overridden Alt b inside the container`);
    },
    hotkey: "!b",
    scope: document.querySelector(".container")
});