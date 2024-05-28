"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Terraform {
    constructor(directory) {
        this.directory = directory;
    }
    run(command) {
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(`terraform ${command}`, { cwd: this.directory }, (error, stdout, stderr) => {
                if (error) {
                    console.log(error);
                    reject(stderr);
                }
                else {
                    resolve(stdout);
                }
            });
        });
    }
    init() {
        return this.run('init');
    }
    apply(autoApprove = true) {
        const flag = autoApprove ? '-auto-approve' : '';
        return this.run(`apply ${flag}`);
    }
    plan() {
        return this.run('plan');
    }
    destroy(autoApprove = true) {
        const flag = autoApprove ? '-auto-approve' : '';
        return this.run(`destroy ${flag}`);
    }
}
exports.default = Terraform;
