import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'setting', component: SettingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

