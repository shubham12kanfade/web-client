import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { HeaderComponent } from './modules/common-commponents/header/header.component';
import { FooterComponent } from './modules/common-commponents/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './services/api/apicall.service';
import { MaterialModule } from './shared/modules/material.module';
import { LoginComponent } from './modules/common-commponents/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComingSoonComponent } from './modules/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [LoginComponent],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }



