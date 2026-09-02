export type EventType = 'roundtable' | 'conference';
export type EventTypeFilter = 'all' | EventType;
export type EventTopic = 'hcm' | 'erp' | 'ai' | 'devops' | 'industry';

export type EventContentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PastEvent = {
  slug: string;
  title: string;
  description: string;
  type: EventType;
  startDate: string;
  displayDate: string;
  location: string;
  region?: string;
  imageSrc: string;
  imageAlt: string;
  topics: EventTopic[];
  detail: {
    intro: string;
    sections: EventContentSection[];
    gallery: { src: string; alt: string }[];
  };
};

export const EVENT_TYPE_FILTERS: { id: EventTypeFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'roundtable', label: 'Roundtable' },
  { id: 'conference', label: 'Conference' },
];

export const EVENT_TOPIC_LABELS: Record<EventTopic, string> = {
  hcm: 'HCM',
  erp: 'ERP',
  ai: 'AI',
  devops: 'DevOps',
  industry: 'Industry',
};

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  roundtable: 'Roundtable',
  conference: 'Conference',
};

export const PAST_EVENTS: PastEvent[] = [
  {
    slug: 'piet-international-youth-day-2026',
    title: 'PIET Celebrates International Youth Day 2026',
    description:
      'Panipat Institute of Engineering & Technology marked International Youth Day 2026 under the UN theme "Different Contexts, Common Aspirations" with a Student Innovation Showcase. The programme featured standout AICTE IDEA Lab projects spanning smart fire detection, vision-assisted systems, AC safety, and fuel monitoring. Amit Garg, CEO of MPC, joined the celebration to encourage student innovation, entrepreneurship, and hands-on work across AI, IoT, 3D printing, and product development.',
    type: 'conference',
    startDate: '2026-08-19',
    displayDate: 'August 19, 2026',
    location: 'Samalkha, India',
    region: 'India',
    imageSrc: '/events/piet/cover.jpg',
    imageAlt: 'PIET International Youth Day 2026 student innovation showcase',
    topics: ['ai', 'industry'],
    detail: {
      intro:
        'Panipat Institute of Engineering & Technology (PIET), Samalkha, celebrated International Youth Day 2026 with a vibrant Student Innovation Showcase aligned to the United Nations theme, "Different Contexts, Common Aspirations."',
      sections: [
        {
          paragraphs: [
            'The event put student-led engineering innovation centre stage, highlighting practical projects developed through the AICTE IDEA Lab. Exhibits included Smart Automatic Fire Detection, Smart Vision Headset, AC Safety System, and Fuel Guard, demonstrating how young engineers are applying technology to real-world safety and operational challenges.',
          ],
        },
        {
          heading: 'MPC at the showcase',
          paragraphs: [
            'Amit Garg, Founder & CEO of MPC Cloud Consulting, joined the celebration to speak with students about innovation, entrepreneurship, and emerging technologies. His session reinforced the link between academic experimentation and enterprise-grade problem solving across AI, IoT, 3D printing, and product development.',
          ],
        },
        {
          heading: 'What students demonstrated',
          paragraphs: [],
          bullets: [
            'AI and IoT applications built for safety-critical environments',
            'Rapid prototyping and 3D printing for functional product concepts',
            'End-to-end product thinking from problem definition to working prototype',
            'Cross-disciplinary collaboration across engineering disciplines',
          ],
        },
        {
          heading: 'Why it mattered',
          paragraphs: [
            'Events like this connect classroom innovation to industry expectations. For MPC, participation reflects a commitment to nurturing the next generation of builders who will shape Oracle Cloud, AI, and enterprise technology adoption in the years ahead.',
          ],
        },
      ],
      gallery: [
        {
          src: '/events/piet/cover.jpg',
          alt: 'PIET International Youth Day 2026 celebration',
        },
        {
          src: '/events/piet/1786540995173.jpg',
          alt: 'Student innovation showcase at PIET',
        },
        {
          src: '/events/piet/1786540995332.jpg',
          alt: 'PIET students presenting AICTE IDEA Lab projects',
        },
        {
          src: '/events/piet/1786540995354.jpg',
          alt: 'International Youth Day 2026 at Panipat Institute of Engineering & Technology',
        },
        {
          src: '/events/piet/1786540995919.jpg',
          alt: 'Student projects on display at PIET',
        },
      ],
    },
  },
  {
    slug: 'virtusa-nasscom-cxo-roundtable-2026',
    title: 'Virtusa x NASSCOM CXO Roundtable',
    description:
      'Hosted by NASSCOM and Virtusa, this CXO roundtable brought senior leaders together to explore how AI is reshaping inclusive, next-generation workplaces. Discussions covered trust and transparency in high-impact AI systems, architectural foundations for scalable adoption, governance beyond compliance, and the human side of AI-driven change. MPC leaders contributed enterprise-grounded perspectives on moving from pilots to sustainable, value-driven AI at scale.',
    type: 'roundtable',
    startDate: '2026-03-30',
    displayDate: 'March 30, 2026',
    location: 'India',
    region: 'India',
    imageSrc: '/events/virtusa/cover.jpg',
    imageAlt: 'Virtusa and NASSCOM CXO roundtable on AI-powered workplaces',
    topics: ['ai', 'hcm', 'industry'],
    detail: {
      intro:
        'NASSCOM and Virtusa hosted a CXO roundtable focused on building the next generation of AI-powered, inclusive workplaces. The session brought together senior leaders for grounded dialogue on what it takes to move AI beyond pilots and into sustainable enterprise practice.',
      sections: [
        {
          paragraphs: [
            'Venkatesan Vijayaraghavan, COO of Virtusa, opened the programme with a keynote on how AI is no longer an add-on in services but is fundamentally reshaping delivery models and driving outcomes at scale. Leenika Khattar from NASSCOM moderated the roundtable, guiding a room of strong voices into a focused and productive exchange.',
          ],
        },
        {
          heading: 'MPC participation',
          paragraphs: [
            'MPC Cloud Consulting was represented at the roundtable, contributing practical, enterprise-grounded perspectives on AI adoption. Amit Garg, Founder & CEO; Mukund Moorthy, Head of Strategy; and Abhay Singh, Chief Business Officer, have been central to MPC\'s journey toward becoming an AI-led organization and to securing participation in platforms that shape these industry conversations.',
          ],
        },
        {
          heading: 'Themes discussed',
          paragraphs: [],
          bullets: [
            'Building trust and transparency in AI systems, especially in high-impact domains',
            'Defining the right architectural foundations for scalable AI: data, cloud, and APIs',
            'Moving beyond pilots amid change management and data readiness gaps',
            'Evolving AI governance from compliance to a strategic capability',
            'Ensuring psychological safety and human relevance in AI-driven workplaces',
          ],
        },
        {
          heading: 'Cost, value, and sustainable AI',
          paragraphs: [
            'A recurring theme was the cost-versus-value equation of AI adoption. Leaders noted the risk of accelerating deployment without understanding long-term implications, which can create emerging AI technical debt. The consensus: organizations must shift from building AI capabilities in isolation to designing sustainable, value-driven systems that scale responsibly.',
            'What became clear across the room is that technology is rarely the primary barrier. Success depends on how well people, processes, and purpose align alongside AI. The next-generation workplace will be defined not by AI capability alone, but by how thoughtfully organizations bring people along in the transformation.',
          ],
        },
        {
          heading: 'Leaders in the room',
          paragraphs: [
            'The roundtable included senior representation from Virtusa, Cognizant, Mastek, TCS, Straive, PayPal, Societe Generale, AstraZeneca, Kellogg Brown & Root, MHFA, and other organizations, reflecting the breadth of perspectives required for meaningful AI workplace dialogue.',
          ],
        },
      ],
      gallery: [
        {
          src: '/events/virtusa/cover.jpg',
          alt: 'Virtusa x NASSCOM CXO roundtable session',
        },
        {
          src: '/events/virtusa/3.%20IMGL0273.JPG',
          alt: 'CXO leaders discussing AI-powered workplaces',
        },
        {
          src: '/events/virtusa/4.%20IMGL0007.JPG',
          alt: 'Roundtable keynote and panel at Virtusa x NASSCOM event',
        },
        {
          src: '/events/virtusa/5.%20IMGL0062.JPG',
          alt: 'NASSCOM and Virtusa hosted CXO roundtable',
        },
        {
          src: '/events/virtusa/Image%20momento.jpeg',
          alt: 'Event momento from Virtusa x NASSCOM CXO roundtable',
        },
      ],
    },
  },
  {
    slug: 'oracle-ai-world-tour-mumbai-2026',
    title: 'Oracle AI World Tour Mumbai',
    description:
      'MPC joined the Oracle AI World Tour in Mumbai for a full day of sessions on enterprise AI strategy, implementation patterns, and responsible deployment. The programme connected startups and large enterprises around real-world use cases, governance considerations, and the collaborative effort required to turn AI ambition into durable business outcomes.',
    type: 'conference',
    startDate: '2026-02-10',
    displayDate: 'February 10, 2026',
    location: 'Mumbai, India',
    region: 'India',
    imageSrc: '/events/oracle-ai-world/cover.jpg',
    imageAlt: 'Oracle AI World Tour Mumbai conference',
    topics: ['ai', 'erp'],
    detail: {
      intro:
        'The Oracle AI World Tour arrived in Mumbai for a full day of sessions on enterprise AI strategy, implementation, and the innovations reshaping how organizations operate. MPC joined the programme as part of its ongoing engagement with the Oracle ecosystem and the practitioners driving AI adoption in production environments.',
      sections: [
        {
          paragraphs: [
            'The energy across the venue reflected the pace of change in enterprise AI: sharp questions, practical use cases, and a shared enthusiasm for what responsible deployment can unlock. Conversations ranged from implementation strategy to governance, with leaders from startups and large enterprises contributing distinct challenges and solutions.',
          ],
        },
        {
          heading: 'What stood out',
          paragraphs: [],
          bullets: [
            'The diversity of perspectives, from emerging ventures to global enterprises, each bringing distinct AI adoption challenges',
            'Genuine curiosity about responsible AI deployment, governance, and long-term operating models',
            'A collaborative spirit across vendors, partners, and customer organizations building in production',
            'Real-world use cases showing how AI is reshaping finance, HR, operations, and customer experience',
          ],
        },
        {
          heading: 'MPC at the tour',
          paragraphs: [
            'For MPC, the Mumbai leg of the tour was an opportunity to connect with Oracle practitioners, customers, and partners navigating the same implementation realities our teams address every day. Sessions reinforced that the future of AI is being shaped not only in labs and boardrooms, but in the working conversations between technology and business leaders.',
          ],
        },
        {
          heading: 'Looking ahead',
          paragraphs: [
            'Events like the Oracle AI World Tour help organizations benchmark ambition against execution. MPC continues to bring enterprise-grounded delivery experience to these forums, translating conference insight into the phased Oracle Cloud and AI programmes our clients run across India, the Middle East, and beyond.',
          ],
        },
      ],
      gallery: [
        {
          src: '/events/oracle-ai-world/cover.jpg',
          alt: 'Oracle AI World Tour Mumbai main stage',
        },
        {
          src: '/events/oracle-ai-world/1770884810632.jpg',
          alt: 'Oracle AI World Tour Mumbai conference floor',
        },
        {
          src: '/events/oracle-ai-world/1770884811374.jpg',
          alt: 'Sessions at Oracle AI World Tour Mumbai',
        },
        {
          src: '/events/oracle-ai-world/1770884812280.jpg',
          alt: 'Delegates networking at Oracle AI World Tour Mumbai',
        },
        {
          src: '/events/oracle-ai-world/1770884814218.jpg',
          alt: 'Oracle AI World Tour Mumbai event highlights',
        },
      ],
    },
  },
];

export function getEventBySlug(slug: string): PastEvent | undefined {
  const normalized = decodeURIComponent(slug).replace(/\/$/, '');
  return PAST_EVENTS.find((event) => event.slug === normalized);
}

export function getEventPath(slug: string): string {
  return `/resources/events/${slug}/`;
}

export function sortEventsByDateDesc(events: PastEvent[]): PastEvent[] {
  return [...events].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );
}
