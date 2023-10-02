import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ham', '3 Hams will fill him', "https://i.redd.it/tbfp00ahou9a1.jpg")
  ];

  constructor(){}

  ngOnInit() {

  }
}
