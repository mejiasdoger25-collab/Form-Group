import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [ReactiveFormsModule, NgbDatepicker,], //check si es ese o es otro
  selector: 'app-blog-post',
  styleUrl: './blog-post.css',
  templateUrl: './blog-post.html',
})
export class BlogPost {

  //actorFrom = new FormGroup()
  profileForm = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>(''),
    category: new FormControl<'Tecnología' | 'Diseño' | 'Programación' | 'Novedades' | ''>(''),
    tag: new FormControl<string>(''),
    email: new FormControl<string>(''),
    publishNow: new FormControl<boolean>(false),
    publishDate: new FormControl<string | null>(null)
  });


  sendForm() {
    console.log(this.profileForm.value);
  }
}
