"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("@/generated/prisma");
var prismaClientSingleton = function () {
    return new prisma_1.PrismaClient();
};
var globalForPrisma = globalThis;
var prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : prismaClientSingleton();
exports.default = prisma;
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = prisma;
