console.log("it works")

const artistRecords = [
    {
        title: "I wanna be happy",
        name: "Kirk Franklin",
        numberOfTrack: 30,
        url: "https://kirk_franklin/new_album.com",
        releaseYear: 2010
    },

    {
        title: "Seasons in the sun",
        name: "WestLife",
        numberOfTrack: 20,
        url: "https://westlife.com",
        releaseYear: 2017
    },

    {
        title: "Hero",
        name: "Enrique Iglesias",
        numberOfTrack: 45,
        url: "https://enrique_iglesias.com",
        releaseYear: 2014
    },

    {
        title: "Perfect",
        name: "Ed Sheeran",
        numberOfTrack: 20,
        url: "https://ed_sheeran.com",
        releaseYear: 2015
    },

    {
        title: "I won't give up",
        name: "Jason Mraz",
        numberOfTrack: 15,
        url: "https://jason_mraz.com",
        releaseYear: 2016
    },
];

const recordsList = () => {
    for (let i = 0; i < artistRecords.length; i++) {

// To sort the record from the oldest to the newest
        
        const sortRecord = artistRecords.slice().sort((a, b) => b.releaseYear - a.releaseYear)

        let records = `Title: ${sortRecord[i].title}
Name: ${sortRecord[i].name}
Tracks' number: ${sortRecord[i].numberOfTrack}
URL: ${sortRecord[i].url}
Release year: ${sortRecord[i].releaseYear}
        `;
        alert(records)
    }
};

const addNewRecord = () => {
    let newTitle = prompt("Enter your a title of your new record");
    let newName = prompt("Enter your a name of your new record");
    let newNumberOfTrack = Number(prompt("How many tracks does it have"));
    let newUrl = prompt("Enter their URL");
    let newReleaseYear = Number(prompt("When did it release? Enter the release year"));

    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
        newUrl = `https://${newUrl}`;
    };

    const newRecords = {
        title: newTitle,
        name: newName,
        numberOfTrack: newNumberOfTrack,
        url: newUrl,
        releaseYear: newReleaseYear
    };
    artistRecords.push(newRecords);
};

// Ask the user if they want to update one of the record

const updateRecord = () => {
    let updateChoice = prompt(`Enter the number of index you want to update (1 to ${artistRecords.length})`);
    let updateRecord = artistRecords.splice(updateChoice -=1, 1);

    console.log(updateRecord);

    let updateTitle = prompt("Enter your a new title that you want to update");
    let updateName = prompt("Enter your new update name");
    let updateNumberOfTrack = Number(prompt("How many tracks does it have"));
    let updateUrl = prompt("Enter their URL");
    let updateReleaseYear = Number(prompt("Update the release year"));

// If the url doen't start with http://

    if (!updateUrl.startsWith("http://") && !updateUrl.startsWith("https://")) {
        updateUrl = `https://${updateUrl}`;
    };

// Call the updated record

    const updatedRecords = {
        title: updateTitle,
        name: updateName,
        numberOfTrack: updateNumberOfTrack,
        url: updateUrl,
        releaseYear: updateReleaseYear
    };
    artistRecords.push(updatedRecords);
};

const removeRecord = () => {


    let deleteRecord = prompt(`Enter the number of index you want to delete (1 to ${artistRecords.length})`);

    let deletedRecordResult = `Title: ${deleteRecord[0].title}
Name: ${deleteRecord[0].name}
Tracks' number: ${deleteRecord[0].numberOfTrack}
URL: ${deleteRecord[0].url}
Release year: ${deleteRecord[0].releaseYear}
   `;

   alert(deletedRecordResult);
}

let menuChoice = `Choose an option:

1: Show all records
2: Add a new record
3: Update a specific record
4: Remove a record
5: Quit
`;

let menuList = Number(prompt(menuChoice));

while (menuList !== 5) {
    switch (menuList) {
        case 1:
            recordsList();
            break;

        case 2:
            addNewRecord();
            break;

        case 3:
            updateRecord();
            break;

        case 4:
            removeRecord();
            break;

        default:
            alert('Please enter a number between 1 and 5. (1, 2, 3, 4, 5)');
            break;
    }

    menuList = Number(prompt(menuChoice));

}

alert("Thank you for using my program");