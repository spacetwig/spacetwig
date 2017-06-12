const helper = require('sendgrid').mail;
const Promise = require('bluebird');

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

module.exports = {
  sendEmail: function(reqBody, confirmationLink) {
    return new Promise((resolve, reject) => {
      const from_email = new helper.Email('nerdyemmanuel@gmail.com');
      const to_email = new helper.Email(reqBody.email);
      const subject = 'pls confirm your spacetwig account';
      const content = new helper.Content('text/html', confirmationLink);
      const mail = new helper.Mail(from_email, subject, to_email, content);

      const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
      const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
      });

      sg.API(request, function(error, response) {
        if(error) {
          reject(error);
          return;
        }

        resolve(response);
      });

    });
  },


  sendEmailContact: function(reqBody, contactContent) {
    return new Promise((resolve, reject) => {
      const from_email = new helper.Email('nerdyemmanuel@gmail.com');
      const to_email = new helper.Email('spacetwig@gmail.com');
      const subject = reqBody.subject;
      const content = new helper.Content('text/html', contactContent);
      const mail = new helper.Mail(from_email, subject, to_email, content);

      const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
      const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
      });

      sg.API(request, function(error, response) {
        if(error) {
          reject(error);
          return;
        }

        resolve(response);
      });

    });
  },



    sendEmails: (recipients, emailInfo, mailContent, completion) => {
      const from_email = new helper.Email('nerdyemmanuel@gmail.com');
      const subject = emailInfo.subject;
      const content = new helper.Content('text/html', mailContent);

      recipients.forEach((recipient) => {
        const to_email = new helper.Email(recipient.trim());
        const mail = new helper.Mail(from_email, subject, to_email, content);

        //const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
        const request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON(),
        });

        sg.API(request, function(error, response) {
          if(error) {
            //reject(error);
            //return;
          }

          //resolve(response);
        });
      });

      completion();
    },

};
