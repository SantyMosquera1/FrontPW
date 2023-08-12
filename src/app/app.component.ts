import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reddits: any[] = [];
  title = 'Front_Reddit';
  
  ngOnInit(): void {
    axios.get('http://localhost:8000/reddits/getall')
      .then(response => {
        this.reddits = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }
}
