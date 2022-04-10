import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesComponent } from './quotes/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
<<<<<<< HEAD
    MatSelectModule,
    MatButtonModule
=======
    MatSelectModule
>>>>>>> f0cc85dd232a0a387392bdf679889ba40e5c9958
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
