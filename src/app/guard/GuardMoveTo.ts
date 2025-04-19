import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const guardMoveTo = (route: ActivatedRouteSnapshot, router: RouterStateSnapshot) => {
    return confirm("Вы точно хотите перейти на эту страницу?");
}