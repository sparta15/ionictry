import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Message} from './message.ts';

@Component({
  templateUrl: 'build/pages/chat/chat.html'
})

export class ChatPage {
  messages = [];
  count = 0;
  text: string;

  constructor(private navCtrl: NavController) {}

  addMessage(text: string) {
    let message: Message = new Message('user', text, false);
    message.switch(this.count);
    this.messages.push(message);
    this.count++;
    console.log(this.count);
  }

};
