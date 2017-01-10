export class Environment {
    type: String;
    baseUrl: String;

    constructor(type, baseUrl){
        this.type = type;
        this.baseUrl = baseUrl;
    }    
}

export class CurrentEnv {
    private devEnv: Environment;
    private qaEnv: Environment;

    constructor(){
        this.devEnv = new Environment("DEV", "http://localhost:10192/");
        this.qaEnv = new Environment("QA", "http://10.1.1.179/Sigma7.Net.WebApi/");
    }

    getCurrent(){
        return this.devEnv;
    }
}