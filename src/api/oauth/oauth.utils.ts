import { UserManager } from "oidc-client-ts";

//Creao il client per l'accesso ai metodi del protocollo oauth usando le configurazioni di test
export const client = new UserManager({
    authority: "https://dev-q6m5tuju4skbacty.us.auth0.com",
    client_id: "U1T0PItPSBGH4Fwo3ZA2IOIQ7jghx11N",
    redirect_uri: "",
})