import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  chatRoute:boolean=true;
  chatListAndContentRoute=true;
  private subscription:Subscription;
  constructor(private router: Router,
    private routerService: RouterService) { }

  ngOnInit(): void {
    this.subscription= this.routerService.currentURL$.subscribe(chatRoute => {
      this.chatRoute = !!chatRoute;
    }) 
    if (window.screen.width <= 414) {
      this.chatListAndContentRoute = false;
      this.routerService.currentURLObserver.next((this.router.url === "/chat") ? true : false);
    }
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
