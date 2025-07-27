class ApiErrors extends Error{
    constructor(
        statusCode,
        messege="Something went wrong",
        errors=[],
        estack=""
    ) {
        super(messege)
            this.statusCode = statusCode;
            this.data=null;
            this.success = false;
            this.messege = messege;
            this.errors = errors;
           // this.estack = estack;
        
        if(estack){
            this.estack = estack;
        }else{
            Error.captureStackTrace(this,this.consturctor);
        }
        
    }
}

export { ApiErrors};