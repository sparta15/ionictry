import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/chat/chat.html'
})
export class ChatPage {
  constructor(private navCtrl: NavController) {

  }
}


export class Message {
  username : string;
  text: string;
}
