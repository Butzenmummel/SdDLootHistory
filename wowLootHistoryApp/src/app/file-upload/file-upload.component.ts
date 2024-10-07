import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileContent: string | ArrayBuffer | null = null;
  jsonData: any = null;

  // EventEmitter to send JSON data to the parent component
  @Output() jsonDataLoaded = new EventEmitter<any>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fileContent = reader.result;
      };
      reader.readAsText(file);
    }
  }

  convertToJSON() {
    if (typeof this.fileContent === 'string') {
      const lines = this.fileContent.split('\n');
      const headers = lines[0].split('\t'); // Assuming tab-separated values (TSV) or CSV format
      const jsonArray = [];

      for (let i = 1; i < lines.length; i++) {
        const data = lines[i].split('\t'); // Change this to `split(',')` if CSV format
        const obj: any = {};
        headers.forEach((header, index) => {
          obj[header.trim()] = data[index]?.trim();
        });
        jsonArray.push(obj);
      }
      this.jsonData = jsonArray;

      // Emit the generated JSON data
      this.jsonDataLoaded.emit(this.jsonData);
    }
  }
}
