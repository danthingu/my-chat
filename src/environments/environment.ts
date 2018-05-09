// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDcqGpLWpvdX4mUdiksRaRFvFGi4GREusQ',
    authDomain: 'my-chat-5f764.firebaseapp.com',
    databaseURL: 'https://my-chat-5f764.firebaseio.com',
    projectId: 'my-chat-5f764',
    storageBucket: '',
    messagingSenderId: '407984792410'
  }
};
