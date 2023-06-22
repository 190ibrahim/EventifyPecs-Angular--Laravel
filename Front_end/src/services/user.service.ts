import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/models/UserModel';
import { LoginRequestModel } from 'src/models/LoginRequestModel';
import { SignUpRequestModel } from 'src/models/SignUpRequestModel';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getUserData(): Observable<UserModel> {
        return this.http.get(
            'http://localhost:8000/api/login'
        ) as Observable<UserModel>;
    }

    login(username: string, password: string): Observable<UserModel> {
        const reqModel: LoginRequestModel = {
            email: username,
            password: password,
        };

        return this.http.post(
            'http://localhost:8000/api/login',
            JSON.stringify(reqModel),
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        ) as Observable<UserModel>;
    }

    logout(): Observable<unknown> {
        return this.http.get(
            'http://localhost:8000/api/logout'
        ) as Observable<unknown>;
    }

    signUp(model: SignUpRequestModel): Observable<UserModel> {
        return this.http.post(
            'http://localhost:8000/register',
            JSON.stringify(model),
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        ) as Observable<UserModel>;
    }
}
