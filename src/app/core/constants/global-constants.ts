export interface UserContext {
    emailId: string,
    accessToken: string,
    isLoggerIn: boolean
}

export class GlobalConstants {
    public static SPINNER_ON: boolean = false;
    
    public static USER_CONTEXT: UserContext = {
        emailId: "", 
        accessToken: "", 
        isLoggerIn: false
    };
}
