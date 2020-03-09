import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/animals/';

  currentValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clickedButton(){
    alert('Clicked Button');
  }

  onKeyUp(event: KeyboardEvent){
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value){
    this.savedValue = value;
  }


  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
