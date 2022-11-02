import { HeaderComponent } from "@ag-grid-community/core/dist/cjs/es5/components/framework/componentTypes";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsltoppoComponent } from "./consltoppo/consltoppo/consltoppo.component";
import { CongeHeaderComponent } from "./pages/conge/conge-header/conge-header.component";
import { CongeMainComponent } from "./pages/conge/conge-main/conge-main.component";
import { EmployeeComponent } from "./pages/employee/employee.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { BulletinPaieComponent } from "./pages/paie/EtatApresPaie/bulletin-paie/bulletin-paie.component";
import { RegisterComponent } from "./pages/register/register.component";
import { BsoinComponent } from "./bulsoin/bsoin/bsoin.component";
import { PretavanceComponent } from "./pravance/pretavance/pretavance.component";
import { DemandeHeaderComponent } from "./pages/Demande/demande-header/demande-header.component";
import { GridCongeComponent } from "./ComponentsGrid/grid-conge/grid-conge.component";
import { Register2Component } from "./pages/register2/register2.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "conge", component: CongeHeaderComponent },
  { path: "bulletin_paie", component: BulletinPaieComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "consltopp", component: ConsltoppoComponent },
  { path: "conslbsoin", component: BsoinComponent },
  { path: "pravance", component: PretavanceComponent },
  { path: "register2", component: Register2Component },


  { path: "demande", component: DemandeHeaderComponent },

  
  { path: "grid", component: GridCongeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
