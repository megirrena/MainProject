import { Component } from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  recipes: RecipeModel[] = [
    {name: 'Recipe One', description: 'Chorizo & mozzarella gnocchi bake recipe ', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'},
    {name: 'Recipe Two', description: 'Cilantro Lime Shrimp Lettuce Wraps', imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/cilantro-lime-shrimp-lettuce-wraps1-1657203475.jpg?crop=0.479xw:0.719xh;0.288xw,0.108xh&resize=640:*'},
    {name: 'Recipe Three', description: 'Honey harissa meatballs & lemon rice', imgUrl: 'https://img.taste.com.au/AFHSVqPk/w733-h489-cfill-q80/taste/2023/11/honey-harissa-meatballs-lemon-rice-194027-1.jpg'},
    {name: 'Recipe Four', description: 'Molten chocolate cake', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&resize=500,454'},
    {name: 'Recipe Five', description: 'Tiramisu', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/2/2022/04/Tiramisu-e2a657d.jpg?quality=90&resize=556,505'}
  ];
}
