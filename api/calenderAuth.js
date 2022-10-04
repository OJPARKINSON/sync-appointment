const { google } = require("googleapis");
const calendar = google.calendar("v3");

const oauth2Client = new google.auth.OAuth2(
  "_",
  "_",
  "https://sync-appointment.vercel.app/landing-zone"
);

const scopes = ["https://www.googleapis.com/auth/calendar"];

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
});

console.log({ url });
