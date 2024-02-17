import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';

declare const window: Window & {
    webkit?: any;
};

@customElement('push-control')
export class PushControl extends LitElement {

    @state() pushLog = '';
    @state() iOSPushCapability = false;

    logMessage(message: string, consoleOnly = false) {
        if (consoleOnly)
            console.log(JSON.parse(message));
        else this.pushLog += `>: ${message}\r\n`
    }

    async firstUpdated() {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers['push-permission-request'] && window.webkit.messageHandlers['push-permission-state']) {
            this.iOSPushCapability = true;
        }

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
        window.addEventListener('push-token', (event: CustomEvent) => {
            if (event && event.detail){
                this.logMessage(JSON.stringify(event.detail));
            }
        });
    }

    pushPermissionRequest(){
		if (this.iOSPushCapability)
			window.webkit.messageHandlers['push-permission-request'].postMessage('push-permission-request');
	}

	pushPermissionState(){
		if (this.iOSPushCapability)
			window.webkit.messageHandlers['push-permission-state'].postMessage('push-permission-state');
	}

	pushTokenRequest(){
		if (this.iOSPushCapability)
			window.webkit.messageHandlers['push-token'].postMessage('push-token');
	}

    render() {
        return html`
            <nord-fieldset label="Push Notifications">
                <nord-stack direction="horizontal">
                    <nord-button variant="primary" @click="${this.pushPermissionRequest}">Push Permission</nord-button>
                    <nord-button variant="primary" @click="${this.pushPermissionState}">Push State</nord-button>
                    <nord-button variant="primary" @click="${this.pushTokenRequest}">Token</nord-button>
                </nord-stack>
                <nord-textarea readonly expand value="${this.pushLog}" placeholder="events log"></nord-textarea>
            </nord-fieldset>
        `
    }
}