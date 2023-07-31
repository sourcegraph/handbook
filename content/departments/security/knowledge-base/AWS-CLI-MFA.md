## If you get permission errors using AWS CLI

If you are seeing permission errors while using aws cli and it worked for you in the past:

1. Please ensure your access credentials are setup properly
2. You have MFA enabled in the aws console

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
7. A sample script that will generate 3 export commands that you can run in your CLI to set the environment variables:

```
#!/bin/bash
aws_mfa_arn = "arn:aws:iam::111111111111:mfa/user" #replace with your own
read -p "Enter MFA token: " aws_mfa_token
aws_session_token = $(aws sts get-session-token --serial-number $aws_mfa_arn --token-code $aws_mfa_token)
Access_Key=$(echo "$aws_session_token" | jq .Credentials.AccessKeyId -r)
echo export AWS_ACCESS_KEY_ID="$Access_Key"
Secret_Key=$(echo "$aws_session_token" | jq .Credentials.SecretAccessKey -r)
echo export AWS_SECRET_ACCESS_KEY="$Secret_Key"
Session_Token=$(echo "$aws_session_token" | jq .Credentials.SessionToken -r)
echo export AWS_SESSION_TOKEN="$Session_Token"
```

### For Yubikey MFA

To setup yubikey as your MFA for cli session token, you will have to also configure your yubikey as a virtual MFA device in AWS

1.  Download and install the Yubico Authenticator app on your computer or mobile device from the official Yubico website: https://www.yubico.com/products/services-software/download/yubico-authenticator/

2.  Open the Yubico Authenticator app and insert your YubiKey into your computer or connect it to your mobile device.

3.  In the AWS Management Console, go to the IAM service and navigate to the "Security credentials" tab of the user you want to enable MFA for.

4.  Click on "Manage" in the "Assigned MFA device" section.

5.  Select "Virtual MFA device" and click on "Next".

6.  When prompted to "Scan the QR code", click on "Show secret key for manual configuration" instead.

7.  Copy the secret key.

8.  In Yubico Authenticator, click on the "+" button to add a new credential.

9.  Enter the following details:

    - Issuer: AWS or any other name to help you identify the account.
    - Account name: Your AWS IAM username or any other identifier.
    - Secret key: Paste the secret key you copied from the AWS Management Console.
    - Algorithm: SHA-1
    - Digits: 6
    - Period: 30
    - Click "OK" to save the new credential.

Now that you have yubico authenticator setup, you can use the above script with the new MFA device arn and the authenticator code from yubico authenticator to get the session token and start using awscli
