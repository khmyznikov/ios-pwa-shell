import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
// import { resolveRouterPath } from '../router';

import '@nordhealth/components/lib/Button.js';
import '@nordhealth/components/lib/Fieldset.js';
import '@nordhealth/components/lib/Textarea.js';
import '@nordhealth/components/lib/Card.js';
import '@nordhealth/components/lib/NavGroup.js';
import '@nordhealth/components/lib/NavItem.js';
import '@nordhealth/components/lib/DropdownItem.js';
import '@nordhealth/components/lib/DropdownGroup.js';
import '@nordhealth/components/lib/Divider.js';
import '@nordhealth/components/lib/Stack.js';
import '@nordhealth/components/lib/Icon.js';

import '@nordhealth/css/lib/nord.min.css';

// import { styles } from '../styles/shared-styles';

declare const window: Window & {
	webkit?: any;
};

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';
  
  @state() pushLog = '';
  @state() iapLog = '';
  @state() iOSPushCapability = false;
  @state() iOSPrintCapability = false;
  @state() iOSIAPCapability = false;

  static styles = [
    // styles,
    css`
		nord-card{
			max-width: 400px;
		}
		.stack{
			padding: 15px;
		}
  `];

	logMessage(message: string, iap?: boolean){
		console.log(message);
		this[iap? 'iapLog': 'pushLog'] += `>: ${message}\r\n`;
	}

  async firstUpdated() {

	// @ts-ignore
	window.addEventListener('push-permission-request', (event: CustomEvent) => {
		if (event && event.detail){
			this.logMessage(event.detail);
		}
	});

	// @ts-ignore
	window.addEventListener('push-permission-state', (event: CustomEvent) => {
		if (event && event.detail){
			this.logMessage(event.detail);
		}
	});
	
	// @ts-ignore
	window.addEventListener('push-notification', (event: CustomEvent) => {
		if (event && event.detail){
			this.logMessage(JSON.stringify(event.detail));
		}
	});

	// @ts-ignore
	window.addEventListener('iap-transactions-result', (event: CustomEvent) => {
		if (event && event.detail) { 
			this.logMessage(event.detail, true);
		}
	});
	// @ts-ignore
	window.addEventListener('iap-purchase-result', (event: CustomEvent) => {
		if (event && event.detail) { 
			this.logMessage(event.detail, true);
		}
	});
	// @ts-ignore
	window.addEventListener('iap-products-result', (event: CustomEvent) => {
		if (event && event.detail) { 
			this.logMessage(event.detail, true);
		}
	});

	if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers['push-permission-request'] && window.webkit.messageHandlers['push-permission-state']) {
		this.iOSPushCapability = true;
	}
	if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.print) {
		this.iOSPrintCapability = true;
	}

	if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers['iap-purchase-request'] && window.webkit.messageHandlers['iap-transactions-request'] && window.webkit.messageHandlers['iap-products-request']) {
		this.iOSIAPCapability = true;
	}
  }


	printRequest(){
		if (this.iOSPrintCapability)
			window.webkit.messageHandlers.print.postMessage('print');
		else
			window.print();
	}

	pushPermissionRequest(){
		if (this.iOSPushCapability)
			window.webkit.messageHandlers['push-permission-request'].postMessage('push-permission-request');
	}

	pushPermissionState(){
		if (this.iOSPushCapability)
			window.webkit.messageHandlers['push-permission-state'].postMessage('push-permission-state');
	}


	purchaseRequest(){
		if (this.iOSIAPCapability)
			window.webkit.messageHandlers['iap-purchase-request'].postMessage('demo_subscription_auto'); //window.products[1].attributes.offerName
	}
	transactionsRequest(){
		if (this.iOSIAPCapability)
			window.webkit.messageHandlers['iap-transactions-request'].postMessage('request');
	}
	productsRequest(){
		if (this.iOSIAPCapability)
			window.webkit.messageHandlers['iap-products-request'].postMessage(['demo_product_id', 'demo_product2_id', 'demo_subscription', 'demo_subscription_auto']);
	}


  render() {
    return html`
	<app-header></app-header>
	<main>
	<nord-stack class="stack" gap="1" direction="horizontal" wrap="true" align-items="start">

	<nord-card>
			<h2 slot="header">Swift custom APIs</h2>
			<nord-stack>
				<nord-fieldset label="Common">
					<nord-stack direction="horizontal">
						<nord-button variant="primary" @click="${this.printRequest}">Print Page</nord-button>
						<nord-button variant="primary" @click="${() => alert("alert box")}">Alert</nord-button>
					</nord-stack>
				</nord-fieldset>
				<nord-divider></nord-divider>
				<nord-fieldset label="Push Notifications">
					<nord-stack direction="horizontal">
						<nord-button variant="primary" @click="${this.pushPermissionRequest}">Push Permission</nord-button>
						<nord-button variant="primary" @click="${this.pushPermissionState}">Push State</nord-button>
					</nord-stack>
					<nord-textarea readonly value="${this.pushLog}" placeholder="events log"></nord-textarea>
				</nord-fieldset>
				<nord-divider></nord-divider>
				<nord-fieldset label="In-App Purchase">
					<nord-button variant="primary" @click="${this.productsRequest}">Products</nord-button>
					<nord-button variant="primary" @click="${this.transactionsRequest}">Transactions</nord-button>
					<nord-button variant="primary" @click="${this.purchaseRequest}">Purchase</nord-button>
					<nord-textarea readonly value="${this.iapLog}" placeholder="events log"></nord-textarea>
				</nord-fieldset>
			</nord-stack>
			<p slot="header-end">Call native APIs from WebView</p>
		</nord-card>

		<nord-card padding="none">
			<h2 slot="header">Web APIs demos</h2>
			<nord-nav-group>
				<nord-nav-item href="https://tomayac.github.io/pwa-feature-detector" icon="interface-link">Check available Web APIs</nord-nav-item>
				<nord-nav-item href="https://whatpwacando.today" icon="interface-link">Web Features Showcase</nord-nav-item>
				<nord-nav-item href="https://whatwebcando.today" icon="interface-link">Check and try, another example</nord-nav-item>
			</nord-nav-group>
			<p slot="header-end">Proceed to external resources. Try them all</p>
		</nord-card>

		<nord-card padding="none">
			<h2 slot="header">Test navigation transition</h2>
			<nord-nav-group>
				<nord-dropdown-item href="https://pwa-book.awwwards.com"> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>External link</nord-dropdown-item>
				<nord-dropdown-item href="https://www.pwabuilder.com" target="_blank"> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>External link blank</nord-dropdown-item>
				<nord-dropdown-item onclick='window.open("https://web.dev/progressive-web-apps/", "Web Dev PWA", "resizable,scrollbars,status")'> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>External link window.open</nord-dropdown-item>
				<nord-dropdown-item href="pwashell://www.khmyznikov.com"> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>Scheme link</nord-dropdown-item>
				<nord-divider></nord-divider>
				<nord-dropdown-group heading="Don't work in simulator">
					<nord-dropdown-item href="mailto:elon.musk@spacex.com"> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>Email link</nord-dropdown-item>
					<nord-dropdown-item href="tel:650-413-1111"> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>Tel link</nord-dropdown-item>
					<nord-dropdown-item href="sms:650-413-1111"> <nord-icon size="m" slot="start" name="interface-link"></nord-icon>SMS link</nord-dropdown-item>
				</nord-dropdown-group>
			</nord-nav-group>
			<p slot="header-end">Group of different type navigation links</p>
		</nord-card>

		<nord-card>
		<h2 slot="header">iFrame content</h2>
		<iframe width="100%" height="180" src="https://www.youtube.com/embed/ebYYqqGeKkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</nord-card>

		
	</nord-stack>
    </main>
    `;
  }
}
