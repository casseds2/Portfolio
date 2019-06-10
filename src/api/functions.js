import superagent from 'superagent';
import Promise from 'bluebird';

export default {
  sendEmail: (url, body) => {
    return new Promise((resolve, reject) => {
      superagent
        .post(url)
        .send(body)
        .set('Accept', 'application/json')
        .end((err, response) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(response);
        });
    });
  }
};
