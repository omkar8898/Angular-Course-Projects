import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue='pet';
  genders=['male','female'];
  @ViewChild('f', {static: false}) signupForm:NgForm;
  questionsAnswer='';
  suggestUserName() {
    const suggestedName = 'omkar'+Math.floor((Math.random()*1000)+1);
    this.signupForm.form.patchValue({
      userData:{
       username: suggestedName
      }
    })
  }

  onSubmit(){
    console.log(this.signupForm)
    alert('Successful')
  }
}
