import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import renderGlobalComponents from "./custom/components/scopes/global/main";

export default class Global extends PageManager {
  onReady() {
    const {cartId, settings, secureBaseUrl} = this.context;

    cartPreview(secureBaseUrl, cartId);
    quickSearch();
    currencySelector(cartId);
    foundation($(document));
    quickView(this.context);
    carousel(this.context);
    menu();
    mobileMenuToggle();
    privacyCookieNotification();
    svgInjector();

    this.checkURLParams();

    /* BundleB2B */
    const $body = $('body');
    const B3StorefrontURL = 'https://cdn.bundleb2b.net/b3-auto-loader.js';
    $body.append(`<script src="${B3StorefrontURL}"></script>`);
    window.b3themeConfig = window.b3themeConfig || {};
    window.b3themeConfig.useJavaScript = {
      login: {
        callback(instance) {
          const {
            context: {
              inDevelopment,
            },
            isB2BUser,
          } = instance;

          if (inDevelopment) {
            console.log(instance.name, instance);
          }

          const showBCOrdersContent = () => {
            const style = `
                            <style>
                                .page_type__account_orderstatus .body .container .account {
                                    display: block !important;
                                }
                            </style>
                        `;
            $('head').append(style);
          };

          if (!isB2BUser) {
            showBCOrdersContent();
          }
        },
      },
      orders: {
        callback(instance) {
          const {
            context: {
              inDevelopment,
            },
            isB2BUser,
          } = instance;

          if (inDevelopment) {
            console.log(instance.name, instance);
          }

          const fixClasslist = () => {
            $('.order-lists-wrap').addClass('account');
          };

          const showB3OrdersContent = () => {
            const style = `
                            <style>
                                .page_type__account_orderstatus .body .container .order-lists-wrap {
                                    display: block !important;
                                }
                            </style>
                        `;
            $('head').append(style);
          };

          if (isB2BUser) {
            fixClasslist();
            showB3OrdersContent();
          }
        },
      },
    };
    /* BundleB2B */
    console.log(this.context);

    renderGlobalComponents(cartId, settings.store_hash)
  }

  httpGet(url, key) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.setRequestHeader("Authorization", key);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  checkURLParams() {
    const key = "Bearer GG9T1715Hxq18wYZndyhphHrW3eoP6315gcJvIEg";
    const url = "https://storerocket.io/api/v2/projects/ezpBoGE4vy/locations";

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('institute_id')) {
      // do something if the 'institute_id' parameter exists
      const isRequested = localStorage.getItem('isInstituteRequested');

      if (isRequested === 'true') {
        return;
      }

      const instituteId = urlParams.get('institute_id')
      const response = this.httpGet(url, key);
      const institutes = JSON.parse(response).data;

      const isExists = institutes.some(institute => institute.id === instituteId);
      if (isExists) {
        localStorage.setItem('instituteId', instituteId)
        localStorage.setItem('isInstituteRequested', 'true')
      }
    }
  }
}
