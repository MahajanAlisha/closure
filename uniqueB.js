import { a } from "./uniqueA.js";

const B = 'b';
a(B);
a(B);

setTimeout(() => {
    a(B);
}, 0);