import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import {Story} from "../../models/story";
import { StoryService } from "../../services/story.service";

/**
 * Generated class for the StoryList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'story-list',
  templateUrl: 'story-list.html'
})
export class StoryList implements OnInit {
  
  storyList: Story[];
  loader: any;

  constructor(private storyService: StoryService, public loadingCtrl: LoadingController) {}

  /**
   * @description Bind the stories to the list
   * 
   * @param {Story[]} stories is a list of stories 
   * 
   * @memberOf StoryList
   */
  bindStories(stories):void {
    this.storyList = stories;
    this.loader.dismiss();
  };

  handleError(ex): void{
    this.throwEx.emit(ex);
    this.loader.dismiss();
  };

  presentLoading() : void {
    this.loader = this.loadingCtrl.create({
      content: "Loading your stories..."
    });
    //this.loader.present();
  };

  @Output() throwEx: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.presentLoading();
    this.storyService.getStories()
      .then(stories => this.bindStories(stories))
      .catch(ex => this.handleError(ex));
  }
}
