const fs = require('fs');

const addNote = (title, body) => {
    let noteExists = false;
    console.log('Entering add note method in notes.js');
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {
        if (!noteExists) {
            note = {
                title,
                body
            }
            notes.push(note);
            // convert javascript object to json string and write to file
            fs.writeFileSync('notes.json', JSON.stringify(notes));
            console.log('New note added');
        }
    }
    else {
        console.log('Looks like you entered a note which already exists , please enter a note with another title');
    }
}
// return existing notes
const loadNotes = () => {
    console.log('Entering load notes method');
    if (fs.existsSync('notes.json')) {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    }
    else {
        console.log('Notes.json doesn\'t exist');
        return [];
    }
}

const readNote = (title) => {
    debugger
    const notes = loadNotes();
    const note = notes.filter(note => note.title === title);
    if (note.length !== 0) {
        return note;
    }
    else {
        return [];
    }

}
const removeNote = (title) => {
    console.log(`The title to be removed is ${title}`);
    const notes = loadNotes();
    const non_matching_notes = notes.filter(note => note.title !== title);
    if (non_matching_notes.length !== notes.length) {
        fs.writeFileSync('notes.json', JSON.stringify(non_matching_notes));
    }
    else {
        console.log('note doesn\'t exist');
    }
}

module.exports = {
    addNote,
    loadNotes,
    removeNote,
    readNote
}
