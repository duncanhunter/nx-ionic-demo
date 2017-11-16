import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './+state/app.reducer';
import { appInitialState } from './+state/app.init';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot({ app: appReducer }, { initialState: { app: appInitialState } }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppEffects]
})
export class AppModule {}
