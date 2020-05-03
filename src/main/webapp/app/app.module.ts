import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EnginServitudeSharedModule } from 'app/shared/shared.module';
import { EnginServitudeCoreModule } from 'app/core/core.module';
import { EnginServitudeAppRoutingModule } from './app-routing.module';
import { EnginServitudeHomeModule } from './home/home.module';
import { EnginServitudeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EnginServitudeSharedModule,
    EnginServitudeCoreModule,
    EnginServitudeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EnginServitudeEntityModule,
    EnginServitudeAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class EnginServitudeAppModule {}
