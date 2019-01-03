import { NgModule } from '@angular/core';

import { MatButtonModule, MatDialogModule, MatTableModule, MatMenuModule, MatCardModule, MatInputModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatDividerModule, MatPaginatorModule, MatCheckboxModule } from '@angular/material';




@NgModule({
    imports: [
        
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatTableModule,
        MatMenuModule,
        MatDividerModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatInputModule,
        
        


    ],
    exports: [
        
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatMenuModule,
        MatDividerModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatInputModule
        
    ],
})


export class MaterialModule { }