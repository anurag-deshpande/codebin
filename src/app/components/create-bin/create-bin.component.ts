import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {

  constructor(private dbService: DbService) {}

  title = new FormControl("", [
    Validators.required,
  ])

  code = new FormControl("", [
    Validators.required,
  ])

  binForm = new FormGroup({
    title:this.title,
    code: this.code
  })

  async save() {
    console.log(this.binForm.value);
    // the argument below can be converted to a modal with values title and code
    // then it can be written as this.binForm.value as ModalName
    this.dbService.createSnippet({title: this.binForm.value.title!, code: this.binForm.value.code!});
  }
}
