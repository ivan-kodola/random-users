import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  number = 8;

  constructor(private  http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.number + '&nat=gb')
      .map(response => response['results'])
      .map(users => {
        return users.map(user => {
          return {
            name: user.name.first + ' ' + user.name.last,
            image: user.picture.large,
            geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street
          }
        })
      });
  }

  setNumber(number) {
    this.number = number;
  }
}
