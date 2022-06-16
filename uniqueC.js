import { a } from "./uniqueA.js";

const C = 'c';

a(C);
a(C);

setTimeout(() => {
    a(C);
}, 0);