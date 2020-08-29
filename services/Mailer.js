const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();
        this.sendGridAPI = sendgrid(keys.sendGridKey);
        // helper.Email (below) is a helper function from sendgrid library
        this.from_email = new helper.Email('stevewilkinghoff@gmail.com');
        this.subject = subject;
        // helper.Content (below) is a helper function from sendgrid library
        this.body = new helper.Content('text/html', content);
        // for recipients below - create helper function 'formatAddresses' to deal with list of addresses
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body); // uses addContent function from Mail & registers this.body to it

        // enable click-tracking inside of email using addClickTracking helper ftn we'll build
        this.addClickTracking()

    }

    // create formatAddresses helper function below
    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    // create addClickTracking helper function below
    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
        this.addRecipients()
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sendGridAPI.emptyRequest({
            method: 'POST',
            path: v3/mail/send,
            body: this.toJSON(),
        });

        const response = this.sendGridAPI.API(request);
        return response;
    }
}

module.exports = Mailer;
