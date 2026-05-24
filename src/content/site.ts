export const TOKEN = {
  name: 'VTPN',
  totalSupply: 100_000_000,
  liquidityPct: 90,
  vestingPct: 10,
  liquidityAmount: 90_000_000,
  vestingAmount: 10_000_000,
}

export const ADDRESSES = {
  treasury: '0x437cA3929894B8f81387F38AF0E8a6d30BDF90f7',
  vestingContract: null as string | null,
}

export const LIQUIDITY_RATIO = {
  stable: 5,
  nonStable: 1,
}

export const home = {
  hero: {
    tagline: 'Utility settlement layer for startups without token infrastructure',
    description:
      'A lightweight protocol token for value exchange, liquidity, and integration between early-stage digital products. No investment function. No financial rights.',
  },
  whatIs: {
    heading: 'What is VTPN',
    items: [
      {
        title: 'Settlement Unit',
        description: 'A settlement unit for digital interactions between integrated ecosystems.',
      },
      {
        title: 'Intermediate Asset',
        description: 'An intermediate asset for value exchange across connected applications.',
      },
      {
        title: 'Shared Liquidity',
        description: 'A shared liquidity layer that removes the need to design custom tokenomics.',
      },
    ],
  },
  principles: {
    heading: 'Core Principles',
    subtitle: 'VTPN is a utility-only protocol layer',
    items: [
      { label: 'No Staking', icon: 'ban' },
      { label: 'No Yield Generation', icon: 'ban' },
      { label: 'No Dividends or Profit Distribution', icon: 'ban' },
      { label: 'No Governance Rights', icon: 'ban' },
      { label: 'No Claims on Revenue or Assets', icon: 'ban' },
    ],
  },
  supply: {
    heading: 'Supply Overview',
    totalLabel: 'Total Supply',
    items: [
      { pct: 90, label: 'Liquidity Allocation', amount: '90,000,000 VTPN', color: '#6E56F8' },
      { pct: 10, label: 'Long-term Vesting', amount: '10,000,000 VTPN', color: '#22D3EE' },
    ],
  },
  ecosystem: {
    heading: 'Ecosystem Support',
    subtitle: 'Optional ecosystem incentives for protocol adoption',
    description:
      'The protocol may support integrations through optional ecosystem incentives. These are discretionary and not guaranteed.',
    items: ['Grants for integration', 'Onboarding support mechanisms', 'Cost-offset programs for adoption'],
  },
}

export const liquidity = {
  heading: 'Liquidity Model',
  architecture: {
    heading: 'Liquidity Architecture',
    description:
      'VTPN uses a staged liquidity expansion model based on a treasury reserve. Liquidity is deployed through paired asset provisioning in equal value proportions.',
    pairs: ['USDC', 'USDT', 'BTC', 'ETH', 'BNB'],
  },
  ratio: {
    heading: 'Allocation Ratio',
    description:
      'For each liquidity expansion event, approximately 5 parts of VTPN are allocated to stablecoin pools and 1 part to non-stable asset pools.',
    note: 'This ratio applies to the distribution of newly added liquidity and does not imply maintenance of relative pool values over time.',
  },
  rules: {
    heading: 'Liquidity Expansion Rules',
    items: [
      'Liquidity is added in balanced asset pairs',
      'Expansion follows predefined system parameters',
      'Execution may initially include operational steps, transitioning toward smart contract automation',
    ],
  },
  intent: {
    heading: 'Design Intent',
    items: [
      'Maintain structural consistency',
      'Avoid arbitrary market intervention',
      'Support gradual protocol adoption',
    ],
  },
}

export const treasury = {
  heading: 'Treasury',
  overview: {
    heading: 'Overview',
    description:
      'The treasury is a protocol-controlled reserve used for liquidity provisioning and ecosystem operations. It is fully transparent and verifiable on-chain.',
  },
  allocation: {
    heading: 'Initial Allocation',
    amount: '90,000,000 VTPN',
    description: 'At launch, the treasury holds 90,000,000 VTPN for liquidity provisioning and protocol operations.',
  },
  role: {
    heading: 'Role of Treasury',
    items: [
      { title: 'Liquidity Provisioning', description: 'Paired asset provisioning for protocol liquidity pools.' },
      { title: 'Protocol Expansion', description: 'Funding for protocol growth and infrastructure development.' },
      {
        title: 'Ecosystem Support',
        description: 'Optional mechanisms for supporting ecosystem participants (discretionary).',
      },
    ],
  },
  transparency: {
    heading: 'Transparency',
    description: 'All treasury movements are intended to be publicly verifiable on-chain.',
  },
}

export const vesting = {
  heading: 'Vesting',
  overview: {
    heading: 'Overview',
    description:
      '10% of the total supply (10,000,000 VTPN) is allocated to long-term vesting for the protocol author, implemented via a dedicated smart contract.',
  },
  structure: {
    heading: 'Vesting Structure',
    description:
      'The vesting schedule is predefined and implemented in an active smart contract. The schedule is fixed at deployment and cannot be modified after initialization.',
  },
  properties: {
    heading: 'Contract Properties',
    items: [
      { title: 'Immutable', description: 'Contract is immutable after deployment — no changes possible.' },
      { title: 'No Admin Controls', description: 'No administrative controls or upgrade mechanisms.' },
      { title: 'No Manual Overrides', description: 'Release logic is enforced entirely on-chain.' },
      { title: 'Pull-based Distribution', description: 'Tokens become claimable per schedule; no automated transfers.' },
    ],
  },
  schedule: {
    heading: 'Vesting Schedule',
    note: 'The schedule is outlined below and enforced via a deployed smart contract.',
  },
  purpose: {
    heading: 'Purpose',
    items: [
      'Long-term alignment with protocol development',
      'Gradual release of tokens into circulation',
      'Predictable supply dynamics over time',
    ],
  },
}

export const ecosystem = {
  heading: 'Ecosystem Support',
  overview: {
    heading: 'Overview',
    description: 'VTPN may support ecosystem participants through optional incentive mechanisms.',
  },
  types: {
    heading: 'Support Types',
    items: [
      {
        title: 'Integration Grants',
        description: 'Financial support for teams building integrations with the VTPN protocol layer.',
        icon: 'layers',
      },
      {
        title: 'Onboarding Assistance',
        description: 'Technical and operational support for new ecosystem participants.',
        icon: 'users',
      },
      {
        title: 'Cost-offset Mechanisms',
        description: 'Programs designed to reduce adoption friction for early-stage startups.',
        icon: 'zap',
      },
    ],
  },
  notice: {
    heading: 'Important Note',
    items: ['Not guaranteed', 'Not automatic', 'Applied at protocol discretion based on ecosystem development needs'],
  },
  philosophy: {
    heading: 'Philosophy',
    description:
      'The goal is to reduce friction for startups adopting shared infrastructure without requiring independent token systems. By providing optional support mechanisms, the protocol lowers the barrier to entry for teams building within integrated ecosystems.',
  },
}

export const disclaimer = {
  heading: 'Disclaimer',
  legal: {
    heading: 'Legal Notice',
    intro: 'VTPN is a utility protocol token and does not represent an investment product.',
    noRights: [
      'Rights to profit',
      'Income distribution',
      'Ownership claims',
      'Governance rights',
    ],
  },
  risk: {
    heading: 'Risk Notice',
    description:
      'Interaction with digital assets involves risk and is entirely voluntary. Users should conduct their own research and exercise independent judgment before engaging with any digital asset protocol.',
  },
  utility: {
    heading: 'Utility-Only Token',
    description:
      'VTPN functions exclusively as a utility protocol token within integrated ecosystems. It is designed as a functional layer for digital interactions, value exchange, and shared liquidity — not as a financial instrument or investment vehicle.',
  },
}
