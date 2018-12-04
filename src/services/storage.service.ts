import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    //insere um usuario no localStorage
setLocalUser(value : string){ 
localStorage.setItem("user",value);
}

// retorna o usuário
getLocalUser(){
return localStorage.getItem("user");
}

// remove usuário
setNullLocalUser(){
localStorage.setItem("user",null);
}
}