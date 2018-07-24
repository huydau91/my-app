import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeNewsListComponent } from './home-news-list/home-news-list.component';
import { HomeIntroCardComponent } from './home-intro-card/home-intro-card.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeSliderComponent,
        HomeNewsListComponent,
        HomeIntroCardComponent,
    ]
})

export class HomeModule {}
