import { HttpContextToken } from "@angular/common/http";
import { GlobalConstants } from "src/app/core/constants/global-constants";

export interface UserContext {
    emailId: string,
    accessToken: string,
}

export const CONTEXT = new HttpContextToken<UserContext>(() => {
    const context: UserContext = {
        emailId: "",
        accessToken: ""
    };

    return context;
});

