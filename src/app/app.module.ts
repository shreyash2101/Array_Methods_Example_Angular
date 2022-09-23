import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AnimalBlockComponent } from "./animal-block/animal-block.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AnimalBlockComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
