import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Ham',
      '3 Hams will fill him',
      "https://i.redd.it/tbfp00ahou9a1.jpg",
      [
        new Ingredient('Ham', 1),
        new Ingredient('Ham', 1),
        new Ingredient('Ham', 1)
      ]),
      new Recipe(
        'Ham',
        '3 Hams will kill him',
        "https://i.redd.it/tbfp00ahou9a1.jpg",
        [
          new Ingredient('Ham', 1),
          new Ingredient('Ham', 1),
          new Ingredient('Ham', 1)
        ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe ){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
