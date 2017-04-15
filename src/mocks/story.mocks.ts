import { Story } from "../models/story";

export const STORIES : Story[] = [
    {
        id: 1,
        title: "Title 1",
        author: "Author 1",
        summary: "Test summary",
        sections: [
            {
                id: 1,
                name: "Section1",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                sortOrder: 1,
                media: undefined
            },
            {
                id: 2,
                name: "Section2",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                sortOrder: 2,
                media: undefined
            }
        ],
        publicationDate: new Date()
    },
    {
        id: 2,
        title: "Title 2",
        author: "Author 2",
        summary: "Test summary 2",
        sections: [
            {
                id: 3,
                name: "Section3",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                sortOrder: 1,
                media: undefined
            },
            {
                id: 4,
                name: "Section4",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                sortOrder: 2,
                media: undefined
            }
        ],
        publicationDate: new Date()
    }
]