import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.auth.getToken();
        if(token){
            request = request.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });
        }
        return next.handle(request);
    }
}
