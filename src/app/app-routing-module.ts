import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child } from './components/child/child';
import { Parent } from './components/parent/parent';
const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: Parent },
  { path: 'child', component: Child },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
