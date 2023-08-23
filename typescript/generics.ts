function computeLength<T>(arr: T[]) {
    console.log("logic here..");
}

computeLength<number>([1, 2, 3]);
computeLength<string>(["str1", "str2", "str3"]);
computeLength<boolean>([true, true, false])