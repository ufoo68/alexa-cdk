#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AlexaCdkStack } from '../lib/alexa-cdk-stack';

const app = new cdk.App();
new AlexaCdkStack(app, 'AlexaCdkStack');
