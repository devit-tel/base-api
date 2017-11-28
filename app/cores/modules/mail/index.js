import SparkPost from 'sparkpost'
import {config} from 'app/cores/config'
const mailClient = new SparkPost()

export function sendMail (sender, receiver, subject, data) {
  let option = {
    options: {},
    content: {
      from: sender,
      subject: subject,
      html: data
    },
    recipients: [
      {
        address: receiver
      }
    ]
  }
  if (process.env.NODE_ENV !== 'production') {
    option.options = { sandbox: true }
    option.content.from = 'localpart@sparkpostbox.com'
  }
  return new Promise(function sendEmailPromise (resolve, reject) {
    mailClient.transmissions.send(option)
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
