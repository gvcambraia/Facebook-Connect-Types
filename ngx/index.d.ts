import { IonicNativePlugin } from '@ionic-native/core';
export interface FacebookLoginResponse {
    status: string;
    authResponse: {
        session_key: boolean;
        accessToken: string;
        expiresIn: number;
        sig: string;
        secret: string;
        userID: string;
    };
}
/**
 * @name Facebook
 * @description
 * Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.
 *
 * Requires Cordova plugin: `cordova-plugin-facebook-connect`. For more info, please see the [Facebook Connect](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect).
 *
 * #### Installation
 *
 *  To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).
 *
 * [![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)
 *
 * Retrieve the `App ID` and `App Name`.
 *
 * [![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)
 *
 * Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.
 *
 * ```bash
 *  ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"
 * ```
 *
 * After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:
 *
 * [![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)
 *
 * Click `'Add Platform'`.
 *
 * [![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)
 *
 * At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.
 *
 * Take note of the `id` for the next step:
 * ```
 * <widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
 * ```
 *
 * You can also edit the `id` to whatever you'd like it to be.
 *
 * #### iOS Install
 * Under 'Bundle ID', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)
 *
 *
 * #### Android Install
 * Under 'Google Play Package Name', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)
 *
 *
 * And that's it! You can now make calls to Facebook using the plugin.
 *
 * ## Events
 *
 * App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.
 *
 * - [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
 * - [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
 * - [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success
 *
 * Activation events are automatically tracked for you in the plugin.
 *
 * Events are listed on the [insights page](https://www.facebook.com/insights/).
 *
 * For tracking events, see `logEvent` and `logPurchase`.
 *
 * @usage
 * ```typescript
 * import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
 *
 * constructor(private fb: Facebook) { }
 *
 * ...
 *
 * this.fb.login(['public_profile', 'user_friends', 'email'])
 *   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
 *   .catch(e => console.log('Error logging into Facebook', e));
 *
 *
 * this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
 *
 * ```
 *
 */
export declare class Facebook extends IonicNativePlugin {
    EVENTS: {
        EVENT_NAME_ACTIVATED_APP: string;
        EVENT_NAME_DEACTIVATED_APP: string;
        EVENT_NAME_SESSION_INTERRUPTIONS: string;
        EVENT_NAME_TIME_BETWEEN_SESSIONS: string;
        EVENT_NAME_COMPLETED_REGISTRATION: string;
        EVENT_NAME_VIEWED_CONTENT: string;
        EVENT_NAME_SEARCHED: string;
        EVENT_NAME_RATED: string;
        EVENT_NAME_COMPLETED_TUTORIAL: string;
        EVENT_NAME_PUSH_TOKEN_OBTAINED: string;
        EVENT_NAME_ADDED_TO_CART: string;
        EVENT_NAME_ADDED_TO_WISHLIST: string;
        EVENT_NAME_INITIATED_CHECKOUT: string;
        EVENT_NAME_ADDED_PAYMENT_INFO: string;
        EVENT_NAME_PURCHASED: string;
        EVENT_NAME_ACHIEVED_LEVEL: string;
        EVENT_NAME_UNLOCKED_ACHIEVEMENT: string;
        EVENT_NAME_SPENT_CREDITS: string;
        EVENT_PARAM_CURRENCY: string;
        EVENT_PARAM_REGISTRATION_METHOD: string;
        EVENT_PARAM_CONTENT_TYPE: string;
        EVENT_PARAM_CONTENT_ID: string;
        EVENT_PARAM_SEARCH_STRING: string;
        EVENT_PARAM_SUCCESS: string;
        EVENT_PARAM_MAX_RATING_VALUE: string;
        EVENT_PARAM_PAYMENT_INFO_AVAILABLE: string;
        EVENT_PARAM_NUM_ITEMS: string;
        EVENT_PARAM_LEVEL: string;
        EVENT_PARAM_DESCRIPTION: string;
        EVENT_PARAM_SOURCE_APPLICATION: string;
        EVENT_PARAM_VALUE_YES: string;
        EVENT_PARAM_VALUE_NO: string;
    };
    /**
     * Login to Facebook to authenticate this app.
     *
     * ```typescript
     * {
     *   status: 'connected',
     *   authResponse: {
     *     session_key: true,
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     expiresIn: 5183979,
     *     sig: '...',
     *     secret: '...',
     *     userID: '634565435'
     *   }
     * }
     *
     * ```
     *
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
     * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
     */
    login(permissions: string[]): Promise<FacebookLoginResponse>;
    /**
     * Logout of Facebook.
     *
     * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
     * @returns {Promise<any>} Returns a Promise that resolves on a successful logout, and rejects if logout fails.
     */
    logout(): Promise<any>;
    /**
     * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
     *
     * 1) the user is logged into Facebook and has authenticated your application (connected)
     * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
     * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
     *
     * Resolves with a response like:
     *
     * ```
     * {
     *   authResponse: {
     *     userID: '12345678912345',
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     session_Key: true,
     *     expiresIn: '5183738',
     *     sig: '...'
     *   },
     *   status: 'connected'
     * }
     * ```
     *
     * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
     *
     * @returns {Promise<any>} Returns a Promise that resolves with a status, or rejects with an error
     */
    getLoginStatus(): Promise<any>;
    /**
     * Get a Facebook access token for using Facebook services.
     *
     * @returns {Promise<string>} Returns a Promise that resolves with an access token, or rejects with an error
     */
    getAccessToken(): Promise<string>;
    /**
     * Show one of various Facebook dialogs. Example of options for a Share dialog:
     *
     * ```
     * {
     *   method: 'share',
     *   href: 'http://example.com',
     *   caption: 'Such caption, very feed.',
     *   description: 'Much description',
     *   picture: 'http://example.com/image.png'
     * }
     * ```
     *
     * For more options see the [Cordova plugin docs](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
     * @param {Object} options The dialog options
     * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
     */
    showDialog(options: any): Promise<any>;
    /**
     * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
     *
     * For more information see:
     *
     *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
     *  Graph Explorer - https://developers.facebook.com/tools/explorer
     *  Graph API - https://developers.facebook.com/docs/graph-api
     *
     * @param {string}  requestPath Graph API endpoint you want to call
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
     * @param {string}  httpMethod HTTP method for the request, one of "GET", "POST", or "DELETE" (default is "GET")
     * @returns {Promise<any>} Returns a Promise that resolves with the result of the request, or rejects with an error
     */
    api(requestPath: string, permissions: string[], httpMethod?: string): Promise<any>;
    /**
     * Log an event.  For more information see the Events section above.
     *
     * @param {string}  name Name of the event
     * @param {Object}  [params] An object containing extra data to log with the event
     * @param {number}  [valueToSum] any value to be added to added to a sum on each event
     * @returns {Promise<any>}
     */
    logEvent(name: string, params?: Object, valueToSum?: number): Promise<any>;
    /**
     * Enable or disable the auto log app event feature - https://developers.facebook.com/docs/app-events/gdpr-compliance/
     *
     * @param {boolean}  enabled value to be set
     */
    setAutoLogAppEventsEnabled(enabled: boolean): Promise<void>;
    /**
     * Enable or disable the Ads Tracking feature - https://developers.facebook.com/docs/app-events/gdpr-compliance/
     *
     * @param {boolean}  enabled value to be set
     */
     setAdvertiserTrackingEnabled(enabled: boolean): Promise<void>;
    /**
     * Log a purchase. For more information see the Events section above.
     *
     * @param {number}  value Value of the purchase.
     * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
     * @param {Object}  params An object containing extra data to log with the event
     * @returns {Promise<any>}
     */
    logPurchase(value: number, currency: string, params?: Object): Promise<any>;
    /**
     * Returns the deferred app link
     * @returns {Promise<any>}
     */
    getDeferredApplink(): Promise<string>;
    /**
     * Manually log activation events
     * @returns {Promise<any>}
     */
    activateApp(): Promise<any>;
}
