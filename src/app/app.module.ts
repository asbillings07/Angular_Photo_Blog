import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Angular application needs a module & a module needs a component. Adding each component to the declarations are required.

// declarations are for registrating all of our apps components, if they are not added before they are used, they will not work.
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent], // tells angular to start the AppComponent at launch
  bootstrap: [AppComponent],
}) // will pack this module when it ships
export class AppModule {}
