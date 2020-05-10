import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, faBell, faComments } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  logoutIcon = faSignOutAlt;
  notificationIcon = faBell;
  messageIcon = faComments;
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.changingNavbar();
    window.onscroll = this.changingNavbar;

    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })

  }

  onLogout() {
    this.authService.logout();
  }

  changingNavbar() {
    if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
      document.querySelector('header').classList.add('scrolling-nav');
    } else {
      document.querySelector('header').classList.remove('scrolling-nav');
    }

  }
  togglebtn() {
    document.querySelector('.menuBtn').classList.toggle('act');
    if (document.querySelector('.menuBtn').classList.contains('act')) {
      document.querySelector('.responsive-nav').classList.add('act');
    }
    else {
      document.querySelector('.responsive-nav').classList.remove('act');
    }
  }

  showUserDropdown() {
    (<HTMLElement>document.querySelector('.profile-dropdown')).style.transform = "scale(1)";
    (<HTMLElement>document.querySelector('.profile-dropdown')).focus();
  }
  showNotifications() {
    (<HTMLElement>document.querySelector('.notifications-dropdown')).style.transform = "scale(1)";
    (<HTMLElement>document.querySelector('.notifications-dropdown')).focus();
  }
  eventPreventDefault(e:Event){
    e.preventDefault();
  }
  hideUserDropdown() {
    (<HTMLElement>document.querySelector('.profile-dropdown')).style.transform = "scale(0)";
  }
  hideNotifications(){
    (<HTMLElement>document.querySelector('.notifications-dropdown')).style.transform = "scale(0)";
  }
  showNotificationsInResponsive(){
    (<HTMLElement>document.querySelector('.notifications-respnsive-container')).style.display = 'block';
  }
}
