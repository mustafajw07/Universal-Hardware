import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Page
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FormComponent } from './components/contactPage/form/form.component';
import { MainComponent } from './components/errorPage/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactusPageComponent,
    ProductPageComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
