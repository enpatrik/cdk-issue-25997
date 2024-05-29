import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new cdk.CfnParameter(this, 'HELLO', {
      type: 'String',
    }).valueAsString

    const fn = new lambda.Function(this, 'HelloFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        exports.handler = async function (event) {
          console.log("EVENT", event);
        };
      `),
      environment: {
        HELLO: hello
      },
    });

    fn.addAlias('live')
  }
}
