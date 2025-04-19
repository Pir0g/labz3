import { Component, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-parser',
  imports: [FormsModule],
  templateUrl: './json-parser.component.html',
  styleUrl: './json-parser.component.css'
})
export class JsonParserComponent{
  JSONFile: File | null = null;

  constructor()
  {
  }
  parse(target: any) : void{
      if (target.files && target.files.length > 0) {
        this.JSONFile = target.files[0];
        this.JSONFile?.text()
      .then(fileContent => {
        alert(fileContent); 
      })
      } 
      else {
        this.JSONFile = null;
      }
    }
}
