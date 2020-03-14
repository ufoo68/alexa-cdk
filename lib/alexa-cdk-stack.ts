import * as cdk from '@aws-cdk/core'
import * as ask from '@aws-cdk/alexa-ask'
import * as iam from '@aws-cdk/aws-iam'
import { ManagedPolicy } from '@aws-cdk/aws-iam'

interface Props {
  bucketName: string
  functionArn: string
}

export class AlexaCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, { bucketName,functionArn }: Props) {
    super(scope, id)

    const s3ReadRole = new iam.Role(this, 'S3BucketReadRole', {
      assumedBy: new iam.ServicePrincipal('alexa-appkit.amazon.com')
    })

    s3ReadRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess'))

    new ask.CfnSkill(this, 'Ask', {
      authenticationConfiguration: {
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET_ID!,
        refreshToken: process.env.REFRESH_TOKEN!,
      },
      skillPackage: {
        s3Bucket: bucketName,
        s3Key: 'skillpackage.zip',
        s3BucketRole: s3ReadRole.roleArn,
        overrides: {
          manifest: {
            apis: {
              custom: {
                endpoint: {
                  uri: functionArn,
                }
              }
            }
          }
        },
      },
      vendorId: process.env.VENDOR_ID!,
    })
  }
}
