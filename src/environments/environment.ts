// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  hostSignIn: 'http://localhost:5000/api/auth/signIn',
  hostAdminCreateClient: 'http://localhost:5000/api/admin/createClient',
  hostAdminCreateUser: 'http://localhost:5000/api/admin/createUser',
  hostAdminUpdateHostClient: 'http://localhost:5000/api/admin/updateHostByClient',
  hostAdminViewUsers: 'http://localhost:5000/api/admin/viewUsers',
  hostAdminUpdateStateUser: 'http://localhost:5000/api/admin/updateStateUser',
  hostAdminViewMetric: 'http://localhost:5000/api/metric/viewMetrics',
  hostAdminViewMetricByDates: 'http://localhost:5000/api/metric/viewMetricsByDate',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
