import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as s3deploy from '@aws-cdk/aws-s3-deployment'
import * as lambda from '@aws-cdk/aws-lambda'


export class SkillStack extends cdk.Stack {
  public readonly bucket: s3.Bucket
  public readonly handler: lambda.Function
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.handler = new lambda.Function(this, 'Handler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.asset('./lambda/custom'),
      handler: 'index.handler',
    })

    this.bucket = new s3.Bucket(this, 'Bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    new s3deploy.BucketDeployment(this, 'Deploy', {
      sources: [s3deploy.Source.asset('./zip')],
      destinationBucket: this.bucket,
    })

  }
}
