import { ServersService } from './../servers.service';
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

interface Server {
    id:number,
    name:string,
    status:string
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverService : ServersService){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
        :Observable<Server>|Promise<Server>|Server{
            return this.serverService.getServer(+route.params["id"]);
        }
}