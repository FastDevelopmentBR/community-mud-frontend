import { Injectable, Inject } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GameSocketDataService {
    constructor(private socket: Socket) { }

    // listen event
    dataUpdates$(): Observable<any> {
        return this.socket.fromEvent('gameSocket')
    }

    // emit event
    sendMessage(message: any): void {
        this.socket.emit('gameSocket', message);
    }
}
