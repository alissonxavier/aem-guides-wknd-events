import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpaAngularEditableComponentsModule } from '@adobe/cq-angular-editable-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { ImageComponent } from './components/image/image.component';
import { TextComponent } from './components/text/text.component';
import { TitleComponent } from './components/title/title.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TextComponent,
    ImageComponent,
    TitleComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaAngularEditableComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ListComponent, ImageComponent, TextComponent, TitleComponent]
})
export class AppModule { }
