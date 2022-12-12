import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Custom Modules
import { SharedModule } from './shared/shared.module';

// Websocket
import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GameSocketDataService } from './services/game-socket-data.service';

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
        AppRoutingModule,
        SocketIoModule.forRoot(config),
        
        SharedModule,
    ],
    providers: [GameSocketDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
