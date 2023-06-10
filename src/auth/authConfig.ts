import {
    Configuration,
    PopupRequest
} from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: "1d4192fb-67a4-4757-be58-dcb0926fe92e",
        authority: "https://login.microsoftonline.com/3c49b111-19db-458d-83ff-1af0ac9ae35b",
        redirectUri: '/',
        postLogoutRedirectUri: '/',
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["openid", "profile", "User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
