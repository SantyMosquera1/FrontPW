import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-datos',
  templateUrl: './lista-datos.component.html',
  styleUrls: ['./lista-datos.component.css']
})
export class ListaDatosComponent implements OnInit {
  datos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/reddits/getall')
      .subscribe(data => {
        this.datos = data;
      });
  }
}
