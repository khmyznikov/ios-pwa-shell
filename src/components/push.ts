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

    logMessage(message: string) {
        let _toConsole = message;
        try{
            _toConsole = JSON.parse(message);
        } catch(e) { }
        console.log(_toConsole);
        this.pushLog += `>: ${message}\r\n`
    }

    async firstUpdated() {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers['push-permission-request'] && window.webkit.messageHandlers['push-permission-state']) {
            this.iOSPushCapability = true;
        }

        // @ts-ignore
        window.addEventListener('push-permission-request', (event: CustomEvent) => {
            if (event && event.detail){
                this.logMessage(event.detail);

                switch (event.detail) {
                    case 'granted':
                      // permission granted
                      break;
                    default:
                      // permission denied
                      break;
                  }
            }
        });

        // @ts-ignore
        window.addEventListener('push-permission-state', (event: CustomEvent) => {
            if (event && event.detail){
                this.logMessage(event.detail);

                switch (event.detail) {
                    case 'notDetermined':
                      // permission not asked
                      break;
                    case 'denied':
                      // permission denied
                      break;
                    case 'authorized':
                    case 'ephemeral':
                    case 'provisional':
                      // permission granted
                      break;
                    case 'unknown':
                    default:
                      // something wrong
                      break;
                }
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

    pushSubscribeTopic(topic: string, eventValue: unknown, unsubscribe?: boolean) {
        if (this.iOSPushCapability) {
          window.webkit.messageHandlers['push-subscribe'].postMessage(JSON.stringify({
            topic, // topic name to subscribe/unsubscribe
            eventValue, // user object: name, email, id, etc.
            unsubscribe // true/false
          }));
        }
    }

	pushTokenRequest(){
		if (this.iOSPushCapability)
			window.webkit.messageHandlers['push-token'].postMessage('push-token');
	}

    render() {
        return html`
            <nord-card padding="m">
                <h2 slot="header">Push Notifications</h2>
                <p slot="header-end">Firebase FCM</p>
                    <nord-stack direction="horizontal">
                        <nord-button variant="primary" @click="${this.pushPermissionRequest}">Push Permission</nord-button>
                        <nord-button variant="primary" @click="${this.pushPermissionState}">Push State</nord-button>
                    </nord-stack>
                    <br>
                    <nord-stack direction="horizontal">
                        <nord-button variant="primary" @click="${() => this.pushSubscribeTopic('common', {userId:'1234'})}">Topic Subscribe</nord-button>
                        <nord-button variant="primary" @click="${this.pushTokenRequest}">Token</nord-button>
                    </nord-stack>
                    <nord-textarea readonly expand value="${this.pushLog}" placeholder="events log"></nord-textarea>
            </nord-card>
        `
    }
}