"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.create = function () {
        return this.transactions;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
