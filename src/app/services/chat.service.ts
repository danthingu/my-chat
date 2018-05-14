import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatService {

  user: any;
  chatMessagesList: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }

      this.getCurrentUserAuthenticated().subscribe(a => {
        this.userName = a.displayName;
      });
    });
   }

   getCurrentUserAuthenticated() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
     return this.db.object(path);
   }

   getAllUsers() {
    const path =`/users`;
    return this.db.list(path);
   }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email
    this.chatMessagesList = this.getMessages();
    this.chatMessagesList.push({
      message: msg,
      timeSent: timestamp,
      username: this.userName,
      email: email});

      console.log('This is triggered form sendMessage()');
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return (date + ' ' +  time);
  }

  getMessages(): FirebaseListObservable<ChatMessage[]> {
      console.log('calling getMessages');
      return this.db.list('messages', {
        query: {
          limitToLast: 25,
          orderByKey: true
      }
    });
  }
}
