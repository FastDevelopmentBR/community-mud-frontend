import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Imported Custom Modules
import { MaterialAngularModule } from './material-angular/material-angular.module';

// Components
import { MdLayoutGridCellComponent } from './components/md-layout-grid-cell/md-layout-grid-cell.component';

@NgModule({
    declarations: [
        MdLayoutGridCellComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule,
        MdLayoutGridCellComponent
    ]
})
export class SharedModule { }
