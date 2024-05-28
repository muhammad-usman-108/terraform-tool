import Terraform from './index';

// Usage example
const tf = new Terraform('terraform');

tf.init()
  .then(() => tf.plan())
  .then(output => console.log('Plan:', output))
  .then(() => tf.apply())
  .then(output => console.log('Apply:', output))
  .catch(error => console.error('Error:', error));

// tf.destroy();