import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private router : Router, private authService : AuthService) { }

  ngOnInit() {
  }
  public onloadServers(button_element:HTMLButtonElement){
    button_element.classList.remove('btn-primary');
    button_element.classList.add('btn-success');
    button_element.disabled = true;
    setTimeout(()=>{
      this.router.navigate(["/servers"]);
    },3000);
    
  }
  public loadEditComponent(){
    this.router.navigate(['/servers',5,'edit'],
      {queryParams:{AllowEdit:1},fragment:'loading'});
  }
  public onLogin(){
    this.authService.login();
  }
  public onLogout(){
    this.authService.logout();
  }
}
