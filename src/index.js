"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const allQuoteBtn = document.getElementById('osszesIdezetGomb');
allQuoteBtn === null || allQuoteBtn === void 0 ? void 0 : allQuoteBtn.addEventListener('click', function ListAllQuote() {
});
function beolvas() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("../quotes.json");
        let vals = yield response.json();
        console.log(vals.quotes);
        const allQuoteBtn = document.getElementById('osszesIdezetGomb');
        allQuoteBtn === null || allQuoteBtn === void 0 ? void 0 : allQuoteBtn.addEventListener('click', function ListAllQuote() {
            vals.quotes.sort(function (a, b) {
                if (a.author < b.author) {
                    return -1;
                }
                if (a.author > b.author) {
                    return 1;
                }
                return 0;
            });
            console.log(vals.quotes);
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    beolvas();
});
