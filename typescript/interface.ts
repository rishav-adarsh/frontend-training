interface Validator {
    isValid(value: string | number);
}

interface ValidatorMessage {
    setMessage(message:string);
}

class EmailValidator implements Validator, ValidatorMessage {
    setMessage(message: string) {
        console.log("setMessage logic..")
    }
    isValid(value: string | number) {
        console.log("Some validator logic..");
    }
}
