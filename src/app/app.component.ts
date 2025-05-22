import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { ListaProdottiComponent } from './components/lista-prodotti/lista-prodotti.component';
import { TitleComponent } from './components/title/title.component';
import { Prodotto } from './models/Prodotto';
@Component({
  selector: 'app-root',
   imports: [RouterOutlet,  FooterComponent, ListaProdottiComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';
  prodotti_novita: Prodotto[] = [
    {
      nome: "Bici",
      desc: "Nera",
      prezzo: 100,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Friggitrice",
      desc: "Ad aria",
      prezzo: 10,
      foto: "https://picsum.photos/300/200"
    }
    
  ]
  prodotti_suggerimenti: Prodotto[] = [
    {
      nome: "auto",
      desc: "rossa",
      prezzo: 110,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "monopattino",
      desc: "blu",
      prezzo: 80,
      foto: "https://picsum.photos/300/200"
    }
    
  ]
}


