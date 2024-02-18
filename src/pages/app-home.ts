import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

import "../components/in-app-purchase";
import "../components/push";
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

  @state() iOSPrintCapability = false;

  static styles = [
    // styles,
    css`
		nord-card{
			max-width: 400px;
		}
		iap-card{
			max-width: 800px;
		}
		.stack{
			padding: 15px;
		}
		.download-stack a{
			display: inline-flex;
			align-items: center;
			gap: 5px;
		}
  `];

	async firstUpdated() {
		if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.print) {
			this.iOSPrintCapability = true;
		}
	}

	alertMessage() {
		alert("Alert Box");
	}
	confirmMessage() {
		if(confirm("Confirm?"))
			alert("Confirmed");
		else
			alert("Rejected");
	}
	promptMessage() {
		alert(prompt("Question", "Answer"));
	}

	blobDownload(event: Event) {
		const link = event.target as HTMLLinkElement;
		const blob = new Blob([JSON.stringify({ x: 42, s: "hello, world", d: new Date() })], {type: "octet/stream"});
		const url = URL.createObjectURL(blob);

		link.href = url;
		// @ts-ignore
		link.download = 'data_example_blob.json';
	}

	printRequest(){
		if (this.iOSPrintCapability)
			window.webkit.messageHandlers.print.postMessage('print');
		else
			window.print();
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
						<nord-button variant="primary" @click="${this.printRequest}">Print</nord-button>
						<nord-button variant="primary" @click="${this.alertMessage}">Alert</nord-button>
						<nord-button variant="primary" @click="${this.confirmMessage}">Confirm</nord-button>
						<nord-button variant="primary" @click="${this.promptMessage}">Prompt</nord-button>
					</nord-stack>
				</nord-fieldset>
				<nord-divider></nord-divider>
				<nord-fieldset label="File Download">
					<nord-stack direction="vertical" class="download-stack">
						<a href="/ios-pwa-shell/assets/icons/icon_512.png" download="icon_example_link.png"><nord-icon class="n-nav-icon" size="m" name="interface-download"></nord-icon>Download link</a>
						<a href="data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==" download="text_example_base64.txt"><nord-icon class="n-nav-icon" size="m" name="interface-download"></nord-icon>Download base64</a>
						<a @click="${this.blobDownload}" href=""><nord-icon class="n-nav-icon" size="m" name="interface-download"></nord-icon>Download Blob</a>
					</nord-stack>
				</nord-fieldset>
			</nord-stack>
			<p slot="header-end">Call native APIs from WebView</p>
		</nord-card>
		<push-control></push-control>
		<iap-card></iap-card>

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
