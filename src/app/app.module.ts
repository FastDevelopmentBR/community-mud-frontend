import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { SecurityModule } from './security/security.module';
import { SharedModule } from './shared/shared.module';

// Websocket
import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GameSocketDataService } from './services/game-socket-data.service';

//Services
import { ThemeService } from './services/theme.service';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';

const config: SocketIoConfig = {
    url: environment.api,
    options: {
        transports: ['websocket']
    }
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SocketIoModule.forRoot(config),

        SharedModule,
        SecurityModule,
    ],
    providers: [
        ThemeService,
        GameSocketDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
