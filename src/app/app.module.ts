import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { ShoppingListComponent } from './features/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './features/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipeBook/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
