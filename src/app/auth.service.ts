export class AuthService{
    loggedIn : boolean = false;
    isAuthenticated(){
        return new Promise(
            (resolve,reject)=>{
                if(this.loggedIn)
                    return resolve(true);
                else{
                    setTimeout(()=>{
                        resolve(this.loggedIn);
                    },800)
                }
            }
        );
        
    }
    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }
}