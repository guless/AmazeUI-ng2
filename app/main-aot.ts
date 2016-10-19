// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app.module';
// const platform = platformBrowserDynamic();
// platform.bootstrapModule(AppModule);

import { platformBrowser }    from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);