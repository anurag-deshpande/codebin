import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent {

  constructor(private dbService: DbService, private route: ActivatedRoute) {}

  private snippetId: any;
  snippetData: any;

  ngOnInit() {
    this.snippetId = this.route.snapshot.paramMap.get('id');
    this.getSnippetData();
  }

  async getSnippetData() {
    this.dbService.getSnippetById(this.snippetId).then((data:any)=> {
      this.snippetData = data;
      console.log(this.snippetData);
    })
  }


}
