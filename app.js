const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const ex = require('./example');
const es = require('./esample');


ex.printEvenNumbers(20);

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption: true,
            type : 'string' 
        },
        body: {
            describe : 'Note body',
            demandOption: true,
            type : 'string' 
        }
    },
    handler(argv) {
        console.log('Entering handler property of add command');
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'title of the note to remove',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a new note',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const note = notes.readNote(argv.title);
        if (note === []) {
            console.log('Note is not present');
        }
        else {
            console.log(note)
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        const list_notes = notes.loadNotes()
        if (list_notes.length !== 0) {
            console.log(list_notes);
        }
        else {
            console.log('No notes!');
        }
    }
});

yargs.parse();
