export interface Office {
  city: string;
  country: string;
  addr: string;
  locale: string;
  lat: number;
  lng: number;
  imageSrc: string;
  imageAlt: string;
}

export const OFFICES: Office[] = [
  {
    city: 'Gurugram',
    country: 'India',
    addr: '19th Floor, AIPL Business Club, Sector 62, Gurugram 122101',
    locale: 'en-IN',
    lat: 28.4595,
    lng: 77.0266,
    imageSrc: '/offices/gurugram.jpg',
    imageAlt: 'Gurugram city skyline at sunset',
  },
  {
    city: 'Hyderabad',
    country: 'India',
    addr: 'Level 1, N Heights, Plot 38, Hitech City Road, Hyderabad 500081',
    locale: 'en-IN',
    lat: 17.4435,
    lng: 78.3772,
    imageSrc: '/offices/hyderabad.jpg',
    imageAlt: 'Hyderabad cityscape panorama',
  },
  {
    city: 'Bengaluru',
    country: 'India',
    addr: '4th Floor, Hanto Virgo Centre, 185/A, 22nd Cross Rd, HSR Layout',
    locale: 'en-IN',
    lat: 12.9141,
    lng: 77.6389,
    imageSrc: '/offices/bengaluru.jpg',
    imageAlt: 'Bengaluru skyline aerial view',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    addr: '12 Marina View, Asia Square Tower 2, Level 18, Singapore 018961',
    locale: 'en-SG',
    lat: 1.2789,
    lng: 103.854,
    imageSrc: '/offices/singapore.jpg',
    imageAlt: 'Marina Bay Sands, Singapore',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    addr: '25th Floor, The Citadel Tower, Marasi Drive, Business Bay',
    locale: 'en-AE',
    lat: 25.1853,
    lng: 55.2744,
    imageSrc: '/offices/dubai.jpg',
    imageAlt: 'Dubai skyline at dusk',
  },
  {
    city: 'Abu Dhabi',
    country: 'UAE',
    addr: '13th Floor, Al Mansoor Tower, Al Salam Street',
    locale: 'en-AE',
    lat: 24.4539,
    lng: 54.3773,
    imageSrc: '/offices/abu-dhabi.jpg',
    imageAlt: 'Abu Dhabi city waterfront',
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    addr: 'Glen Waverley, Melbourne VIC 3150',
    locale: 'en-AU',
    lat: -37.8781,
    lng: 145.1647,
    imageSrc: '/offices/melbourne.jpg',
    imageAlt: 'Melbourne city skyline',
  },
  {
    city: 'London',
    country: 'UK',
    addr: '7 Benton Mews, Aylesbury',
    locale: 'en-GB',
    lat: 51.8167,
    lng: -0.812,
    imageSrc: '/offices/london.jpg',
    imageAlt: 'London skyline along the River Thames',
  },
];
