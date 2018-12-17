import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  number = 10

  x = 6
  title:string = 'angular course';
   list=[];
   isActive=true;
  //  name ='bdoor'
  data = [
    {id :0 , name :'inas'},
    {id :1 , name :'inas 1'},
    {id :2 , name :'inas 2'},
    {id :3 , name :'inas 3'},

  ]
  constructor() { }

  ngOnInit() {
  }
  btnClick(){
    this.title = 'title changed'
  }
  btnClickEnter(e){
   this.list.push({name:e.target.value});

  }

  printName(){
    console.log(this.name)
  }

  btnAgeClick(ele){
    console.log(ele.value)
  }

  toggleBtn (){
      this.isActive = !this.isActive
  }
}
