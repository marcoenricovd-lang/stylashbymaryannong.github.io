import { Service, ServiceCategory } from './types';

// Booking fees by category (in PHP)
export const BOOKING_FEES: Record<ServiceCategory, number> = {
  lashes: 200,
  nails: 200,
  brows: 500,
  training: 1000,
  hair: 500,
  underarm: 200,
  airlashes: 200,
};

// Get booking fee for a service
export function getBookingFee(category: ServiceCategory): number {
  return BOOKING_FEES[category] || 200;
}

// Services organized by category
export const SERVICES: Service[] = [
  // LASHES & BROW SERVICES
  {
    id: 'eyelash-extensions',
    name: 'Eyelash Extensions',
    category: 'lashes',
    price: '450-600',
    duration: null,
    icon: '👁️',
    description: 'Premium lash extensions customized to enhance your natural eye shape',
  },
  {
    id: 'lashlift-tint',
    name: 'Lashlift with tint',
    category: 'lashes',
    price: 450,
    duration: null,
    icon: '👁️',
    description: 'Lift and tint your natural lashes for a beautiful, low-maintenance look',
  },
  {
    id: 'lash-extensions-removal',
    name: 'Lash Extensions Removal',
    category: 'lashes',
    price: '100-150',
    duration: null,
    icon: '✂️',
    description: 'Safe and gentle removal of existing lash extensions',
  },
  {
    id: 'brow-lamination',
    name: 'Brow Lamination with tint',
    category: 'brows',
    price: 600,
    duration: null,
    icon: '✨',
    description: 'Achieve perfectly groomed, fuller-looking brows',
  },
  {
    id: 'microblading',
    name: 'Microblading',
    category: 'brows',
    price: 3000,
    duration: null,
    icon: '✏️',
    description: 'Semi-permanent eyebrow tattoo for natural-looking brows',
  },
  {
    id: 'shading',
    name: 'Shading',
    category: 'brows',
    price: 3500,
    duration: null,
    icon: '🎨',
    description: 'Powder brow technique for soft, shaded look',
  },
  {
    id: 'combrows',
    name: 'Combrows (All 2 Sessions + Free after care cream)',
    category: 'brows',
    price: 4000,
    duration: null,
    icon: '👁️',
    description: 'Complete brow transformation with 2 sessions and aftercare included',
  },
  
  // NEW AIRLASHES
  {
    id: 'airlashes-natural',
    name: 'Natural Extensions',
    category: 'airlashes',
    price: 600,
    duration: null,
    icon: '🌸',
    description: 'Natural-looking airlash extensions',
  },
  {
    id: 'airlashes-volume',
    name: 'Volume Extensions',
    category: 'airlashes',
    price: 700,
    duration: null,
    icon: '💫',
    description: 'Volume airlash extensions for fuller look',
  },
  {
    id: 'airlashes-mega',
    name: 'Mega Extensions',
    category: 'airlashes',
    price: 800,
    duration: null,
    icon: '⭐',
    description: 'Mega volume airlash extensions for dramatic effect',
  },
  {
    id: 'airlashes-retouch',
    name: 'Retouch',
    category: 'airlashes',
    price: '350-400',
    duration: null,
    icon: '✨',
    description: 'Maintenance retouch for airlash extensions',
  },
  
  // NAILS SERVICES
  {
    id: 'manegel',
    name: 'Manegel',
    category: 'nails',
    price: 450,
    duration: null,
    icon: '💅',
    description: 'Gel manicure for long-lasting, beautiful nails',
  },
  {
    id: 'pedegel',
    name: 'Pedegel',
    category: 'nails',
    price: 480,
    duration: null,
    icon: '🦶',
    description: 'Gel pedicure for gorgeous toenails',
  },
  {
    id: 'softgel-extensions',
    name: 'Softgel Extensions',
    category: 'nails',
    price: 600,
    duration: null,
    icon: '💅',
    description: 'Soft gel nail extensions',
  },
  {
    id: 'poly-acrylic-extensions',
    name: 'Poly/Acrylic Extensions',
    category: 'nails',
    price: 800,
    duration: null,
    icon: '💎',
    description: 'Polygel or acrylic nail extensions',
  },
  {
    id: 'nail-extensions-removal',
    name: 'Nail Extensions Removal',
    category: 'nails',
    price: '100-150',
    duration: null,
    icon: '✂️',
    description: 'Safe removal of nail extensions',
  },
  {
    id: 'additional-gems',
    name: 'Additional Gems & Stones',
    category: 'nails',
    price: '10-100',
    duration: null,
    icon: '💎',
    description: 'Add beautiful gems and stones to your nail design',
  },
  
  // HAIR SERVICES
  {
    id: 'hair-color-short',
    name: 'HAIR COLOR - Short Length',
    category: 'hair',
    price: 600,
    duration: null,
    icon: '💇',
    description: 'Full hair color service for short hair',
    notes: 'FREE TRIM!!',
  },
  {
    id: 'hair-color-shoulder',
    name: 'HAIR COLOR - Shoulder Length',
    category: 'hair',
    price: 800,
    duration: null,
    icon: '💇',
    description: 'Full hair color service for shoulder-length hair',
    notes: 'FREE TRIM!!',
  },
  {
    id: 'hair-color-long',
    name: 'HAIR COLOR - Long Hair Length',
    category: 'hair',
    price: 1000,
    duration: null,
    icon: '💇',
    description: 'Full hair color service for long hair',
    notes: 'FREE TRIM!!',
  },
  {
    id: 'brazilian-botox-short',
    name: 'BRAZILIAN BOTOX COLLAGEN - Short Length',
    category: 'hair',
    price: 800,
    duration: null,
    icon: '✨',
    description: 'Brazilian botox collagen treatment for short hair',
  },
  {
    id: 'brazilian-botox-shoulder',
    name: 'BRAZILIAN BOTOX COLLAGEN - Shoulder Length',
    category: 'hair',
    price: 1000,
    duration: null,
    icon: '✨',
    description: 'Brazilian botox collagen treatment for shoulder-length hair',
  },
  {
    id: 'brazilian-botox-long',
    name: 'BRAZILIAN BOTOX COLLAGEN - Long Hair Length',
    category: 'hair',
    price: 1500,
    duration: null,
    icon: '✨',
    description: 'Brazilian botox collagen treatment for long hair',
  },
  
  // UNDERARM SERVICES
  {
    id: 'ipl-per-session',
    name: 'IPL per Session',
    category: 'underarm',
    price: 150,
    duration: null,
    icon: '✨',
    description: 'IPL hair removal per session',
  },
  {
    id: 'ipl-12-plus-1',
    name: 'IPL 12+1 Session',
    category: 'underarm',
    price: 1000,
    duration: null,
    icon: '✨',
    description: 'IPL hair removal package (12+1 sessions)',
  },
  {
    id: 'underarm-waxing',
    name: 'Underarm Waxing',
    category: 'underarm',
    price: 180,
    duration: null,
    icon: '🌸',
    description: 'Professional underarm waxing service',
  },
];

// Get service by ID
export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(s => s.id === id);
}

// Get services by category
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter(s => s.category === category);
}

// Format price for display
export function formatPrice(price: number | string): string {
  if (typeof price === 'string') {
    return `₱${price}`;
  }
  return `₱${price.toLocaleString()}`;
}

// Get numeric price (for calculations, uses minimum if range)
export function getNumericPrice(price: number | string): number {
  if (typeof price === 'number') return price;
  // If it's a range like "450-600", return the first number
  const match = price.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// Group services by category for display
export const SERVICE_CATEGORIES: { id: ServiceCategory; name: string; description?: string }[] = [
  { id: 'lashes', name: 'Lashes & Brow Services' },
  { id: 'airlashes', name: 'New Airlashes' },
  { id: 'nails', name: 'Nails Services' },
  { id: 'hair', name: 'Hair Services' },
  { id: 'underarm', name: 'Underarm Services' },
];