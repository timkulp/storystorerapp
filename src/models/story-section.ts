import { Media } from "./media";

/**
 * @description Used to create a part of a story
 * 
 * @export
 * @class StorySection
 */
export class StorySection {
    id: number;
    name: string;
    content: string;
    sortOrder: number;
    media: Media;
}
