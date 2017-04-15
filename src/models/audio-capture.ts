import { CaptureAudioOptions, CaptureError, MediaCapture, MediaFile, MediaFileData } from '@ionic-native/media-capture';

export class AudioCapture {
    capture : MediaCapture;
    constructor(public mediaCapture: MediaCapture){
        this.capture = mediaCapture;
    }


}
