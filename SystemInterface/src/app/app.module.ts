import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NameofpersonComponent } from './primitivebase/nameofperson/nameofperson.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { PersonaldescriptionComponent } from './primitivebase/personaldescription/personaldescription.component';
import { PersoncreateComponent } from './primitivebase/personcreate/personcreate.component';
import { EventcreatepersonComponent } from './transaction/eventcreateperson/eventcreateperson.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ClassificationcomponentComponent } from './primitivebase/classificationcomponent/classificationcomponent.component';
import {MatSelectModule} from '@angular/material/select';
import { ToppageComponent } from './toppages/toppage/toppage.component';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';
import { DatabasepersonComponent } from './catalogobject/databaseperson/databaseperson.component';
import { ContactlocationinformationComponent } from './primitivebase/contactlocationinformation/contactlocationinformation.component';
import { DatabasepersontopComponent } from './intterfacebase/databasepersontop/databasepersontop.component';
import { DatadescriptionComponent } from './primitivebase/classificationcomponent/datadescription/datadescription.component';
import { PurposeconceptComponent } from './primitivebase/purposeconcept/purposeconcept.component';
import { DatadescriptionpersonComponent } from './primitivebase/datadescriptionperson/datadescriptionperson.component';

const routes: Routes = [

{path: 'top', component: ToppageComponent},
{path: 'eventcreateperson', component: EventcreatepersonComponent},
{path: 'databaseperson', component: DatabasepersonComponent},
{path: 'persontop', component: DatabasepersontopComponent},
{ path: '',   redirectTo: '/top', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    NameofpersonComponent,
    PersonaldescriptionComponent,
    PersoncreateComponent,
    EventcreatepersonComponent,
    ClassificationcomponentComponent,
    ToppageComponent,
    DatabasepersonComponent,
    ContactlocationinformationComponent,
    DatabasepersontopComponent,
    DatadescriptionComponent,
    PurposeconceptComponent,
    DatadescriptionpersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
