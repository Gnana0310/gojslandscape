import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'landscape';
  public diagramModelData1:any;
  public diagramModelData2:any;
  public diagramModelData4:any;
  public diagramNodeData1:any;
  public diagramNodeData2:any;
  public diagramNodeData3:any;
  public diagramLegend2:any;
  public diagramNodeData4:any;
  public diagramNodeData5:any;
  constructor() {}

  ngOnInit() {
    this.diagramModelData1 = {
      groupColor: '#FFDD33',
      childGroupCOlor: '#33D3EF',
      nodeColor: '#aaa',
      parentGroupFont: 'bold 18px sans-serif',
      childrenGroupFont: 'bold 16px sans-serif',
      groupHoverColor: 'blue',
      childGroupHoverCOlor: '#6DAB80'
    };
    this.diagramModelData2 = {
      groupColor: '#b41f47',
      childGroupCOlor: '#1f77b4',
      nodeColor: '14a0dc',
      parentGroupFont: 'bold 18px sans-serif',
      childrenGroupFont: 'bold 16px sans-serif'
    };
    this.diagramModelData4={
      "groupColor": "#003561",
      "groupFillColor": "#8c564b",
      "parentGroupTextColor": "white",
      "parentGroupFont": "bold 22px Helvetica",
      "parentGroupCount": 1,
      "childGroupCOlor": "#003561",
      "childrenGroupTextColor": "white",
      "childrenGroupFont": "bold 20px Helvetica",
      "childGroupFillColor": "#6DAB80",
      "childrenGroupCount": 11,
      "nodeColor": "#003561",
      "nodeFillColor": "white",
      "nodeTextColor": "black",
      "nodeTextFont": "12px Helvetica",
      "level1wrappingColumnCount": 2,
      "level2WrappingColumnCount": 3,
      "nodesCount": 105,
      "strokeWidth": 3,
      "width": 0,
      "fitType": "Fit to rect",
      "legends": true,
      "levelHoverEnabled": false,
      "nodeHoverEnabled": true,
      "widthEnabled": true,
  };

    this.diagramLegend2 = {
      'Offered through other PP common platform': '#14a0dc',
      'Offered through PP Credit': '#143e8d',
      'Not Used': '#878787',
      'Offered by a 3rd party': '#6e178d',
      'Offered through own Brand': '#92dbfa',
      'Not mapped': '#ff9896'
    };

    this.diagramNodeData1 = [
      { key: 1, isGroup: true, text: 'MDG Technology', parentGroupItem: true },
      {
        key: 3,
        isGroup: true,
        text: 'Dashboard Management',
        parentGroupItem: true
      },
      {
        key: 4,
        isGroup: true,
        text: 'Gnanasekar',
        group: 1,
        parentGroupItem: false
      },
      {
        key: 5,
        isGroup: true,
        text: 'Arshad',
        group: 1,
        parentGroupItem: false
      },
      {
        key: 6,
        isGroup: true,
        text: 'Rajasekar',
        group: 1,
        parentGroupItem: false
      },
      {
        key: 7,
        isGroup: true,
        text: 'Kabeer',
        group: 1,
        parentGroupItem: false
      },
      {
        key: 8,
        isGroup: true,
        text: 'Arikrishnan',
        group: 1,
        parentGroupItem: false
      },
      {
        key: 10,
        isGroup: true,
        text: 'Kabeer',
        group: 3,
        parentGroupItem: false
      },
      {
        key: 12,
        isGroup: true,
        text: 'Gnanasekar',
        group: 3,
        parentGroupItem: false
      },
      {
        key: 13,
        isGroup: true,
        text: 'Ravi kumar',
        group: 3,
        parentGroupItem: false
      },
      {
        key: 14,
        isGroup: true,
        text: 'Arshad',
        group: 3,
        parentGroupItem: false
      },
      { text: 'Stereotype Configuration', group: 4, key: -15 },
      { text: 'Stereotype List', group: 4, key: -16 },
      { text: 'Drag and Drop Plugin', group: 4, key: -17 },
      { text: 'API- Stereotype configuration', group: 5, key: -18 },
      { text: 'API - Stereotype List', group: 5, key: -19 },
      { text: 'UI-Stereotype configuration page', group: 6, key: -20 },
      { text: 'UI-Custom Property Configuration', group: 6, key: -21 },
      { text: 'UI-MDG list page', group: 7, key: -22 },
      { text: 'UI-Profiles list page', group: 7, key: -23 },
      { text: 'frontend Integration-MDG Manage page', group: 8, key: -24 },
      {
        text:
          'frontend Integration-Dashboard Manage page frontend Integration-Dashboard Manage page frontend Integration-Dashboard Manage page',
        group: 12,
        key: -25
      },
      {
        text: 'frontend Integration-Templates Manage page',
        group: 12,
        key: -26
      },
      {
        text: 'frontend Integration-Dashboard Gridster plugin',
        group: 12,
        key: -27
      },
      {
        text: 'frontend Integration-Dashboard widgets configuration',
        group: 12,
        key: -28
      },
      { text: 'UI-Dashboard Manage page', group: 10, key: -29 },
      { text: 'UI-Templates Manage page', group: 10, key: -30 },
      { text: 'UI-Dashboard Gridster plugin', group: 10, key: -31 },
      { text: 'UI-Dashboard widgets configuration', group: 10, key: -32 },
      { text: 'Research - Plugin for Dashboard', group: 13, key: -33 },
      { text: 'API - Manage Dashboards', group: 14, key: -34 }
    ];

    this.diagramNodeData3 = [
      {
        key: 1,
        isGroup: true,
        text: 'CFO',
        parentGroupItem: true,
        __gohashid: 1655
      },
      {
        key: 2,
        isGroup: true,
        text: 'Program 1 - Next Gen Customer Hub',
        parentGroupItem: false,
        group: 1,
        __gohashid: 1708
      },
      {
        key: 3,
        isGroup: true,
        text: 'Strategic',
        parentGroupItem: false,
        group: 2,
        __gohashid: 1731
      },
      {
        key: 4,
        isGroup: false,
        text: 'TMS',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1754
      },
      {
        key: 5,
        isGroup: false,
        text: 'Activation System',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1774
      },
      {
        key: 6,
        isGroup: false,
        text: 'Hyperion',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1780
      },
      {
        key: 7,
        isGroup: false,
        text: 'Cognos',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1786
      },
      {
        key: 8,
        isGroup: false,
        text: 'Data Relationship Management',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1792
      },
      {
        key: 9,
        isGroup: false,
        text: 'CRM',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1798
      },
      {
        key: 10,
        isGroup: false,
        text: 'Invoicing System',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1804
      },
      {
        key: 11,
        isGroup: false,
        text: 'Billing System',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1810
      },
      {
        key: 12,
        isGroup: false,
        text: 'Customer Management System',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1816
      },
      {
        key: 13,
        isGroup: false,
        text: 'Self Service Portal',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1822
      },
      {
        key: 14,
        isGroup: false,
        text: 'SAM',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1828
      },
      {
        key: 15,
        isGroup: false,
        text: 'FMS',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1834
      },
      {
        key: 16,
        isGroup: false,
        text: 'Ultimo',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1840
      },
      {
        key: 17,
        isGroup: false,
        text: 'Law Actual',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1846
      },
      {
        key: 18,
        isGroup: false,
        text: 'SAP FI',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1852
      },
      {
        key: 19,
        isGroup: false,
        text: 'AuditMax',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1858
      },
      {
        key: 20,
        isGroup: false,
        text: 'Insight',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1864
      },
      {
        key: 21,
        isGroup: false,
        text: 'Management Information System',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1870
      },
      {
        key: 22,
        isGroup: false,
        text: 'SAML',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1876
      },
      {
        key: 23,
        isGroup: false,
        text: 'Service Desk',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1882
      },
      {
        key: 24,
        isGroup: false,
        text: 'Jira',
        parentGroupItem: false,
        group: 3,
        __gohashid: 1888
      },
      {
        key: 25,
        isGroup: true,
        text: 'Tactical',
        parentGroupItem: false,
        group: 2,
        __gohashid: 1894
      },
      {
        key: 26,
        isGroup: false,
        text: 'PPM',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1917
      },
      {
        key: 27,
        isGroup: false,
        text: 'Decision Log System',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1923
      },
      {
        key: 28,
        isGroup: false,
        text: 'Product Catalog',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1929
      },
      {
        key: 29,
        isGroup: false,
        text: 'Remedy',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1935
      },
      {
        key: 30,
        isGroup: false,
        text: 'Genesys',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1941
      },
      {
        key: 31,
        isGroup: false,
        text: 'Identity Management',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1947
      },
      {
        key: 32,
        isGroup: false,
        text: 'AttorneyNet',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1953
      },
      {
        key: 33,
        isGroup: false,
        text: 'RentalAX',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1959
      },
      {
        key: 34,
        isGroup: false,
        text: 'SAP FSCM',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1965
      },
      {
        key: 35,
        isGroup: false,
        text: 'LDAP',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1971
      },
      {
        key: 36,
        isGroup: false,
        text: 'ADFS',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1977
      },
      {
        key: 37,
        isGroup: false,
        text: 'BYOD',
        parentGroupItem: false,
        group: 25,
        __gohashid: 1983
      },
      {
        key: 38,
        isGroup: true,
        text: 'Project 2 - Next Gen Marketing',
        parentGroupItem: false,
        group: 1,
        __gohashid: 1989
      },
      {
        key: 39,
        isGroup: true,
        text: 'Strategic',
        parentGroupItem: false,
        group: 38,
        __gohashid: 2012
      },
      {
        key: 40,
        isGroup: false,
        text: 'TMS',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2035
      },
      {
        key: 41,
        isGroup: false,
        text: 'Activation System',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2041
      },
      {
        key: 42,
        isGroup: false,
        text: 'Hyperion',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2047
      },
      {
        key: 43,
        isGroup: false,
        text: 'Cognos',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2053
      },
      {
        key: 44,
        isGroup: false,
        text: 'Data Relationship Management',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2059
      },
      {
        key: 45,
        isGroup: false,
        text: 'CRM',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2065
      },
      {
        key: 46,
        isGroup: false,
        text: 'Invoicing System',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2071
      },
      {
        key: 47,
        isGroup: false,
        text: 'Billing System',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2077
      },
      {
        key: 48,
        isGroup: false,
        text: 'Customer Management System',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2083
      },
      {
        key: 49,
        isGroup: false,
        text: 'Self Service Portal',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2089
      },
      {
        key: 50,
        isGroup: false,
        text: 'SAM',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2095
      },
      {
        key: 51,
        isGroup: false,
        text: 'FMS',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2101
      },
      {
        key: 52,
        isGroup: false,
        text: 'Ultimo',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2107
      },
      {
        key: 53,
        isGroup: false,
        text: 'Law Actual',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2113
      },
      {
        key: 54,
        isGroup: false,
        text: 'SAP FI',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2119
      },
      {
        key: 55,
        isGroup: false,
        text: 'AuditMax',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2125
      },
      {
        key: 56,
        isGroup: false,
        text: 'Insight',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2131
      },
      {
        key: 57,
        isGroup: false,
        text: 'Management Information System',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2137
      },
      {
        key: 58,
        isGroup: false,
        text: 'SAML',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2143
      },
      {
        key: 59,
        isGroup: false,
        text: 'Service Desk',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2149
      },
      {
        key: 60,
        isGroup: false,
        text: 'Jira',
        parentGroupItem: false,
        group: 39,
        __gohashid: 2155
      },
      {
        key: 61,
        isGroup: true,
        text: 'Project 3 - Digital Payments',
        parentGroupItem: false,
        group: 1,
        __gohashid: 2161
      },
      {
        key: 62,
        isGroup: true,
        text: 'Obsolete',
        parentGroupItem: false,
        group: 61,
        __gohashid: 2184
      },
      {
        key: 63,
        isGroup: false,
        text: 'Alert DB',
        parentGroupItem: false,
        group: 62,
        __gohashid: 2207
      },
      {
        key: 64,
        isGroup: false,
        text: 'MIDAS - App',
        parentGroupItem: false,
        group: 62,
        __gohashid: 2213
      },
      {
        key: 65,
        isGroup: false,
        text: 'TalNexus',
        parentGroupItem: false,
        group: 62,
        __gohashid: 2219
      },
      {
        key: 66,
        isGroup: true,
        text: 'Tactical',
        parentGroupItem: false,
        group: 61,
        __gohashid: 2225
      },
      {
        key: 67,
        isGroup: false,
        text: 'PPM',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2248
      },
      {
        key: 68,
        isGroup: false,
        text: 'Decision Log System',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2254
      },
      {
        key: 69,
        isGroup: false,
        text: 'Product Catalog',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2260
      },
      {
        key: 70,
        isGroup: false,
        text: 'Remedy',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2266
      },
      {
        key: 71,
        isGroup: false,
        text: 'Genesys',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2272
      },
      {
        key: 72,
        isGroup: false,
        text: 'Identity Management',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2278
      },
      {
        key: 73,
        isGroup: false,
        text: 'AttorneyNet',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2284
      },
      {
        key: 74,
        isGroup: false,
        text: 'RentalAX',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2290
      },
      {
        key: 75,
        isGroup: false,
        text: 'SAP FSCM',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2296
      },
      {
        key: 76,
        isGroup: false,
        text: 'LDAP',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2302
      },
      {
        key: 77,
        isGroup: false,
        text: 'ADFS',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2308
      },
      {
        key: 78,
        isGroup: false,
        text: 'BYOD',
        parentGroupItem: false,
        group: 66,
        __gohashid: 2314
      },
      {
        key: 79,
        isGroup: true,
        text: 'Strategic',
        parentGroupItem: false,
        group: 61,
        __gohashid: 2320
      },
      {
        key: 80,
        isGroup: false,
        text: 'TMS',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2343
      },
      {
        key: 81,
        isGroup: false,
        text: 'Activation System',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2349
      },
      {
        key: 82,
        isGroup: false,
        text: 'Hyperion',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2355
      },
      {
        key: 83,
        isGroup: false,
        text: 'Cognos',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2361
      },
      {
        key: 84,
        isGroup: false,
        text: 'Data Relationship Management',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2367
      },
      {
        key: 85,
        isGroup: false,
        text: 'CRM',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2373
      },
      {
        key: 86,
        isGroup: false,
        text: 'Invoicing System',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2379
      },
      {
        key: 87,
        isGroup: false,
        text: 'Billing System',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2385
      },
      {
        key: 88,
        isGroup: false,
        text: 'Customer Management System',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2391
      },
      {
        key: 89,
        isGroup: false,
        text: 'Self Service Portal',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2397
      },
      {
        key: 90,
        isGroup: false,
        text: 'SAM',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2403
      },
      {
        key: 91,
        isGroup: false,
        text: 'FMS',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2409
      },
      {
        key: 92,
        isGroup: false,
        text: 'Ultimo',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2415
      },
      {
        key: 93,
        isGroup: false,
        text: 'Law Actual',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2421
      },
      {
        key: 94,
        isGroup: false,
        text: 'SAP FI',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2427
      },
      {
        key: 95,
        isGroup: false,
        text: 'AuditMax',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2433
      },
      {
        key: 96,
        isGroup: false,
        text: 'Insight',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2439
      },
      {
        key: 97,
        isGroup: false,
        text: 'Management Information System',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2445
      },
      {
        key: 98,
        isGroup: false,
        text: 'SAML',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2451
      },
      {
        key: 99,
        isGroup: false,
        text: 'Service Desk',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2457
      },
      {
        key: 100,
        isGroup: false,
        text: 'Jira',
        parentGroupItem: false,
        group: 79,
        __gohashid: 2463
      }
    ];

    this.diagramNodeData2 = [
      {
        key: 999,
        isGroup: true,
        text: 'Landscape Diagram',
        parentGroupItem: true
      },
      {
        key: 1,
        isGroup: true,
        text: '1-PayPal',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 21,
        isGroup: true,
        text: 'Braintree',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 41,
        isGroup: true,
        text:
          'Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey Honey',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 61,
        isGroup: true,
        text: 'Hyperwallet',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 81,
        isGroup: true,
        text: 'iZettle',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 101,
        isGroup: true,
        text: 'Simility',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 121,
        isGroup: true,
        text: 'Swift',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 141,
        isGroup: true,
        text: 'Venmo',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 161,
        isGroup: true,
        text: 'Xoom',
        group: 999,
        parentGroupItem: false
      },
      {
        key: 2,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 3,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 4,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 5,
        isGroup: false,
        text: 'KYC checks',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 6,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 7,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 8,
        isGroup: false,
        text: 'Line assignment',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 9,
        isGroup: false,
        text: 'Adverse Action',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 10,
        isGroup: false,
        text: 'Signature Capture',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 11,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 12,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 13,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 14,
        isGroup: false,
        text: 'Application management',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 15,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 16,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 17,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 18,
        isGroup: false,
        text: 'OFAC screening',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 19,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 20,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 1,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 22,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 23,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 24,
        isGroup: false,
        text: 'OFAC screening',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: ''
      },
      {
        key: 25,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 26,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 27,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 28,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 29,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 30,
        isGroup: false,
        text: 'KYC checks',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 31,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 32,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 33,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 34,
        isGroup: false,
        text: 'Line assignment',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 35,
        isGroup: false,
        text: 'Adverse Action',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 36,
        isGroup: false,
        text: 'Signature Capture',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 37,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 38,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 39,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 40,
        isGroup: false,
        text: 'Application management',
        group: 21,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 42,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 43,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 44,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 45,
        isGroup: false,
        text: 'KYC checks',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 46,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 47,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 48,
        isGroup: false,
        text: 'Line assignment',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 49,
        isGroup: false,
        text: 'Adverse Action',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 50,
        isGroup: false,
        text: 'Signature Capture',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 51,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 52,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 53,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 54,
        isGroup: false,
        text: 'Application management',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 55,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 56,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 57,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 58,
        isGroup: false,
        text: 'OFAC screening',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 59,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 60,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 41,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 62,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 63,
        isGroup: false,
        text: 'Application management',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 64,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 65,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 66,
        isGroup: false,
        text: 'OFAC screening',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 67,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 68,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 69,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 70,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 71,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 72,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 73,
        isGroup: false,
        text: 'KYC checks',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 74,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 75,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 76,
        isGroup: false,
        text: 'Line assignment',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 77,
        isGroup: false,
        text: 'Adverse Action',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 78,
        isGroup: false,
        text: 'Signature Capture',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 79,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 80,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 61,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 82,
        isGroup: false,
        text: 'Signature Capture',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 83,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 84,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 85,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 86,
        isGroup: false,
        text: 'Application management',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 87,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 88,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 89,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 90,
        isGroup: false,
        text: 'OFAC screening',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 91,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 92,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 93,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 94,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 95,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 96,
        isGroup: false,
        text: 'KYC checks',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 97,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 98,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 99,
        isGroup: false,
        text: 'Line assignment',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 100,
        isGroup: false,
        text: 'Adverse Action',
        group: 81,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 102,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 103,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 104,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 105,
        isGroup: false,
        text: 'Line assignment',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 106,
        isGroup: false,
        text: 'Adverse Action',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 107,
        isGroup: false,
        text: 'Signature Capture',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 108,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 109,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 110,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 111,
        isGroup: false,
        text: 'Application management',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 112,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 113,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 114,
        isGroup: false,
        text: 'OFAC screening',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 115,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 116,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 117,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 118,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 119,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 120,
        isGroup: false,
        text: 'KYC checks',
        group: 101,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 122,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 123,
        isGroup: false,
        text: 'KYC checks',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 124,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 125,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 126,
        isGroup: false,
        text: 'Line assignment',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 127,
        isGroup: false,
        text: 'Adverse Action',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 128,
        isGroup: false,
        text: 'Signature Capture',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 129,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 130,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 131,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 132,
        isGroup: false,
        text: 'Application management',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 133,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 134,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 135,
        isGroup: false,
        text: 'OFAC screening',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 136,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 137,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 138,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 139,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 140,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 121,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 142,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered by a 3rd party',
        color: '#6e178d'
      },
      {
        key: 143,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 144,
        isGroup: false,
        text: 'Application management',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 145,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 146,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 147,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 148,
        isGroup: false,
        text: 'OFAC screening',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through other PP common platform',
        color: '#14a0dc'
      },
      {
        key: 149,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Offered through PP Credit',
        color: '#143e8d'
      },
      {
        key: 150,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 151,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 152,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 153,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 154,
        isGroup: false,
        text: 'KYC checks',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 155,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 156,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 157,
        isGroup: false,
        text: 'Line assignment',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 158,
        isGroup: false,
        text: 'Adverse Action',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 159,
        isGroup: false,
        text: 'Signature Capture',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 160,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 141,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 162,
        isGroup: false,
        text: 'KYC checks',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 163,
        isGroup: false,
        text: 'Acquisition Eligibility',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 164,
        isGroup: false,
        text: 'PayPal Hosted Acquisition',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 165,
        isGroup: false,
        text: 'Credit Account Creation',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 166,
        isGroup: false,
        text: 'Line assignment',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 167,
        isGroup: false,
        text: 'Adverse Action',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 168,
        isGroup: false,
        text: 'Signature Capture',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 169,
        isGroup: false,
        text: 'Identity and Fraud Screening',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 170,
        isGroup: false,
        text: '3rd Part Data Consumption',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 171,
        isGroup: false,
        text: 'Multi Factor Authentication',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 172,
        isGroup: false,
        text: 'Application management',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 173,
        isGroup: false,
        text: 'Supporting Documentation Upload',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 174,
        isGroup: false,
        text: 'APR assignment/Risk-based pricing',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 175,
        isGroup: false,
        text: 'OFAC screening',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 176,
        isGroup: false,
        text: 'Automated Application Disposition',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 178,
        isGroup: false,
        text: 'Underwriting - Credit Risk',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 179,
        isGroup: false,
        text: 'Judgemental Lending',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 180,
        isGroup: false,
        text: 'Ability to Pay calculation',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      },
      {
        key: 177,
        isGroup: false,
        text: 'Contract Production/T&C delivery',
        group: 161,
        parentGroupItem: false,
        LegendLabel: 'Not Used',
        color: '#878787'
      }
    ];
this.diagramNodeData4=[
  {
      "key": 1,
      "isGroup": true,
      "text": "CFO",
      "parentGroupItem": true,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "level": 1,
      "height": 50
  },
  {
      "key": 2,
      "isGroup": true,
      "text": "BI driven Marketing",
      "parentGroupItem": false,
      "group": 1,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "BI driven Marketing",
      "level": 2,
      "guid": null
  },
  {
      "key": 3,
      "isGroup": true,
      "text": "Obsolete",
      "parentGroupItem": false,
      "group": 2,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "Obsolete",
      "level": 3,
      "guid": null
  },
  {
      "key": 4,
      "isGroup": false,
      "text": "Alert DB àèìòù Grave",
      "parentGroupItem": false,
      "group": 3,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "Alert DB àèìòù Grave",
      "level": 4,
      "guid": null
  },
  {
      "key": 5,
      "isGroup": false,
      "text": "TalNexus",
      "parentGroupItem": false,
      "group": 3,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "TalNexus",
      "level": 4,
      "guid": null
  },
  {
      "key": 6,
      "isGroup": false,
      "text": "MIDAS - App é acute",
      "parentGroupItem": false,
      "group": 3,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "MIDAS - App é acute",
      "level": 4,
      "guid": null
  },
  {
      "key": 7,
      "isGroup": true,
      "text": "Tactical",
      "parentGroupItem": false,
      "group": 2,
      "color": "#ffffff",
      "fillColor": "#fff500",
      "textColor": "black",
      "legendLabel": "Tactical",
      "level": 3,
      "guid": null
  },
  {
      "key": 8,
      "isGroup": false,
      "text": "PPM Dutch reëel",
      "parentGroupItem": false,
      "group": 7,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "PPM Dutch reëel",
      "level": 4,
      "guid": null
  },
  {
      "key": 9,
      "isGroup": false,
      "text": "RentalAX",
      "parentGroupItem": false,
      "group": 7,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "RentalAX",
      "level": 4,
      "guid": null
  },
  {
      "key": 10,
      "isGroup": false,
      "text": "ADFS",
      "parentGroupItem": false,
      "group": 7,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "ADFS",
      "level": 4,
      "guid": null
  },
  {
      "key": 11,
      "isGroup": false,
      "text": "BYOD",
      "parentGroupItem": false,
      "group": 7,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "BYOD",
      "level": 4,
      "guid": null
  },
  {
      "key": 12,
      "isGroup": false,
      "text": "LDAP",
      "parentGroupItem": false,
      "group": 7,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "LDAP",
      "level": 4,
      "guid": null
  },
  {
      "key": 13,
      "isGroup": false,
      "text": "Decision Log System Swedish är födda",
      "parentGroupItem": false,
      "group": 7,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "Decision Log System Swedish är födda",
      "level": 4,
      "guid": null
  },
  {
      "key": 14,
      "isGroup": false,
      "text": "Product Catalog",
      "parentGroupItem": false,
      "group": 7,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "Product Catalog",
      "level": 4,
      "guid": null
  },
  {
      "key": 15,
      "isGroup": false,
      "text": "Remedy ç cedilla",
      "parentGroupItem": false,
      "group": 7,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "Remedy ç cedilla",
      "level": 4,
      "guid": null
  },
  {
      "key": 16,
      "isGroup": false,
      "text": "SAP FSCM",
      "parentGroupItem": false,
      "group": 7,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "SAP FSCM",
      "level": 4,
      "guid": null
  },
  {
      "key": 17,
      "isGroup": false,
      "text": "Genesys",
      "parentGroupItem": false,
      "group": 7,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "Genesys",
      "level": 4,
      "guid": null
  },
  {
      "key": 18,
      "isGroup": false,
      "text": "Identity Management Polish rodza sie ĄĆĘŁŃÓŚŹŻ",
      "parentGroupItem": false,
      "group": 7,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "Identity Management Polish rodza sie ĄĆĘŁŃÓŚŹŻ",
      "level": 4,
      "guid": null
  },
  {
      "key": 19,
      "isGroup": false,
      "text": "AttorneyNet",
      "parentGroupItem": false,
      "group": 7,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "AttorneyNet",
      "level": 4,
      "guid": null
  },
  {
      "key": 20,
      "isGroup": true,
      "text": "Strategic",
      "parentGroupItem": false,
      "group": 2,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "Strategic",
      "level": 3,
      "guid": null
  },
  {
      "key": 21,
      "isGroup": false,
      "text": "Cognos1",
      "parentGroupItem": false,
      "group": 20,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "Cognos1",
      "level": 4,
      "guid": null
  },
  {
      "key": 22,
      "isGroup": false,
      "text": "TMS German äöüandß",
      "parentGroupItem": false,
      "group": 20,
      "color": "#aec7e8",
      "fillColor": "#aec7e8",
      "textColor": "black",
      "legendLabel": "TMS German äöüandß",
      "level": 4,
      "guid": null
  },
  {
      "key": 23,
      "isGroup": false,
      "text": "Activation System",
      "parentGroupItem": false,
      "group": 20,
      "color": "#ff7f0e",
      "fillColor": "#ff7f0e",
      "textColor": "black",
      "legendLabel": "Activation System",
      "level": 4,
      "guid": null
  },
  {
      "key": 24,
      "isGroup": false,
      "text": "Hyperion",
      "parentGroupItem": false,
      "group": 20,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "Hyperion",
      "level": 4,
      "guid": null
  },
  {
      "key": 25,
      "isGroup": false,
      "text": "Ultimo",
      "parentGroupItem": false,
      "group": 20,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "Ultimo",
      "level": 4,
      "guid": null
  },
  {
      "key": 26,
      "isGroup": false,
      "text": "Data Relationship Management",
      "parentGroupItem": false,
      "group": 20,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "Data Relationship Management",
      "level": 4,
      "guid": null
  },
  {
      "key": 27,
      "isGroup": false,
      "text": "CRM French étude",
      "parentGroupItem": false,
      "group": 20,
      "color": "#d62728",
      "fillColor": "#d62728",
      "textColor": "black",
      "legendLabel": "CRM French étude",
      "level": 4,
      "guid": null
  },
  {
      "key": 28,
      "isGroup": false,
      "text": "SAP FI",
      "parentGroupItem": false,
      "group": 20,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "SAP FI",
      "level": 4,
      "guid": null
  },
  {
      "key": 29,
      "isGroup": false,
      "text": "Invoicing System Slovak  sa týka",
      "parentGroupItem": false,
      "group": 20,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "Invoicing System Slovak  sa týka",
      "level": 4,
      "guid": null
  },
  {
      "key": 30,
      "isGroup": false,
      "text": "Jira",
      "parentGroupItem": false,
      "group": 20,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "Jira",
      "level": 4,
      "guid": null
  },
  {
      "key": 31,
      "isGroup": false,
      "text": "SAML",
      "parentGroupItem": false,
      "group": 20,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "SAML",
      "level": 4,
      "guid": null
  },
  {
      "key": 32,
      "isGroup": false,
      "text": "Service Desk",
      "parentGroupItem": false,
      "group": 20,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "Service Desk",
      "level": 4,
      "guid": null
  },
  {
      "key": 33,
      "isGroup": false,
      "text": "Insight",
      "parentGroupItem": false,
      "group": 20,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "Insight",
      "level": 4,
      "guid": null
  },
  {
      "key": 34,
      "isGroup": false,
      "text": "Law Actual",
      "parentGroupItem": false,
      "group": 20,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "Law Actual",
      "level": 4,
      "guid": null
  },
  {
      "key": 35,
      "isGroup": false,
      "text": "Billing System",
      "parentGroupItem": false,
      "group": 20,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "Billing System",
      "level": 4,
      "guid": null
  },
  {
      "key": 36,
      "isGroup": false,
      "text": "Customer Management System",
      "parentGroupItem": false,
      "group": 20,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "Customer Management System",
      "level": 4,
      "guid": null
  },
  {
      "key": 37,
      "isGroup": false,
      "text": "Self Service Portal âêîôû Circumflex",
      "parentGroupItem": false,
      "group": 20,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "Self Service Portal âêîôû Circumflex",
      "level": 4,
      "guid": null
  },
  {
      "key": 38,
      "isGroup": false,
      "text": "Management Information System",
      "parentGroupItem": false,
      "group": 20,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "Management Information System",
      "level": 4,
      "guid": null
  },
  {
      "key": 39,
      "isGroup": false,
      "text": "SAM Norwegian ØÆÅ ",
      "parentGroupItem": false,
      "group": 20,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "SAM Norwegian ØÆÅ ",
      "level": 4,
      "guid": null
  },
  {
      "key": 40,
      "isGroup": false,
      "text": "AuditMax",
      "parentGroupItem": false,
      "group": 20,
      "color": "#9edae5",
      "fillColor": "#9edae5",
      "textColor": "black",
      "legendLabel": "AuditMax",
      "level": 4,
      "guid": null
  },
  {
      "key": 41,
      "isGroup": false,
      "text": "FMS ëïü trema",
      "parentGroupItem": false,
      "group": 20,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "FMS ëïü trema",
      "level": 4,
      "guid": null
  },
  {
      "key": 42,
      "isGroup": true,
      "text": "One-Touch Digital Payments",
      "parentGroupItem": false,
      "group": 1,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "One-Touch Digital Payments",
      "level": 2,
      "guid": null
  },
  {
      "key": 43,
      "isGroup": true,
      "text": "Strategic",
      "parentGroupItem": false,
      "group": 42,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "Strategic",
      "level": 3,
      "guid": null
  },
  {
      "key": 44,
      "isGroup": false,
      "text": "Cognos1",
      "parentGroupItem": false,
      "group": 43,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "Cognos1",
      "level": 4,
      "guid": null
  },
  {
      "key": 45,
      "isGroup": false,
      "text": "TMS German äöüandß",
      "parentGroupItem": false,
      "group": 43,
      "color": "#aec7e8",
      "fillColor": "#aec7e8",
      "textColor": "black",
      "legendLabel": "TMS German äöüandß",
      "level": 4,
      "guid": null
  },
  {
      "key": 46,
      "isGroup": false,
      "text": "Activation System",
      "parentGroupItem": false,
      "group": 43,
      "color": "#ff7f0e",
      "fillColor": "#ff7f0e",
      "textColor": "black",
      "legendLabel": "Activation System",
      "level": 4,
      "guid": null
  },
  {
      "key": 47,
      "isGroup": false,
      "text": "Hyperion",
      "parentGroupItem": false,
      "group": 43,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "Hyperion",
      "level": 4,
      "guid": null
  },
  {
      "key": 48,
      "isGroup": false,
      "text": "Ultimo",
      "parentGroupItem": false,
      "group": 43,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "Ultimo",
      "level": 4,
      "guid": null
  },
  {
      "key": 49,
      "isGroup": false,
      "text": "Data Relationship Management",
      "parentGroupItem": false,
      "group": 43,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "Data Relationship Management",
      "level": 4,
      "guid": null
  },
  {
      "key": 50,
      "isGroup": false,
      "text": "CRM French étude",
      "parentGroupItem": false,
      "group": 43,
      "color": "#d62728",
      "fillColor": "#d62728",
      "textColor": "black",
      "legendLabel": "CRM French étude",
      "level": 4,
      "guid": null
  },
  {
      "key": 51,
      "isGroup": false,
      "text": "SAP FI",
      "parentGroupItem": false,
      "group": 43,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "SAP FI",
      "level": 4,
      "guid": null
  },
  {
      "key": 52,
      "isGroup": false,
      "text": "Invoicing System Slovak  sa týka",
      "parentGroupItem": false,
      "group": 43,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "Invoicing System Slovak  sa týka",
      "level": 4,
      "guid": null
  },
  {
      "key": 53,
      "isGroup": false,
      "text": "Jira",
      "parentGroupItem": false,
      "group": 43,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "Jira",
      "level": 4,
      "guid": null
  },
  {
      "key": 54,
      "isGroup": false,
      "text": "SAML",
      "parentGroupItem": false,
      "group": 43,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "SAML",
      "level": 4,
      "guid": null
  },
  {
      "key": 55,
      "isGroup": false,
      "text": "Service Desk",
      "parentGroupItem": false,
      "group": 43,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "Service Desk",
      "level": 4,
      "guid": null
  },
  {
      "key": 56,
      "isGroup": false,
      "text": "Insight",
      "parentGroupItem": false,
      "group": 43,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "Insight",
      "level": 4,
      "guid": null
  },
  {
      "key": 57,
      "isGroup": false,
      "text": "Law Actual",
      "parentGroupItem": false,
      "group": 43,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "Law Actual",
      "level": 4,
      "guid": null
  },
  {
      "key": 58,
      "isGroup": false,
      "text": "Billing System",
      "parentGroupItem": false,
      "group": 43,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "Billing System",
      "level": 4,
      "guid": null
  },
  {
      "key": 59,
      "isGroup": false,
      "text": "Customer Management System",
      "parentGroupItem": false,
      "group": 43,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "Customer Management System",
      "level": 4,
      "guid": null
  },
  {
      "key": 60,
      "isGroup": false,
      "text": "Self Service Portal âêîôû Circumflex",
      "parentGroupItem": false,
      "group": 43,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "Self Service Portal âêîôû Circumflex",
      "level": 4,
      "guid": null
  },
  {
      "key": 61,
      "isGroup": false,
      "text": "Management Information System",
      "parentGroupItem": false,
      "group": 43,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "Management Information System",
      "level": 4,
      "guid": null
  },
  {
      "key": 62,
      "isGroup": false,
      "text": "SAM Norwegian ØÆÅ ",
      "parentGroupItem": false,
      "group": 43,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "SAM Norwegian ØÆÅ ",
      "level": 4,
      "guid": null
  },
  {
      "key": 63,
      "isGroup": false,
      "text": "AuditMax",
      "parentGroupItem": false,
      "group": 43,
      "color": "#9edae5",
      "fillColor": "#9edae5",
      "textColor": "black",
      "legendLabel": "AuditMax",
      "level": 4,
      "guid": null
  },
  {
      "key": 64,
      "isGroup": false,
      "text": "FMS ëïü trema",
      "parentGroupItem": false,
      "group": 43,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "FMS ëïü trema",
      "level": 4,
      "guid": null
  },
  {
      "key": 65,
      "isGroup": true,
      "text": "Tactical",
      "parentGroupItem": false,
      "group": 42,
      "color": "#ffffff",
      "fillColor": "#fff500",
      "textColor": "black",
      "legendLabel": "Tactical",
      "level": 3,
      "guid": null
  },
  {
      "key": 66,
      "isGroup": false,
      "text": "PPM Dutch reëel",
      "parentGroupItem": false,
      "group": 65,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "PPM Dutch reëel",
      "level": 4,
      "guid": null
  },
  {
      "key": 67,
      "isGroup": false,
      "text": "RentalAX",
      "parentGroupItem": false,
      "group": 65,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "RentalAX",
      "level": 4,
      "guid": null
  },
  {
      "key": 68,
      "isGroup": false,
      "text": "ADFS",
      "parentGroupItem": false,
      "group": 65,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "ADFS",
      "level": 4,
      "guid": null
  },
  {
      "key": 69,
      "isGroup": false,
      "text": "BYOD",
      "parentGroupItem": false,
      "group": 65,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "BYOD",
      "level": 4,
      "guid": null
  },
  {
      "key": 70,
      "isGroup": false,
      "text": "LDAP",
      "parentGroupItem": false,
      "group": 65,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "LDAP",
      "level": 4,
      "guid": null
  },
  {
      "key": 71,
      "isGroup": false,
      "text": "Decision Log System Swedish är födda",
      "parentGroupItem": false,
      "group": 65,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "Decision Log System Swedish är födda",
      "level": 4,
      "guid": null
  },
  {
      "key": 72,
      "isGroup": false,
      "text": "Product Catalog",
      "parentGroupItem": false,
      "group": 65,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "Product Catalog",
      "level": 4,
      "guid": null
  },
  {
      "key": 73,
      "isGroup": false,
      "text": "Remedy ç cedilla",
      "parentGroupItem": false,
      "group": 65,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "Remedy ç cedilla",
      "level": 4,
      "guid": null
  },
  {
      "key": 74,
      "isGroup": false,
      "text": "SAP FSCM",
      "parentGroupItem": false,
      "group": 65,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "SAP FSCM",
      "level": 4,
      "guid": null
  },
  {
      "key": 75,
      "isGroup": false,
      "text": "Genesys",
      "parentGroupItem": false,
      "group": 65,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "Genesys",
      "level": 4,
      "guid": null
  },
  {
      "key": 76,
      "isGroup": false,
      "text": "Identity Management Polish rodza sie ĄĆĘŁŃÓŚŹŻ",
      "parentGroupItem": false,
      "group": 65,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "Identity Management Polish rodza sie ĄĆĘŁŃÓŚŹŻ",
      "level": 4,
      "guid": null
  },
  {
      "key": 77,
      "isGroup": false,
      "text": "AttorneyNet",
      "parentGroupItem": false,
      "group": 65,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "AttorneyNet",
      "level": 4,
      "guid": null
  },
  {
      "key": 78,
      "isGroup": true,
      "text": "Obsolete",
      "parentGroupItem": false,
      "group": 42,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "Obsolete",
      "level": 3,
      "guid": null
  },
  {
      "key": 79,
      "isGroup": false,
      "text": "Alert DB àèìòù Grave",
      "parentGroupItem": false,
      "group": 78,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "Alert DB àèìòù Grave",
      "level": 4,
      "guid": null
  },
  {
      "key": 80,
      "isGroup": false,
      "text": "TalNexus",
      "parentGroupItem": false,
      "group": 78,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "TalNexus",
      "level": 4,
      "guid": null
  },
  {
      "key": 81,
      "isGroup": false,
      "text": "MIDAS - App é acute",
      "parentGroupItem": false,
      "group": 78,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "MIDAS - App é acute",
      "level": 4,
      "guid": null
  },
  {
      "key": 82,
      "isGroup": true,
      "text": "Next Gen Customer Hub",
      "parentGroupItem": false,
      "group": 1,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "Next Gen Customer Hub",
      "level": 2,
      "guid": null
  },
  {
      "key": 83,
      "isGroup": true,
      "text": "Strategic",
      "parentGroupItem": false,
      "group": 82,
      "color": "#003561",
      "fillColor": "#ffffff",
      "textColor": "black",
      "legendLabel": "Strategic",
      "level": 3,
      "guid": null
  },
  {
      "key": 84,
      "isGroup": false,
      "text": "Cognos1",
      "parentGroupItem": false,
      "group": 83,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "Cognos1",
      "level": 4,
      "guid": null
  },
  {
      "key": 85,
      "isGroup": false,
      "text": "TMS German äöüandß",
      "parentGroupItem": false,
      "group": 83,
      "color": "#aec7e8",
      "fillColor": "#aec7e8",
      "textColor": "black",
      "legendLabel": "TMS German äöüandß",
      "level": 4,
      "guid": null
  },
  {
      "key": 86,
      "isGroup": false,
      "text": "Activation System",
      "parentGroupItem": false,
      "group": 83,
      "color": "#ff7f0e",
      "fillColor": "#ff7f0e",
      "textColor": "black",
      "legendLabel": "Activation System",
      "level": 4,
      "guid": null
  },
  {
      "key": 87,
      "isGroup": false,
      "text": "Hyperion",
      "parentGroupItem": false,
      "group": 83,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "Hyperion",
      "level": 4,
      "guid": null
  },
  {
      "key": 88,
      "isGroup": false,
      "text": "Ultimo",
      "parentGroupItem": false,
      "group": 83,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "Ultimo",
      "level": 4,
      "guid": null
  },
  {
      "key": 89,
      "isGroup": false,
      "text": "Data Relationship Management",
      "parentGroupItem": false,
      "group": 83,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "Data Relationship Management",
      "level": 4,
      "guid": null
  },
  {
      "key": 90,
      "isGroup": false,
      "text": "CRM French étude",
      "parentGroupItem": false,
      "group": 83,
      "color": "#d62728",
      "fillColor": "#d62728",
      "textColor": "black",
      "legendLabel": "CRM French étude",
      "level": 4,
      "guid": null
  },
  {
      "key": 91,
      "isGroup": false,
      "text": "SAP FI",
      "parentGroupItem": false,
      "group": 83,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "SAP FI",
      "level": 4,
      "guid": null
  },
  {
      "key": 92,
      "isGroup": false,
      "text": "Invoicing System Slovak  sa týka",
      "parentGroupItem": false,
      "group": 83,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "Invoicing System Slovak  sa týka",
      "level": 4,
      "guid": null
  },
  {
      "key": 93,
      "isGroup": false,
      "text": "Jira",
      "parentGroupItem": false,
      "group": 83,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "Jira",
      "level": 4,
      "guid": null
  },
  {
      "key": 94,
      "isGroup": false,
      "text": "SAML",
      "parentGroupItem": false,
      "group": 83,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "SAML",
      "level": 4,
      "guid": null
  },
  {
      "key": 95,
      "isGroup": false,
      "text": "Service Desk",
      "parentGroupItem": false,
      "group": 83,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "Service Desk",
      "level": 4,
      "guid": null
  },
  {
      "key": 96,
      "isGroup": false,
      "text": "Insight",
      "parentGroupItem": false,
      "group": 83,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "Insight",
      "level": 4,
      "guid": null
  },
  {
      "key": 97,
      "isGroup": false,
      "text": "Law Actual",
      "parentGroupItem": false,
      "group": 83,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "Law Actual",
      "level": 4,
      "guid": null
  },
  {
      "key": 98,
      "isGroup": false,
      "text": "Billing System",
      "parentGroupItem": false,
      "group": 83,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "Billing System",
      "level": 4,
      "guid": null
  },
  {
      "key": 99,
      "isGroup": false,
      "text": "Customer Management System",
      "parentGroupItem": false,
      "group": 83,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "Customer Management System",
      "level": 4,
      "guid": null
  },
  {
      "key": 100,
      "isGroup": false,
      "text": "Self Service Portal âêîôû Circumflex",
      "parentGroupItem": false,
      "group": 83,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "Self Service Portal âêîôû Circumflex",
      "level": 4,
      "guid": null
  },
  {
      "key": 101,
      "isGroup": false,
      "text": "Management Information System",
      "parentGroupItem": false,
      "group": 83,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "Management Information System",
      "level": 4,
      "guid": null
  },
  {
      "key": 102,
      "isGroup": false,
      "text": "SAM Norwegian ØÆÅ ",
      "parentGroupItem": false,
      "group": 83,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "SAM Norwegian ØÆÅ ",
      "level": 4,
      "guid": null
  },
  {
      "key": 103,
      "isGroup": false,
      "text": "AuditMax",
      "parentGroupItem": false,
      "group": 83,
      "color": "#9edae5",
      "fillColor": "#9edae5",
      "textColor": "black",
      "legendLabel": "AuditMax",
      "level": 4,
      "guid": null
  },
  {
      "key": 104,
      "isGroup": false,
      "text": "FMS ëïü trema",
      "parentGroupItem": false,
      "group": 83,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "FMS ëïü trema",
      "level": 4,
      "guid": null
  },
  {
      "key": 105,
      "isGroup": true,
      "text": "Tactical",
      "parentGroupItem": false,
      "group": 82,
      "color": "#ffffff",
      "fillColor": "#fff500",
      "textColor": "black",
      "legendLabel": "Tactical",
      "level": 3,
      "guid": null
  },
  {
      "key": 106,
      "isGroup": false,
      "text": "PPM Dutch reëel",
      "parentGroupItem": false,
      "group": 105,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "PPM Dutch reëel",
      "level": 4,
      "guid": null
  },
  {
      "key": 107,
      "isGroup": false,
      "text": "RentalAX",
      "parentGroupItem": false,
      "group": 105,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "RentalAX",
      "level": 4,
      "guid": null
  },
  {
      "key": 108,
      "isGroup": false,
      "text": "ADFS",
      "parentGroupItem": false,
      "group": 105,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "ADFS",
      "level": 4,
      "guid": null
  },
  {
      "key": 109,
      "isGroup": false,
      "text": "BYOD",
      "parentGroupItem": false,
      "group": 105,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "BYOD",
      "level": 4,
      "guid": null
  },
  {
      "key": 110,
      "isGroup": false,
      "text": "LDAP",
      "parentGroupItem": false,
      "group": 105,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "LDAP",
      "level": 4,
      "guid": null
  },
  {
      "key": 111,
      "isGroup": false,
      "text": "Decision Log System Swedish är födda",
      "parentGroupItem": false,
      "group": 105,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "Decision Log System Swedish är födda",
      "level": 4,
      "guid": null
  },
  {
      "key": 112,
      "isGroup": false,
      "text": "Product Catalog",
      "parentGroupItem": false,
      "group": 105,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "Product Catalog",
      "level": 4,
      "guid": null
  },
  {
      "key": 113,
      "isGroup": false,
      "text": "Remedy ç cedilla",
      "parentGroupItem": false,
      "group": 105,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "Remedy ç cedilla",
      "level": 4,
      "guid": null
  },
  {
      "key": 114,
      "isGroup": false,
      "text": "SAP FSCM",
      "parentGroupItem": false,
      "group": 105,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "SAP FSCM",
      "level": 4,
      "guid": null
  },
  {
      "key": 115,
      "isGroup": false,
      "text": "Genesys",
      "parentGroupItem": false,
      "group": 105,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "Genesys",
      "level": 4,
      "guid": null
  },
  {
      "key": 116,
      "isGroup": false,
      "text": "Identity Management Polish rodza sie ĄĆĘŁŃÓŚŹŻ",
      "parentGroupItem": false,
      "group": 105,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "Identity Management Polish rodza sie ĄĆĘŁŃÓŚŹŻ",
      "level": 4,
      "guid": null
  },
  {
      "key": 117,
      "isGroup": false,
      "text": "AttorneyNet",
      "parentGroupItem": false,
      "group": 105,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "AttorneyNet",
      "level": 4,
      "guid": null
  }
];

this.diagramNodeData5=[
  {
      "key": 1,
      "isGroup": true,
      "text": "Nizam Mohamed",
      "parentGroupItem": true,
      "color": "#2889e9",
      "fillColor": "#ff7f0e",
      "textColor": "#000000",
      "level": 1,
      "height": 50
  },
  {
      "key": 2,
      "isGroup": false,
      "text": "Business Necessity",
      "parentGroupItem": false,
      "group": 1,
      "color": "#aec7e8",
      "fillColor": "#aec7e8",
      "textColor": "black",
      "legendLabel": "6000",
      "level": 2,
      "guid": "{277012CD-7113-460c-9577-FA891D72D58C}"
  },
  {
      "key": 3,
      "isGroup": false,
      "text": "Essential",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ff7f0e",
      "fillColor": "#ff7f0e",
      "textColor": "black",
      "legendLabel": "8500",
      "level": 2,
      "guid": "{6D79BAD3-07BB-41a7-A08F-A26F3283FB59}"
  },
  {
      "key": 4,
      "isGroup": false,
      "text": "Value Add",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "8700",
      "level": 2,
      "guid": "{838611CC-E720-4d6d-B6E2-3AFA4BEC3DEA}"
  },
  {
      "key": 5,
      "isGroup": false,
      "text": "Strategy",
      "parentGroupItem": false,
      "group": 1,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "6200",
      "level": 2,
      "guid": "{CDAD6D0F-E02C-4f33-A7F9-CA2D57C96357}"
  },
  {
      "key": 6,
      "isGroup": false,
      "text": "Business Support",
      "parentGroupItem": false,
      "group": 1,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "2400",
      "level": 2,
      "guid": "{15300223-821F-4186-A63F-0AC7D9BAA3C1}"
  },
  {
      "key": 7,
      "isGroup": false,
      "text": "Marketing And Sales",
      "parentGroupItem": false,
      "group": 1,
      "color": "#d62728",
      "fillColor": "#d62728",
      "textColor": "black",
      "legendLabel": "7700",
      "level": 2,
      "guid": "{24BD89FF-F429-4fbe-8292-E1118964533A}"
  },
  {
      "key": 8,
      "isGroup": false,
      "text": "Production",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "8100",
      "level": 2,
      "guid": "{49CA041D-2107-4cea-871F-9312F46889F9}"
  },
  {
      "key": 9,
      "isGroup": false,
      "text": "Supply Chain Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "6100",
      "level": 2,
      "guid": "{70C8EF36-F715-4ef8-ADCC-D6A34C23D3FC}"
  },
  {
      "key": 10,
      "isGroup": false,
      "text": "Corporate Services",
      "parentGroupItem": false,
      "group": 1,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "4900",
      "level": 2,
      "guid": "{9C53D19B-3EDF-40c7-8A1F-19178C0A23B1}"
  },
  {
      "key": 11,
      "isGroup": false,
      "text": "Information Technology",
      "parentGroupItem": false,
      "group": 1,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "2400",
      "level": 2,
      "guid": "{A05B85EE-E758-4e1a-95C8-31F5C427762B}"
  },
  {
      "key": 12,
      "isGroup": false,
      "text": "Finance",
      "parentGroupItem": false,
      "group": 1,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "1800",
      "level": 2,
      "guid": "{DB194D64-DC07-4901-8077-C0C8B70B5C49}"
  },
  {
      "key": 13,
      "isGroup": false,
      "text": "Strategic Business Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "6200",
      "level": 2,
      "guid": "{DD71C370-B169-4159-AFD4-F3FC7F997B0B}"
  },
  {
      "key": 14,
      "isGroup": false,
      "text": "Customer Relationship Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "7200",
      "level": 2,
      "guid": "{EE2D9F4F-AEA3-4c79-BD7F-BA6D689400DE}"
  },
  {
      "key": 15,
      "isGroup": false,
      "text": "Sales Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "2349",
      "level": 2,
      "guid": "{0F03CB6F-5E2B-4681-87B5-0F16489D490C}"
  },
  {
      "key": 16,
      "isGroup": false,
      "text": "Treasury",
      "parentGroupItem": false,
      "group": 1,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "3200",
      "level": 2,
      "guid": "{1517031E-CA8E-4af2-B0E8-07388781B852}"
  },
  {
      "key": 17,
      "isGroup": false,
      "text": "Facility Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "456",
      "level": 2,
      "guid": "{316EEA1E-5F14-4225-A1FA-DE173C9095C2}"
  },
  {
      "key": 18,
      "isGroup": false,
      "text": "Corporate Communications",
      "parentGroupItem": false,
      "group": 1,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "930",
      "level": 2,
      "guid": "{3EAD387E-9739-4f52-97EA-19255643A0FE}"
  },
  {
      "key": 19,
      "isGroup": false,
      "text": "Audit and Legal",
      "parentGroupItem": false,
      "group": 1,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "2138",
      "level": 2,
      "guid": "{3EB3F3B8-95B5-4d15-A5B0-B5D0A4FCE364}"
  },
  {
      "key": 20,
      "isGroup": false,
      "text": "Portfolio Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#9edae5",
      "fillColor": "#9edae5",
      "textColor": "black",
      "legendLabel": "1984",
      "level": 2,
      "guid": "{40427A73-0A57-4a20-8E40-273FAF5E3F94}"
  },
  {
      "key": 21,
      "isGroup": false,
      "text": "Human Resource",
      "parentGroupItem": false,
      "group": 1,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "848",
      "level": 2,
      "guid": "{484AA33F-3F27-4079-9285-8C59ACF0362A}"
  },
  {
      "key": 22,
      "isGroup": false,
      "text": "Marketing Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#aec7e8",
      "fillColor": "#aec7e8",
      "textColor": "black",
      "legendLabel": "2871",
      "level": 2,
      "guid": "{4B57B1F2-A5D6-4bec-BA65-0B6E431DB7F2}"
  },
  {
      "key": 23,
      "isGroup": false,
      "text": "Contract Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ff7f0e",
      "fillColor": "#ff7f0e",
      "textColor": "black",
      "legendLabel": "2646",
      "level": 2,
      "guid": "{4DE30884-B7BE-40bd-80C2-BA7F0674F41F}"
  },
  {
      "key": 24,
      "isGroup": false,
      "text": "Claims Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "2100",
      "level": 2,
      "guid": "{4F83C39C-04E0-4884-9042-C9EF05F75F9F}"
  },
  {
      "key": 25,
      "isGroup": false,
      "text": "Risk Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "1736",
      "level": 2,
      "guid": "{56B6FC44-74FC-4a24-9645-9C7B761C9AE5}"
  },
  {
      "key": 26,
      "isGroup": false,
      "text": "Accounting & Billing",
      "parentGroupItem": false,
      "group": 1,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "2613",
      "level": 2,
      "guid": "{5F320713-DCD4-4013-A758-E79910A874BF}"
  },
  {
      "key": 27,
      "isGroup": false,
      "text": "Management Reporting",
      "parentGroupItem": false,
      "group": 1,
      "color": "#d62728",
      "fillColor": "#d62728",
      "textColor": "black",
      "legendLabel": "1663",
      "level": 2,
      "guid": "{66C33B2C-CECB-48ba-BE9B-5B16E81F24E7}"
  },
  {
      "key": 28,
      "isGroup": false,
      "text": "Real Estate Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ff9896",
      "fillColor": "#ff9896",
      "textColor": "black",
      "legendLabel": "2300",
      "level": 2,
      "guid": "{6741D2B7-E306-498c-A823-B5D9EF21EDCA}"
  },
  {
      "key": 29,
      "isGroup": false,
      "text": "Service Desk",
      "parentGroupItem": false,
      "group": 1,
      "color": "#9467bd",
      "fillColor": "#9467bd",
      "textColor": "black",
      "legendLabel": "2016",
      "level": 2,
      "guid": "{71B8668F-AB24-45e5-9ABD-39B43F3A5A5C}"
  },
  {
      "key": 30,
      "isGroup": false,
      "text": "Order Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#c5b0d5",
      "fillColor": "#c5b0d5",
      "textColor": "black",
      "legendLabel": "1122",
      "level": 2,
      "guid": "{7202D8EE-F443-4801-85CC-2F0260FB7A27}"
  },
  {
      "key": 31,
      "isGroup": false,
      "text": "Access Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#8c564b",
      "fillColor": "#8c564b",
      "textColor": "black",
      "legendLabel": "1663",
      "level": 2,
      "guid": "{81120924-CC2E-4667-8D70-F2C4768382B6}"
  },
  {
      "key": 32,
      "isGroup": false,
      "text": "Mobile Device Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#c49c94",
      "fillColor": "#c49c94",
      "textColor": "black",
      "legendLabel": "2136",
      "level": 2,
      "guid": "{82BE60B5-7C88-4257-9CCB-0CF27C9382DA}"
  },
  {
      "key": 33,
      "isGroup": false,
      "text": "Production Planning",
      "parentGroupItem": false,
      "group": 1,
      "color": "#e377c2",
      "fillColor": "#e377c2",
      "textColor": "black",
      "legendLabel": "1683",
      "level": 2,
      "guid": "{8D1B8034-98D2-4e5e-8757-BE1C2768259C}"
  },
  {
      "key": 34,
      "isGroup": false,
      "text": "Sourcing",
      "parentGroupItem": false,
      "group": 1,
      "color": "#f7b6d2",
      "fillColor": "#f7b6d2",
      "textColor": "black",
      "legendLabel": "693",
      "level": 2,
      "guid": "{8E1EC573-6C1E-44b7-9D9D-D19ECB9F2102}"
  },
  {
      "key": 35,
      "isGroup": false,
      "text": "Quality Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#7f7f7f",
      "fillColor": "#7f7f7f",
      "textColor": "black",
      "legendLabel": "969",
      "level": 2,
      "guid": "{99E7619D-BCED-492e-BF0B-0A0F3A976A26}"
  },
  {
      "key": 36,
      "isGroup": false,
      "text": "Warehouse Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#c7c7c7",
      "fillColor": "#c7c7c7",
      "textColor": "black",
      "legendLabel": "567",
      "level": 2,
      "guid": "{9BFD55FA-7096-4aba-BF74-90945A54F78C}"
  },
  {
      "key": 37,
      "isGroup": false,
      "text": "Plant Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#bcbd22",
      "fillColor": "#bcbd22",
      "textColor": "black",
      "legendLabel": "3100",
      "level": 2,
      "guid": "{9D7848AC-1325-4a32-8D1D-F7F5B3BD89F4}"
  },
  {
      "key": 38,
      "isGroup": false,
      "text": "Campaign Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#dbdb8d",
      "fillColor": "#dbdb8d",
      "textColor": "black",
      "legendLabel": "1653",
      "level": 2,
      "guid": "{9F24B312-AF48-4bff-97DE-8118F8CB15F3}"
  },
  {
      "key": 39,
      "isGroup": false,
      "text": "Corporate Strategy",
      "parentGroupItem": false,
      "group": 1,
      "color": "#17becf",
      "fillColor": "#17becf",
      "textColor": "black",
      "legendLabel": "1550",
      "level": 2,
      "guid": "{A184FE79-0AD0-4ec7-ADEE-6C0D5EDE8D4B}"
  },
  {
      "key": 40,
      "isGroup": false,
      "text": "Return Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#9edae5",
      "fillColor": "#9edae5",
      "textColor": "black",
      "legendLabel": "1827",
      "level": 2,
      "guid": "{AB1468CA-AF32-43b9-8911-F51C00A14D6A}"
  },
  {
      "key": 41,
      "isGroup": false,
      "text": "Transport",
      "parentGroupItem": false,
      "group": 1,
      "color": "#1f77b4",
      "fillColor": "#1f77b4",
      "textColor": "black",
      "legendLabel": "441",
      "level": 2,
      "guid": "{C26FE956-9038-4136-B2C9-5A3709D1F626}"
  },
  {
      "key": 42,
      "isGroup": false,
      "text": "Material Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#aec7e8",
      "fillColor": "#aec7e8",
      "textColor": "black",
      "legendLabel": "399",
      "level": 2,
      "guid": "{E012BB8B-0335-4338-869D-EE603560B73F}"
  },
  {
      "key": 43,
      "isGroup": false,
      "text": "Fleet Managemen",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ff7f0e",
      "fillColor": "#ff7f0e",
      "textColor": "black",
      "legendLabel": "1200",
      "level": 2,
      "guid": "{E857AC0D-D3B6-465e-BC78-2A94E6753B44}"
  },
  {
      "key": 44,
      "isGroup": false,
      "text": "Legal",
      "parentGroupItem": false,
      "group": 1,
      "color": "#ffbb78",
      "fillColor": "#ffbb78",
      "textColor": "black",
      "legendLabel": "1630",
      "level": 2,
      "guid": "{F8B1594B-3402-4968-8B73-9AB6FB3CA181}"
  },
  {
      "key": 45,
      "isGroup": false,
      "text": "Production Execution",
      "parentGroupItem": false,
      "group": 1,
      "color": "#2ca02c",
      "fillColor": "#2ca02c",
      "textColor": "black",
      "legendLabel": "1377",
      "level": 2,
      "guid": "{F9FD3983-AD71-4724-924C-94A5140E02C4}"
  },
  {
      "key": 46,
      "isGroup": false,
      "text": "Contact Management",
      "parentGroupItem": false,
      "group": 1,
      "color": "#98df8a",
      "fillColor": "#98df8a",
      "textColor": "black",
      "legendLabel": "3218",
      "level": 2,
      "guid": "{FDD20D3E-F983-407b-BC1B-E99B611D6CF4}"
  }
];
  }

  public ngAfterViewInit() {} // end ngAfterViewInit
}
