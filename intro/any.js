"use strict";
// Any
Object.defineProperty(exports, "__esModule", { value: true });
var hero; // cansidered as any if not specified/inferred by string type
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);
