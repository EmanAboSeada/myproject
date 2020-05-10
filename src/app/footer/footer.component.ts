import { Component, OnInit } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons = {facebook: faFacebookF, linkedin: faLinkedinIn, github: faGithub, twitter: faTwitter };

  constructor() { }

  ngOnInit(): void {
  }

}
