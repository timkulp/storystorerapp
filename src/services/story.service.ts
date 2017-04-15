import { Injectable } from '@angular/core';

import { Story } from "../models/story";

import { STORIES } from "../mocks/story.mocks";

@Injectable()
export class StoryService {

    getStories(): Promise<Story[]> {
        return Promise.resolve(STORIES);
    }
}