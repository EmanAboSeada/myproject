import { Component, OnInit, Input } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  searchIcon = faSearch;
  filterMessagees:string='';
  chatList:{
    'id':number,
    'userName': string,
    'userImg'?: string,
    'lastMessage':{
      'date':Date,
      'timeFormat':string, 
      'sender':string, 'content':string
    }
  }[];

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {

    this.chatList = [
      {
        id:1,
        userName: 'Mohamed',
        lastMessage: {
          date: new Date(),
          timeFormat: 'shortTime',
          sender: 'you',
          content: 'Lorem ipsum dolor sit amet consectetur quidem facilis ipsa ex odit porro'
        }
      },
      {
        id:2,
        userName: 'Khalid Kandil',
        lastMessage: {
          date: new Date(),
          timeFormat: 'EEE',
          sender: 'Khalid',
          content: 'Neque dolor quidem quam alias aliquam autem facere qui'
        }
      },
      {
        id:3,
        userName: 'Eman Abo Seadaaaaaa',
        lastMessage: {
          date: new Date(),
          timeFormat: 'mediumDate',
          sender: 'you',
          content: 'last message content'
        } 
      },
      {
        id:4,
        userName: 'Thanaa',
        lastMessage: {
          date: new Date(),
          timeFormat: 'mediumDate',
          sender: 'Thanaa',
          content: 'message content'
        }
      }
    ];
  }
  
  clickChatListItem(){
    this.filterMessagees = '';
    //handel responsive..
    this.routerService.currentURLObserver.next(false);
  }

}
