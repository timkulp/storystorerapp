import { Injectable } from '@angular/core';
import { CONSTANTS } from "../constants";
import { CaptureAudioOptions, CaptureError, MediaCapture, MediaFile, MediaFileData } from '@ionic-native/media-capture';
import { AudioCapture } from "../models/audio-capture";
 
@Injectable()
export class SpeechService {

    private prepareClient() : any {
        
    }

    processMediaFiles(mediaFiles: MediaFile[]) : void {
        // send the media file to the speech processor
        for(let i: number; i < mediaFiles.length; i++){

        }
    };
    
    convertSpeech(): Promise<string> {
        let promise : Promise<string>;        
        let audio : AudioCapture;

        let options : CaptureAudioOptions = {
            duration: CONSTANTS.speechRecognitionTimeout,
            limit: 1
        };

        audio.capture.captureAudio(options)
            .then(
                function(mediaFiles: MediaFile[]){
                    this.processMediaFiles(mediaFiles);
                }
            )
            .catch(
                function(ex){
                }
            );
        return promise;
    };
}