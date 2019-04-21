import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatChipsModule,
  MatCardModule,
  MatRippleModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatNativeDateModule,
  MatExpansionModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoaderOverlayComponent } from '../components/loader-overlay/loader-overlay.component';
import { DataEditorComponent } from '../components/data-editor/data-editor.component';
import { MathTextDirective } from 'src/app/directives/mathtext.directive';
import { DeleteConfirmationComponent } from '../components/delete-confirmation/delete-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatRippleModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
  ],
  declarations: [
    LoaderOverlayComponent,
    DataEditorComponent,
    MathTextDirective,
    DeleteConfirmationComponent
  ],
  exports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatRippleModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatDatepickerModule,
    LoaderOverlayComponent,
    DataEditorComponent,
    MathTextDirective,
    MatNativeDateModule,
    MatExpansionModule,
    DeleteConfirmationComponent,
    MatNativeDateModule
  ]
})
export class MaterialModule {
}
