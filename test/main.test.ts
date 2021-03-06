import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { JenkinsStack } from '../src/stacks/jenkinsStack';

test('Snapshot', () => {
  const app = new App();
  const stack = new JenkinsStack(app, 'test', {
    useDefaultVpc: true,
    usePublicSubnets: false,
    windowsWorkerAmi: 'ami-12345678',
    env: {
      account: '12345678',
      region: 'ap-northeast-1',
    },
    githubTokenSecretArn:
      'arn:aws:secretsmanager:ap-northeast-1:873556626032:secret:test-ZOUxvI',
    awsKeyPairSecretArn:
      'arn:aws:secretsmanager:ap-northeast-1:873556626032:secret:test-ZOUxvI',
    jenkinsAdminPasswordSecretArn:
      'arn:aws:secretsmanager:ap-northeast-1:873556626032:secret:test-ZOUxvI',
    jenkinsWindowsWorkerPasswordSecretArn:
      'arn:aws:secretsmanager:ap-northeast-1:873556626032:secret:test-ZOUxvI',
  });

  expect(
    app.synth().getStackArtifact(stack.artifactId).template,
  ).toMatchSnapshot();
});
