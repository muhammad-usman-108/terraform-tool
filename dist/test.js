"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
// Usage example
const tf = new index_1.default('terraform');
tf.init()
    .then(() => tf.plan())
    .then(output => console.log('Plan:', output))
    .then(() => tf.apply())
    .then(output => console.log('Apply:', output))
    .catch(error => console.error('Error:', error));
// tf.destroy();
