export interface SampleImage {
  id: string;
  name: string;
  url: string;
  category: string;
}

export const SAMPLE_IMAGES: SampleImage[] = [
  {
    id: 'portrait-1',
    name: 'Fashion Portrait',
    category: 'Portrait',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cyber-city',
    name: 'Tokyo Neon Street',
    category: 'Cinematic',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'nature-sunset',
    name: 'Mountain Sunset',
    category: 'Landscape',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'supercar',
    name: 'Sports Car',
    category: 'Action',
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'aesthetic-coffee',
    name: 'Aesthetic Coffee',
    category: 'Foodie',
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80'
  }
];
