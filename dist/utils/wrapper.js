"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = void 0;
exports.wrapAsync = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    };
};
//# sourceMappingURL=wrapper.js.map