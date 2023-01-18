let epicsArray = [
    {
        "name": "Backoffice",
        "totalTasks": 0,
        "color": "blue",
        "tasks": []
    },
    {
        "name": 'Marketing',
        "totalTasks": 0,
        "color": 'red',
        "tasks": []
    },
    {
        "name": 'Development',
        "totalTasks": 0,
        "color": 'orange',
        "tasks": []
    }
]

const guestUserEpicsArray = [
    { "name": "Backoffice", "totalTasks": 1, "color": "blue", "tasks": [{ "id": "back0", "title": "Delete console.log", "description": "Alle console.log Statements löschen", "assignedTo": [{ "name": "Anja Schulz", "color": "yellow" }, { "name": "Benedikt Ziegler", "color": "pink" }, { "name": "David Eisenberg", "color": "blue" }], "dueDate": "2022-12-08", "prio": "low", "subtasks": [], "category": "feedback" }] }, { "name": "Marketing", "totalTasks": 1, "color": "red", "tasks": [{ "id": "mark0", "title": "Dummy Tasks erstellen", "description": "Mehrere Dummy tasks für den Test User erstellen", "assignedTo": [{ "name": "Kevin Lentz", "color": "dark-red" }], "dueDate": "2022-12-10", "prio": "urgent", "subtasks": [], "category": "done" }] }, { "name": "Development", "totalTasks": 2, "color": "orange", "tasks": [{ "id": "deve0", "title": "Margin anpassen", "description": "Abstände der Seite alle auf 25 px angleichen", "assignedTo": [{ "name": "Steven Munk", "color": "ocean" }, { "name": "Kevin Lentz", "color": "dark-red" }], "dueDate": "2022-12-18", "prio": "urgent", "subtasks": [], "category": "todo" }, { "id": "deve1", "title": "Code review", "description": "Jeder stellt seinen Code vor", "assignedTo": [{ "name": "Marcel Bauer", "color": "neon-green" }, { "name": "Steven Munk", "color": "ocean" }, { "name": "Kevin Lentz", "color": "dark-red" }], "dueDate": "2022-12-29", "prio": "medium", "subtasks": [{ "name": "Steven", "checked": false }, { "name": "Kevin", "checked": false }, { "name": "Marcel", "checked": false }], "category": "todo" }] }
]

let exampleContacts = [
    {
        "name": "Anton Mayer",
        "email": "antom@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "green"
    },
    {
        "name": "Anja Schulz",
        "email": "schulz@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "yellow"
    },
    {
        "name": "Benedikt Ziegler",
        "email": "benedikt@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "pink"
    },
    {
        "name": "David Eisenberg",
        "email": "david@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "blue"
    },
    {
        "name": "Eva Fischer",
        "email": "eva@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "purple"
    },
    {
        "name": "Emanuel Mauer",
        "email": "emanuel@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "red"
    },
    {
        "name": "Marcel Bauer",
        "email": "marcel@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "neon-green"
    },
    {
        "name": "Steven Munk",
        "email": "steven@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "ocean"
    },
    {
        "name": "Kevin Lentz",
        "email": "kevin@gmail.com",
        "phone": "+49 11 11 1111",
        "color": "dark-red"
    },
];