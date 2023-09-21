import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  goToUpdatePassword() {

  this.route.navigateByUrl("update-password");
 }
  goToUpdateEmail() {

  this.route.navigateByUrl("update-email");
 }



}