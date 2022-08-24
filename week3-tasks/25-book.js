var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },

    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },

    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for( let i of library ) {
    if( i.readingStatus == true ) {
        console.log( `Already read '${ i.title }' by '${ i.author }'\n` );
    } else {
        console.log( `You still need to read '${ i.title }' by '${ i.author }'\n` );
    }
}
