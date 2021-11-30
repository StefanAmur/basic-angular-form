import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-form';
  languages: any = ['HTML', 'CSS', 'JS', 'PHP'];

  public friend = new Friend('', '', '', '', '');

  allFriends: any;

  constructor(private addFriendService: AddFriendService) {}

  ngOnInit(): any {
    this.getAllFriends('http://localhost:9100/allFriends');
    console.log(this.allFriends);
  }

  onSubmit() {
    console.log(this.friend);
    this.addFriendService
      .addFriend(this.friend)

      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
    this.getAllFriends('http://localhost:9100/allFriends');
  }

  public async getAllFriends(url: string): Promise<any> {
    return await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.allFriends = data));
  }
}
