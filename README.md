# terraform-tool
A node package that helps the developer to provision a cloud Infrastructure-as-Code using Terraform from your application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using npm or yarn.

### npm

```npm i terraform-tool```

### yarn

```yarn add terraform-tool```

## Usage

Here is a simple example to get you started:

```typescript
import { Terraform } from 'terraform-tool';

const tf = new Terraform('terraform');

tf.init()
  .then(() => tf.plan())
  .then(output => console.log('Plan:', output))
  .then(() => tf.apply())
  .then(output => console.log('Apply:', output))
  .catch(error => console.error('Error:', error));

tf.destroy();

```

### Functions


| Function | Description | Output |
|---------|---------| ---------|
| init() | The init function initializes a Terraform working directory. This command is used to set up the backend configuration, download provider plugins, and prepare the working directory for other Terraform operations. | A Promise that resolves to a string containing the standard output of the terraform init command. | 
| plan()| The plan function creates an execution plan, showing what actions Terraform will take to achieve the desired state of the infrastructure. This command is useful for reviewing proposed changes before applying them. | A Promise that resolves to a string containing the standard output of the terraform plan command. |
| apply() | The apply function executes the actions proposed in a Terraform plan, applying changes to achieve the desired state of the infrastructure. The autoApprove parameter, when set to true, automatically approves the changes without prompting for confirmation. | A Promise that resolves to a string containing the standard output of the terraform apply command. |
| destroy() | The destroy function removes all infrastructure managed by the Terraform configuration, effectively tearing down the environment. The autoApprove parameter, when set to true, automatically approves the destruction without prompting for confirmation. | A Promise that resolves to a string containing the standard output of the terraform destroy command. |

## Scripts

### Build

To compile the TypeScript files to JavaScript, run:

```npm run build```

### Test

To run tests, use:

```npm run test```

## Configuration

### TypeScript Configuration

This package uses a `tsconfig.json` file for TypeScript configuration. Here is an example:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
}
```

## Contributing

- [Muhammad Usman](https://github.com/muhammad-usman-108)

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/terraform-tool/blob/main/LICENSE) file for details.

