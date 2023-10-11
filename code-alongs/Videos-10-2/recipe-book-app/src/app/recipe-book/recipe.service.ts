import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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
        '3 Hams will fill him',
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

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
