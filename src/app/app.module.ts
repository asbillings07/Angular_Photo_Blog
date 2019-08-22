import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService } from './entries';
import { InMemoryEntryService } from './backend';

/**
 * Component = Template + Class + Decorator
 */

//  NgModules and Components are decorators that provide Angular with metadata.

// Angular application needs a module & a module needs a component. Adding each component to the declarations are required.

// declarations are for registrating all of our apps components, if they are not added before they are used, they will not work.

// Where we import all our Components
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService),
  ],
  providers: [EntryService],
  declarations: [AppComponent, EntryComponent, EntryListComponent], // tells angular to start the AppComponent at launch
  bootstrap: [AppComponent],
}) // will pack this module when it ships
export class AppModule {}
