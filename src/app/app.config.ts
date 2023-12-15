import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine
} from "@ng-doc/app";
import {NG_DOC_ROUTING, provideNgDocContext} from "@ng-doc/generated";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {ApplicationConfig} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(withInterceptorsFromDi()), provideRouter(NG_DOC_ROUTING, withInMemoryScrolling({
    scrollPositionRestoration: "enabled",
    anchorScrolling: "enabled"
  })), provideNgDocContext(), provideNgDocApp(), provideSearchEngine(NgDocDefaultSearchEngine), providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON), provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS)]
};
