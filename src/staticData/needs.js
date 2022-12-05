const NEEDS = [
  {
    service_type: {
      id: '7bcdf382-5c55-4fe8-b8d0-a9e44136bece',
      code: 'UU-HEALTH',
      name: 'Health',
      definition: null,
      updated_at: 1521125987,
      children: [],
      _meta: {
        _type: 'facades_servicetypes_filteredparent',
      },
    },
    groups: [
      {
        id: '6f6cce68-fc3f-4d38-9e11-720d949402e7',
        name: 'Micah Org [Dev Only]',
        description: '<p>This is where Micah comes to rip stuff word up.</p>',
        logo_url: '',
        website_url: 'http://www.testing.com',
        is_verified: false,
        created_at: 1477409312,
        updated_at: 1519938854,
        addresses: [
          {
            id: 'a8b056b6-5922-4e99-9e9c-e021b6a32f9c',
            line_1: '123 Blongo Red Riders Rd',
            line_2: '',
            city: 'Spartanburg',
            state: 'SC',
            postal_code: '29372',
            country: 'USA',
            address_type: 'work',
            is_mailing_address: false,
            county: 'Spartanburg County',
            lat_lng: [
              34.9495672,
              -81.9320482,
            ],
            _meta: {
              _type: 'groups_address',
            },
          },
        ],
        service_types: [
          {
            id: '50126fcb-a3e9-45d5-9a8e-c32b7fd810b4',
            code: 'UU-BENEFITS',
            name: 'Benefits',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '2ac1bb8f-89a1-44b9-9e24-9af3cec8a2de',
                code: 'UU-BENEFITS-BENEFITS-ELIGIBILITY-SCREENING',
                name: 'Benefits Eligibility Screening',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3e3aef24-f58d-493e-a604-8fe87019b142',
                code: 'UU-BENEFITS-DISABILITY-BENEFITS',
                name: 'Disability Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '68a5c4a6-dca5-4c8a-b934-cd2e89bfc5b3',
                code: 'UU-BENEFITS-HEALTH-INSURANCE-BENEFITS',
                name: 'Health Insurance/Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '2430b334-1d68-43ec-905c-36b5b2c2953b',
                code: 'UU-BENEFITS-HEALTH-INSURANCE-BENEFITS-E-G-MEDICARE-MEDICAID-PROGRAMS',
                name: 'Health Insurance/Benefits (e.g. Medicare & Medicaid programs)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '295a1c49-43b7-4cbd-b695-8de303cb97fa',
                code: 'UU-BENEFITS-ID-DOCUMENTATION-ASSISTANCE',
                name: 'ID/Documentation Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7cc14f7d-7901-466c-9ccd-52caeaa6b8fc',
                code: 'UU-BENEFITS-IMMIGRATION-SERVICES',
                name: 'Immigration Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'b7141fab-f70c-450f-9ad5-fdac74e9a138',
                code: 'UU-BENEFITS-INCOME-SUPPORT',
                name: 'Income Support',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e27814ee-9c84-4d4a-9fb2-0d7f98a034f6',
                code: 'UU-BENEFITS-SNAP-WIC-NUTRITION-BENEFITS',
                name: 'SNAP/WIC/Nutrition Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9d65dac9-0720-40bf-85ec-5d4120f63502',
                code: 'UU-BENEFITS-UNEMPLOYMENT-INSURANCE',
                name: 'Unemployment Insurance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '203f0aff-92d9-459e-838a-ba51416ddcf7',
                code: 'UU-BENEFITS-VETERANS-BENEFITS',
                name: 'Veterans Benefits ',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'c088b0bd-9d90-4aaf-9841-ff29bf6311b3',
            code: 'UU-CLOTHING',
            name: 'Clothing & Household Goods',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '1e97fbbb-4975-4cb9-91c3-202a514ab689',
                code: 'UU-CLOTHING-APPLIANCES',
                name: 'Appliances',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3f0451b8-d0ae-4c51-8ed1-ba975fc7d353',
                code: 'UU-CLOTHING-BABY-SUPPLIES-FURNITURE',
                name: 'Baby Supplies/Furniture',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '23702103-e2eb-4601-9e5e-e83a6c143e64',
                code: 'UU-CLOTHING-CLOTHING',
                name: 'Clothing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '4e821771-94f6-4bc6-9256-482d67085455',
                code: 'UU-CLOTHING-FURNITURE',
                name: 'Furniture',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bde2e2cd-07cc-41a4-b32d-94e21d261963',
                code: 'UU-CLOTHING-HOUSEWARE-COOKWARE',
                name: 'Houseware/Cookware',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a5227f86-d697-4bec-aafa-1865dbdcb02a',
                code: 'UU-CLOTHING-MOBILE-DEVICES',
                name: 'Mobile Devices',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ea094ca8-df6c-41ef-a75a-d763516beafd',
                code: 'UU-CLOTHING-PERSONAL-HOUSEHOLD-GOODS',
                name: 'Personal & Household Goods',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '04d0aba4-d91f-4221-8823-cf5ae02e1963',
            code: 'UU-EDUCATION',
            name: 'Education',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '45ddeb75-013b-458e-8ca5-29333e1dc1c5',
                code: 'UU-EDUCATION-COMPUTER-TECHNOLOGY-CLASSES',
                name: 'Computer/Technology Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '557f7652-6b84-4ee8-9bbc-844e1e9a6c66',
                code: 'UU-EDUCATION-DEGREES-CERTIFICATIONS',
                name: 'Degrees/Certifications',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '29dd4fe0-79aa-4e8f-b36b-127c88eb56d6',
                code: 'UU-EDUCATION-EDUCATIONAL-SUPPORT-SERVICES',
                name: 'Educational Support Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7c9552af-d1c4-4bc0-9a4f-83074c07891c',
                code: 'UU-EDUCATION-HIGH-SCHOOL-EQUIVALENCY',
                name: 'High School Equivalency',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7d002546-764f-4c9a-bba7-54b6d8bad11b',
                code: 'UU-EDUCATION-LANGUAGE-CLASSES',
                name: 'Language Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '63075c9a-4d3f-463f-bc42-eabe8894548b',
                code: 'UU-EDUCATION-TUITION-ASSISSTANCE',
                name: 'Tuition Assisstance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'c22fe446-f131-4590-89ac-f666453c2f90',
            code: 'UU-EMPLOYMENT',
            name: 'Employment',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: 'cd5f8460-a931-4c44-857a-853e74ac5712',
                code: 'UU-EMPLOYMENT-CAREER-DEVELOPMENT',
                name: 'Career Development',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3e4a6280-8a9f-4c8a-9d3c-0a384bec3749',
                code: 'UU-EMPLOYMENT-INTERNSHIPS-WORK-EXPERIENCE',
                name: 'Internships/Work Experience',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '4571ddad-2d7a-47c2-b17c-0eb2923de77c',
                code: 'UU-EMPLOYMENT-JOB-SEARCH-PLACEMENT',
                name: 'Job Search/Placement',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f106abb9-3e6d-4231-8ebe-db3b85316795',
                code: 'UU-EMPLOYMENT-JOB-TRAINING',
                name: 'Job Training',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '2935833f-af39-42b8-b760-62dbb658e71c',
            code: 'UU-ENTREPRENEURSHIP',
            name: 'Entrepreneurship',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '4ae8dfd8-db88-4c88-82e2-1519d4e8021c',
                code: 'UU-ENTREPRENEURSHIP-COMMERCIAL-REAL-ESTATE',
                name: 'Commercial Real Estate',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c46ace25-a14f-4a7e-9717-46179b077a7c',
                code: 'UU-ENTREPRENEURSHIP-ENTREPRENEURIAL-TRAINING',
                name: 'Entrepreneurial Training',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7e750d2b-0f2d-420d-b507-368888afcf65',
                code: 'UU-ENTREPRENEURSHIP-FUNDRAISING-AND-FINANCING',
                name: 'Fundraising and Financing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '50092b09-12e3-4825-98e1-efdf2b284732',
                code: 'UU-ENTREPRENEURSHIP-PRO-BONO-BUSINESS-ATTORNEYS',
                name: 'Pro Bono Business Attorneys',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '66bff632-be99-4753-a782-797cb08c6cdb',
            code: 'UU-FOOD',
            name: 'Food Assistance',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '775e20af-6b13-4f3f-ad6c-ac1f29f87cbe',
                code: 'UU-FOOD-EMERGENCY-FOOD-FOOD-PANTRIES',
                name: 'Emergency Food (Food Pantries)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7d7df679-c561-4865-a921-830220589db6',
                code: 'UU-FOOD-FOOD-EXPENSE-ASSISSTANCE',
                name: 'Food Expense Assisstance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9e6b816c-3295-49e9-8ee7-e6a230de4279',
                code: 'UU-FOOD-PREPARED-MEALS',
                name: 'Prepared Meals',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f67b7074-1531-45a8-8218-51ff384e5b89',
                code: 'UU-FOOD-SNAP-WIC-OTHER-NUTRITION-BENEFITS',
                name: 'SNAP/WIC/Other Nutrition Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '052dba39-63b1-4f3c-9edb-fabcf9a6c044',
                code: 'UU-FOOD-SCHOOL-MEAL-PROGRAMS',
                name: 'School Meal Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '7bcdf382-5c55-4fe8-b8d0-a9e44136bece',
            code: 'UU-HEALTH',
            name: 'Health',
            definition: null,
            updated_at: 1519938854,
            children: [],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '87702c7d-79ef-44d5-8b2a-c6bf450998f6',
            code: 'UU-HOUSING',
            name: 'Housing & Shelter',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '010922e4-b01a-46c8-b62f-f13ac22b79d5',
                code: 'UU-HOUSING-ASSISTED-LIVING',
                name: 'Assisted Living',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a115ae9f-3b91-4959-82fd-a40898ffd52d',
                code: 'UU-HOUSING-EMERGENCY-HOUSING',
                name: 'Emergency Housing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '613a527c-18c9-43c9-a52d-88bd72bd56de',
                code: 'UU-HOUSING-HOME-EXPENSE-ASSISTANCE-REPAIRS',
                name: 'Home Expense Assistance/Repairs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '71cc6d1c-7fef-4268-a2e2-87f716e49e3c',
                code: 'UU-HOUSING-HOME-IMPROVEMENT-ACCESSIBILITY',
                name: 'Home Improvement/Accessibility',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'efc8bc51-bded-4ca6-bb83-5370033ddb96',
                code: 'UU-HOUSING-HOME-LOANS-AND-FINANCING',
                name: 'Home Loans and Financing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'db4179a4-a455-4b41-a517-47c66e694d37',
                code: 'UU-HOUSING-HOUSING-APPLICATIONS-RECERTIFICATION',
                name: 'Housing Applications/Recertification',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f42fc9f6-543e-4bcb-872e-7db8591592b3',
                code: 'UU-HOUSING-MOVING-ASSISTANCE',
                name: 'Moving Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'fa4fb910-9acc-485c-843f-ffc5247dc10b',
                code: 'UU-HOUSING-PERMANENT-HOUSING-NON-SUPPORTIVE',
                name: 'Permanent Housing (Non-supportive)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1688e1d0-7ff4-412e-874b-cdb547eb5395',
                code: 'UU-HOUSING-PERMANENT-HOUSING-SUPPORTIVE',
                name: 'Permanent Housing (Supportive)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3a0a17e6-3ef9-4a63-8205-a224172ae4e0',
                code: 'UU-HOUSING-RENT-MORTGAGE-PAYMENT-ASSISTANCE',
                name: 'Rent/Mortgage Payment Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '503adec3-223a-47d0-b066-8a8aef1756ae',
                code: 'UU-HOUSING-TRANSITIONAL-HOUSING',
                name: 'Transitional Housing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '6398359b-9679-4a17-bc7d-b4ed5c3d3236',
            code: 'UU-INCOME-SUPPORT',
            name: 'Income Support',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '0004897e-08e1-4bae-85dc-ea4dcafdf389',
                code: 'UU-INCOME-SUPPORT-EMERGENCY-ONE-TIME-FINANCIAL-ASSISTANCE',
                name: 'Emergency/One-time Financial Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8205d108-8b7c-4a85-9f61-45fe4ecadb38',
                code: 'UU-INCOME-SUPPORT-SSI-SSD-DISABILITY-BENEFITS',
                name: 'SSI/SSD & Disability Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'db00cf49-d489-4c3b-b7ec-019b2e5892ac',
                code: 'UU-INCOME-SUPPORT-TANF-CASH-ASSISTANCE-PROGRAMS',
                name: 'TANF/Cash Assistance Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ea0cbba2-f45b-4c0d-8c5a-4e8f68e82bed',
                code: 'UU-INCOME-SUPPORT-UNEMPLOYMENT-INSURANCE',
                name: 'Unemployment Insurance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f45256aa-a661-492c-b94c-f2628d1c81a6',
                code: 'UU-INCOME-SUPPORT-VETERANS-PENSION-DISABILITY-BENEFITS',
                name: 'Veterans Pension & Disability Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '16cd3af4-2cfa-4402-8b4c-7f4b2f270f0c',
            code: 'UU-SUPPORT-SERVICES',
            name: 'Individual & Family Support',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '8745e516-2917-43ea-a1a9-e0df8a8e79b6',
                code: 'UU-SUPPORT-SERVICES-ADULT-DAY-PROGRAMS',
                name: 'Adult Day Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '945b36b5-2e40-4291-9416-b2d86af2c77d',
                code: 'UU-SUPPORT-SERVICES-CAREGIVING-SERVICES',
                name: 'Caregiving Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'eb1b49ac-fd56-44df-a297-bec5261edd1c',
                code: 'UU-SUPPORT-SERVICES-CASE-CARE-MANAGEMENT',
                name: 'Case/Care Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '69d54a6c-7b0c-42e4-8864-a5fb48a2b8a2',
                code: 'UU-SUPPORT-SERVICES-CHILD-CARE',
                name: 'Child Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '858d54fa-c8e9-4a91-b3a4-a1fcd2b70608',
                code: 'UU-SUPPORT-SERVICES-ENVIRONMENTAL-MODIFICATIONS-ACCESSIBILITY',
                name: 'Environmental Modifications/Accessibility',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f9806f9a-0049-4233-8753-8b554eefdb12',
                code: 'UU-SUPPORT-SERVICES-HOLIDAY-PROGRAMS',
                name: 'Holiday Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bfe801d3-72e4-4cb4-bfd2-f29ff9fb46d0',
                code: 'UU-SUPPORT-SERVICES-INTERPRETATION-SERVICES',
                name: 'Interpretation Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd456b1db-60e2-4405-a84e-9a39956168bf',
                code: 'UU-SUPPORT-SERVICES-LIFE-COACHING',
                name: 'Life Coaching',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '969918fe-053d-4585-81c0-5c33e5def6dc',
                code: 'UU-SUPPORT-SERVICES-LIFE-INSURANCE',
                name: 'Life Insurance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5f57fc9e-5132-4203-a35c-f2c428f66404',
                code: 'UU-SUPPORT-SERVICES-MENTORING',
                name: 'Mentoring',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8be5eaa6-56f3-4aff-a6fb-a9829e737633',
                code: 'UU-SUPPORT-SERVICES-PARENTING-EDUCATION',
                name: 'Parenting Education',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1956d333-2cd2-4a15-8557-c0ae0bbca9a4',
                code: 'UU-SUPPORT-SERVICES-PEER-SUPPORT',
                name: 'Peer Support',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '07cc30f3-69d8-4e9f-bd4e-877a1f05b524',
                code: 'UU-SUPPORT-SERVICES-RESPITE-CARE',
                name: 'Respite Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '73352b1e-3abd-4bfa-b65d-1b896a7af730',
                code: 'UU-SUPPORT-SERVICES-SERVICE-ANIMALS',
                name: 'Service Animals',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '0f14e6a9-51bf-4d10-8916-4419e4b33120',
                code: 'UU-SUPPORT-SERVICES-SUPPORT-GROUPS',
                name: 'Support Groups ',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '40ee374f-2915-46f6-b8ba-ca73d19525ae',
            code: 'UU-LEGAL',
            name: 'Legal',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '0ead417f-13b4-438d-a433-8c88648895e8',
                code: 'BANKRUPTCY_LAW',
                name: 'Bankruptcy Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '716df1fc-e762-49d4-81b2-83a2f3b67c5e',
                code: 'BENEFITS_ADVOCACY',
                name: 'Benefits Advocacy',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e1ecee83-3fd6-4a16-b21b-0bc57f15a1d7',
                code: 'CONSUMER_RIGHTS_DEBT_REPAYMENT',
                name: 'Consumer Rights & Debt Repayment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '78659a05-444b-4029-9838-760ed1968d8e',
                code: 'DISABILITY_LAW',
                name: 'Disability Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5a91c5a2-2973-460e-9796-258951c5815d',
                code: 'EDUCATION_LAW',
                name: 'Education Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '12279097-a377-4f80-9179-41eda5fabbe4',
                code: 'EMPLOYMENT_LAW',
                name: 'Employment Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5c422dbe-7595-45c0-aa5e-027f478c0093',
                code: 'FAMILY_LAW',
                name: 'Family Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5bb1a20e-ef2c-446a-b663-91158b902057',
                code: 'HEALTH_LAW',
                name: 'Health Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '96fc3805-0c4b-4463-8cc1-d69b3ab1a4e6',
                code: 'HOUSING_LAW',
                name: 'Housing Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3c31e491-17aa-4558-b105-04f669b19d9b',
                code: 'IMMIGRATION_LAW',
                name: 'Immigration Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '5c1ab598-0402-4fc1-8550-aa5d3cc48ea0',
            code: 'UU-MENTAL-BEHAVIORAL-HEALTH',
            name: 'Mental/Behavioral Health',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: 'e89db99e-e3ad-4677-9a5f-4bbe21b7d882',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-CONJOINT-COUNSELING',
                name: 'Conjoint Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '111baa4a-6876-48e2-917b-23d1fd40d7c0',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-CRISIS-INTERVENTION',
                name: 'Crisis Intervention',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f2415330-9fb9-4a5c-925a-2263d55de544',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-FAMILY-COUNSELING',
                name: 'Family Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9cf506a1-0ce6-46fe-8984-dda0b8ae8ec2',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-GROUP-COUNSELING',
                name: 'Group Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9c79d017-54a2-4070-ab1e-05bba9e57782',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-INDIVIDUAL-COUNSELING',
                name: 'Individual Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '97ae72bc-6e85-41e2-9151-0040468250dc',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-INPATIENT-MENTAL-HEALTH',
                name: 'Inpatient mental health',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '16a7c863-802f-46e9-ad85-6ee5add5496c',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-MENTAL-HEALTH-EVALUATION',
                name: 'Mental Health Evaluation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f5ebb16e-2f5f-47fd-9a03-7244564d47bd',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-MENTAL-HEALTH-INFORMATION-EDUCATION',
                name: 'Mental Health Information/Education',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'c1bffbd7-98d5-4515-bf8e-e0b57578dade',
            code: 'UU-MONEY-MANAGEMENT',
            name: 'Money Management',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '20b6280a-8904-4d7f-8b22-71d83b92b7e0',
                code: 'UU-MONEY-MANAGEMENT-FINANCIAL-COUNSELING',
                name: 'Financial Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'aff6ac6d-e9bc-47d0-94f9-8da6f40ac916',
                code: 'UU-MONEY-MANAGEMENT-FINANCIAL-LITERACY-CLASSES',
                name: 'Financial Literacy Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'dbcccf5a-0077-4072-bacc-6d50b267dc6b',
                code: 'UU-MONEY-MANAGEMENT-TAX-PREPARATION-SERVICES',
                name: 'Tax Preparation Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a00c83be-8045-4e95-b7a5-ab1270509d1e',
                code: 'UU-MONEY-MANAGEMENT-TAX-SERVICES',
                name: 'Tax Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'ddb3759d-0829-454f-98dc-b131c956b369',
            code: 'UU-MEDICAL-HEALTH',
            name: 'Physical Health',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: 'e6c0b729-0515-4fe9-98e5-8b28b851d6bb',
                code: 'UU-MEDICAL-HEALTH-ASSISTIVE-TECHNOLOGY',
                name: 'Assistive Technology',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c0b43dd6-009c-44d7-bbeb-9302e7b9c57b',
                code: 'UU-MEDICAL-HEALTH-CHRONIC-DISEASE-PREVENTION-MANAGEMENT',
                name: 'Chronic Disease Prevention & Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f422bc20-ba90-4d18-baf3-acac082bdc14',
                code: 'UU-MEDICAL-HEALTH-CLINICAL-TRIALS',
                name: 'Clinical Trials',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f383f0f1-26be-411b-99bf-20cd26ceeaef',
                code: 'UU-MEDICAL-HEALTH-DENTAL-CARE',
                name: 'Dental Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '04a83bae-6d89-4a08-9ec1-ab0e4fcd2e8a',
                code: 'UU-MEDICAL-HEALTH-DIABETES-SUPPORT-SERVICES',
                name: 'Diabetes Support Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7516fded-4a87-4837-96a8-ff502b73407a',
                code: 'UU-MEDICAL-HEALTH-DIETETIC-SERVICES',
                name: 'Dietetic Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'aaf697d6-db0e-4ded-8916-b684cfddad79',
                code: 'UU-MEDICAL-HEALTH-EYE-CARE',
                name: 'Eye Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8f59098c-0279-42e0-bdfb-328a81757259',
                code: 'UU-MEDICAL-HEALTH-GENERAL-MEDICAL-CARE',
                name: 'General Medical Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a3574092-d92c-433f-9d12-fdead95344ac',
                code: 'UU-MEDICAL-HEALTH-HEALTH-INSURANCE-DENTAL-COVERAGE',
                name: 'Health Insurance/Dental Coverage',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e0396b76-3347-4a9d-899b-1329aec2ab14',
                code: 'UU-MEDICAL-HEALTH-HEALTH-SCREENING-DIAGNOSTIC-SERVICES',
                name: 'Health Screening/Diagnostic Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '297b6e01-9374-4886-8007-8084d3a0c0da',
                code: 'UU-MEDICAL-HEALTH-HOME-HEALTH-CARE',
                name: 'Home Health Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '61f92384-6966-4d92-8f42-6c46b9ef48ac',
                code: 'UU-MEDICAL-HEALTH-HOSPICE-PALLIATIVE-CARE',
                name: 'Hospice & Palliative Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '92ac1871-ff13-410c-a143-0f013715291f',
                code: 'UU-MEDICAL-HEALTH-IMMUNIZATIONS',
                name: 'Immunizations',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f9f98be5-95dc-4af8-9256-c4beb8573963',
                code: 'UU-MEDICAL-HEALTH-LONG-TERM-CARE-FACILITY-BASED',
                name: 'Long Term Care (Facility-based)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '19372c91-438f-437e-b21a-2cf18adaed53',
                code: 'UU-MEDICAL-HEALTH-LONG-TERM-CARE',
                name: 'Long-Term Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'b346ba4e-985d-4134-8327-2773f404b87c',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-CASE-MANAGEMENT-SERVICES',
                name: 'Medical Case Management Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a0e5fc62-4fd8-4789-bb05-d6a752c78e12',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-EQUIPMENT-ASSISTIVE-TECHNOLOGY',
                name: 'Medical Equipment/Assistive Technology',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd2c10fbe-7f3f-4a9d-9a00-2e34683ac813',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-EQUIPMENT-SUPPLIES',
                name: 'Medical Equipment/Supplies',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '16d3f563-9741-4152-9636-24bd7914f54e',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-EXPENSE-ASSISSTANCE',
                name: 'Medical Expense Assisstance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ae6ad4c3-c139-495a-a8be-6ddb3ea63ad3',
                code: 'UU-MEDICAL-HEALTH-MEDICATION-MANAGEMENT',
                name: 'Medication Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'da753ef5-d455-420d-b586-37da250789ac',
                code: 'UU-MEDICAL-HEALTH-PAIN-MANAGEMENT',
                name: 'Pain Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '968d6897-8dba-4622-bff4-22e8fd80b6ff',
                code: 'UU-MEDICAL-HEALTH-PEDIATRIC-MEDICINE',
                name: 'Pediatric Medicine',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '85f22ff8-3556-4950-bbb0-a0ba94d75945',
                code: 'UU-MEDICAL-HEALTH-PREVENTION-AND-EDUCATION',
                name: 'Prevention and Education',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'cd7f70cb-4911-4dca-b854-6a5e2683e8f3',
                code: 'UU-MEDICAL-HEALTH-PRIMARY-CARE',
                name: 'Primary Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6645feb5-40f6-4d46-a606-4bb9263a3fdd',
                code: 'UU-MEDICAL-HEALTH-REHABILITATION-HABILITATION-SERVICES',
                name: 'Rehabilitation/Habilitation Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd70295ea-5ac2-4b71-ac23-0acba240a004',
                code: 'UU-MEDICAL-HEALTH-REPRODUCTIVE-HEALTH',
                name: 'Reproductive Health',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bfd0d491-f395-4725-b502-8b1978dfd933',
                code: 'UU-MEDICAL-HEALTH-SCREENINGS-IMMUNIZATIONS',
                name: 'Screenings & Immunizations',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '85bed9f0-9591-4c06-898c-b6b4daf25ace',
                code: 'UU-MEDICAL-HEALTH-SPECIALTY-CARE',
                name: 'Specialty Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '104a0403-b9f4-4418-bdec-5c0340f3b524',
                code: 'UU-MEDICAL-HEALTH-SPECIALTY-MEDICINE',
                name: 'Specialty Medicine',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '8713fa4c-8c6c-48ad-a01a-f28a83c9280b',
            code: 'UU-SOCIAL-ENRICHMENT',
            name: 'Social Enrichment',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '8a2bb738-fc1f-496b-b237-b48c84c222eb',
                code: 'UU-SOCIAL-ENRICHMENT-ADVOCACY-GROUPS',
                name: 'Advocacy Groups',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6bba9e36-70cd-4719-b4a5-68d903e88360',
                code: 'UU-SOCIAL-ENRICHMENT-ARTS-CRAFTS-CLASSES',
                name: 'Arts & Crafts Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3cf907ab-8509-4283-9015-3f1bdf2d8ff2',
                code: 'UU-SOCIAL-ENRICHMENT-COOKING-CLASSES',
                name: 'Cooking Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'b045f072-9967-44e6-a1c8-a0e545e82190',
                code: 'UU-SOCIAL-ENRICHMENT-LEADERSHIP-DEVELOPMENT',
                name: 'Leadership Development',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6f6ac259-794f-47a3-b7e7-1f96e0557bed',
                code: 'UU-SOCIAL-ENRICHMENT-MUSIC-CLASSES',
                name: 'Music Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c8426e0e-134e-4e91-97c0-8b8b65bad113',
                code: 'UU-SOCIAL-ENRICHMENT-PEER-TO-PEER-NETWORKING',
                name: 'Peer to Peer Networking',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5932d6b5-bd42-4701-8242-d35dace3755d',
                code: 'UU-SOCIAL-ENRICHMENT-PROFESSIONAL-DEVELOPENT',
                name: 'Professional Developent',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6cd2af38-6759-48b5-a341-cdf6db31d400',
                code: 'UU-SOCIAL-ENRICHMENT-SPECIAL-INTEREST-CLUBS',
                name: 'Special Interest Clubs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'edd7ed06-0a18-4067-9699-12f930ffb517',
                code: 'UU-SOCIAL-ENRICHMENT-VOLUNTEER-OPPORTUNITIES',
                name: 'Volunteer Opportunities',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd343896f-60c3-474a-96fd-25e63e57e487',
                code: 'UU-SOCIAL-ENRICHMENT-YOUTH-DEVELOPMENT',
                name: 'Youth Development',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'a2b41783-c09a-4afa-a15e-4ffca7a62da7',
            code: 'UU-SPIRITUAL',
            name: 'Spiritual Enrichment',
            definition: null,
            updated_at: 1519938854,
            children: [],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '1490a11f-3361-48ca-945e-e0350118e572',
            code: 'UU-SPORTS',
            name: 'Sports & Recreation',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: 'bd7b080a-3fed-4614-a08c-e6b697bee500',
                code: 'UU-SPORTS-ADAPTIVE-SPORTS',
                name: 'Adaptive Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd9fa2773-2411-404a-8475-74f7a8161357',
                code: 'UU-SPORTS-BOATING-WATERCRAFT',
                name: 'Boating & Watercraft',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '820b0587-ef16-49d0-98a5-098987fd54f2',
                code: 'UU-SPORTS-DANCE-CLASSES',
                name: 'Dance Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a7f6a164-0955-4cc7-8123-3f6de267baf0',
                code: 'UU-SPORTS-EXERCISE-CLASSES-GROUPS',
                name: 'Exercise Classes/Groups',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'cd98b976-2f11-45d0-8285-d739fa13f333',
                code: 'UU-SPORTS-EXTREME-SPORTS',
                name: 'Extreme Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bf752642-5783-4253-9ca5-859b056da76d',
                code: 'UU-SPORTS-INDIVIDUAL-SPORTS',
                name: 'Individual Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '17f91ba6-abd3-4491-ae4f-65fa29fbd4e8',
                code: 'UU-SPORTS-MARTIAL-ARTS',
                name: 'Martial Arts',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9bd2aa59-dab6-441f-9019-b918191404af',
                code: 'UU-SPORTS-OUTDOOR-ACTIVITIES',
                name: 'Outdoor Activities ',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ca1d27a7-58b0-4ad8-baa9-34cec75c9dd5',
                code: 'UU-SPORTS-SNOW-SPORTS',
                name: 'Snow Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '256f9747-dcb5-4df0-afb6-5fd0b4ae6863',
                code: 'UU-SPORTS-TEAM-SPORTS-LEAGUES',
                name: 'Team Sports & Leagues',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '4de07fd8-702e-452f-97b6-548c4a4717c3',
                code: 'UU-SPORTS-WATER-SPORTS-ACTIVITIES',
                name: 'Water Sports/Activities',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '044d5f79-ea1e-4d4c-930c-b34072f3039a',
            code: 'UU-SUBSTANCE-USE',
            name: 'Substance Use',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '100b824c-3dba-4eda-a540-465c45a7ed70',
                code: 'UU-SUBSTANCE-USE-DUI-OFFENDER-PROGRAMS',
                name: 'DUI Offender Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '445b8377-a53e-4366-ab42-2bd5cfa99287',
                code: 'UU-SUBSTANCE-USE-DETOXIFICATION',
                name: 'Detoxification',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c6a67048-36fe-4756-adbd-d7d039993131',
                code: 'UU-SUBSTANCE-USE-DRUG-ALCOHOL-TESTING',
                name: 'Drug/Alcohol Testing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ec768885-0f60-4c72-ad9c-069fbc0081a2',
                code: 'UU-SUBSTANCE-USE-INPATIENT-SUBSTANCE-USE-TREATMENT',
                name: 'Inpatient Substance Use Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd7b7132b-33e5-4b0f-8274-f26b836c3653',
                code: 'UU-SUBSTANCE-USE-JUVENILE-MINOR-OFFENDER-PROGRAMS',
                name: 'Juvenile/Minor Offender Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '47c83d61-e57d-4cf2-8751-a8f70ad55bde',
                code: 'UU-SUBSTANCE-USE-MEDICATION-ASSISTED-TREATMENT',
                name: 'Medication Assisted Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7557e409-a461-4486-8083-5518ff996c76',
                code: 'UU-SUBSTANCE-USE-OUTPATIENT-SUBSTANCE-USE-TREATMENT',
                name: 'Outpatient Substance Use Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '40bbf0a5-e106-4b9a-844d-52c9da38ba63',
                code: 'UU-SUBSTANCE-USE-SMOKING-CESSATION',
                name: 'Smoking Cessation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1aac01f3-fb68-48f7-9b9d-28b8de06c821',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-COUNSELING',
                name: 'Substance Use Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd06331c5-fe29-4c38-a1e1-f12b61afa74c',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-EDUCATION-PREVENTION',
                name: 'Substance Use Education/Prevention',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e2e46210-295d-4794-8014-fabf0c4100bf',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-EXPENSE-ASSISTANCE',
                name: 'Substance Use Expense Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '0a73f953-8467-47dd-a395-9dfcf0b2287d',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-RECOVERY-SUPPORT',
                name: 'Substance Use Recovery Support',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1e74f059-11da-42bb-b21d-9a41c38db90e',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-TREATMENT',
                name: 'Substance Use Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8c514e31-3388-437a-ae58-4df5921f59cb',
                code: 'UU-SUBSTANCE-USE-TOBACCO-CESSATION',
                name: 'Tobacco Cessation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '4b6da834-1735-4fdd-9a27-868216590a4f',
            code: 'UU-TRANSPORTATION',
            name: 'Transportation',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: 'fcfaee0c-c11d-4292-81de-8d460255dfe6',
                code: 'UU-TRANSPORTATION-RIDE-COORDINATION',
                name: 'Ride Coordination',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5100704a-7dae-4c75-9f52-79e9b6fc80fc',
                code: 'UU-TRANSPORTATION-RIDES',
                name: 'Rides',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '578b781e-6cd5-4e80-bffb-fb83e6b68afa',
                code: 'UU-TRANSPORTATION-TRANSPORTATION-EXPENSE-ASSISTANCE',
                name: 'Transportation Expense Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '780a5c5b-2129-41f1-8d6c-47837d9151b7',
                code: 'UU-TRANSPORTATION-TRANSPORTATION-PASSES-VOUCHERS',
                name: 'Transportation Passes/Vouchers',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '7395ef39-c06f-4905-ab33-3e0fac4f6bb5',
            code: 'UU-UTILITIES',
            name: 'Utilities',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: 'a5f7e58a-6c65-40eb-b3b6-a5cede7b60c4',
                code: 'UU-UTILITIES-HOME-ENERGY-UTILITIES-BENEFITS',
                name: 'Home Energy/Utilities Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7c0a1f24-2536-41c3-afdd-0f7ffbd469c4',
                code: 'UU-UTILITIES-UTILITY-PAYMENT-ASSISTANCE',
                name: 'Utility Payment Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'eda495db-c773-4e53-9ddd-1c575979bb94',
                code: 'UU-UTILITIES-UTILITY-SERVICE-CONNECTION',
                name: 'Utility Service Connection',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '7e125eb8-7fe1-4f0e-9480-569965e21f03',
            code: 'UU-WELLNESS',
            name: 'Wellness',
            definition: null,
            updated_at: 1519938854,
            children: [
              {
                id: '40516be7-c399-4691-8c4d-81c592e3745e',
                code: 'UU-WELLNESS-ALTERNATIVE-MEDICINE',
                name: 'Alternative Medicine',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5dd9c740-a315-4e65-9bb1-9676b725757a',
                code: 'UU-WELLNESS-MASSAGE-THERAPY',
                name: 'Massage Therapy',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '0bb07cf2-64b1-4993-8382-b20d496aeefc',
                code: 'UU-WELLNESS-MINDFULNESS-AND-MEDITATION',
                name: 'Mindfulness and Meditation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '102bfbe2-15f1-4008-a30a-9081f6b1f4bd',
                code: 'UU-WELLNESS-NUTRITION-EDUCATION-COUNSELING',
                name: 'Nutrition Education & Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ac4ce6c6-1e86-4dbc-a22d-b8d83a12bd39',
                code: 'UU-WELLNESS-THERAPEUTIC-OUTDOOR-PROGRAMS',
                name: 'Therapeutic Outdoor Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ca443a3b-d333-49e3-b4c9-b54b249924c1',
                code: 'UU-WELLNESS-THERAPEUTIC-RETREATS',
                name: 'Therapeutic Retreats',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '2a18d56d-4b91-4815-a01d-9591b6c05aa0',
                code: 'UU-WELLNESS-TRADITIONAL-HEALING',
                name: 'Traditional Healing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
        ],
        programs: [
          {
            id: '8ccdd727-f009-44ad-b349-568f9948f553',
            name: 'Word To The Third',
            _meta: {
              _type: 'groups_program',
            },
          },
          {
            id: '24249d5b-75cb-4b51-bfc6-78b217a4bc2f',
            name: 'All Service Types Program [Micah]',
            _meta: {
              _type: 'groups_program',
            },
          },
        ],
        hours_of_operation: [
          { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
        ],
        _meta: {
          _type: 'facades_groups_referralprogram',
        },
      },
      {
        id: '9360e1cb-1ae6-44e7-9ed8-e17ca44b6173',
        name: 'Sharkey Org [Dev Only]',
        description: '<p>Quick Sharkey QA</p>',
        logo_url: 'https://s3.amazonaws.com/cdn-public-v3-uudev/group/9360e1cb-1ae6-44e7-9ed8-e17ca44b6173/logo/b2936111ce15c9ca1cd2ef6b77050fec-medium.png',
        website_url: null,
        is_verified: false,
        hours_of_operation: [
          { day_of_week: 'monday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'tuesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'wednesday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'thursday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
          { day_of_week: 'friday', hours_of_operation: [{ opens_at: 540, closes_at: 990 }] },
        ],
        created_at: 1477409248,
        updated_at: 1521571184,
        addresses: [
          {
            id: '0515ad38-d57c-40c5-86a5-325fbeda54f6',
            line_1: '13 Sharkey Street',
            line_2: '',
            city: 'Sharkey',
            state: 'NJ',
            postal_code: '07716',
            country: 'USA',
            address_type: 'work',
            is_mailing_address: false,
            county: 'Monmouth County',
            lat_lng: [
              32.9860902,
              -90.8294002,
            ],
            _meta: {
              _type: 'groups_address',
            },
          },
        ],
        service_types: [
          {
            id: '50126fcb-a3e9-45d5-9a8e-c32b7fd810b4',
            code: 'UU-BENEFITS',
            name: 'Benefits',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '2ac1bb8f-89a1-44b9-9e24-9af3cec8a2de',
                code: 'UU-BENEFITS-BENEFITS-ELIGIBILITY-SCREENING',
                name: 'Benefits Eligibility Screening',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3e3aef24-f58d-493e-a604-8fe87019b142',
                code: 'UU-BENEFITS-DISABILITY-BENEFITS',
                name: 'Disability Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '68a5c4a6-dca5-4c8a-b934-cd2e89bfc5b3',
                code: 'UU-BENEFITS-HEALTH-INSURANCE-BENEFITS',
                name: 'Health Insurance/Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '2430b334-1d68-43ec-905c-36b5b2c2953b',
                code: 'UU-BENEFITS-HEALTH-INSURANCE-BENEFITS-E-G-MEDICARE-MEDICAID-PROGRAMS',
                name: 'Health Insurance/Benefits (e.g. Medicare & Medicaid programs)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '295a1c49-43b7-4cbd-b695-8de303cb97fa',
                code: 'UU-BENEFITS-ID-DOCUMENTATION-ASSISTANCE',
                name: 'ID/Documentation Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7cc14f7d-7901-466c-9ccd-52caeaa6b8fc',
                code: 'UU-BENEFITS-IMMIGRATION-SERVICES',
                name: 'Immigration Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'b7141fab-f70c-450f-9ad5-fdac74e9a138',
                code: 'UU-BENEFITS-INCOME-SUPPORT',
                name: 'Income Support',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e27814ee-9c84-4d4a-9fb2-0d7f98a034f6',
                code: 'UU-BENEFITS-SNAP-WIC-NUTRITION-BENEFITS',
                name: 'SNAP/WIC/Nutrition Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9d65dac9-0720-40bf-85ec-5d4120f63502',
                code: 'UU-BENEFITS-UNEMPLOYMENT-INSURANCE',
                name: 'Unemployment Insurance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '203f0aff-92d9-459e-838a-ba51416ddcf7',
                code: 'UU-BENEFITS-VETERANS-BENEFITS',
                name: 'Veterans Benefits ',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'c088b0bd-9d90-4aaf-9841-ff29bf6311b3',
            code: 'UU-CLOTHING',
            name: 'Clothing & Household Goods',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '1e97fbbb-4975-4cb9-91c3-202a514ab689',
                code: 'UU-CLOTHING-APPLIANCES',
                name: 'Appliances',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3f0451b8-d0ae-4c51-8ed1-ba975fc7d353',
                code: 'UU-CLOTHING-BABY-SUPPLIES-FURNITURE',
                name: 'Baby Supplies/Furniture',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '23702103-e2eb-4601-9e5e-e83a6c143e64',
                code: 'UU-CLOTHING-CLOTHING',
                name: 'Clothing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '4e821771-94f6-4bc6-9256-482d67085455',
                code: 'UU-CLOTHING-FURNITURE',
                name: 'Furniture',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bde2e2cd-07cc-41a4-b32d-94e21d261963',
                code: 'UU-CLOTHING-HOUSEWARE-COOKWARE',
                name: 'Houseware/Cookware',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a5227f86-d697-4bec-aafa-1865dbdcb02a',
                code: 'UU-CLOTHING-MOBILE-DEVICES',
                name: 'Mobile Devices',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ea094ca8-df6c-41ef-a75a-d763516beafd',
                code: 'UU-CLOTHING-PERSONAL-HOUSEHOLD-GOODS',
                name: 'Personal & Household Goods',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '04d0aba4-d91f-4221-8823-cf5ae02e1963',
            code: 'UU-EDUCATION',
            name: 'Education',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '45ddeb75-013b-458e-8ca5-29333e1dc1c5',
                code: 'UU-EDUCATION-COMPUTER-TECHNOLOGY-CLASSES',
                name: 'Computer/Technology Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '557f7652-6b84-4ee8-9bbc-844e1e9a6c66',
                code: 'UU-EDUCATION-DEGREES-CERTIFICATIONS',
                name: 'Degrees/Certifications',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '29dd4fe0-79aa-4e8f-b36b-127c88eb56d6',
                code: 'UU-EDUCATION-EDUCATIONAL-SUPPORT-SERVICES',
                name: 'Educational Support Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7c9552af-d1c4-4bc0-9a4f-83074c07891c',
                code: 'UU-EDUCATION-HIGH-SCHOOL-EQUIVALENCY',
                name: 'High School Equivalency',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7d002546-764f-4c9a-bba7-54b6d8bad11b',
                code: 'UU-EDUCATION-LANGUAGE-CLASSES',
                name: 'Language Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '63075c9a-4d3f-463f-bc42-eabe8894548b',
                code: 'UU-EDUCATION-TUITION-ASSISSTANCE',
                name: 'Tuition Assisstance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'c22fe446-f131-4590-89ac-f666453c2f90',
            code: 'UU-EMPLOYMENT',
            name: 'Employment',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: 'cd5f8460-a931-4c44-857a-853e74ac5712',
                code: 'UU-EMPLOYMENT-CAREER-DEVELOPMENT',
                name: 'Career Development',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3e4a6280-8a9f-4c8a-9d3c-0a384bec3749',
                code: 'UU-EMPLOYMENT-INTERNSHIPS-WORK-EXPERIENCE',
                name: 'Internships/Work Experience',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '4571ddad-2d7a-47c2-b17c-0eb2923de77c',
                code: 'UU-EMPLOYMENT-JOB-SEARCH-PLACEMENT',
                name: 'Job Search/Placement',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f106abb9-3e6d-4231-8ebe-db3b85316795',
                code: 'UU-EMPLOYMENT-JOB-TRAINING',
                name: 'Job Training',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '66bff632-be99-4753-a782-797cb08c6cdb',
            code: 'UU-FOOD',
            name: 'Food Assistance',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '775e20af-6b13-4f3f-ad6c-ac1f29f87cbe',
                code: 'UU-FOOD-EMERGENCY-FOOD-FOOD-PANTRIES',
                name: 'Emergency Food (Food Pantries)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7d7df679-c561-4865-a921-830220589db6',
                code: 'UU-FOOD-FOOD-EXPENSE-ASSISSTANCE',
                name: 'Food Expense Assisstance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9e6b816c-3295-49e9-8ee7-e6a230de4279',
                code: 'UU-FOOD-PREPARED-MEALS',
                name: 'Prepared Meals',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f67b7074-1531-45a8-8218-51ff384e5b89',
                code: 'UU-FOOD-SNAP-WIC-OTHER-NUTRITION-BENEFITS',
                name: 'SNAP/WIC/Other Nutrition Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '052dba39-63b1-4f3c-9edb-fabcf9a6c044',
                code: 'UU-FOOD-SCHOOL-MEAL-PROGRAMS',
                name: 'School Meal Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '7bcdf382-5c55-4fe8-b8d0-a9e44136bece',
            code: 'UU-HEALTH',
            name: 'Health',
            definition: null,
            updated_at: 1521571184,
            children: [],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '87702c7d-79ef-44d5-8b2a-c6bf450998f6',
            code: 'UU-HOUSING',
            name: 'Housing & Shelter',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '010922e4-b01a-46c8-b62f-f13ac22b79d5',
                code: 'UU-HOUSING-ASSISTED-LIVING',
                name: 'Assisted Living',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a115ae9f-3b91-4959-82fd-a40898ffd52d',
                code: 'UU-HOUSING-EMERGENCY-HOUSING',
                name: 'Emergency Housing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '613a527c-18c9-43c9-a52d-88bd72bd56de',
                code: 'UU-HOUSING-HOME-EXPENSE-ASSISTANCE-REPAIRS',
                name: 'Home Expense Assistance/Repairs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '71cc6d1c-7fef-4268-a2e2-87f716e49e3c',
                code: 'UU-HOUSING-HOME-IMPROVEMENT-ACCESSIBILITY',
                name: 'Home Improvement/Accessibility',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'efc8bc51-bded-4ca6-bb83-5370033ddb96',
                code: 'UU-HOUSING-HOME-LOANS-AND-FINANCING',
                name: 'Home Loans and Financing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'db4179a4-a455-4b41-a517-47c66e694d37',
                code: 'UU-HOUSING-HOUSING-APPLICATIONS-RECERTIFICATION',
                name: 'Housing Applications/Recertification',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f42fc9f6-543e-4bcb-872e-7db8591592b3',
                code: 'UU-HOUSING-MOVING-ASSISTANCE',
                name: 'Moving Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'fa4fb910-9acc-485c-843f-ffc5247dc10b',
                code: 'UU-HOUSING-PERMANENT-HOUSING-NON-SUPPORTIVE',
                name: 'Permanent Housing (Non-supportive)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1688e1d0-7ff4-412e-874b-cdb547eb5395',
                code: 'UU-HOUSING-PERMANENT-HOUSING-SUPPORTIVE',
                name: 'Permanent Housing (Supportive)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3a0a17e6-3ef9-4a63-8205-a224172ae4e0',
                code: 'UU-HOUSING-RENT-MORTGAGE-PAYMENT-ASSISTANCE',
                name: 'Rent/Mortgage Payment Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '503adec3-223a-47d0-b066-8a8aef1756ae',
                code: 'UU-HOUSING-TRANSITIONAL-HOUSING',
                name: 'Transitional Housing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '6398359b-9679-4a17-bc7d-b4ed5c3d3236',
            code: 'UU-INCOME-SUPPORT',
            name: 'Income Support',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '0004897e-08e1-4bae-85dc-ea4dcafdf389',
                code: 'UU-INCOME-SUPPORT-EMERGENCY-ONE-TIME-FINANCIAL-ASSISTANCE',
                name: 'Emergency/One-time Financial Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8205d108-8b7c-4a85-9f61-45fe4ecadb38',
                code: 'UU-INCOME-SUPPORT-SSI-SSD-DISABILITY-BENEFITS',
                name: 'SSI/SSD & Disability Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'db00cf49-d489-4c3b-b7ec-019b2e5892ac',
                code: 'UU-INCOME-SUPPORT-TANF-CASH-ASSISTANCE-PROGRAMS',
                name: 'TANF/Cash Assistance Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ea0cbba2-f45b-4c0d-8c5a-4e8f68e82bed',
                code: 'UU-INCOME-SUPPORT-UNEMPLOYMENT-INSURANCE',
                name: 'Unemployment Insurance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f45256aa-a661-492c-b94c-f2628d1c81a6',
                code: 'UU-INCOME-SUPPORT-VETERANS-PENSION-DISABILITY-BENEFITS',
                name: 'Veterans Pension & Disability Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '16cd3af4-2cfa-4402-8b4c-7f4b2f270f0c',
            code: 'UU-SUPPORT-SERVICES',
            name: 'Individual & Family Support',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '8745e516-2917-43ea-a1a9-e0df8a8e79b6',
                code: 'UU-SUPPORT-SERVICES-ADULT-DAY-PROGRAMS',
                name: 'Adult Day Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '945b36b5-2e40-4291-9416-b2d86af2c77d',
                code: 'UU-SUPPORT-SERVICES-CAREGIVING-SERVICES',
                name: 'Caregiving Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'eb1b49ac-fd56-44df-a297-bec5261edd1c',
                code: 'UU-SUPPORT-SERVICES-CASE-CARE-MANAGEMENT',
                name: 'Case/Care Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '69d54a6c-7b0c-42e4-8864-a5fb48a2b8a2',
                code: 'UU-SUPPORT-SERVICES-CHILD-CARE',
                name: 'Child Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '858d54fa-c8e9-4a91-b3a4-a1fcd2b70608',
                code: 'UU-SUPPORT-SERVICES-ENVIRONMENTAL-MODIFICATIONS-ACCESSIBILITY',
                name: 'Environmental Modifications/Accessibility',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f9806f9a-0049-4233-8753-8b554eefdb12',
                code: 'UU-SUPPORT-SERVICES-HOLIDAY-PROGRAMS',
                name: 'Holiday Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bfe801d3-72e4-4cb4-bfd2-f29ff9fb46d0',
                code: 'UU-SUPPORT-SERVICES-INTERPRETATION-SERVICES',
                name: 'Interpretation Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd456b1db-60e2-4405-a84e-9a39956168bf',
                code: 'UU-SUPPORT-SERVICES-LIFE-COACHING',
                name: 'Life Coaching',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '969918fe-053d-4585-81c0-5c33e5def6dc',
                code: 'UU-SUPPORT-SERVICES-LIFE-INSURANCE',
                name: 'Life Insurance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5f57fc9e-5132-4203-a35c-f2c428f66404',
                code: 'UU-SUPPORT-SERVICES-MENTORING',
                name: 'Mentoring',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8be5eaa6-56f3-4aff-a6fb-a9829e737633',
                code: 'UU-SUPPORT-SERVICES-PARENTING-EDUCATION',
                name: 'Parenting Education',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1956d333-2cd2-4a15-8557-c0ae0bbca9a4',
                code: 'UU-SUPPORT-SERVICES-PEER-SUPPORT',
                name: 'Peer Support',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '07cc30f3-69d8-4e9f-bd4e-877a1f05b524',
                code: 'UU-SUPPORT-SERVICES-RESPITE-CARE',
                name: 'Respite Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '73352b1e-3abd-4bfa-b65d-1b896a7af730',
                code: 'UU-SUPPORT-SERVICES-SERVICE-ANIMALS',
                name: 'Service Animals',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '0f14e6a9-51bf-4d10-8916-4419e4b33120',
                code: 'UU-SUPPORT-SERVICES-SUPPORT-GROUPS',
                name: 'Support Groups ',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '40ee374f-2915-46f6-b8ba-ca73d19525ae',
            code: 'UU-LEGAL',
            name: 'Legal',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '0ead417f-13b4-438d-a433-8c88648895e8',
                code: 'BANKRUPTCY_LAW',
                name: 'Bankruptcy Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '716df1fc-e762-49d4-81b2-83a2f3b67c5e',
                code: 'BENEFITS_ADVOCACY',
                name: 'Benefits Advocacy',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e1ecee83-3fd6-4a16-b21b-0bc57f15a1d7',
                code: 'CONSUMER_RIGHTS_DEBT_REPAYMENT',
                name: 'Consumer Rights & Debt Repayment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '78659a05-444b-4029-9838-760ed1968d8e',
                code: 'DISABILITY_LAW',
                name: 'Disability Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5a91c5a2-2973-460e-9796-258951c5815d',
                code: 'EDUCATION_LAW',
                name: 'Education Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '12279097-a377-4f80-9179-41eda5fabbe4',
                code: 'EMPLOYMENT_LAW',
                name: 'Employment Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5c422dbe-7595-45c0-aa5e-027f478c0093',
                code: 'FAMILY_LAW',
                name: 'Family Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5bb1a20e-ef2c-446a-b663-91158b902057',
                code: 'HEALTH_LAW',
                name: 'Health Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '96fc3805-0c4b-4463-8cc1-d69b3ab1a4e6',
                code: 'HOUSING_LAW',
                name: 'Housing Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3c31e491-17aa-4558-b105-04f669b19d9b',
                code: 'IMMIGRATION_LAW',
                name: 'Immigration Law',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '5c1ab598-0402-4fc1-8550-aa5d3cc48ea0',
            code: 'UU-MENTAL-BEHAVIORAL-HEALTH',
            name: 'Mental/Behavioral Health',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: 'e89db99e-e3ad-4677-9a5f-4bbe21b7d882',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-CONJOINT-COUNSELING',
                name: 'Conjoint Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '111baa4a-6876-48e2-917b-23d1fd40d7c0',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-CRISIS-INTERVENTION',
                name: 'Crisis Intervention',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f2415330-9fb9-4a5c-925a-2263d55de544',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-FAMILY-COUNSELING',
                name: 'Family Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9cf506a1-0ce6-46fe-8984-dda0b8ae8ec2',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-GROUP-COUNSELING',
                name: 'Group Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9c79d017-54a2-4070-ab1e-05bba9e57782',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-INDIVIDUAL-COUNSELING',
                name: 'Individual Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '97ae72bc-6e85-41e2-9151-0040468250dc',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-INPATIENT-MENTAL-HEALTH',
                name: 'Inpatient mental health',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '16a7c863-802f-46e9-ad85-6ee5add5496c',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-MENTAL-HEALTH-EVALUATION',
                name: 'Mental Health Evaluation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f5ebb16e-2f5f-47fd-9a03-7244564d47bd',
                code: 'UU-MENTAL-BEHAVIORAL-HEALTH-MENTAL-HEALTH-INFORMATION-EDUCATION',
                name: 'Mental Health Information/Education',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'c1bffbd7-98d5-4515-bf8e-e0b57578dade',
            code: 'UU-MONEY-MANAGEMENT',
            name: 'Money Management',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '20b6280a-8904-4d7f-8b22-71d83b92b7e0',
                code: 'UU-MONEY-MANAGEMENT-FINANCIAL-COUNSELING',
                name: 'Financial Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'aff6ac6d-e9bc-47d0-94f9-8da6f40ac916',
                code: 'UU-MONEY-MANAGEMENT-FINANCIAL-LITERACY-CLASSES',
                name: 'Financial Literacy Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'dbcccf5a-0077-4072-bacc-6d50b267dc6b',
                code: 'UU-MONEY-MANAGEMENT-TAX-PREPARATION-SERVICES',
                name: 'Tax Preparation Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a00c83be-8045-4e95-b7a5-ab1270509d1e',
                code: 'UU-MONEY-MANAGEMENT-TAX-SERVICES',
                name: 'Tax Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'ddb3759d-0829-454f-98dc-b131c956b369',
            code: 'UU-MEDICAL-HEALTH',
            name: 'Physical Health',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: 'e6c0b729-0515-4fe9-98e5-8b28b851d6bb',
                code: 'UU-MEDICAL-HEALTH-ASSISTIVE-TECHNOLOGY',
                name: 'Assistive Technology',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c0b43dd6-009c-44d7-bbeb-9302e7b9c57b',
                code: 'UU-MEDICAL-HEALTH-CHRONIC-DISEASE-PREVENTION-MANAGEMENT',
                name: 'Chronic Disease Prevention & Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f422bc20-ba90-4d18-baf3-acac082bdc14',
                code: 'UU-MEDICAL-HEALTH-CLINICAL-TRIALS',
                name: 'Clinical Trials',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f383f0f1-26be-411b-99bf-20cd26ceeaef',
                code: 'UU-MEDICAL-HEALTH-DENTAL-CARE',
                name: 'Dental Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '04a83bae-6d89-4a08-9ec1-ab0e4fcd2e8a',
                code: 'UU-MEDICAL-HEALTH-DIABETES-SUPPORT-SERVICES',
                name: 'Diabetes Support Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7516fded-4a87-4837-96a8-ff502b73407a',
                code: 'UU-MEDICAL-HEALTH-DIETETIC-SERVICES',
                name: 'Dietetic Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'aaf697d6-db0e-4ded-8916-b684cfddad79',
                code: 'UU-MEDICAL-HEALTH-EYE-CARE',
                name: 'Eye Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8f59098c-0279-42e0-bdfb-328a81757259',
                code: 'UU-MEDICAL-HEALTH-GENERAL-MEDICAL-CARE',
                name: 'General Medical Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a3574092-d92c-433f-9d12-fdead95344ac',
                code: 'UU-MEDICAL-HEALTH-HEALTH-INSURANCE-DENTAL-COVERAGE',
                name: 'Health Insurance/Dental Coverage',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e0396b76-3347-4a9d-899b-1329aec2ab14',
                code: 'UU-MEDICAL-HEALTH-HEALTH-SCREENING-DIAGNOSTIC-SERVICES',
                name: 'Health Screening/Diagnostic Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '297b6e01-9374-4886-8007-8084d3a0c0da',
                code: 'UU-MEDICAL-HEALTH-HOME-HEALTH-CARE',
                name: 'Home Health Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '61f92384-6966-4d92-8f42-6c46b9ef48ac',
                code: 'UU-MEDICAL-HEALTH-HOSPICE-PALLIATIVE-CARE',
                name: 'Hospice & Palliative Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '92ac1871-ff13-410c-a143-0f013715291f',
                code: 'UU-MEDICAL-HEALTH-IMMUNIZATIONS',
                name: 'Immunizations',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'f9f98be5-95dc-4af8-9256-c4beb8573963',
                code: 'UU-MEDICAL-HEALTH-LONG-TERM-CARE-FACILITY-BASED',
                name: 'Long Term Care (Facility-based)',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '19372c91-438f-437e-b21a-2cf18adaed53',
                code: 'UU-MEDICAL-HEALTH-LONG-TERM-CARE',
                name: 'Long-Term Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'b346ba4e-985d-4134-8327-2773f404b87c',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-CASE-MANAGEMENT-SERVICES',
                name: 'Medical Case Management Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a0e5fc62-4fd8-4789-bb05-d6a752c78e12',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-EQUIPMENT-ASSISTIVE-TECHNOLOGY',
                name: 'Medical Equipment/Assistive Technology',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd2c10fbe-7f3f-4a9d-9a00-2e34683ac813',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-EQUIPMENT-SUPPLIES',
                name: 'Medical Equipment/Supplies',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '16d3f563-9741-4152-9636-24bd7914f54e',
                code: 'UU-MEDICAL-HEALTH-MEDICAL-EXPENSE-ASSISSTANCE',
                name: 'Medical Expense Assisstance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ae6ad4c3-c139-495a-a8be-6ddb3ea63ad3',
                code: 'UU-MEDICAL-HEALTH-MEDICATION-MANAGEMENT',
                name: 'Medication Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'da753ef5-d455-420d-b586-37da250789ac',
                code: 'UU-MEDICAL-HEALTH-PAIN-MANAGEMENT',
                name: 'Pain Management',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '968d6897-8dba-4622-bff4-22e8fd80b6ff',
                code: 'UU-MEDICAL-HEALTH-PEDIATRIC-MEDICINE',
                name: 'Pediatric Medicine',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '85f22ff8-3556-4950-bbb0-a0ba94d75945',
                code: 'UU-MEDICAL-HEALTH-PREVENTION-AND-EDUCATION',
                name: 'Prevention and Education',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'cd7f70cb-4911-4dca-b854-6a5e2683e8f3',
                code: 'UU-MEDICAL-HEALTH-PRIMARY-CARE',
                name: 'Primary Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6645feb5-40f6-4d46-a606-4bb9263a3fdd',
                code: 'UU-MEDICAL-HEALTH-REHABILITATION-HABILITATION-SERVICES',
                name: 'Rehabilitation/Habilitation Services',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd70295ea-5ac2-4b71-ac23-0acba240a004',
                code: 'UU-MEDICAL-HEALTH-REPRODUCTIVE-HEALTH',
                name: 'Reproductive Health',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bfd0d491-f395-4725-b502-8b1978dfd933',
                code: 'UU-MEDICAL-HEALTH-SCREENINGS-IMMUNIZATIONS',
                name: 'Screenings & Immunizations',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '85bed9f0-9591-4c06-898c-b6b4daf25ace',
                code: 'UU-MEDICAL-HEALTH-SPECIALTY-CARE',
                name: 'Specialty Care',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '104a0403-b9f4-4418-bdec-5c0340f3b524',
                code: 'UU-MEDICAL-HEALTH-SPECIALTY-MEDICINE',
                name: 'Specialty Medicine',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '8713fa4c-8c6c-48ad-a01a-f28a83c9280b',
            code: 'UU-SOCIAL-ENRICHMENT',
            name: 'Social Enrichment',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '8a2bb738-fc1f-496b-b237-b48c84c222eb',
                code: 'UU-SOCIAL-ENRICHMENT-ADVOCACY-GROUPS',
                name: 'Advocacy Groups',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6bba9e36-70cd-4719-b4a5-68d903e88360',
                code: 'UU-SOCIAL-ENRICHMENT-ARTS-CRAFTS-CLASSES',
                name: 'Arts & Crafts Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '3cf907ab-8509-4283-9015-3f1bdf2d8ff2',
                code: 'UU-SOCIAL-ENRICHMENT-COOKING-CLASSES',
                name: 'Cooking Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'b045f072-9967-44e6-a1c8-a0e545e82190',
                code: 'UU-SOCIAL-ENRICHMENT-LEADERSHIP-DEVELOPMENT',
                name: 'Leadership Development',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6f6ac259-794f-47a3-b7e7-1f96e0557bed',
                code: 'UU-SOCIAL-ENRICHMENT-MUSIC-CLASSES',
                name: 'Music Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c8426e0e-134e-4e91-97c0-8b8b65bad113',
                code: 'UU-SOCIAL-ENRICHMENT-PEER-TO-PEER-NETWORKING',
                name: 'Peer to Peer Networking',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5932d6b5-bd42-4701-8242-d35dace3755d',
                code: 'UU-SOCIAL-ENRICHMENT-PROFESSIONAL-DEVELOPENT',
                name: 'Professional Developent',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '6cd2af38-6759-48b5-a341-cdf6db31d400',
                code: 'UU-SOCIAL-ENRICHMENT-SPECIAL-INTEREST-CLUBS',
                name: 'Special Interest Clubs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'edd7ed06-0a18-4067-9699-12f930ffb517',
                code: 'UU-SOCIAL-ENRICHMENT-VOLUNTEER-OPPORTUNITIES',
                name: 'Volunteer Opportunities',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd343896f-60c3-474a-96fd-25e63e57e487',
                code: 'UU-SOCIAL-ENRICHMENT-YOUTH-DEVELOPMENT',
                name: 'Youth Development',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: 'a2b41783-c09a-4afa-a15e-4ffca7a62da7',
            code: 'UU-SPIRITUAL',
            name: 'Spiritual Enrichment',
            definition: null,
            updated_at: 1521571184,
            children: [],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '1490a11f-3361-48ca-945e-e0350118e572',
            code: 'UU-SPORTS',
            name: 'Sports & Recreation',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: 'bd7b080a-3fed-4614-a08c-e6b697bee500',
                code: 'UU-SPORTS-ADAPTIVE-SPORTS',
                name: 'Adaptive Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd9fa2773-2411-404a-8475-74f7a8161357',
                code: 'UU-SPORTS-BOATING-WATERCRAFT',
                name: 'Boating & Watercraft',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '820b0587-ef16-49d0-98a5-098987fd54f2',
                code: 'UU-SPORTS-DANCE-CLASSES',
                name: 'Dance Classes',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'a7f6a164-0955-4cc7-8123-3f6de267baf0',
                code: 'UU-SPORTS-EXERCISE-CLASSES-GROUPS',
                name: 'Exercise Classes/Groups',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'cd98b976-2f11-45d0-8285-d739fa13f333',
                code: 'UU-SPORTS-EXTREME-SPORTS',
                name: 'Extreme Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'bf752642-5783-4253-9ca5-859b056da76d',
                code: 'UU-SPORTS-INDIVIDUAL-SPORTS',
                name: 'Individual Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '17f91ba6-abd3-4491-ae4f-65fa29fbd4e8',
                code: 'UU-SPORTS-MARTIAL-ARTS',
                name: 'Martial Arts',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '9bd2aa59-dab6-441f-9019-b918191404af',
                code: 'UU-SPORTS-OUTDOOR-ACTIVITIES',
                name: 'Outdoor Activities ',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ca1d27a7-58b0-4ad8-baa9-34cec75c9dd5',
                code: 'UU-SPORTS-SNOW-SPORTS',
                name: 'Snow Sports',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '256f9747-dcb5-4df0-afb6-5fd0b4ae6863',
                code: 'UU-SPORTS-TEAM-SPORTS-LEAGUES',
                name: 'Team Sports & Leagues',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '4de07fd8-702e-452f-97b6-548c4a4717c3',
                code: 'UU-SPORTS-WATER-SPORTS-ACTIVITIES',
                name: 'Water Sports/Activities',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '044d5f79-ea1e-4d4c-930c-b34072f3039a',
            code: 'UU-SUBSTANCE-USE',
            name: 'Substance Use',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '100b824c-3dba-4eda-a540-465c45a7ed70',
                code: 'UU-SUBSTANCE-USE-DUI-OFFENDER-PROGRAMS',
                name: 'DUI Offender Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '445b8377-a53e-4366-ab42-2bd5cfa99287',
                code: 'UU-SUBSTANCE-USE-DETOXIFICATION',
                name: 'Detoxification',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'c6a67048-36fe-4756-adbd-d7d039993131',
                code: 'UU-SUBSTANCE-USE-DRUG-ALCOHOL-TESTING',
                name: 'Drug/Alcohol Testing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ec768885-0f60-4c72-ad9c-069fbc0081a2',
                code: 'UU-SUBSTANCE-USE-INPATIENT-SUBSTANCE-USE-TREATMENT',
                name: 'Inpatient Substance Use Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd7b7132b-33e5-4b0f-8274-f26b836c3653',
                code: 'UU-SUBSTANCE-USE-JUVENILE-MINOR-OFFENDER-PROGRAMS',
                name: 'Juvenile/Minor Offender Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '47c83d61-e57d-4cf2-8751-a8f70ad55bde',
                code: 'UU-SUBSTANCE-USE-MEDICATION-ASSISTED-TREATMENT',
                name: 'Medication Assisted Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7557e409-a461-4486-8083-5518ff996c76',
                code: 'UU-SUBSTANCE-USE-OUTPATIENT-SUBSTANCE-USE-TREATMENT',
                name: 'Outpatient Substance Use Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '40bbf0a5-e106-4b9a-844d-52c9da38ba63',
                code: 'UU-SUBSTANCE-USE-SMOKING-CESSATION',
                name: 'Smoking Cessation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1aac01f3-fb68-48f7-9b9d-28b8de06c821',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-COUNSELING',
                name: 'Substance Use Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'd06331c5-fe29-4c38-a1e1-f12b61afa74c',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-EDUCATION-PREVENTION',
                name: 'Substance Use Education/Prevention',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'e2e46210-295d-4794-8014-fabf0c4100bf',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-EXPENSE-ASSISTANCE',
                name: 'Substance Use Expense Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '0a73f953-8467-47dd-a395-9dfcf0b2287d',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-RECOVERY-SUPPORT',
                name: 'Substance Use Recovery Support',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '1e74f059-11da-42bb-b21d-9a41c38db90e',
                code: 'UU-SUBSTANCE-USE-SUBSTANCE-USE-TREATMENT',
                name: 'Substance Use Treatment',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '8c514e31-3388-437a-ae58-4df5921f59cb',
                code: 'UU-SUBSTANCE-USE-TOBACCO-CESSATION',
                name: 'Tobacco Cessation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '4b6da834-1735-4fdd-9a27-868216590a4f',
            code: 'UU-TRANSPORTATION',
            name: 'Transportation',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: 'fcfaee0c-c11d-4292-81de-8d460255dfe6',
                code: 'UU-TRANSPORTATION-RIDE-COORDINATION',
                name: 'Ride Coordination',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5100704a-7dae-4c75-9f52-79e9b6fc80fc',
                code: 'UU-TRANSPORTATION-RIDES',
                name: 'Rides',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '578b781e-6cd5-4e80-bffb-fb83e6b68afa',
                code: 'UU-TRANSPORTATION-TRANSPORTATION-EXPENSE-ASSISTANCE',
                name: 'Transportation Expense Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '780a5c5b-2129-41f1-8d6c-47837d9151b7',
                code: 'UU-TRANSPORTATION-TRANSPORTATION-PASSES-VOUCHERS',
                name: 'Transportation Passes/Vouchers',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '7395ef39-c06f-4905-ab33-3e0fac4f6bb5',
            code: 'UU-UTILITIES',
            name: 'Utilities',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: 'a5f7e58a-6c65-40eb-b3b6-a5cede7b60c4',
                code: 'UU-UTILITIES-HOME-ENERGY-UTILITIES-BENEFITS',
                name: 'Home Energy/Utilities Benefits',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '7c0a1f24-2536-41c3-afdd-0f7ffbd469c4',
                code: 'UU-UTILITIES-UTILITY-PAYMENT-ASSISTANCE',
                name: 'Utility Payment Assistance',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'eda495db-c773-4e53-9ddd-1c575979bb94',
                code: 'UU-UTILITIES-UTILITY-SERVICE-CONNECTION',
                name: 'Utility Service Connection',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
          {
            id: '7e125eb8-7fe1-4f0e-9480-569965e21f03',
            code: 'UU-WELLNESS',
            name: 'Wellness',
            definition: null,
            updated_at: 1521571184,
            children: [
              {
                id: '40516be7-c399-4691-8c4d-81c592e3745e',
                code: 'UU-WELLNESS-ALTERNATIVE-MEDICINE',
                name: 'Alternative Medicine',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '5dd9c740-a315-4e65-9bb1-9676b725757a',
                code: 'UU-WELLNESS-MASSAGE-THERAPY',
                name: 'Massage Therapy',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '0bb07cf2-64b1-4993-8382-b20d496aeefc',
                code: 'UU-WELLNESS-MINDFULNESS-AND-MEDITATION',
                name: 'Mindfulness and Meditation',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '102bfbe2-15f1-4008-a30a-9081f6b1f4bd',
                code: 'UU-WELLNESS-NUTRITION-EDUCATION-COUNSELING',
                name: 'Nutrition Education & Counseling',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ac4ce6c6-1e86-4dbc-a22d-b8d83a12bd39',
                code: 'UU-WELLNESS-THERAPEUTIC-OUTDOOR-PROGRAMS',
                name: 'Therapeutic Outdoor Programs',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: 'ca443a3b-d333-49e3-b4c9-b54b249924c1',
                code: 'UU-WELLNESS-THERAPEUTIC-RETREATS',
                name: 'Therapeutic Retreats',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
              {
                id: '2a18d56d-4b91-4815-a01d-9591b6c05aa0',
                code: 'UU-WELLNESS-TRADITIONAL-HEALING',
                name: 'Traditional Healing',
                definition: null,
                _meta: {
                  _type: 'servicetypes_servicetype',
                },
              },
            ],
            _meta: {
              _type: 'facades_servicetypes_filteredparent',
            },
          },
        ],
        programs: [
          {
            id: 'efe4aa92-7755-4ef5-9d39-ddd653bec43d',
            name: 'All Service Types Program [Sharkey]',
            _meta: {
              _type: 'groups_program',
            },
          },
        ],
        _meta: {
          _type: 'facades_groups_referralprogram',
        },
      },
    ],
  },
];

const TWO_NEEDS = [
  ...NEEDS,
  {
    groups: [],
    service_type: {
      code: 'UU-BENEFITS',
      id: 'benefits-id',
      name: 'Benefits',
    },
  },
]

export {
  NEEDS,
  TWO_NEEDS,
};
