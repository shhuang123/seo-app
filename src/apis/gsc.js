const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  950807067990-bcabv677h7oemopkcqee64dobfiquq4d.apps.googleusercontent.com,
  2_mHYEOwDcIt2Vy4czxBD9c0,
  https://documentcloud.adobe.com
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/webmasters',
  'https://www.googleapis.com/auth/webmasters.readonly'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});
