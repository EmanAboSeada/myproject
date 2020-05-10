import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  setImage(src: string) {
    this.http.post('https://angular-test-2476f.firebaseio.com/images/1.json', src).subscribe();
  }

}
