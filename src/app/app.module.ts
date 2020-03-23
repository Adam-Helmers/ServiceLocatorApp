import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { InventoryManagmentPageComponent } from './inventory-managment-page/inventory-managment-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceProviderMainComponent } from './service-provider-main/service-provider-main.component';
import { ShelterComponent } from './shelter/shelter.component';
import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { UserManagmentPageComponent } from './user-managment-page/user-managment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    InventoryManagmentPageComponent,
    LoginPageComponent,
    NotFoundComponent,
    ServiceProviderMainComponent,
    ShelterComponent,
    ShelterCardComponent,
    TopBannerComponent,
    UserManagmentPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
