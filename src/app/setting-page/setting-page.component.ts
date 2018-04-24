import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {
  number: number;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.number = this.userService.number;
  }

  onChange() {
    this.userService.setNumber(+this.number);
  }

}
