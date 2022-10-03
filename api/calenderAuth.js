const { google } = require("googleapis");
const calendar = google.calendar("v3");

const oauth2Client = new google.auth.OAuth2(
  "123809003660-loa68504p4vkv03ce02g2fjrgg1s5543.apps.googleusercontent.com",
  "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",
  "https://sync-appointment.vercel.app/landing-zone"
);

const scopes = ["https://www.googleapis.com/auth/calendar"];

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
});

console.log({ url });
