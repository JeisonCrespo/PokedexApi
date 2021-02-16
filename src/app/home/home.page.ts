import { Component } from '@angular/core';
import { Pokemon } from '../shared/interfaces/pokemon.interfaces';
import { PokedexDataService } from '../services/pokedex-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pokemons: Pokemon[] = [];

  constructor(private pokedexDataService = PokedexDataService) {}
}
