/* Create the Cents application module and include ngRoute for route-based pages. */
var app = angular.module('cents', ['ngRoute']);

/* Define all route-backed page content used throughout the demo. */
app.constant('PAGE_DATA', [
  {
    path: '/home',
    label: 'Home',
    title: 'Finance Operations Home',
    description:
      'Cents is a finance operations workspace inspired by enterprise spend-management patterns for accounting teams.',
    bullets: [
      'Submit, approve, and audit expenses in one shared flow.',
      'Automate AP intake for invoices and purchase orders.',
      'Review accounting, compliance, and cash insights by role.'
    ]
  },
  {
    path: '/expenses/reports',
    label: 'Expense Reports',
    title: 'Expense Reports',
    description: 'Track employee expense submissions, approval status, and reimbursable totals across departments.',
    bullets: [
      'Filter by employee, department, and report status.',
      'Review policy exceptions before approval.',
      'Prepare reimbursement exports for payroll sync.'
    ],
    searchView: {
      title: 'Expense Report Search',
      subtitle: 'Narrow expense reports by person, status, and date range before exporting.',
      allowedTypes: ['Expense Report'],
      pageSize: 8
    }
  },
  {
    path: '/expenses/cards',
    label: 'Corporate Card',
    title: 'Corporate Card Transactions',
    description: 'Monitor card spend feeds, merchant categories, and unmatched transactions.',
    bullets: [
      'Detect uncategorized transactions quickly.',
      'Surface duplicate or out-of-policy spend patterns.',
      'Queue selected items for statement close.'
    ],
    searchView: {
      title: 'Corporate Card Search',
      subtitle: 'Review card transactions by merchant, owner, status, and posted date.',
      allowedTypes: ['Card Transaction'],
      pageSize: 8
    }
  },
  {
    path: '/travel/requests',
    label: 'Travel Requests',
    title: 'Travel Requests',
    description: 'Approve travel requests before booking to align spend with policy and budget.',
    bullets: [
      'Route approvals by manager and cost center.',
      'Preview estimated trip costs before commitment.',
      'Capture audit notes for exceptions.'
    ]
  },
  {
    path: '/travel/reimbursements',
    label: 'Reimbursements',
    title: 'Employee Reimbursements',
    description: 'Track approved reimbursements and expected disbursement timing.',
    bullets: [
      'Validate receipts and policy compliance.',
      'Batch approved payments by pay cycle.',
      'Monitor reimbursement cycle time.'
    ],
    searchView: {
      title: 'Reimbursement Search',
      subtitle: 'Find employee reimbursements by pay status, department, and approval owner.',
      allowedTypes: ['Reimbursement'],
      pageSize: 8
    }
  },
  {
    path: '/purchases/orders',
    label: 'Purchase Orders',
    title: 'Purchase Orders',
    description: 'Manage purchase orders, line item commitments, and supplier approvals.',
    bullets: [
      'Track open, approved, and fulfilled purchase orders.',
      'Validate PO value against departmental budgets.',
      'Link PO references to AP invoice matching.'
    ],
    searchView: {
      title: 'Purchase Order Search',
      subtitle: 'Search purchase orders by vendor, owner, status, and issue date.',
      allowedTypes: ['Purchase Order'],
      pageSize: 8
    }
  },
  {
    path: '/invoices/ap',
    label: 'AP Invoices',
    title: 'Accounts Payable Invoices',
    description: 'Process incoming invoices with approval routing, matching, and payment readiness checks.',
    bullets: [
      'Identify invoices requiring coding or approval.',
      'Prioritize aging invoices near due date.',
      'Support two-way and three-way matching workflows.'
    ],
    searchView: {
      title: 'Invoice Search',
      subtitle: 'Filter invoices by vendor, owner, status, and due window before payment runs.',
      allowedTypes: ['Invoice'],
      pageSize: 8
    }
  },
  {
    path: '/vendors/directory',
    label: 'Vendor Directory',
    title: 'Vendor Directory',
    description: 'Maintain supplier records, tax profile details, and onboarding status.',
    bullets: [
      'Review active suppliers by category and region.',
      'Track onboarding and compliance completion.',
      'Link vendor records to purchasing and AP workflows.'
    ],
    searchView: {
      title: 'Vendor Search',
      subtitle: 'Search suppliers by status, department owner, and onboarding date.',
      allowedTypes: ['Vendor Profile'],
      pageSize: 8
    }
  },
  {
    path: '/accounting/ledger',
    label: 'General Ledger',
    title: 'General Ledger Overview',
    description: 'Review posting activity, account balances, and journal coverage for close readiness.',
    bullets: [
      'Monitor high-volume accounts and exceptions.',
      'Validate journal postings against control rules.',
      'Prepare entries for month-end close.'
    ]
  },
  {
    path: '/accounting/income',
    label: 'Income Statement',
    title: 'Income Statement',
    description: 'Analyze revenues, operating expenses, and profitability across reporting periods.',
    bullets: [
      'Compare actuals versus budget by business unit.',
      'Track major expense variances month over month.',
      'Highlight margin trends for leadership reviews.'
    ]
  },
  {
    path: '/accounting/close',
    label: 'Month-End Close',
    title: 'Month-End Close',
    description: 'Coordinate close checklist execution, accrual completion, and sign-off status.',
    bullets: [
      'Track close tasks by owner and deadline.',
      'Identify blockers affecting financial reporting cadence.',
      'Capture close cycle metrics for continuous improvement.'
    ]
  },
  {
    path: '/people/users',
    label: 'Users & Approvers',
    title: 'Users and Approvers',
    description: 'Manage employees, approver chains, and delegated financial authority.',
    bullets: [
      'Search people by department, role, and approval status.',
      'Review delegated approvers during absences.',
      'Ensure ownership for each spend and AP workflow.'
    ],
    searchView: {
      title: 'People Search',
      subtitle: 'Find employees and approvers by role, department, and account ownership.',
      allowedTypes: ['Employee Profile'],
      pageSize: 8
    }
  },
  {
    path: '/compliance/policies',
    label: 'Policy Rules',
    title: 'Policy Rules',
    description: 'Configure and communicate policy controls for spend, travel, and AP approvals.',
    bullets: [
      'Maintain category and threshold rules.',
      'Define escalation flows for exceptions.',
      'Publish policy updates with effective dates.'
    ]
  },
  {
    path: '/compliance/audit',
    label: 'Audit Trail',
    title: 'Audit Trail',
    description: 'Trace who changed what and when across financial documents and approvals.',
    bullets: [
      'Inspect action history for sensitive records.',
      'Support internal and external audit requests.',
      'Export evidence for compliance documentation.'
    ],
    searchView: {
      title: 'Audit Search',
      subtitle: 'Search audit events by actor, status, and timestamp windows.',
      allowedTypes: ['Audit Event'],
      pageSize: 10
    }
  },
  {
    path: '/insights/spend',
    label: 'Spend Analytics',
    title: 'Spend Analytics',
    description: 'View consolidated spend trends across employee, card, AP, and procurement channels.',
    bullets: [
      'Track category and department spend movements.',
      'Expose off-contract and out-of-policy patterns.',
      'Prioritize cost reduction opportunities.'
    ]
  },
  {
    path: '/insights/cash',
    label: 'Cash Forecast',
    title: 'Cash Forecast',
    description: 'Estimate cash requirements from upcoming payable and reimbursement obligations.',
    bullets: [
      'Model payment timing across invoice batches.',
      'Project reimbursement payouts for current cycles.',
      'Identify near-term liquidity pressure points.'
    ]
  },
  {
    path: '/insights/savings',
    label: 'Savings Opportunities',
    title: 'Savings Opportunities',
    description: 'Identify vendor consolidation, policy tuning, and process automation opportunities.',
    bullets: [
      'Highlight duplicate suppliers and fragmented spend.',
      'Quantify potential savings from preferred vendors.',
      'Prioritize automation wins for AP and expense teams.'
    ]
  }
]);

/* Store reusable lorem ipsum paragraphs so every page can render substantial body text. */
app.constant('LOREM_IPSUM_LIBRARY', [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non nisi est sit amet facilisis magna. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Enim facilisis gravida neque convallis a cras semper auctor neque vitae. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis.',
  'Integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.'
]);

/* Provide a set of Sam Kinison quotes to randomly show above the footer at load time. */
app.constant('SAM_KINISON_QUOTES', [
  'I do not know what else I could do but comedy. It does not let me sleep.',
  'Real comedy is anger.',
  'Comedy can be a loud way of telling the truth.',
  'If you can make people laugh, you can make a hard day lighter.',
  'The stage is where I feel most alive.'
]);

/* Define sample accounting and people records for search, review, and pagination examples. */
app.constant('ACCOUNTING_RECORDS', [
  {
    recordId: 'ER-1052',
    type: 'Expense Report',
    title: 'Q1 Client Visit - Boston',
    status: 'Pending Approval',
    amount: 1843.22,
    currency: 'USD',
    owner: 'Olivia Chen',
    party: 'Acme Travel',
    department: 'Sales',
    date: '2026-03-08',
    reference: 'TR-8821',
    notes: 'Airfare and lodging receipts attached.'
  },
  {
    recordId: 'ER-1044',
    type: 'Expense Report',
    title: 'Field Demo Roadshow - Austin',
    status: 'Approved',
    amount: 1298.5,
    currency: 'USD',
    owner: 'Noah Patel',
    party: 'Delta Air Lines',
    department: 'Sales',
    date: '2026-03-05',
    reference: 'TR-8759',
    notes: 'Meals exceeded policy by 7 percent.'
  },
  {
    recordId: 'ER-1038',
    type: 'Expense Report',
    title: 'Partner Summit - Chicago',
    status: 'Exported',
    amount: 2420.77,
    currency: 'USD',
    owner: 'Maya Rodriguez',
    party: 'Hilton Chicago',
    department: 'Partnerships',
    date: '2026-02-27',
    reference: 'TR-8640',
    notes: 'Ready for payroll reimbursement export.'
  },
  {
    recordId: 'ER-1029',
    type: 'Expense Report',
    title: 'Audit Workshop Travel',
    status: 'Rejected',
    amount: 611.4,
    currency: 'USD',
    owner: 'Liam Brooks',
    party: 'CityRail',
    department: 'Internal Audit',
    date: '2026-02-19',
    reference: 'TR-8523',
    notes: 'Missing lodging receipt.'
  },
  {
    recordId: 'ER-1021',
    type: 'Expense Report',
    title: 'Regional Manager Offsite',
    status: 'Pending Approval',
    amount: 958.13,
    currency: 'USD',
    owner: 'Sophia Nguyen',
    party: 'Marriott',
    department: 'Operations',
    date: '2026-02-12',
    reference: 'TR-8475',
    notes: 'Hotel folio requires coding review.'
  },
  {
    recordId: 'ER-1014',
    type: 'Expense Report',
    title: 'Prospect Onsite Workshop',
    status: 'Approved',
    amount: 743.9,
    currency: 'USD',
    owner: 'Ethan Rivera',
    party: 'RideShare Co',
    department: 'Sales',
    date: '2026-02-03',
    reference: 'TR-8392',
    notes: 'Awaiting reimbursement release.'
  },
  {
    recordId: 'CC-7731',
    type: 'Card Transaction',
    title: 'Cloud Hosting Subscription',
    status: 'Matched',
    amount: 3120,
    currency: 'USD',
    owner: 'Ava Sterling',
    party: 'Nimbus Cloud',
    department: 'IT',
    date: '2026-03-10',
    reference: 'CARD-4402',
    notes: 'Auto-matched to monthly IT budget.'
  },
  {
    recordId: 'CC-7725',
    type: 'Card Transaction',
    title: 'Team Meals - Client Review',
    status: 'Flagged',
    amount: 286.45,
    currency: 'USD',
    owner: 'Noah Patel',
    party: 'Elm Street Bistro',
    department: 'Sales',
    date: '2026-03-07',
    reference: 'CARD-4388',
    notes: 'Meal attendee list missing.'
  },
  {
    recordId: 'CC-7718',
    type: 'Card Transaction',
    title: 'Airport Parking',
    status: 'Unmatched',
    amount: 92,
    currency: 'USD',
    owner: 'Olivia Chen',
    party: 'SkyPark',
    department: 'Sales',
    date: '2026-03-03',
    reference: 'CARD-4371',
    notes: 'Missing trip reference in memo field.'
  },
  {
    recordId: 'CC-7709',
    type: 'Card Transaction',
    title: 'Airport Lounge Access',
    status: 'Matched',
    amount: 75,
    currency: 'USD',
    owner: 'Maya Rodriguez',
    party: 'FlyHub Lounge',
    department: 'Partnerships',
    date: '2026-02-28',
    reference: 'CARD-4357',
    notes: 'Policy-compliant travel category.'
  },
  {
    recordId: 'CC-7702',
    type: 'Card Transaction',
    title: 'Printer Supplies',
    status: 'Unmatched',
    amount: 164.19,
    currency: 'USD',
    owner: 'Liam Brooks',
    party: 'Office Express',
    department: 'Internal Audit',
    date: '2026-02-22',
    reference: 'CARD-4345',
    notes: 'Needs cost center allocation.'
  },
  {
    recordId: 'RB-4410',
    type: 'Reimbursement',
    title: 'Mileage Reimbursement - February',
    status: 'Pending Payment',
    amount: 212.66,
    currency: 'USD',
    owner: 'Sophia Nguyen',
    party: 'Payroll',
    department: 'Operations',
    date: '2026-03-09',
    reference: 'PAY-3201',
    notes: 'Approved and queued for Friday disbursement.'
  },
  {
    recordId: 'RB-4402',
    type: 'Reimbursement',
    title: 'Home Office Equipment',
    status: 'Paid',
    amount: 489.99,
    currency: 'USD',
    owner: 'Ava Sterling',
    party: 'Payroll',
    department: 'IT',
    date: '2026-03-01',
    reference: 'PAY-3188',
    notes: 'Payment sent via ACH.'
  },
  {
    recordId: 'RB-4396',
    type: 'Reimbursement',
    title: 'Client Hosting Event',
    status: 'On Hold',
    amount: 356.24,
    currency: 'USD',
    owner: 'Ethan Rivera',
    party: 'Payroll',
    department: 'Sales',
    date: '2026-02-25',
    reference: 'PAY-3174',
    notes: 'Pending policy exception review.'
  },
  {
    recordId: 'RB-4388',
    type: 'Reimbursement',
    title: 'Conference Registration',
    status: 'Pending Payment',
    amount: 620,
    currency: 'USD',
    owner: 'Maya Rodriguez',
    party: 'Payroll',
    department: 'Partnerships',
    date: '2026-02-18',
    reference: 'PAY-3159',
    notes: 'Reimbursement scheduled in next cycle.'
  },
  {
    recordId: 'PO-9604',
    type: 'Purchase Order',
    title: 'Laptop Refresh - Engineering',
    status: 'Approved',
    amount: 24800,
    currency: 'USD',
    owner: 'Ava Sterling',
    party: 'TechSource Supply',
    department: 'IT',
    date: '2026-03-11',
    reference: 'REQ-6042',
    notes: 'Awaiting final shipment ETA.'
  },
  {
    recordId: 'PO-9598',
    type: 'Purchase Order',
    title: 'Marketing Event Booth',
    status: 'Partially Received',
    amount: 11250,
    currency: 'USD',
    owner: 'Zoe Martin',
    party: 'ExpoWorks',
    department: 'Marketing',
    date: '2026-03-06',
    reference: 'REQ-6015',
    notes: 'Two line items pending delivery.'
  },
  {
    recordId: 'PO-9587',
    type: 'Purchase Order',
    title: 'Audit Advisory Services',
    status: 'Draft',
    amount: 7300,
    currency: 'USD',
    owner: 'Liam Brooks',
    party: 'Grant Advisory',
    department: 'Internal Audit',
    date: '2026-02-26',
    reference: 'REQ-5980',
    notes: 'Needs CFO sign-off for approval threshold.'
  },
  {
    recordId: 'PO-9574',
    type: 'Purchase Order',
    title: 'Office Peripherals Restock',
    status: 'Closed',
    amount: 3940.65,
    currency: 'USD',
    owner: 'Sophia Nguyen',
    party: 'Office Express',
    department: 'Operations',
    date: '2026-02-14',
    reference: 'REQ-5922',
    notes: 'Goods received and invoice matched.'
  },
  {
    recordId: 'PO-9568',
    type: 'Purchase Order',
    title: 'Security Software Renewal',
    status: 'Approved',
    amount: 18650,
    currency: 'USD',
    owner: 'Ava Sterling',
    party: 'ShieldPoint Software',
    department: 'IT',
    date: '2026-02-10',
    reference: 'REQ-5894',
    notes: 'Contract renewal effective next quarter.'
  },
  {
    recordId: 'INV-2208',
    type: 'Invoice',
    title: 'Data Warehouse Services - February',
    status: 'In Review',
    amount: 8400,
    currency: 'USD',
    owner: 'Ava Sterling',
    party: 'Nimbus Cloud',
    department: 'IT',
    date: '2026-03-12',
    reference: 'PO-9568',
    notes: 'Coding split between two cost centers.'
  },
  {
    recordId: 'INV-2199',
    type: 'Invoice',
    title: 'Consulting Services',
    status: 'Approved',
    amount: 5200,
    currency: 'USD',
    owner: 'Liam Brooks',
    party: 'Grant Advisory',
    department: 'Internal Audit',
    date: '2026-03-08',
    reference: 'PO-9587',
    notes: 'Ready for payment run batch C.'
  },
  {
    recordId: 'INV-2191',
    type: 'Invoice',
    title: 'Event Production Deposit',
    status: 'On Hold',
    amount: 3900,
    currency: 'USD',
    owner: 'Zoe Martin',
    party: 'ExpoWorks',
    department: 'Marketing',
    date: '2026-03-02',
    reference: 'PO-9598',
    notes: 'Awaiting revised contract attachment.'
  },
  {
    recordId: 'INV-2182',
    type: 'Invoice',
    title: 'Office Equipment Lease',
    status: 'Scheduled',
    amount: 2150.55,
    currency: 'USD',
    owner: 'Sophia Nguyen',
    party: 'Workplace Leasing',
    department: 'Operations',
    date: '2026-02-25',
    reference: 'PO-9574',
    notes: 'Scheduled for payment on due date.'
  },
  {
    recordId: 'INV-2174',
    type: 'Invoice',
    title: 'Recruiting Services',
    status: 'Paid',
    amount: 6800,
    currency: 'USD',
    owner: 'Nina Shah',
    party: 'PeopleFirst Partners',
    department: 'HR',
    date: '2026-02-18',
    reference: 'PO-9559',
    notes: 'Payment posted and remittance sent.'
  },
  {
    recordId: 'INV-2168',
    type: 'Invoice',
    title: 'Security Monitoring Services',
    status: 'New',
    amount: 2950,
    currency: 'USD',
    owner: 'Ava Sterling',
    party: 'ShieldPoint Software',
    department: 'IT',
    date: '2026-02-12',
    reference: 'PO-9568',
    notes: 'Awaiting coding and approver assignment.'
  },
  {
    recordId: 'VEN-331',
    type: 'Vendor Profile',
    title: 'Nimbus Cloud',
    status: 'Active',
    amount: 0,
    currency: 'USD',
    owner: 'Vendor Master Team',
    party: 'Nimbus Cloud',
    department: 'IT',
    date: '2026-03-11',
    reference: 'SUP-331',
    notes: 'SOC2 documentation on file.'
  },
  {
    recordId: 'VEN-289',
    type: 'Vendor Profile',
    title: 'ExpoWorks',
    status: 'Active',
    amount: 0,
    currency: 'USD',
    owner: 'Vendor Master Team',
    party: 'ExpoWorks',
    department: 'Marketing',
    date: '2026-03-05',
    reference: 'SUP-289',
    notes: 'Preferred event production supplier.'
  },
  {
    recordId: 'VEN-267',
    type: 'Vendor Profile',
    title: 'Grant Advisory',
    status: 'Risk Review',
    amount: 0,
    currency: 'USD',
    owner: 'Compliance Office',
    party: 'Grant Advisory',
    department: 'Internal Audit',
    date: '2026-02-24',
    reference: 'SUP-267',
    notes: 'Updated insurance certificate requested.'
  },
  {
    recordId: 'VEN-245',
    type: 'Vendor Profile',
    title: 'PeopleFirst Partners',
    status: 'Onboarding',
    amount: 0,
    currency: 'USD',
    owner: 'Vendor Master Team',
    party: 'PeopleFirst Partners',
    department: 'HR',
    date: '2026-02-17',
    reference: 'SUP-245',
    notes: 'W-9 pending from supplier contact.'
  },
  {
    recordId: 'EMP-9004',
    type: 'Employee Profile',
    title: 'Olivia Chen',
    status: 'Active',
    amount: 0,
    currency: 'USD',
    owner: 'HR Operations',
    party: 'Regional Sales Manager',
    department: 'Sales',
    date: '2026-03-10',
    reference: 'USR-9004',
    notes: 'Expense approver for Northeast team.'
  },
  {
    recordId: 'EMP-9009',
    type: 'Employee Profile',
    title: 'Ava Sterling',
    status: 'Delegated Approver',
    amount: 0,
    currency: 'USD',
    owner: 'HR Operations',
    party: 'Director of IT',
    department: 'IT',
    date: '2026-03-06',
    reference: 'USR-9009',
    notes: 'Delegated approver set through 2026-04-01.'
  },
  {
    recordId: 'EMP-9021',
    type: 'Employee Profile',
    title: 'Liam Brooks',
    status: 'Active',
    amount: 0,
    currency: 'USD',
    owner: 'HR Operations',
    party: 'Internal Audit Manager',
    department: 'Internal Audit',
    date: '2026-02-28',
    reference: 'USR-9021',
    notes: 'Can approve audit and consulting spend.'
  },
  {
    recordId: 'EMP-9032',
    type: 'Employee Profile',
    title: 'Nina Shah',
    status: 'Inactive',
    amount: 0,
    currency: 'USD',
    owner: 'HR Operations',
    party: 'Senior Recruiter',
    department: 'HR',
    date: '2026-02-14',
    reference: 'USR-9032',
    notes: 'Offboarded approver privileges revoked.'
  },
  {
    recordId: 'AUD-7701',
    type: 'Audit Event',
    title: 'Invoice Status Change',
    status: 'Info',
    amount: 0,
    currency: 'USD',
    owner: 'System',
    party: 'Invoice INV-2208',
    department: 'Finance',
    date: '2026-03-12',
    reference: 'LOG-7701',
    notes: 'Status moved from New to In Review by Ava Sterling.'
  },
  {
    recordId: 'AUD-7698',
    type: 'Audit Event',
    title: 'Policy Exception Logged',
    status: 'Warning',
    amount: 0,
    currency: 'USD',
    owner: 'Policy Engine',
    party: 'Expense ER-1044',
    department: 'Sales',
    date: '2026-03-07',
    reference: 'LOG-7698',
    notes: 'Meal amount exceeded policy cap.'
  },
  {
    recordId: 'AUD-7689',
    type: 'Audit Event',
    title: 'Approver Delegation Applied',
    status: 'Info',
    amount: 0,
    currency: 'USD',
    owner: 'HR Operations',
    party: 'Employee EMP-9009',
    department: 'IT',
    date: '2026-03-03',
    reference: 'LOG-7689',
    notes: 'Delegation activated for Q2 transition period.'
  },
  {
    recordId: 'AUD-7674',
    type: 'Audit Event',
    title: 'Vendor Risk Flag Raised',
    status: 'Critical',
    amount: 0,
    currency: 'USD',
    owner: 'Compliance Office',
    party: 'Vendor VEN-267',
    department: 'Internal Audit',
    date: '2026-02-22',
    reference: 'LOG-7674',
    notes: 'Insurance certificate expired; payments paused.'
  }
]);

/* Define a hierarchical menu with second-level and third-level dropdown examples. */
app.constant('NAV_MENU', [
  {
    label: 'Home',
    path: '/home'
  },
  {
    label: 'Spend Management',
    children: [
      {
        label: 'Expense Operations',
        children: [
          {
            label: 'Expense Reports',
            path: '/expenses/reports'
          },
          {
            label: 'Corporate Card',
            path: '/expenses/cards'
          },
          {
            label: 'Reimbursements',
            path: '/travel/reimbursements'
          }
        ]
      },
      {
        label: 'Travel Requests',
        path: '/travel/requests'
      }
    ]
  },
  {
    label: 'Procurement & AP',
    children: [
      {
        label: 'Purchase Orders',
        path: '/purchases/orders'
      },
      {
        label: 'AP Invoices',
        path: '/invoices/ap'
      },
      {
        label: 'Vendor Directory',
        path: '/vendors/directory'
      }
    ]
  },
  {
    label: 'Accounting Core',
    children: [
      {
        label: 'General Ledger',
        path: '/accounting/ledger'
      },
      {
        label: 'Income Statement',
        path: '/accounting/income'
      },
      {
        label: 'Month-End Close',
        path: '/accounting/close'
      }
    ]
  },
  {
    label: 'People & Compliance',
    children: [
      {
        label: 'Users & Approvers',
        path: '/people/users'
      },
      {
        label: 'Policy Rules',
        path: '/compliance/policies'
      },
      {
        label: 'Audit Trail',
        path: '/compliance/audit'
      }
    ]
  },
  {
    label: 'Intelligence',
    children: [
      {
        label: 'Spend Analytics',
        path: '/insights/spend'
      },
      {
        label: 'Cash Forecast',
        path: '/insights/cash'
      },
      {
        label: 'Savings Opportunities',
        path: '/insights/savings'
      }
    ]
  }
]);

/* Register a model service that resolves menu data, page data, and breadcrumb trails. */
app.factory('PageModel', [
  'PAGE_DATA',
  'NAV_MENU',
  'LOREM_IPSUM_LIBRARY',
  'ACCOUNTING_RECORDS',
  function pageModelFactory(PAGE_DATA, NAV_MENU, LOREM_IPSUM_LIBRARY, ACCOUNTING_RECORDS) {
    var HOME_PATH = '/home';
    var pagesByPath = {};

    PAGE_DATA.forEach(function indexPages(page) {
      pagesByPath[page.path] = page;
    });

    function findTrail(items, targetPath, trail) {
      var index;

      for (index = 0; index < items.length; index += 1) {
        var item = items[index];
        var currentTrail = trail.concat([
          {
            label: item.label,
            path: item.path || null
          }
        ]);

        if (item.path === targetPath) {
          return currentTrail;
        }

        if (item.children && item.children.length) {
          var nestedTrail = findTrail(item.children, targetPath, currentTrail);
          if (nestedTrail) {
            return nestedTrail;
          }
        }
      }

      return null;
    }

    function buildBreadcrumbs(path) {
      var trail = findTrail(NAV_MENU, path, []) || [];
      var breadcrumbs = [];

      if (path === HOME_PATH) {
        return breadcrumbs;
      }

      breadcrumbs.push({
        label: 'Home',
        path: HOME_PATH
      });

      trail.forEach(function appendTrailItem(item, index) {
        if (item.path === HOME_PATH) {
          return;
        }

        breadcrumbs.push({
          label: item.label,
          path: index === trail.length - 1 ? null : item.path || null
        });
      });

      return breadcrumbs;
    }

    function hashString(value) {
      var hash = 0;
      var index;

      for (index = 0; index < value.length; index += 1) {
        hash = (hash << 5) - hash + value.charCodeAt(index);
        hash |= 0;
      }

      return Math.abs(hash);
    }

    function buildSlug(path) {
      var slug = path
        .replace(/^\/+/, '')
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-+|-+$/g, '');

      return slug || 'home';
    }

    function buildLoremIpsum(path) {
      var hash = hashString(path);
      var paragraphCount = 2 + (hash % 3);
      var paragraphs = [];
      var index;

      for (index = 0; index < paragraphCount; index += 1) {
        paragraphs.push(LOREM_IPSUM_LIBRARY[(hash + index) % LOREM_IPSUM_LIBRARY.length]);
      }

      return paragraphs;
    }

    function countWords(paragraphs) {
      return paragraphs
        .join(' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;
    }

    function buildPublishedDate(path) {
      var hash = hashString(path);
      var published = new Date(Date.UTC(2025, 0, 1));

      published.setUTCDate(published.getUTCDate() + (hash % 420));

      return {
        iso: published.toISOString().slice(0, 10),
        human: published.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'UTC'
        })
      };
    }

    function recordsForPath(path) {
      var page = pagesByPath[path] || pagesByPath[HOME_PATH];
      var searchView = page && page.searchView;
      var allowedTypes = searchView && searchView.allowedTypes;

      if (!allowedTypes || !allowedTypes.length) {
        return [];
      }

      return angular.copy(
        ACCOUNTING_RECORDS.filter(function includeAllowedType(record) {
          return allowedTypes.indexOf(record.type) !== -1;
        })
      );
    }

    return {
      menu: function listMenu() {
        return angular.copy(NAV_MENU);
      },

      recordsForPath: function getRecordsForPath(path) {
        return recordsForPath(path);
      },

      byPath: function getPageByPath(path) {
        var match = pagesByPath[path] || pagesByPath[HOME_PATH];
        var page = angular.copy(match);
        var slug = buildSlug(page.path);
        var loremIpsum = buildLoremIpsum(page.path);
        var pageRecords = recordsForPath(page.path);

        page.isHome = page.path === HOME_PATH;
        page.breadcrumbs = buildBreadcrumbs(page.path);
        page.loremIpsum = loremIpsum;
        page.wordCount = countWords(loremIpsum);
        page.readingMinutes = Math.max(1, Math.round(page.wordCount / 200));
        page.published = buildPublishedDate(page.path);
        page.highlightsId = slug + '-highlights';
        page.bodyId = slug + '-body';

        if (page.searchView) {
          page.searchView.pageSize = page.searchView.pageSize || 8;
          page.searchView.resultCount = pageRecords.length;
        }

        return page;
      }
    };
  }
]);

/* Configure hash routes so each menu destination maps to the shared template. */
app.config([
  '$routeProvider',
  'PAGE_DATA',
  function configureRoutes($routeProvider, PAGE_DATA) {
    function registerRoute(path) {
      $routeProvider.when(path, {
        templateUrl: 'page-template.html',
        controller: 'PageController',
        controllerAs: 'page',
        resolve: {
          pageData: [
            'PageModel',
            function resolvePageData(PageModel) {
              return PageModel.byPath(path);
            }
          ],
          searchRecords: [
            'PageModel',
            function resolveSearchRecords(PageModel) {
              return PageModel.recordsForPath(path);
            }
          ]
        }
      });
    }

    PAGE_DATA.forEach(function registerPage(page) {
      registerRoute(page.path);
    });

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
]);

/* Create a navigation controller that exposes menu data and active-state helpers. */
app.controller('NavigationController', [
  '$location',
  'PageModel',
  'SAM_KINISON_QUOTES',
  function NavigationController($location, PageModel, SAM_KINISON_QUOTES) {
    var vm = this;

    vm.menu = PageModel.menu();
    vm.currentYear = new Date().getFullYear();
    vm.randomQuote = SAM_KINISON_QUOTES[Math.floor(Math.random() * SAM_KINISON_QUOTES.length)] || 'Real comedy is anger.';

    vm.isActive = function isActive(path) {
      return !!path && $location.path() === path;
    };

    vm.hasActiveChild = function hasActiveChild(item) {
      if (!item || !item.children || !item.children.length) {
        return false;
      }

      return item.children.some(function containsActive(child) {
        return vm.isActive(child.path) || vm.hasActiveChild(child);
      });
    };
  }
]);

/* Create a page controller that binds resolved route data to the shared template. */
app.controller('PageController', [
  'pageData',
  'searchRecords',
  function PageController(pageData, searchRecords) {
    var vm = this;

    vm.activePage = pageData;
    vm.searchUi = null;

    function normalize(value) {
      return String(value || '').toLowerCase();
    }

    function uniqueValues(records, key) {
      return records
        .map(function readValue(record) {
          return record[key];
        })
        .filter(function isPresent(value) {
          return !!value;
        })
        .filter(function isUnique(value, index, values) {
          return values.indexOf(value) === index;
        })
        .sort();
    }

    function recordMatchesQuery(record, query) {
      if (!query) {
        return true;
      }

      return normalize([
        record.recordId,
        record.title,
        record.type,
        record.status,
        record.owner,
        record.party,
        record.department,
        record.reference,
        record.notes
      ].join(' ')).indexOf(query) !== -1;
    }

    function withinDateRange(recordDate, fromDate, toDate) {
      var recordTime = new Date(recordDate + 'T00:00:00Z').getTime();

      if (fromDate) {
        var fromTime = new Date(fromDate + 'T00:00:00Z').getTime();
        if (recordTime < fromTime) {
          return false;
        }
      }

      if (toDate) {
        var toTime = new Date(toDate + 'T23:59:59Z').getTime();
        if (recordTime > toTime) {
          return false;
        }
      }

      return true;
    }

    function buildPageNumbers(totalPages) {
      var pages = [];
      var page;

      for (page = 1; page <= totalPages; page += 1) {
        pages.push(page);
      }

      return pages;
    }

    function resetFilters() {
      vm.searchUi.filters = {
        query: '',
        type: 'All',
        status: 'All',
        department: 'All',
        owner: 'All',
        fromDate: '',
        toDate: ''
      };
      vm.searchUi.page = 1;
    }

    function updateSearchResults() {
      var filters;
      var query;
      var filtered;
      var pageSize;
      var startIndex;
      var endIndex;

      if (!vm.searchUi) {
        return;
      }

      filters = vm.searchUi.filters;
      query = normalize(filters.query).trim();

      filtered = vm.searchUi.records.filter(function includeRecord(record) {
        if (filters.type !== 'All' && record.type !== filters.type) {
          return false;
        }

        if (filters.status !== 'All' && record.status !== filters.status) {
          return false;
        }

        if (filters.department !== 'All' && record.department !== filters.department) {
          return false;
        }

        if (filters.owner !== 'All' && record.owner !== filters.owner) {
          return false;
        }

        if (!withinDateRange(record.date, filters.fromDate, filters.toDate)) {
          return false;
        }

        if (!recordMatchesQuery(record, query)) {
          return false;
        }

        return true;
      });

      filtered.sort(function compareRecords(a, b) {
        if (a.date === b.date) {
          if (a.recordId === b.recordId) {
            return 0;
          }

          return a.recordId > b.recordId ? 1 : -1;
        }

        return a.date < b.date ? 1 : -1;
      });

      pageSize = vm.searchUi.pageSize;
      vm.searchUi.totalResults = filtered.length;
      vm.searchUi.totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

      if (vm.searchUi.page > vm.searchUi.totalPages) {
        vm.searchUi.page = vm.searchUi.totalPages;
      }

      if (vm.searchUi.page < 1) {
        vm.searchUi.page = 1;
      }

      startIndex = (vm.searchUi.page - 1) * pageSize;
      endIndex = startIndex + pageSize;

      vm.searchUi.filteredResults = filtered;
      vm.searchUi.pagedResults = filtered.slice(startIndex, endIndex);
      vm.searchUi.displayStart = filtered.length ? startIndex + 1 : 0;
      vm.searchUi.displayEnd = filtered.length ? Math.min(endIndex, filtered.length) : 0;
      vm.searchUi.pageNumbers = buildPageNumbers(vm.searchUi.totalPages);
    }

    vm.applySearch = function applySearch() {
      if (!vm.searchUi) {
        return;
      }

      vm.searchUi.page = 1;
      updateSearchResults();
    };

    vm.setSearchPage = function setSearchPage(pageNumber) {
      if (!vm.searchUi || pageNumber < 1 || pageNumber > vm.searchUi.totalPages) {
        return;
      }

      vm.searchUi.page = pageNumber;
      updateSearchResults();
    };

    vm.previousSearchPage = function previousSearchPage() {
      if (!vm.searchUi || vm.searchUi.page <= 1) {
        return;
      }

      vm.searchUi.page -= 1;
      updateSearchResults();
    };

    vm.nextSearchPage = function nextSearchPage() {
      if (!vm.searchUi || vm.searchUi.page >= vm.searchUi.totalPages) {
        return;
      }

      vm.searchUi.page += 1;
      updateSearchResults();
    };

    vm.clearSearchFilters = function clearSearchFilters() {
      if (!vm.searchUi) {
        return;
      }

      resetFilters();
      updateSearchResults();
    };

    if (vm.activePage.searchView) {
      vm.searchUi = {
        records: angular.copy(searchRecords || []),
        pageSize: vm.activePage.searchView.pageSize || 8,
        page: 1,
        filters: {},
        typeOptions: ['All'].concat(uniqueValues(searchRecords || [], 'type')),
        statusOptions: ['All'].concat(uniqueValues(searchRecords || [], 'status')),
        departmentOptions: ['All'].concat(uniqueValues(searchRecords || [], 'department')),
        ownerOptions: ['All'].concat(uniqueValues(searchRecords || [], 'owner')),
        filteredResults: [],
        pagedResults: [],
        totalResults: 0,
        totalPages: 1,
        displayStart: 0,
        displayEnd: 0,
        pageNumbers: []
      };

      resetFilters();
      updateSearchResults();
    }
  }
]);