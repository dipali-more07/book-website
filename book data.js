// bookData.js
const bookDatabase = {
    books: [
        {
            id: 1,
            title: "Five Point Someone",
            author: "Chetan Bhagat",
            genre: "Fiction",
            year: 2004,
            description: "A story about three friends at IIT Delhi",
            isbn: "9780743267618",
            rating: 4.1,
            pages: 270
        },
        {
            id: 2,
            title: "2 States",
            author: "Chetan Bhagat",
            genre: "Romance",
            year: 2009,
            description: "A story about inter-cultural marriage in modern India",
            isbn: "9788129115300",
            rating: 4.3,
            pages: 321
        },
        {
            id: 3,
            title: "One Night @ the Call Center",
            author: "Chetan Bhagat",
            genre: "Fiction",
            year: 2005,
            description: "A story about six people working in a call center",
            isbn: "9788129107978",
            rating: 3.9,
            pages: 286
        },
        

        {
            id: 4,
            title: "Iron Flame",
            author: "Rebecca Yarros",
            genre: "Fantasy",
            year: 2023,
            description: "The sequel to Fourth Wing, continuing the story of dragon riders and warfare",
            isbn: "9781649374172",
            rating: 4.8,
            pages: 640
        },
        {
            id: 5,
            title: "Fourth Wing",
            author: "Rebecca Yarros",
            genre: "Fantasy",
            year: 2023,
            description: "A story of dragon riders, war, and romance in a fantasy military setting",
            isbn: "9781649374042",
            rating: 4.7,
            pages: 512
        },
        {
            id: 6,
            title: "Tomorrow, and Tomorrow, and Tomorrow",
            author: "Gabrielle Zevin",
            genre: "Literary Fiction",
            year: 2022,
            description: "A story about love, friendship, and video game design spanning thirty years",
            isbn: "9780593321201",
            rating: 4.5,
            pages: 416
        },
        {
            id: 7,
            title: "Demon Copperhead",
            author: "Barbara Kingsolver",
            genre: "Literary Fiction",
            year: 2022,
            description: "A modern retelling of Charles Dickens's David Copperfield set in Appalachia",
            isbn: "9780063251922",
            rating: 4.7,
            pages: 560
        },
        {
            id: 8,
            title: "Happy Place",
            author: "Emily Henry",
            genre: "Romance",
            year: 2023,
            description: "A story about exes pretending to still be together for their friends' wedding",
            isbn: "9780593441275",
            rating: 4.4,
            pages: 400
        },
        {
            id: 9,
            title: "Lessons in Chemistry",
            author: "Bonnie Garmus",
            genre: "Historical Fiction",
            year: 2022,
            description: "A chemist becomes a cooking show host in the 1960s",
            isbn: "9780385547345",
            rating: 4.6,
            pages: 390
        },
        {
            id: 10,
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            genre: "Historical Fiction",
            year: 2017,
            description: "A reclusive Hollywood movie icon reveals her life story to an unknown journalist",
            isbn: "9781501161933",
            rating: 4.8,
            pages: 389
        },
        {
            id: 11,
            title: "House of Flame and Shadow",
            author: "Sarah J. Maas",
            genre: "Fantasy",
            year: 2024,
            description: "The third book in the Crescent City series",
            isbn: "9781635574104",
            rating: 4.9,
            pages: 816
        },
        {
            id: 12,
            title: "The Woman in Me",
            author: "Britney Spears",
            genre: "Autobiography",
            year: 2023,
            description: "Britney Spears's memoir about her life, career, and fight for freedom",
            isbn: "9781668009048",
            rating: 4.5,
            pages: 288
        },
        {
            id: 13,
            title: "None of This Is True",
            author: "Lisa Jewell",
            genre: "Thriller",
            year: 2023,
            description: "A podcaster becomes entangled with a mysterious woman who shares her birthday",
            isbn: "9781982179007",
            rating: 4.4,
            pages: 368
        },
        {
            id: 14,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            genre: "Psychological Thriller",
            year: 2019,
            description: "A woman shoots her husband and never speaks again",
            isbn: "9781250301697",
            rating: 4.5,
            pages: 339
        },
        {
            id: 15,
            title: "Verity",
            author: "Colleen Hoover",
            genre: "Thriller",
            year: 2018,
            description: "A writer discovers a mysterious autobiography while working for another author",
            isbn: "9781538724736",
            rating: 4.6,
            pages: 336
        },
        {
            id: 16,
            title: "It Starts with Us",
            author: "Colleen Hoover",
            genre: "Romance",
            year: 2022,
            description: "The sequel to It Ends with Us",
            isbn: "9781668001225",
            rating: 4.7,
            pages: 336
        },
        {
            id: 17,
            title: "It Ends with Us",
            author: "Colleen Hoover",
            genre: "Romance",
            year: 2016,
            description: "A story about breaking the cycle of abuse and finding love",
            isbn: "9781501110368",
            rating: 4.7,
            pages: 384
        },

        {
            id: 18,
            title: "The Light We Carry",
            author: "Michelle Obama",
            genre: "Self-Help",
            year: 2022,
            description: "Practical wisdom and powerful strategies for staying hopeful in difficult times",
            isbn: "9780593237465",
            rating: 4.8,
            pages: 336
        },
    ],
    
    authors: [
        {
            id: 1,
            name: "Chetan Bhagat",
            country: "India",
            books: [1, 2, 3], // References to book IDs
            biography: "Chetan Bhagat is an Indian author and columnist known for his English-language novels about young urban middle-class Indians."
        },

        {
            id: 2,
            name: "Rebecca Yarros",
            country: "United States",
            books: [4,5],
            biography: "Rebecca Yarros is a bestselling author known for her fantasy and romance novels."
        },
        {
            id: 3,
            name: "Colleen Hoover",
            country: "United States",
            books: [15,16,17],
            biography:"Colleen Hoover is a #1 New York Times bestselling author of contemporary romance and thriller novels."
        },
        {
            id: 4,
            name: "Sarah J. Maas",
            country: "United States",
            books: [11],
            biography: "Sarah J. Maas is a #1 New York Times bestselling author of fantasy fiction."
        },
        // Add more authors here
    ],
    
    genres: [
        "Fantasy",
        "Literary Fiction",
        "Romance",
        "Historical Fiction",
        "Thriller",
        "Psychological Thriller",
        "Mystery",
        "Science Fiction",
        "Autobiography",
        "Self-Help",
        "Young Adult",
        "Contemporary Fiction"
    ]
};

// Export for use in other files
export default bookDatabase;