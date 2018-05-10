import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  send() {
    this.chat.sendMessage(this.message); // POST message to FIREBASE database <--- SEND BUTTON
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) { // check if enter key is 13 <-- SEND USING ENTER KEY
      this.send();
    }
  }

}
