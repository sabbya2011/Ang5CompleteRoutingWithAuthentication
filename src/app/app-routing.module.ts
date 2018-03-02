import { ErrorPageComponent } from './error-page/error-page.component';
import { CanGuardDeactivate } from './servers/edit-server/can-deactivate-guard.service';
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth-guard.service";
import { ServerResolver } from './servers/server/server-resolver.service';


const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',redirectTo:''},
    {path:'users',component:UsersComponent,
      children:[
        {path:':id/:name',component:UserComponent},
      ]
    },
    {path:'servers',component:ServersComponent,
    //canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
      children:[
        {path:':id',component:ServerComponent, resolve : {server:ServerResolver}},
        {path:':id/edit',component:EditServerComponent,canDeactivate:[CanGuardDeactivate]}
      ]
    },
    //{path:'not-found', component:NotFoundComponent},
    {path:'not-found', component:ErrorPageComponent,data:{message:'Page Not Found'}},
    {path:'**',redirectTo:'/not-found'}
  ]
  @NgModule({
    
    imports: [
      //RouterModule.forRoot(appRoutes,{useHash:true})
      RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
  })
export class AppRoutingModule{

}