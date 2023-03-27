## Permission error using AWS CLI

If you are seeing permission errors while using aws cli and it worked for you in the past:

1. please ensure your access credentials are setup properly
2. you have MFA enabled in the aws console

If you have done the above steps and you still see errors, you will need to generate session token to work with awscli

### For Virtual MFA (Authenticator)

1. Login to your aws console
2. Navigate to "security crendentials" in the drop down on the top right
3. Note down the ARN of the MFA
   - it should look something like this `arn:aws:iam::11111111111:mfa/NAME`
4. Go to the terminal and issue this command

   - `aws sts get-session-token --serial-number arn-of-the-mfa-device --token-code code-from-token`

   - replace arn-of-the-mfa-device with the value in step #3
   - replace code-from-token with 6 digit totp code from your authenticator app

5. The output will have three values in it

```
{
    "Credentials": {
        "SecretAccessKey": "secret-access-key",
        "SessionToken": "temporary-session-token",
        "Expiration": "expiration-date-time",
        "AccessKeyId": "access-key-id"
    }
}
```

6. These values need to be exported into your terminal variables
7. A sample script of how to do all this:

```
#!/bin/bash
aws_mfa_arn = "arn:aws:iam::111111111111:mfa/user" #replace with your own
read -p "Enter MFA token: " aws_mfa_token
aws_session_token = $(aws sts get-session-token --serial-number $aws_mfa_arn --token-code $aws_mfa_token)
export AWS_ACCESS_KEY_ID=$(echo $aws_session_token | jq .Credentials.AccessKeyId -r)
export AWS_SECRET_ACCESS_KEY=$(echo $aws_session_token | jq .Credentials.SecretAccessKey -r)
export AWS_SESSION_TOKEN=$(echo $aws_session_token | jq .Credentials.SessionToken -r)
```

### For Yubikey MFA
