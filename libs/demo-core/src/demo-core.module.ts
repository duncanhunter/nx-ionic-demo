import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { itemsReducer } from './+state/items.reducer';
import { itemsInitialState } from './+state/items.init';
import { ItemsEffects } from './+state/items.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('items', itemsReducer, { initialState: itemsInitialState }),
    EffectsModule.forFeature([ItemsEffects])
  ],
  providers: [ItemsEffects]
})
export class DemoCoreModule {}
