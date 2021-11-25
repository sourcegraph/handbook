/**
 * This code is deployed as a Netlify Function (https://docs.netlify.com/functions/overview/)
 * When a user authenticates using Netlify Identity (https://docs.netlify.com/visitor-access/identity/)
 * it is called to validate the domain of the user's email address to make sure they are a Sourcegraph teammate.
 */
exports.handler = function (event, context, callback) {
  /*
   * Credit https://github.com/safoo
   * Source: https://github.com/safoo/netlify-identity-lock/blob/master/functions/identity-check-domain.js
   */

  const domainWhitelist = ['sourcegraph.com']
  const authenticatedRole = 'teammate'
  const { user } = JSON.parse(event.body)
  const { email } = user

  console.log(`Authenticating ${email}`)

  const domain = email.split(`@`)[1]

  let response = ''
  let statusCode = 400

  if (domainWhitelist.includes(domain)) {
    console.log(`Whitelisting ${email}`)
    statusCode = 200
    response = JSON.stringify({
      app_metadata: {
        roles: [authenticatedRole],
      },
    })
  } else {
    console.log(`Blocking ${email}`)
  }

  callback(null, {
    statusCode,
    body: response,
  })
}
