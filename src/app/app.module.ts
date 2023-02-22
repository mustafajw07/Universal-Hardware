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

// Partials
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

// Components
import { BannerComponent } from './components/homePage/banner/banner.component';
import { CompanyComponent } from './components/homePage/company/company.component';
import { OurProductsComponent } from './components/homePage/our-products/our-products.component';
import { WhatsappBtnComponent } from './components/homePage/whatsapp-btn/whatsapp-btn.component';
import { SelectorComponent } from './components/productsPage/selector/selector.component';
import { HeadingComponent } from './components/productsPage/heading/heading.component';
import { ProductSectionComponent } from './components/productsPage/product-section/product-section.component';
import { CardWithSelectorComponent } from './components/productsPage/card-with-selector/card-with-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactusPageComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CompanyComponent,
    OurProductsComponent,
    WhatsappBtnComponent,
    SelectorComponent,
    HeadingComponent,
    ProductSectionComponent,
    CardWithSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
