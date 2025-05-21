import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import{ Animale } from "../../models/Animale"
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
nome= "Marta";
anno: number=78;
animale: Animale = {nome: "Fiocco", razza:"gatto"}
prodotto?:Prodotto; //? il punto interrogativo indica che la proprietà è opzionale: può essere presente oppure no(undefined).
bici?:Prodotto={
    id: 1,
    nome: "bicicletta",
    prezzo: 120,
    inOfferta: true
  }
esempio(){
  this.prodotto ={
    id: 1,
    nome: "bicicletta",
    prezzo: 120,
    inOfferta: true
  }
} 
}

