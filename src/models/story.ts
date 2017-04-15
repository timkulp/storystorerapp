import { StorySection } from "./story-section";

export class Story {
    id: number;
    title: string;
    author: string;
    summary: string;
    sections: StorySection[];
    publicationDate: Date;

}