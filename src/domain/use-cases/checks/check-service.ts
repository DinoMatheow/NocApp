
interface CheckServiceInterface {
    execute(url: string): Promise<boolean>;
}


type SuccessCallback = () => void;
type ErrorCallback = (error: String) => void;


export class CheckService implements CheckServiceInterface {

    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback

    ){
    }

    async execute( url :string):Promise<boolean> {
        try {
        const  req = await fetch(url);
        if (!req.ok) {throw new Error(`HTTP error! status: ${req.status}`); 
        }
        this.successCallback();
        return true;
        } catch (error) {
            this.errorCallback(`${error}`);
            console.log(`${error}`);


            return false;
        }
        
    }

};