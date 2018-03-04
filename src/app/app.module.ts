import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ContactComponent } from './contact/contact.component'
import { AppRoutingModule } from './app-routing.module'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
