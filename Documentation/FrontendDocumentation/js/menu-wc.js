'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Strive App Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AchievementsPageModule.html" data-type="entity-link">AchievementsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AchievementsPageModule-ffcd4d69161c2b377d766a4d3babc008"' : 'data-target="#xs-components-links-module-AchievementsPageModule-ffcd4d69161c2b377d766a4d3babc008"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AchievementsPageModule-ffcd4d69161c2b377d766a4d3babc008"' :
                                            'id="xs-components-links-module-AchievementsPageModule-ffcd4d69161c2b377d766a4d3babc008"' }>
                                            <li class="link">
                                                <a href="components/AchievementsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AchievementsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d7118baa6c77bcef20c61a9674d5169c"' : 'data-target="#xs-components-links-module-AppModule-d7118baa6c77bcef20c61a9674d5169c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d7118baa6c77bcef20c61a9674d5169c"' :
                                            'id="xs-components-links-module-AppModule-d7118baa6c77bcef20c61a9674d5169c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogPageModule.html" data-type="entity-link">BlogPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogPageModule-b3f0834250d09368f67df1ee8aac4b95"' : 'data-target="#xs-components-links-module-BlogPageModule-b3f0834250d09368f67df1ee8aac4b95"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogPageModule-b3f0834250d09368f67df1ee8aac4b95"' :
                                            'id="xs-components-links-module-BlogPageModule-b3f0834250d09368f67df1ee8aac4b95"' }>
                                            <li class="link">
                                                <a href="components/BlogPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarPageModule.html" data-type="entity-link">CalendarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarPageModule-8d5831da5998f9858d354a2bcd97e325"' : 'data-target="#xs-components-links-module-CalendarPageModule-8d5831da5998f9858d354a2bcd97e325"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarPageModule-8d5831da5998f9858d354a2bcd97e325"' :
                                            'id="xs-components-links-module-CalendarPageModule-8d5831da5998f9858d354a2bcd97e325"' }>
                                            <li class="link">
                                                <a href="components/CalendarPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatRoomPageModule.html" data-type="entity-link">ChatRoomPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChatRoomPageModule-ee6ec8208fbc4472dad124b1b99fdaf6"' : 'data-target="#xs-components-links-module-ChatRoomPageModule-ee6ec8208fbc4472dad124b1b99fdaf6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatRoomPageModule-ee6ec8208fbc4472dad124b1b99fdaf6"' :
                                            'id="xs-components-links-module-ChatRoomPageModule-ee6ec8208fbc4472dad124b1b99fdaf6"' }>
                                            <li class="link">
                                                <a href="components/ChatRoomPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatRoomPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatesPageModule.html" data-type="entity-link">DatesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatesPageModule-3401b21beb530ca5208b1ad0cabe5d57"' : 'data-target="#xs-components-links-module-DatesPageModule-3401b21beb530ca5208b1ad0cabe5d57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatesPageModule-3401b21beb530ca5208b1ad0cabe5d57"' :
                                            'id="xs-components-links-module-DatesPageModule-3401b21beb530ca5208b1ad0cabe5d57"' }>
                                            <li class="link">
                                                <a href="components/DatesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GoalsPageModule.html" data-type="entity-link">GoalsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GoalsPageModule-b131aaa570db5d62b222174d864484b2"' : 'data-target="#xs-components-links-module-GoalsPageModule-b131aaa570db5d62b222174d864484b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GoalsPageModule-b131aaa570db5d62b222174d864484b2"' :
                                            'id="xs-components-links-module-GoalsPageModule-b131aaa570db5d62b222174d864484b2"' }>
                                            <li class="link">
                                                <a href="components/GoalsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoalsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-78b0ad5ef0bf9e9d66b7f665f9faefc6"' : 'data-target="#xs-components-links-module-HomePageModule-78b0ad5ef0bf9e9d66b7f665f9faefc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-78b0ad5ef0bf9e9d66b7f665f9faefc6"' :
                                            'id="xs-components-links-module-HomePageModule-78b0ad5ef0bf9e9d66b7f665f9faefc6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JournalPageModule.html" data-type="entity-link">JournalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JournalPageModule-5e69b175f5ecfeb87bfc34107e211204"' : 'data-target="#xs-components-links-module-JournalPageModule-5e69b175f5ecfeb87bfc34107e211204"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JournalPageModule-5e69b175f5ecfeb87bfc34107e211204"' :
                                            'id="xs-components-links-module-JournalPageModule-5e69b175f5ecfeb87bfc34107e211204"' }>
                                            <li class="link">
                                                <a href="components/JournalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JournalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainPageModule.html" data-type="entity-link">MainPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainPageModule-635308b59cf31e0a9a4fb1f5e9993f00"' : 'data-target="#xs-components-links-module-MainPageModule-635308b59cf31e0a9a4fb1f5e9993f00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainPageModule-635308b59cf31e0a9a4fb1f5e9993f00"' :
                                            'id="xs-components-links-module-MainPageModule-635308b59cf31e0a9a4fb1f5e9993f00"' }>
                                            <li class="link">
                                                <a href="components/MainPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeditationPageModule.html" data-type="entity-link">MeditationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MeditationPageModule-c14dafbbc3b3be6e19311cdccd164147"' : 'data-target="#xs-components-links-module-MeditationPageModule-c14dafbbc3b3be6e19311cdccd164147"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MeditationPageModule-c14dafbbc3b3be6e19311cdccd164147"' :
                                            'id="xs-components-links-module-MeditationPageModule-c14dafbbc3b3be6e19311cdccd164147"' }>
                                            <li class="link">
                                                <a href="components/MeditationPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeditationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuPageModule.html" data-type="entity-link">MenuPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuPageModule-49a6d339033ac3263408d1a3db470fe6"' : 'data-target="#xs-components-links-module-MenuPageModule-49a6d339033ac3263408d1a3db470fe6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuPageModule-49a6d339033ac3263408d1a3db470fe6"' :
                                            'id="xs-components-links-module-MenuPageModule-49a6d339033ac3263408d1a3db470fe6"' }>
                                            <li class="link">
                                                <a href="components/MenuPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuRoutingModule.html" data-type="entity-link">MenuRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-30ddcb7c19ed2ff758ef59cb49fc0fc6"' : 'data-target="#xs-components-links-module-ProfilePageModule-30ddcb7c19ed2ff758ef59cb49fc0fc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-30ddcb7c19ed2ff758ef59cb49fc0fc6"' :
                                            'id="xs-components-links-module-ProfilePageModule-30ddcb7c19ed2ff758ef59cb49fc0fc6"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link">RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterPageModule-70d2917e18ab4039998d6f6b3c57efe9"' : 'data-target="#xs-components-links-module-RegisterPageModule-70d2917e18ab4039998d6f6b3c57efe9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-70d2917e18ab4039998d6f6b3c57efe9"' :
                                            'id="xs-components-links-module-RegisterPageModule-70d2917e18ab4039998d6f6b3c57efe9"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AudioService.html" data-type="entity-link">AudioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Sound.html" data-type="entity-link">Sound</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});