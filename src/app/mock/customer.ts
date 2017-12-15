import { Customer } from '@cxcloud/ct-types/customers';

export const CUSTOMERS = [
  {
    id: '6897ea06-64c3-42ae-83f3-7618a58a82bb',
    version: 1,
    email: 'ab@b.com',
    firstName: 'q',
    lastName: 'q',
    title: '',
    password:
      'tQqkGIQgpwBgefidDfMfnEmJjemKQYzyVQLPs8l+vc8=$RwxYYDPLSkpGc/S2HFeoQC8hKbR+WSCudbFal9ja5T8=',
    addresses: [],
    defaultShippingAddressId: '',
    defaultBillingAddressId: '',
    shippingAddressIds: [],
    billingAddressIds: [],
    isEmailVerified: false,
    companyName: '',
    vatId: '',
    custom: {
      type: { typeId: '', id: '' },
      fields: {}
    },
    createdAt: '2017-11-22T07:52:32.097Z',
    lastModifiedAt: '2017-11-22T07:52:32.097Z',
    lastMessageSequenceNumber: 1
  },
  {
    id: 'fc69ff07-9ba8-47dc-b7ca-d1429dca3198',
    version: 52,
    email: 'sallar@kaboli.org',
    firstName: 'Sallar',
    lastName: 'Kaboli',
    title: '',
    password:
      'BHSnObdrt4S+UdS4k+THzgZ/TmsnRq2Uu4Oj/CqV0+s=$BuQ4Rckd14lwBYW0zZCMST06sK1N36Pc/7CQUhMSzUM=',
    addresses: [
      {
        id: 'kotG7wZh',
        firstName: 'Sallar',
        lastName: 'Kaboli',
        streetName: 'Keilalahdentie',
        postalCode: '02150',
        city: 'Espoo',
        region: 'Uusimaa',
        country: 'DE',
        phone: '',
        email: 'sallar@gmail.com',
        additionalAddressInfo: '2-4'
      },
      {
        id: 'IsKvzrhB',
        firstName: 'Sallar',
        lastName: 'Kaboli',
        streetName: 'Otsolahdentie',
        postalCode: '011220',
        city: 'Helsinki',
        region: '',
        country: 'DE',
        phone: '',
        email: 'sallar@test.com',
        additionalAddressInfo: '16A 23'
      }
    ],
    defaultShippingAddressId: 'kotG7wZh',
    defaultBillingAddressId: 'IsKvzrhB',
    shippingAddressIds: ['kotG7wZh'],
    billingAddressIds: ['IsKvzrhB'],
    isEmailVerified: false,
    companyName: '',
    vatId: '',
    custom: {
      type: { typeId: '', id: '' },
      fields: {}
    },
    createdAt: '2017-10-24T11:20:40.667Z',
    lastModifiedAt: '2017-12-13T13:26:13.020Z',
    lastMessageSequenceNumber: 1
  },
  {
    id: '2f28868e-9485-4ef7-b28f-4d366234d6ef',
    version: 22,
    email: 'jaakko.hallavo@tieto.com',
    firstName: 'Jaakko',
    lastName: 'Hallavo',
    title: '',
    password:
      'yqQNL/1MNFVCRutYIIBeoTmmle6MxSotUjDLcia8ysA=$ivvMKKD8Tgc0pFspI8FtCzBQ52mw5OMiIIdsD5fpOd0=',
    addresses: [
      {
        id: '3RLSE02z',
        firstName: 'Jaakko',
        lastName: 'Hallavo',
        streetName: 'Keilalahdentie',
        postalCode: '02150',
        city: 'Espoo',
        region: 'Uusimaa',
        country: 'DE',
        phone: '',
        email: 'jaakko@gmail.com',
        additionalAddressInfo: '2-4'
      },
      {
        id: 'eCMEbV0T',
        firstName: 'Jaakko',
        lastName: 'Hallavo',
        streetName: 'Otsolahdentie',
        postalCode: '011220',
        city: 'Helsinki',
        region: '',
        country: 'DE',
        phone: '',
        email: 'jaakko@test.com',
        additionalAddressInfo: '16A 23'
      }
    ],
    defaultShippingAddressId: '3RLSE02z',
    defaultBillingAddressId: 'eCMEbV0T',
    shippingAddressIds: ['3RLSE02z'],
    billingAddressIds: ['eCMEbV0T'],
    isEmailVerified: false,
    companyName: '',
    vatId: '',
    custom: {
      type: { typeId: '', id: '' },
      fields: {}
    },
    createdAt: '2017-11-23T11:08:56.752Z',
    lastModifiedAt: '2017-12-14T08:36:30.204Z',
    lastMessageSequenceNumber: 1
  }
];
