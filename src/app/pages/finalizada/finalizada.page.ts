import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizada',
  templateUrl: './finalizada.page.html',
  styleUrls: ['./finalizada.page.scss'],
})
export class FinalizadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Feedback(){
    window.open('https://form.jotform.com/230582548941058','_blank')
  }

}
