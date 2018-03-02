import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  error_message;
  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data : Data)=>{
      this.error_message = data.message;  
    });
  }

}
