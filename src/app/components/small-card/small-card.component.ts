import { Component, input, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

@Input()
  photoCover:string= ""
@Input()
  cardTitle:string= ""
@Input()
  Id:string=""
constructor(){}
  ngOnInit(): void {
    
  }
}
