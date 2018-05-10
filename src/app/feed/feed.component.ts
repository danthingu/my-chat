import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChatMessage } from '../models/chat-message.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    console.log('me');
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
    console.log('me2');
    this.feed = this.chat.getMessages();
  }

}
