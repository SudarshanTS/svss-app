import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class AngularMaterialModule { }
