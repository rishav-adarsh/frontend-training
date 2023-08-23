// class

class Demo {
    // readonly can be initialised during the declaration or in the constructor
    private readonly demoData: string;
    static count:number = 10;
    constructor() {
        this.demoData = "hello";  // Valid operation
    }
    public func(a: number): void {
        // this.demoData = "hello";  //  Invalid operation
        Demo.count = 100;
    }
}

const d = new Demo();
// d.demoData
d.func(2);