import { Store } from '@ngrx/store';

import { Hero } from '../model';
import * as HeroActions from './hero.action';
import { heroReducer, HeroState } from './hero.reducer';

export type Action = HeroActions.All;

export interface State {
  hero: HeroState;
}

export const reducers = {
  hero: heroReducer
  // here is where i put other reducers, when i have them
};

// export class AppStore extends Store<State> {}

// export type AppStoreType = Store<State> ;

// export const AppStoreProvider = {
//   provide: AppStore, useExisting: Store<State>
// };
