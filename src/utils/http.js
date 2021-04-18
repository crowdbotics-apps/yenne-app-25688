import axios from 'axios';
import { appConfig } from '../config/app';

const APP_PLATFORM = 'Mobile';

// export const request = axios.create({
//   baseURL: appConfig.backendAPIEndPoint,
//   headers: {
//     app_platform: APP_PLATFORM,
//     app_version: 1,
//   },
// });
export const request = axios.create({
  baseURL: 'http://192.168.0.101:8000/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});
// request.defaults.baseURL = appConfig.emailAuthAPIEndPoint;
export function setupHttpConfig() {
  // request.defaults.baseURL = appConfig.emailAuthAPIEndPoint;
  // request.defaults.timeout = appConfig.defaultTimeout;
  // axios.defaults.headers['Content-Type'] = 'application/json';
}

export const setAuthorizationToken = token => {
  request.defaults.headers.Authorization = `Token ${token}`;
};
// class Api {
//   static async headers() {
//     let token = '';
//     await Storage.retrieveData('access_token').then(resp => {
//       token = resp;
//     });
//     return {
//       'Content-Type': 'application/json',
//       Authorization: token ? `Token ${token.key}` : '',
//     };
//   }

//   static async headersMultiForm() {
//     let token = '';
//     await Storage.retrieveData('access_token').then(resp => {
//       token = resp;
//     });
//     return {
//       'Content-Type': 'multipart/form-data',
//       Authorization: token ? `Token ${token.key}` : '',
//     };
//   }

//   static get(route) {
//     return this.xhr(route, null, 'GET');
//   }

//   static put(route, params) {
//     return this.xhr(route, params, 'PUT');
//   }

//   static post(route, params) {
//     return this.xhr(route, params, 'POST');
//   }

//   static delete(route, params) {
//     return this.xhr(route, params, 'DELETE');
//   }

//   static putMultiForm(route, parama) {
//     return this.xhrMultiForm(route, parama, 'PUT');
//   }

//   static postMultiForm(route, parama) {
//     return this.xhrMultiForm(route, parama, 'POST');
//   }

//   static async xhrMultiForm(route, params, verb) {
//     const url = `${HOST}${route}`;
//     let options = Object.assign({method: verb}, params ? {body: params} : null);
//     options.headers = await Api.headersMultiForm();
//     console.log(url, options);
//     return fetch(url, options)
//       .then(resp => {
//         let json = resp.json();
//         if (resp.ok) {
//           if (route === 'login') {
//             this.setStorage(resp);
//           }
//           return json;
//         }
//         return json.then(err => {
//           throw err;
//         });
//       })
//       .then(json => {
//         if (route === 'login') {
//           this.setAuth(json);
//         }
//         return json;
//       });
//   }

//   static async xhr(route, params, verb) {
//     const url = `${HOST}${route}`;
//     let options = Object.assign(
//       {method: verb},
//       params ? {body: JSON.stringify(params)} : null,
//     );
//     options.headers = await Api.headers();
//     console.log(url, options);
//     return fetch(url, options)
//       .then(resp => {
//         // console.log("test", getToken())
//         // console.log("access", Storage.retrieveData('access_token'))
//         let json = resp.json();
//         if (resp.ok) {
//           if (route === 'login') {
//             this.setStorage(resp);
//           }
//           return json;
//         }
//         return json.then(err => {
//           throw err;
//         });
//       })
//       .then(json => {
//         if (route === 'login') {
//           this.setAuth(json);
//         }
//         return json;
//       });
//   }
// }
// export default Api;
