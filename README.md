# CDK issue #25997

See: https://github.com/aws/aws-cdk/issues/25997

LIVE alias is not being updated when environment variable that use a tokenized
parameter.

```sh
# first
npx cdk deploy --parameters "CdkTest:HELLO=foo"
# second
npx cdk deploy --parameters "CdkTest:HELLO=bar"
```

Environment variable is updated but the live alias is still pointing to the
previous version.
