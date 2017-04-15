import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MediaCapture } from '@ionic-native/media-capture';
import { MomentModule } from 'angular2-moment/moment.module';

import { MyApp } from './app.component';
import { StoryList } from '../components/story-list/story-list';

import { RecordPage } from '../pages/record/record';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoryService } from "../services/story.service";
import { SpeechService } from "../services/speech.service";

@NgModule({
  declarations: [
    MyApp,
    RecordPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StoryList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecordPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StoryService,
    SpeechService,
    MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
