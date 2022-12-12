import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Imported Custom Modules
import { MaterialAngularModule } from './material-angular/material-angular.module';

// Components
import { MdLayoutGridCellComponent } from './components/md-layout-grid-cell/md-layout-grid-cell.component';
import { ExternalPageTemplateComponent } from './templates/external-page-template/external-page-template.component';
import { InternalPageTemplateComponent } from './templates/internal-page-template/internal-page-template.component';

@NgModule({
    declarations: [
        MdLayoutGridCellComponent,
        ExternalPageTemplateComponent,
        InternalPageTemplateComponent
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
        MdLayoutGridCellComponent,

        ExternalPageTemplateComponent,
        InternalPageTemplateComponent
    ]
})
export class SharedModule { }
