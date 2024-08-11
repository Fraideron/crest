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

export default class Global extends PageManager {
    onReady() {
        const { cartId, settings, secureBaseUrl } = this.context;

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

        // this.isHeaderAbsolute();
        this.showSearch();
    }

    isHomePage() {
        return $('.release-banner-wrapper').length;
    }

    isHeaderAbsolute() {
        if (this.isHomePage()) {
            $('.desktop-nav-container').css('position', 'absolute');
            console.log('home');
        } else {
            console.log('not home');
            $('.desktop-nav-container').css('position', 'relative');
            $('.desktop-nav-container').css('background', '2F241D');
        }
    }

    httpGet(url, key) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.setRequestHeader('Authorization', key);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    showSearch() {
        const searchToggle = document.querySelector('#customSearchIcon');
        const desktopFormSearch = document.querySelector('.desktop-wrapper-form');
        searchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            desktopFormSearch.classList.toggle('active');
        });
    // desktop-form-search
    }
}
