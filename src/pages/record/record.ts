import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { CaptureAudioOptions, CaptureError, MediaCapture, MediaFile, MediaFileData } from '@ionic-native/media-capture';

import { CONSTANTS } from "../../constants";
import { StorySection } from '../../models/story-section';
import { Story } from '../../models/story';

import { SpeechService } from '../../services/speech.service';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage implements OnInit {
  story: Story; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private capture: MediaCapture,
    private platform: Platform,
    private speechService: SpeechService) {

  }

  record():void {
    let options : CaptureAudioOptions = {
        duration: CONSTANTS.speechRecognitionTimeout,
        limit: 1
    };

    this.platform.ready().then(() => {
        this.capture.captureAudio(
          function(mediaFiles: MediaFile[]) {
            console.log("Media files captured");
            for(let i: number; i < mediaFiles.length; i++){
              console.log("Media file read " + i);
            }
          }
        ).catch(
          function(ex: CaptureError){
            console.log(ex.code);
          }
        );
    });

    
    /*this.speechService.convertSpeech().then(
      function(content){
        let count : number = (this.story.sections) ? (this.story.sections + 1) : 1;
        let newSection : StorySection = new StorySection();
        newSection.content = content;
        newSection.name = "Content " + count;
        newSection.sortOrder = count;
        newSection.id = 0;

        this.storySections.push(newSection);
      }
    )*/
  }

  remove(storySection): void {
    this.story.sections.splice(this.story.sections.indexOf(storySection), 1);
  }

  save():void{ 

  }

  ngOnInit(): void {
    // check params to see if a story showed up with the page, otherwise start a new story

    this.story = new Story();

  }

}
