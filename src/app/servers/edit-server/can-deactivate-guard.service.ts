import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

export interface CanComponentDeactivate{
    canDeactivate : ()=> Observable<boolean>|Promise<boolean>|boolean;
}

export class CanGuardDeactivate implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component:CanComponentDeactivate,
    activeRoute:ActivatedRouteSnapshot,
    activeState:RouterStateSnapshot,
    nextState:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        return component.canDeactivate();
    }
}