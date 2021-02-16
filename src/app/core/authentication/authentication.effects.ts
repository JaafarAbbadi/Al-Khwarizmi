import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, exhaustMap, tap, catchError, mergeMap, skip} from 'rxjs/operators';
import {
    login,
    loginSuccess,
    loginFailed,
    validateLoginEmail,
    loginEmailValidationResult,
    validateRegisterEmail,
    RegisterEmailValidationResult,
    validateRegisterPhoneNumber,
    RegisterPhoneNumberValidationResult
} from './authentication.actions';

import { ToastController, NavController } from '@ionic/angular';
import { from, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable()
export class AuthEffects {
    emailExistsCall = this.ngFireFunc.httpsCallable('emailExists');
    phoneNumberExistsCall = this.ngFireFunc.httpsCallable('phoneNumberExists');
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap(action => from(this.ngFireAuth.signInWithEmailAndPassword(action.email, action.password)).pipe(
            map(() => loginSuccess()),
            tap(() => this.router.navigateRoot('/home')),
            catchError(err => of(loginFailed({loginErrorMessage: err.message}))),
        ))
    ));
    validateLoginEmail$ = createEffect(() => this.actions$.pipe(
        skip(1),
        ofType(validateLoginEmail),
        mergeMap(action => this.emailExistsCall({email: action.email})),
        map(val => loginEmailValidationResult({loginEmailValid: val.exists}))
    ));
    validateRegisterEmail$ = createEffect(() => this.actions$.pipe(
        skip(2),
        ofType(validateRegisterEmail),
        mergeMap(action => this.emailExistsCall({email: action.email})),
        map(val => RegisterEmailValidationResult({registerEmailValid: !val.exists}))
    ));
    validateRegisterPhoneNumber$ = createEffect(() => this.actions$.pipe(
        skip(2),
        ofType(validateRegisterPhoneNumber),
        mergeMap(action => this.phoneNumberExistsCall({phoneNumber: action.phoneNumber})),
        map(val => RegisterPhoneNumberValidationResult({registerPhoneNumberValid: !val.exists}))
    ));

    constructor(
        private actions$: Actions,
        private router: NavController,
        private ngFireAuth: AngularFireAuth,
        private ngFireFunc: AngularFireFunctions,
        private toastCtrl: ToastController,
    ) { }
    async makeToast(text: string){
        const toast = await this.toastCtrl.create({
            message: text,
            duration: 3000,
        });
        return toast.present();
    }
}
