#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AlexaCdkStack } from '../lib/alexa-cdk-stack';
import { SkillStack } from '../lib/skill'

const app = new cdk.App();
const { bucket, handler } = new SkillStack(app, 'SkillStack')
new AlexaCdkStack(app, 'AlexaCdkStack', {
  bucketName: bucket.bucketName,
  functionArn: handler.functionArn,
});
