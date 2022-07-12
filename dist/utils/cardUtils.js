var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { faker } from '@faker-js/faker';
import * as rechargeRepository from '../repositories/rechargeRepository.js';
import * as paymentRepository from '../repositories/paymentRepository.js';
export function generateCardNumber() {
    return faker.random.numeric(16);
}
export function generateCardholderName(name) {
    var holderName = name.trim().split(' ').map(function (word, index) {
        if (index === 0 || index === name.trim().split(' ').length - 1) {
            return word.toUpperCase();
        }
        else if (word.length >= 3) {
            return word.charAt(0).toUpperCase();
        }
        else
            return '';
    });
    return holderName.join(' ').replace('  ', ' ');
}
export function generateExpirationDate() {
    var date = new Date();
    var month = String(date.getMonth()).padStart(2, '0');
    var year = String(date.getFullYear() + 5).slice(-2);
    return ("".concat(month, "/").concat(year));
}
export function generateCVC() {
    return faker.random.numeric(3);
}
export function cardExpired(expiration) {
    var day = '01';
    var formatedExpiration = "".concat(day, "/").concat(expiration.substring(0, 2), "/20").concat(expiration.substring(3, 5));
    var expirationDate = new Date(formatedExpiration);
    var today = new Date();
    if (today.getMonth() > expirationDate.getMonth() && today.getFullYear() > expirationDate.getFullYear()) {
        return true;
    }
    return false;
}
export function formatDate(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = String(date.getFullYear());
    return "".concat(day, "/").concat(month, "/").concat(year);
}
export function getCardBalance(cardId) {
    return __awaiter(this, void 0, void 0, function () {
        var recharges, payments, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, rechargeRepository.findByCardId(cardId)];
                case 1:
                    recharges = _a.sent();
                    return [4 /*yield*/, paymentRepository.findByCardId(cardId)];
                case 2:
                    payments = _a.sent();
                    balance = recharges.reduce(function (acc, recharge) { return acc + recharge.amount; }, 0) - payments.reduce(function (acc, payment) { return acc + payment.amount; }, 0);
                    return [2 /*return*/, { balance: balance, recharges: recharges, payments: payments }];
            }
        });
    });
}
