import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {
  number;

  constructor(private userSevice: UsersService) { }

  ngOnInit() {
    this.number = this.userSevice.number;
  }

  onChange() {
    this.userSevice.setNumber(+this.number);
  }

}
