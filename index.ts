import { exec } from 'child_process';

class Terraform {
  directory: string;

  constructor(directory: string) {
    this.directory = directory;
  }

  run(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(`terraform ${command}`, { cwd: this.directory }, (error, stdout, stderr) => {
        if (error) {
          console.log(error);
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  init(): Promise<string> {
    return this.run('init');
  }

  apply(autoApprove: boolean = true): Promise<string> {
    const flag = autoApprove ? '-auto-approve' : '';
    return this.run(`apply ${flag}`);
  }

  plan(): Promise<string> {
    return this.run('plan');
  }

  destroy(autoApprove: boolean = true): Promise<string> {
    const flag = autoApprove ? '-auto-approve' : '';
    return this.run(`destroy ${flag}`);
  }
}

export default Terraform;
