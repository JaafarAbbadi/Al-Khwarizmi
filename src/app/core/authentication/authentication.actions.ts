import { createAction, props } from '@ngrx/store';

// validate login email, register email, phoneNumber

export const validateLoginEmail = createAction(
    '[Auth] Validate Login Email',
    props<{email: string}>()
);
export const loginEmailValidationResult = createAction(
    '[Auth] Login Email Validation Result',
    props<{loginEmailValid: boolean}>()
);
export const validateRegisterEmail = createAction(
    '[Auth] Validate Register Email',
    props<{email: string}>()
);
export const RegisterEmailValidationResult = createAction(
    '[Auth] Register Email Validation Result',
    props<{registerEmailValid: boolean}>()
);

export const validateRegisterPhoneNumber = createAction(
    '[Auth] Validate Register PhoneNumber',
    props<{phoneNumber: string}>()
);
export const RegisterPhoneNumberValidationResult = createAction(
    '[Auth] Register PhoneNumber Validation Result',
    props<{registerPhoneNumberValid: boolean}>()
);

// login

export const login = createAction(
    '[Auth] Login',
    props<{email: string, password: string}>()
);
export const loginFailed = createAction(
    '[Auth] Login Failed',
    props<{loginErrorMessage: string}>()
);
export const loginSuccess = createAction(
    '[Auth] Login Success'
);


//

export const verifyCaptcha = createAction(
    '[Auth] Verify Captcha',
);
export const verifyCaptchaSuccess = createAction(
    '[Auth] Verify Captcha Success',
);
export const verifyCaptchaFailed = createAction(
    '[Auth] Verify Captcha Failed',
);


export const sendSMS = createAction(
    '[Auth] Send SMS',
    props<{phoneNumber: string}>()
);
export const sendSMSSuccess = createAction(
    '[Auth] Send SMS success',
);
export const sendSMSFailed = createAction(
    '[Auth] Send SMS Failed',
);


export const register = createAction(
    '[Auth] Register'
);
export const registerSuccess = createAction(
    '[Auth] Register Success'
);
export const registerFailed = createAction(
    '[Auth] Register Failed'
);


export const logout = createAction(
    '[Auth] Logout'
);
export const logoutSuccess = createAction(
    '[Auth] Logout Success'
);
export const logoutFailed = createAction(
    '[Auth] Logout Failed'
);
