import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';

declare const window: Window & {
    webkit?: any;
};

@customElement('health-kit-control')
export class HealthKitControl extends LitElement {

    @state() healthKitLog = '';
    @state() iOSHealthKitCapability = false;
    @state() healthKitPermission = '';
    @state() healthKitData: any = null;

    logMessage(message: string) {
        console.log(message);
        this.healthKitLog += `>: ${message}\r\n`;
    }

    async firstUpdated() {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers['healthkit-permission-request'] && window.webkit.messageHandlers['healthkit-data-request']) {
            this.iOSHealthKitCapability = true;
        }

        window.addEventListener('healthkit-permission-request', (event: any) => {
            if (event && event.detail) {
                this.healthKitPermission = event.detail;
                this.logMessage(`HealthKit Permission: ${event.detail}`);
            }
        });

        window.addEventListener('healthkit-data', (event: any) => {
            if (event && event.detail) {
                this.healthKitData = event.detail;
                this.logMessage(`HealthKit Data: ${JSON.stringify(event.detail)}`);
            }
        });
    }

    healthKitPermissionRequest() {
        if (this.iOSHealthKitCapability)
            window.webkit.messageHandlers['healthkit-permission-request'].postMessage('healthkit-permission-request');
        else
            this.logMessage('HealthKit capability not available');
    }

    healthKitDataRequest() {
        if (this.iOSHealthKitCapability)
            window.webkit.messageHandlers['healthkit-data-request'].postMessage('healthkit-data-request');
        else
            this.logMessage('HealthKit capability not available');
    }

    render() {
        return html`
            <nord-card padding="m">
                <h2 slot="header">HealthKit Integration</h2>
                <p slot="header-end">iOS HealthKit Capability: ${this.iOSHealthKitCapability ? 'Available' : 'Not Available'}</p>
                <nord-stack direction="horizontal">
                    <nord-button variant="primary" @click="${this.healthKitPermissionRequest}">Request HealthKit Permission</nord-button>
                    <nord-button variant="primary" @click="${this.healthKitDataRequest}">Request HealthKit Data</nord-button>
                </nord-stack>
                <p>HealthKit Permission: ${this.healthKitPermission}</p>
                <p>HealthKit Data: ${JSON.stringify(this.healthKitData)}</p>
                <nord-textarea readonly expand value="${this.healthKitLog}" placeholder="events log"></nord-textarea>
            </nord-card>
        `;
    }
}
