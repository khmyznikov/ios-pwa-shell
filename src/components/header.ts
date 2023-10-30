import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@nordhealth/components/lib/TopBar.js';

import { resolveRouterPath } from '../router';

declare const AppleID: any;

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'ms-auth-test';

  @property({ type: Boolean}) enableBack: boolean = false;

  // @ts-ignore
  static styles =[ css`
    nord-top-bar{
      padding: 10px;
      padding-top: max(calc(env(safe-area-inset-top) + 5px), 10px);
      padding-left: max(env(safe-area-inset-left), 10px);
      padding-right: max(env(safe-area-inset-right), 10px);
      block-size: auto;
    }
  `];

  async firstUpdated() {



    AppleID.auth.init({
      clientId : '[CLIENT_ID]',
      scope : '[SCOPES]',
      redirectURI : location.href,
      state : '[STATE]',
      nonce : '[NONCE]',
      usePopup : false
  });
//   try {
//     const data = await AppleID.auth.signIn()
//     // Handle successful response.
// } catch ( error ) {
//     // Handle error.
// }
  }

  render() {
    return html`
    <nord-top-bar>
      <h1 class="n-typescale-l">Apple PWA Shell</h1>
      <!--<nord-button href="#" size="m" variant="default" slot="end">
        <nord-icon slot="start" name="interface-login"></nord-icon>
        Sign in Redirect
      </nord-button>-->
      <!-- <div slot="end" id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div> -->
    </nord-top-bar>
        <!-- <calcite-navigation slot="header">
        <calcite-navigation-logo slot="logo" heading="Apple PWA Shell"
            description="Check and try Web and Mobile APIs"></calcite-navigation-logo>
        <calcite-menu slot="content-end">

            <calcite-button icon-end="sign-in" scale="m">Sign in Redirect</calcite-button>
        </calcite-menu>
    </calcite-navigation> -->

      <!-- <header>

         <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #ff7089;">
          <a class="navbar-brand" href="/">PWA Shell Sanbox</a>
          <button type="button" id="loginRedirect" class="btn btn-light ml-auto" onclick="signIn(this.id)">
            Sign in Redirect
          </button>
        </nav>

        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}

          <h1>${this.title || "PWA Shell Sanbox"}</h1>
        </div>
      </header> -->
    `;
  }
}
