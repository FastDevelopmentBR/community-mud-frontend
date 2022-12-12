import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
