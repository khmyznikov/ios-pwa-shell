import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';

import '@nordhealth/components/lib/Table.js';
import '@nordhealth/components/lib/Tab.js';
import '@nordhealth/components/lib/TabPanel.js';
import '@nordhealth/components/lib/TabGroup.js';

declare const window: Window & {
    webkit?: any;
};

type Product = {
    attributes: {
      description: {
        standard: string;
      };
      icuLocale: string;
      isFamilyShareable: number;
      kind: string;
      name: string;
      offerName: string;
      offers: {
        currencyCode: string;
        price: string;
        priceFormatted: string;
      }[];
    };
    href: string;
    id: string;
    type: string;
};
type Transaction = {
    originalPurchaseDate: number;
    deviceVerificationNonce: string;
    subscriptionGroupIdentifier: string;
    environment: string;
    inAppOwnershipType: string;
    originalTransactionId: string;
    transactionReason: string;
    storefront: string;
    signedDate: number;
    bundleId: string;
    storefrontId: string;
    transactionId: string;
    type: string;
    webOrderLineItemId: string;
    isUpgraded: boolean;
    productId: string;
    deviceVerification: string;
    purchaseDate: number;
    expiresDate: number;
    quantity: number;
};

@customElement('iap-card')
export class IAPCard extends LitElement {

    @state() iapLog = '';
    @state() iOSIAPCapability = false;
    @state() products = [];
    @state() transactions = [];

    logMessage(message: string, consoleOnly = false) {
        if (consoleOnly)
            console.log(JSON.parse(message));
        else this.iapLog += `>: ${message}\r\n`
    }

    purchaseRequest(offerName: string) {
        if (this.iOSIAPCapability)
            window.webkit.messageHandlers['iap-purchase-request'].postMessage(JSON.stringify({productID:offerName, quantity: 1})); //window.products[1].attributes.offerName
    }
    transactionsRequest() {
        if (this.iOSIAPCapability)
            window.webkit.messageHandlers['iap-transactions-request'].postMessage('request');
    }
    productsRequest() {
        if (this.iOSIAPCapability)
            window.webkit.messageHandlers['iap-products-request'].postMessage(['demo_product_id', 'demo_product2_id', 'demo_subscription', 'demo_subscription_auto']);
    }

    async firstUpdated() {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers['iap-purchase-request'] && window.webkit.messageHandlers['iap-transactions-request'] && window.webkit.messageHandlers['iap-products-request']) {
            this.iOSIAPCapability = true;
        }
        // @ts-ignore
        window.addEventListener('iap-transactions-result', (event: CustomEvent) => {
            if (event && event.detail) {
                this.logMessage(event.detail, true);
                this.transactions = JSON.parse(event.detail);
            }
        });
        // @ts-ignore
        window.addEventListener('iap-purchase-result', (event: CustomEvent) => {
            if (event && event.detail) {
                this.logMessage(event.detail);
            }
        });
        // @ts-ignore
        window.addEventListener('iap-purchase-transaction', (event: CustomEvent) => {
            if (event && event.detail) {
                this.logMessage(event.detail);
            }
        });
        // @ts-ignore
        window.addEventListener('iap-products-result', (event: CustomEvent) => {
            if (event && event.detail) {
                this.logMessage(event.detail, true);
                this.products = JSON.parse(event.detail);
            }
        });
    }

    render() {
        return html`
    <nord-card padding="none">
    <h2 slot="header">In-App Purchase</h2>
    <p slot="header-end">Store Kit 2</p>
    <nord-tab-group>
        <nord-tab slot="tab">Products</nord-tab>
        <nord-tab-panel padding="none">
            <nord-table>
                <table>
                <thead>
                    <tr>
                    <th>Offer</th>
                    <th>Name</th>
                    <th>Kind</th>
                    <th class="n-table-align-right">Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.products.map((product: Product) =>
                        html`
                            <tr>
                                <td>${product.attributes.offerName}</td>
                                <td>
                                    ${product.attributes.name}
                                </td>
                                <td>${product.attributes.kind}</td>
                                <td class="n-table-align-right">${product.attributes.offers[0].priceFormatted}</td>
                                <td>
                                    <nord-button size="s" @click="${() => { this.purchaseRequest(product.attributes.offerName) }}">Buy</nord-button>
                                </td>
                            </tr>
                        `
                    )}
                </tbody>
                </table>
            </nord-table>
        </nord-tab-panel>
        <nord-tab slot="tab">Transactions</nord-tab>
        <nord-tab-panel>
            <nord-table>
                <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>product</th>
                        <th>state</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.transactions.map((transaction: Transaction) =>
                        html`
                            <tr>
                                <td>${transaction.originalTransactionId}</td>
                                <td>${transaction.productId}</td>
                                <td>${transaction.inAppOwnershipType}</td>
                                <td>${transaction.type}</td>
                            </tr>
                        `
                    )}
                </tbody>
                </table>
            </nord-table>
        </nord-tab-panel>
    </nord-tab-group>
    <nord-stack slot="footer">
    <nord-textarea size="s" readonly expand value="${this.iapLog}" placeholder="events log"></nord-textarea>
    <nord-button variant="primary" @click="${() => { this.productsRequest(); this.transactionsRequest() }}">Request Data</nord-button>
    </nord-stack>

    </nord-card>
`}
}

/*
[
   {
      "attributes":{
         "description":{
            "standard":"Consumable"
         },
         "icuLocale":"en_US@currency=USD",
         "isFamilyShareable":0,
         "kind":"Consumable",
         "name":"Demo Product",
         "offerName":"demo_product_id",
         "offers":[
            {
               "currencyCode":"USD",
               "price":"0.99",
               "priceFormatted":"$0.99"
            }
         ]
      },
      "href":"/v1/catalog/usa/in-apps/1B7B8E9C",
      "id":"1B7B8E9C",
      "type":"in-apps"
   },
   {
      "attributes":{
         "description":{
            "standard":"Non-Consumable"
         },
         "icuLocale":"en_US@currency=USD",
         "isFamilyShareable":0,
         "kind":"Non-Consumable",
         "name":"Demo Product 2",
         "offerName":"demo_product2_id",
         "offers":[
            {
               "currencyCode":"USD",
               "price":"0.99",
               "priceFormatted":"$0.99"
            }
         ]
      },
      "href":"/v1/catalog/usa/in-apps/1D266AB2",
      "id":"1D266AB2",
      "type":"in-apps"
   },
   {
      "attributes":{
         "description":{
            "standard":"Non Renewable"
         },
         "icuLocale":"en_US@currency=USD",
         "isFamilyShareable":0,
         "kind":"Non-Renewing Subscription",
         "name":"Demo Subscription",
         "offerName":"demo_subscription",
         "offers":[
            {
               "currencyCode":"USD",
               "price":"1.99",
               "priceFormatted":"$1.99"
            }
         ]
      },
      "href":"/v1/catalog/usa/in-apps/54B0F6BC",
      "id":"54B0F6BC",
      "type":"in-apps"
   },
   {
      "attributes":{
         "description":{
            "standard":"Renewable"
         },
         "icuLocale":"en_US@currency=USD",
         "isFamilyShareable":0,
         "kind":"Auto-Renewable Subscription",
         "name":"Demo Subscription Auto",
         "offerName":"demo_subscription_auto",
         "offers":[
            {
               "currencyCode":"USD",
               "discounts":[

               ],
               "price":"0.99",
               "priceFormatted":"$0.99",
               "recurringSubscriptionPeriod":"P1M"
            }
         ],
         "subscriptionFamilyId":"2B48871D",
         "subscriptionFamilyName":"Default Group",
         "subscriptionFamilyRank":1
      },
      "href":"/v1/catalog/usa/in-apps/65694AC5",
      "id":"65694AC5",
      "type":"in-apps"
   }
]
[
   {
      "originalPurchaseDate":1696696487758.982,
      "deviceVerificationNonce":"9ed189fc-2736-4eaf-b071-e3f15a9094d0",
      "subscriptionGroupIdentifier":"2B48871D",
      "environment":"Xcode",
      "inAppOwnershipType":"PURCHASED",
      "originalTransactionId":"10",
      "transactionReason":"PURCHASE",
      "storefront":"USA",
      "signedDate":1698327661420.776,
      "bundleId":"com.pwa.shell",
      "storefrontId":"143441",
      "transactionId":"10",
      "type":"Auto-Renewable Subscription",
      "webOrderLineItemId":"0",
      "isUpgraded":false,
      "productId":"demo_subscription_auto",
      "deviceVerification":"QMSc6L6Up5lb6oABQhq6SMOGRPqwhaUGQvu93Zrz0FEKdxEv1oUXjU6tJM4Mb5li",
      "purchaseDate":1696696487758.982,
      "expiresDate":1699374887758.982,
      "quantity":1
   },
   {
      "originalTransactionId":"8",
      "storefrontId":"143441",
      "transactionId":"8",
      "type":"Non-Consumable",
      "signedDate":1696696081317.827,
      "quantity":1,
      "deviceVerificationNonce":"165dea42-9149-4797-84a7-85804bb258e3",
      "environment":"Xcode",
      "inAppOwnershipType":"PURCHASED",
      "transactionReason":"PURCHASE",
      "storefront":"USA",
      "originalPurchaseDate":1696696080013.142,
      "deviceVerification":"lavzPlq17MStmNAH1t6yfBk62B+lXf7JoODkrnmxG7SIueBNFTg/bYc6/3MIJ/d9",
      "productId":"demo_product2_id",
      "purchaseDate":1696696080013.142,
      "bundleId":"com.pwa.shell"
   },
   {
      "storefrontId":"143441",
      "signedDate":1696695320707.543,
      "environment":"Xcode",
      "deviceVerificationNonce":"1a51f3e4-52c7-4f77-ab0d-148efa40ca44",
      "inAppOwnershipType":"PURCHASED",
      "transactionId":"7",
      "originalTransactionId":"7",
      "transactionReason":"PURCHASE",
      "deviceVerification":"umPlQeuF3sXnWsZOGoOIk/am4A0aYKK7ps+KoqGXeGoZnPKR+nzpVwIsoQTtqnq5",
      "purchaseDate":1696695318874.834,
      "productId":"demo_subscription",
      "bundleId":"com.pwa.shell",
      "quantity":1,
      "originalPurchaseDate":1696695318874.834,
      "type":"Non-Renewing Subscription",
      "storefront":"USA"
   }
]
*/