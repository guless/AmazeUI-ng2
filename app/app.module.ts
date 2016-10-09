import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { routing, routeDeclarations, routeProviders } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    exports: [],
    declarations: [
        AppComponent,
        ...routeDeclarations
    ],
    providers: [
        ...routeProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
