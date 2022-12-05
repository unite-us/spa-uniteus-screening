import faker from 'faker';

const MOCK_PROVIDERS = [
  {
    name: 'Clinton Housing Development Co. Inc.',
    id: faker.random.uuid(),
    website_url: 'http://test.com',
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '403 West 40th St.',
        line_2: null,
        postal_code: '10018',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2129671644',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 960 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 960 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 960 }] },
    ],
    service_types: [
      {
        code: 'UU-HOUSING',
        name: 'Housing & Shelter',
        id: '87702c7d-79ef-44d5-8b2a-c6bf450998f6',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'El Barrio\'s Operation Fight-Back',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '413 E 120th St.',
        line_2: null,
        postal_code: '10035',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2124107900',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
    ],
    service_types: [
      {
        code: 'UU-HOUSING',
        name: 'Housing & Shelter',
        id: '87702c7d-79ef-44d5-8b2a-c6bf450998f6',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'Food Bank for NYC',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '39 Broadway',
        line_2: null,
        postal_code: '10038',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2125567855',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'saturday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
    ],
    service_types: [
      {
        code: 'UU-FOOD',
        name: 'Food Assistance',
        id: '66bff632-be99-4753-a782-797cb08c6cdb',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'Food Bank for Georgia',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '39 Broadway',
        line_2: null,
        postal_code: '10038',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2125567855',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'saturday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
    ],
    service_types: [
      {
        code: 'UU-FOOD',
        name: 'Food Assistance',
        id: '66bff632-be99-4753-a782-797cb08c6cdb',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },

  {
    name: 'Food Bank for SC',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '39 Broadway',
        line_2: null,
        postal_code: '10038',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2125567855',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
      { day_of_week: 'saturday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
    ],
    service_types: [
      {
        code: 'UU-FOOD',
        name: 'Food Assistance',
        id: '66bff632-be99-4753-a782-797cb08c6cdb',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'Iris House Eastside',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '2271 2nd Ave',
        line_2: null,
        postal_code: '10026',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '6465480100',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 840, closes_at: 960 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 840, closes_at: 960 }] },
    ],
    service_types: [
      {
        code: 'UU-FOOD',
        name: 'Food Assistance',
        id: '66bff632-be99-4753-a782-797cb08c6cdb',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'The Salvation Army Manhattan Citadel',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '175 East 125th St.',
        line_2: null,
        postal_code: '10035',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2128603200',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 960 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 960 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 960 }] },
    ],
    service_types: [
      {
        code: 'UU-FOOD',
        name: 'Food Assistance',
        id: '66bff632-be99-4753-a782-797cb08c6cdb',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'NYC Safe Net',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '121 Greenwich St.',
        line_2: null,
        postal_code: '10013',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2122531122',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 480, closes_at: 1080 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 480, closes_at: 1080 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 480, closes_at: 1080 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 480, closes_at: 1080 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 480, closes_at: 1080 }] },
    ],
    service_types: [

      {
        code: 'UU-HEALTH',
        name: 'Health',
        id: '7bcdf382-5c55-4fe8-b8d0-a9e44136bece',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'Heatline',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Ney York',
        country: 'USA',
        county: 'New York',
        line_1: '1124 W 34th St.',
        line_2: null,
        postal_code: '10101',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '2122316437',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 1080 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 1080 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 1080 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 1080 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 1080 }] },
    ],
    service_types: [
      {
        code: 'UU-UTILITIES',
        name: 'Utilities',
        id: '7395ef39-c06f-4905-ab33-3e0fac4f6bb5',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
  {
    name: 'Ahava Access, Inc',
    id: faker.random.uuid(),
    addresses: [
      {
        address_type: 'work',
        city: 'Brooklyn',
        country: 'USA',
        county: 'Brooklyn',
        line_1: '6002 Foster Avenue',
        line_2: null,
        postal_code: '11236',
        state: 'NY',
      },
    ],
    phone_numbers: [
      {
        id: faker.random.uuid(),
        phone_number: '7182525555',
        is_primary: true,
        phone_type: 'work',
        country_code: '1',
        can_sms: false,
      },
    ],
    hours_of_operation: [
      { day_of_week: 'sunday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
      { day_of_week: 'monday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
      { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
      { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
      { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
      { day_of_week: 'friday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
      { day_of_week: 'saturday', hours_of_operation: [{ opens_at: 0, closes_at: 1439 }] },
    ],
    service_types: [
      {
        code: 'UU-TRANSPORTATION',
        name: 'Transportation',
        id: '4b6da834-1735-4fdd-9a27-868216590a4f',
      },
    ],
    logo_url: 'https://s3.amazonaws.com/uniteus-io-assets/logos/groups/default.png',
  },
];

export default MOCK_PROVIDERS;
