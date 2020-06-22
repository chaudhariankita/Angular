import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;


  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}
