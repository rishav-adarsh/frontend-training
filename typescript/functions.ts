// functions

function fun_name(): void {
    return;
}

function func(): string {
    return "test";
}

function fun_name1(a: number, b: string) {
    return 0;
}
fun_name1(33, "test");

function fun_name2(a: number, ...b: string[]) { }
fun_name2(2, "sample", "5");