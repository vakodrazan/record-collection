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

let menuChoice = `Choose an option:

1: Show all records
2: Add a new record
3: Update a specific record
4: Remove a record
5: Quit
`;

const recordsList = () => {
    for (let i = 0; i < artistRecords.length; i++) {
        let records = `Title: ${artistRecords[i].title}
Name: ${artistRecords[i].name}
Tracks' number: ${artistRecords[i].numberOfTrack}
URL: ${artistRecords[i].url}
Release year: ${artistRecords[i].releaseYear}
        `;
        alert(records)
    }
}

let menuList = Number(prompt(menuChoice));

while (menuList !== 5) {
    switch (menuList) {
        case 1:
        recordsList()
            break;
    
            case 2:

            break;

            case 3:
                
            break;

            case 4:
            break;

        default:
            alert('Please enter a number between 1 and 5. (1, 2, 3, 4, 5)');
            break;
    }

    menuList = Number(prompt(menuChoice));

}

alert("Thank you for using my program");