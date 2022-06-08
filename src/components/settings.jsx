const baseUrl = "arosenvinge.dk/devops-start-code/api/"
export function loginURL(){
    //must be used for login function/component
    const url = baseUrl + "login";
}
export function adminInfo(){
    //used after login to show info for admin user
    return baseUrl + "info/admin";
}
export function basicLogin(){
    //used after login to show info for basic user
    return baseUrl + "info/user"
}
export const url = baseUrl + "login";

