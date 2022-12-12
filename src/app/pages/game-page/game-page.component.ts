import { Component, OnInit } from '@angular/core';

interface ConsoleMessage {
    date: string,
    message: string
}

@Component({
    selector: 'commud-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

    consoleMessages: ConsoleMessage[] = []

    constructor() {
    }

    ngOnInit(): void {
    }

    sendMessage(message: string) {
        this.consoleMessages.push({ date: new Date().toISOString(), message })
        console.log(message)
    }
}
