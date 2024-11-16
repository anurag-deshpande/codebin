import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private dbService: DbService) {}

  snippets:{id: string, title:string}[] = [];

  ngOnInit() {
    this.dbService.getAllSnippet().then((data:any)=> {
      console.log(data);
      this.snippets = data
      console.log(this.snippets);
    })
  };
}