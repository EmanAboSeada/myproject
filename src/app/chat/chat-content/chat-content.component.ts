import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { faPaperclip, faTimes, faPaperPlane, faExclamationCircle, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { faGrinBeam, faImage} from '@fortawesome/free-regular-svg-icons';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit, AfterViewInit {
  @ViewChild ('chatContentWrapper') private chatContentWrapper:ElementRef;

  icons={ 
    fileUploadIcon : faPaperclip,
    smileIcon: faGrinBeam,
    imageUploadIcon: faImage,
    closeIcon: faTimes,
    sendIcon: faPaperPlane,
    errorIcon: faExclamationCircle,
    backIcon:faAngleLeft
  }
  messagetxt='';
  
  user:{
    id:number,
    userName: string,
    userImg?: any,
    lastSeen: Date,
    messages:{'sender':string, date:Date, content:string, savedStatus: boolean}[]};
  lastSeen:string;
  selectedFileName: string='';
  messageForm:FormGroup;

  constructor(private router:Router, private routerService:RouterService) { }

  ngOnInit(): void {
    this.user={
      id:1,
      userName: 'Eman Abo Seada',
      lastSeen: new Date(new Date().setMinutes(5)),
      messages: [
        {
          sender: 'me',
          date: new Date(),
          content: 'message1',
          savedStatus: true
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'message2',
          savedStatus: true
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet consectetur quidem facilis ipsa ex odit porro. Neque dolor quidem quam alias aliquam autem facere qui',
          savedStatus: true
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'message4',
          savedStatus: true
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero saepe error praesentium veritatis dolorum eveniet, voluptatibus, vitae quisquam facere ipsam obcaecati, illum aliquid labore! Dignissimos ullam fugiat corporis obcaecati?',
          savedStatus: true
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'Neque dolor quidem quam alias aliquam autem facere qui',
          savedStatus: true
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'Sequi vero saepe error praesentium veritatis dolorum eveniet, voluptatibus, vitae quisquam facere ipsam obcaecati, illum aliquid labore! Dignissimos ullam fugiat corporis obcaecati?',
          savedStatus: false
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'message1',
          savedStatus: true
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'message2',
          savedStatus: true
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet consectetur quidem facilis ipsa ex odit porro. Neque dolor quidem quam alias aliquam autem facere qui',
          savedStatus: true
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'message4',
          savedStatus: true
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero saepe error praesentium veritatis dolorum eveniet, voluptatibus, vitae quisquam facere ipsam obcaecati, illum aliquid labore! Dignissimos ullam fugiat corporis obcaecati?',
          savedStatus: true
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'Neque dolor quidem quam alias aliquam autem facere qui',
          savedStatus: true
        },
        {
          sender: 'me',
          date: new Date(),
          content: 'Sequi vero saepe error praesentium veritatis dolorum eveniet, voluptatibus, vitae quisquam facere ipsam obcaecati, illum aliquid labore! Dignissimos ullam fugiat corporis obcaecati?',
          savedStatus: false
        },
        {
          sender: 'user',
          date: new Date(),
          content: 'odit porro. Neque dolor quidem',
          savedStatus: false
        }
      ]
    }
    this.lastSeen =moment(this.user.lastSeen).calendar();
    this.messageForm = new FormGroup({
      fileUpload:new FormControl(),
      messagetxt:new FormControl()
    });
    //handel responsive..
    this.routerService.currentURLObserver.next(false);
  }
  
  ngAfterViewInit() {
  //change route to last message
  this.chatContentWrapper.nativeElement.scrollTop = 1000000;
  }

  backToChat(){
    this.router.navigate(['/chat']);
    this.routerService.currentURLObserver.next(true);
  }

  showEmojiPicker(e: Event){
      (<HTMLStyleElement> document.querySelector('.emoji-picker')).style.display = 'block';
      (<HTMLStyleElement> document.querySelector('.emoji-picker')).focus();
      (<HTMLStyleElement> document.querySelector('.smileIcon')).style.color  = "#99D6FF";
    
  }
  addEmoji(e){
    this.messagetxt += e.emoji.native;
  }
  hideEmoji(e){
    e.target.style.display = 'none';
    (<HTMLStyleElement> document.querySelector('.smileIcon')).style.color = 'black';
  }

  selectFile(e){
    this.selectedFileName = e.target.files[0].name;
    (<HTMLElement>document.querySelector('.chat-content-wrapper')).style.height = '67%';
    (<HTMLElement>document.querySelector('.preview')).style.display = 'flex'; 
  }
  
  closePreview(){
    (<HTMLElement>document.querySelector('.chat-content-wrapper')).style.height = '80%';
    (<HTMLElement>document.querySelector('.preview')).style.display = 'none';
    this.messageForm.value.fileUpload=null;
    (<HTMLInputElement>document.querySelector('#file-upload')).value = null;
  }

  sendMessage(){
    this.messageForm.reset();
    this.closePreview();
  }

}
