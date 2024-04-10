import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {UserService} from '../user.service'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public userService:UserService){}
  username:string=""
  password:string=""
  name:string=""
  surname:string=""
  id:number=0
  email:string=""

  isvalid = false
  try_controll = false
  isRegister = false

  login(){
    this.userService.login(this.valueBody_login(this.username,this.password)).subscribe(result=>{
      this.isvalid=result.valid
    })
    this.try_controll=true

  }
  valueBody_login(username:string,password:string){
    return {'username':username,'password':password}
  }
  valueBody_register(username:string,password:string,email:string,id:number,name:string,surname:string){
    return {
      "email": email,
      "id": id,
      "name": name,
      "password": password,
      "surname": surname,
      "username": username
    }
  }
  isregister(){
    this.isRegister=true
    this.clear()
  }
  register(){
    this.userService.register(this.valueBody_register(this.username,this.password,this.email,this.id,this.name,this.surname)).subscribe(result=>{})
    this.initialPage()
  }
  clear(){
    this.username=""
    this.password=""
    this.name=""
    this.surname=""
    this.id=0
    this.email=""
  }
  initialPage(){
    this.clear()
    this.try_controll = false
    this.isRegister = false
    this.isvalid = false
  }
}
