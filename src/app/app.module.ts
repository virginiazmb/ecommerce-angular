import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ecommerce/header/header.component';
import { ContentComponent } from './ecommerce/content/content.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { FooterComponent } from './ecommerce/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
