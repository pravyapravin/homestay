import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  MapPin,
  Users,
  Bed,
  Wifi,
  Car,
  Coffee,
  Waves,
  Sun,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Heart,
  TreePalm,
  UtensilsCrossed,
  Wind,
  Leaf,
  Home,
  Navigation,
  Clock,
  Route,
  Globe,
  Award,
  MessageCircle,
  Languages
} from 'lucide-react'

// Property data - 6 homestays
const properties = [
  {
    id: 1,
    name: 'Beach Bungalow',
    tagline: 'Where the beach meets your doorstep',
    description: 'A breathtaking beachfront bungalow with modern comfort, rustic interiors, and a unique feeling of spaciousness. The beach is just a minute away.',
    capacity: 6,
    bedrooms: 3,
    image: '/images/stays/beach-bungalow.png',
    amenities: ['wifi', 'parking', 'garden', 'kitchen']
  },
  {
    id: 2,
    name: 'Chitrakala',
    tagline: 'Traditional charm, artistic soul',
    description: 'A spacious villa with traditional Mangalorean architecture, tiled roof, and a beautiful sit-out verandah overlooking the garden.',
    capacity: 8,
    bedrooms: 4,
    image: '/images/stays/chitrakala.png',
    amenities: ['wifi', 'parking', 'kitchen', 'garden']
  },
  {
    id: 3,
    name: 'Kutir 1',
    tagline: 'Nestled in nature, close to the waves',
    description: 'An intimate cottage perfect for couples or small families. Wake up to birdsong and fall asleep to the sound of waves.',
    capacity: 4,
    bedrooms: 2,
    image: '/images/stays/kutir-1.png',
    amenities: ['wifi', 'garden', 'breakfast', 'parking']
  },
  {
    id: 4,
    name: 'Kutir 2',
    tagline: 'The coast in its full glory',
    description: 'Our heritage home with wooden beams, antique furniture, and a courtyard. Experience old-world coastal Karnataka hospitality.',
    capacity: 6,
    bedrooms: 3,
    image: '/images/stays/kutir-2.png',
    amenities: ['wifi', 'parking', 'heritage', 'kitchen']
  },
  {
    id: 5,
    name: 'Rattan',
    tagline: 'Where every evening is golden',
    description: 'Perched with stunning sunset views, this cozy retreat offers the perfect blend of privacy and proximity to the beach.',
    capacity: 4,
    bedrooms: 2,
    image: '/images/stays/rattan.png',
    amenities: ['wifi', 'terrace', 'parking', 'kitchen']
  },
  {
    id: 6,
    name: 'Beach Nest',
    tagline: 'Surrounded by coconut trees, steps from the sea',
    description: 'A peaceful place where you can enjoy, relax and have fun. The bungalow is surrounded by coconut trees and the beach is just a minute walk.',
    capacity: 7,
    bedrooms: 3,
    image: '/images/stays/beach-nest.jpeg',
    amenities: ['wifi', 'parking', 'kitchen', 'terrace']
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Ramesh & Lakshmi',
    location: 'Mangalore',
    text: "We were looking for a quiet escape close to home. What a discovery! Beach Bungalow felt like stepping into a dream. The beach at our doorstep, filter coffee in the morning - pure bliss.",
    rating: 5,
    property: 'Beach Bungalow'
  },
  {
    id: 2,
    name: 'The Shetty Family',
    location: 'Mumbai',
    text: "Vinaya is an incredible host! The kids loved the beach and we loved the home-cooked food. Already planning our next visit. This is how homestays should be.",
    rating: 5,
    property: 'Beach Nest'
  },
  {
    id: 3,
    name: 'Arun K.',
    location: 'Chennai',
    text: "As a solo traveler, I loved the simplicity and warmth. Vinaya's recommendations for hidden beaches and local eateries were spot on. This is the real Karnataka.",
    rating: 5,
    property: 'Kutir 1'
  },
  {
    id: 4,
    name: 'Priya & Karthik',
    location: 'Bangalore',
    text: "We spent our anniversary at Rattan. No fancy amenities, just peace, great food, and each other. The neer dosa breakfast was heaven! We'll be back.",
    rating: 5,
    property: 'Rattan'
  },
  {
    id: 5,
    name: 'Meera J.',
    location: 'Hyderabad',
    text: "Chitrakala is aptly named - it's like living inside a painting. The traditional architecture, the garden views, and Vinaya's stories about the village made our stay unforgettable.",
    rating: 5,
    property: 'Chitrakala'
  }
]

const galleryImages = [
  { url: '/images/gallery/stay-1.png', alt: 'Life at our coast' },
  { url: '/images/gallery/stay-2.png', alt: 'Coastal moments' },
  { url: '/images/gallery/stay-3.png', alt: 'Peaceful retreats' },
  { url: '/images/gallery/stay-4.png', alt: 'Homely comforts' },
  { url: '/images/gallery/stay-5.png', alt: 'Traditional vibes' },
  { url: '/images/gallery/stay-6.png', alt: 'Serene surroundings' },
  { url: '/images/gallery/stay-7.png', alt: 'Coastal living' }
]

// Host highlights
const hostHighlights = [
  { icon: Home, text: '7+ Years Hosting' },
  { icon: Globe, text: 'Travel Enthusiast' },
  { icon: Heart, text: '5000+ Happy Guests' },
  { icon: Award, text: 'Highly Rated Host' },
  { icon: Languages, text: 'English, Hindi, Kannada, Tulu, Malayalam' },
  { icon: UtensilsCrossed, text: 'Traditional Food Expert' }
]

// Amenity icon mapping
const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  garden: Leaf,
  kitchen: UtensilsCrossed,
  terrace: Wind,
  breakfast: Coffee,
  heritage: Home
}

// Intersection Observer Hook
function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

// Navigation Component
function NavBar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Our Homes', href: '#properties' },
    { name: 'About Vinaya', href: '#host' },
    { name: 'Location', href: '#location' },
    { name: 'Guest Stories', href: '#testimonials' },
    { name: 'Contact', href: '#footer' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper-50 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <TreePalm className={`w-8 h-8 ${scrolled ? 'text-terracotta-600' : 'text-paper-100'}`} />
            <span className={`font-display text-2xl ${
              scrolled ? 'text-wood-800' : 'text-paper-50'
            }`}>
              Ashraya Stays
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terracotta-500 ${
                  scrolled ? 'text-wood-700' : 'text-paper-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#footer"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-wood-800' : 'text-paper-50'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-wood-800' : 'text-paper-50'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-paper-50 rounded-xl shadow-xl mt-2 p-4 animate-fade-in border border-terracotta-200">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-wood-700 hover:text-terracotta-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-lg font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - darker image for better text readability */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Karnataka coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative Kolam Corners */}
      <div className="absolute top-24 left-8 w-20 h-20 opacity-20 hidden md:block">
        <svg viewBox="0 0 80 80" className="w-full h-full text-white">
          <circle cx="40" cy="40" r="4" fill="currentColor"/>
          <circle cx="20" cy="20" r="2" fill="currentColor"/>
          <circle cx="60" cy="20" r="2" fill="currentColor"/>
          <circle cx="20" cy="60" r="2" fill="currentColor"/>
          <circle cx="60" cy="60" r="2" fill="currentColor"/>
          <circle cx="40" cy="10" r="2" fill="currentColor"/>
          <circle cx="40" cy="70" r="2" fill="currentColor"/>
          <circle cx="10" cy="40" r="2" fill="currentColor"/>
          <circle cx="70" cy="40" r="2" fill="currentColor"/>
          <path d="M20 20 Q40 5 60 20 Q75 40 60 60 Q40 75 20 60 Q5 40 20 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute top-24 right-8 w-20 h-20 opacity-20 hidden md:block rotate-90">
        <svg viewBox="0 0 80 80" className="w-full h-full text-white">
          <circle cx="40" cy="40" r="4" fill="currentColor"/>
          <circle cx="20" cy="20" r="2" fill="currentColor"/>
          <circle cx="60" cy="20" r="2" fill="currentColor"/>
          <circle cx="20" cy="60" r="2" fill="currentColor"/>
          <circle cx="60" cy="60" r="2" fill="currentColor"/>
          <circle cx="40" cy="10" r="2" fill="currentColor"/>
          <circle cx="40" cy="70" r="2" fill="currentColor"/>
          <circle cx="10" cy="40" r="2" fill="currentColor"/>
          <circle cx="70" cy="40" r="2" fill="currentColor"/>
          <path d="M20 20 Q40 5 60 20 Q75 40 60 60 Q40 75 20 60 Q5 40 20 20" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Sanskrit/Kannada inspired decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-12 h-px bg-turmeric-400/60"/>
          <div className="w-2 h-2 bg-turmeric-400 rounded-full"/>
          <div className="w-12 h-px bg-turmeric-400/60"/>
        </div>

        <p className="text-turmeric-300 text-lg mb-4 animate-fade-in-up font-serif tracking-wide italic">
          Namaskara, welcome to our coast
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white mb-8 animate-fade-in-up leading-tight">
          Where Every Wave Brings You Home
        </h1>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-200">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
            <img src="/images/karnataka-tourism-logo.svg" alt="Karnataka Tourism" className="h-5 w-auto" />
            <span className="text-white text-sm font-medium">Approved by Karnataka Tourism</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
            <span className="text-white text-sm font-medium">Family-run • Not a Hotel Chain</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
            <Heart size={18} className="text-terracotta-300" />
            <span className="text-white text-sm font-medium">40% repeat guests</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <a
            href="#properties"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our Homes
          </a>
          <a
            href="#host"
            className="border-2 border-white text-white hover:bg-white hover:text-wood-800 px-8 py-4 rounded-lg text-lg font-medium transition-all hover:-translate-y-1"
          >
            Meet Your Host
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}

// Location Badge Component
function LocationBadge() {
  return (
    <div className="bg-leaf-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm">
          <div className="flex items-center gap-2">
            <Route size={18} />
            <span><strong>NH17</strong> - Just 800m from highway</span>
          </div>
          <div className="flex items-center gap-2">
            <Navigation size={18} />
            <span><strong>Mangalore:</strong> 45 mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Navigation size={18} />
            <span><strong>Udupi:</strong> 21 km</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span><strong>Beach:</strong> 1 min walk</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// About the Host Section
function AboutHost() {
  const [ref, isInView] = useInView()

  return (
    <section id="host" className="py-24 bg-paper-100">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-12 text-center">
            Meet Your Host
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Host Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-paper-200">
                <img
                  src="/images/host/vinaya.jpg"
                  alt="Vinaya - Your Host"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-terracotta-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="font-semibold">7+ Years Hosting</span>
              </div>
              {/* Decorative kolam-inspired corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 opacity-60">
                <svg viewBox="0 0 64 64" className="w-full h-full text-terracotta-400">
                  <circle cx="32" cy="32" r="4" fill="currentColor"/>
                  <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  <circle cx="48" cy="16" r="3" fill="currentColor"/>
                  <circle cx="16" cy="48" r="3" fill="currentColor"/>
                  <path d="M16 16 Q32 8 48 16 Q56 32 48 48 Q32 56 16 48 Q8 32 16 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Host Bio */}
            <div>
              <h3 className="font-display text-3xl text-wood-800 mb-6">
                Hi, I'm Vinaya
              </h3>
              <div className="font-serif text-lg text-wood-700 leading-relaxed space-y-4">
                <p>
                  For over 7 years, I've had the joy of welcoming travelers from around
                  the world to our coastal havens.
                </p>
                <p>
                  I'm a travel enthusiast at heart—the kind who seeks out hidden villages,
                  unmarked trails, and places that don't make it into guidebooks. Through
                  my own journeys, I discovered something beautiful: the best travel memories
                  aren't made in hotels, but in homes. Around dinner tables. Through conversations
                  with locals.
                </p>
                <p>
                  I believe homestays are magical because they're where travel becomes real.
                  Where you don't just see a place—you feel it. Where you taste grandmother's
                  recipes, hear stories about the neighborhood, and leave with friends instead
                  of just photographs.
                </p>
                <p className="text-terracotta-600 italic">
                  When you stay with me, you're not just getting a bed by the beach. You're
                  getting a local who genuinely loves connecting with people, sharing hidden
                  gems that aren't on Google Maps, and making sure you experience our coast
                  the way it deserves to be experienced.
                </p>
              </div>
            </div>
          </div>

          {/* Host Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hostHighlights.map((highlight, index) => (
              <div
                key={highlight.text}
                className={`bg-paper-50 p-4 rounded-xl border border-terracotta-100 text-center transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <highlight.icon size={24} className="text-terracotta-600" />
                </div>
                <p className="text-wood-700 text-sm font-medium">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Property Card Component
function PropertyCard({ property, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-paper-50 rounded-xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl border border-terracotta-100 card-lift group ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="image-zoom relative h-64">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {/* Decorative corner element */}
        <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-terracotta-500/80 rotate-45 group-hover:bg-terracotta-600/80 transition-colors"/>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Decorative dots before title */}
        <div className="flex items-center gap-1 mb-2">
          <span className="w-1.5 h-1.5 bg-terracotta-400 rounded-full"/>
          <span className="w-1 h-1 bg-terracotta-300 rounded-full"/>
          <span className="w-0.5 h-0.5 bg-terracotta-200 rounded-full"/>
        </div>

        <h3 className="font-display text-2xl text-wood-800 mb-1 group-hover:text-terracotta-700 transition-colors">{property.name}</h3>
        <p className="text-terracotta-500 font-serif italic mb-3">{property.tagline}</p>
        <p className="text-wood-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4 text-wood-700">
          <div className="flex items-center gap-1.5 bg-wood-50 px-2 py-1 rounded-md">
            <Users size={16} className="text-wood-500" />
            <span className="text-sm font-medium">{property.capacity} guests</span>
          </div>
          <div className="flex items-center gap-1.5 bg-wood-50 px-2 py-1 rounded-md">
            <Bed size={16} className="text-wood-500" />
            <span className="text-sm font-medium">{property.bedrooms} rooms</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex gap-2 flex-wrap">
          {property.amenities.map(amenity => {
            const Icon = amenityIcons[amenity]
            return Icon ? (
              <div
                key={amenity}
                className="w-8 h-8 bg-leaf-50 rounded-lg flex items-center justify-center border border-leaf-200 hover:bg-leaf-100 transition-colors"
                title={amenity}
              >
                <Icon size={16} className="text-leaf-700" />
              </div>
            ) : null
          })}
        </div>

        {/* Contact prompt */}
        <div className="mt-4 pt-4 border-t border-terracotta-100">
          <p className="text-sm text-wood-500 font-serif italic">Contact us to book this home</p>
        </div>
      </div>
    </div>
  )
}

// Properties Section
function Properties() {
  const [ref, isInView] = useInView()

  return (
    <section id="properties" className="py-24 bg-paper-50 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 kolam-pattern opacity-30 pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative element above title */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-terracotta-300"/>
            <svg className="w-6 h-6 text-terracotta-400" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.6"/>
              <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.6"/>
              <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.6"/>
              <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.6"/>
            </svg>
            <div className="w-8 h-px bg-terracotta-300"/>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Choose Your Coastal Haven
          </h2>
          <p className="text-wood-600 text-lg max-w-2xl mx-auto font-serif">
            Six unique coastal homes, each with its own character. From beachfront
            bungalows to cozy kutirs - pick the one that calls to you.
          </p>

          {/* Small decorative line */}
          <div className="flex items-center justify-center mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent rounded"/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Stay With Us Section
function WhyStayWithUs() {
  const [ref, isInView] = useInView()

  const benefits = [
    {
      icon: Home,
      title: 'Village Experience',
      description: 'Live like a local in our coastal village. Experience authentic village life, coconut groves, and the warmth of community.'
    },
    {
      icon: Route,
      title: 'Perfect Location',
      description: 'On NH17 between Mangalore and Udupi. Just 800m from the highway, yet a world apart.'
    },
    {
      icon: Leaf,
      title: 'Local Experiences',
      description: 'Coconut groves, temple visits, fish market walks - experience Karnataka beyond the tourist trail.'
    },
    {
      icon: Sun,
      title: 'Beach at Your Doorstep',
      description: '1-minute walk to pristine beaches. Kayaking, fishing, or simply watching the sunset - your choice.'
    }
  ]

  return (
    <section className="py-24 bg-wood-800 text-paper-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Why Travelers Choose Us
          </h2>
          <p className="text-paper-300 text-lg max-w-2xl mx-auto">
            Some come for a night, many stay for a week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center p-6 rounded-xl bg-wood-700/50 border border-wood-600 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-terracotta-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-paper-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Location Highlights Section
function LocationHighlights() {
  const [ref, isInView] = useInView()

  const highlights = [
    {
      icon: Waves,
      title: 'Pristine Beaches',
      description: 'Uncrowded Karnataka beaches just a 1-minute walk away. Morning walks, evening swims.'
    },
    {
      icon: TreePalm,
      title: 'Coconut Country',
      description: 'Surrounded by palm groves, paddy fields, and the gentle pace of village life.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Coastal Cuisine',
      description: 'Fresh catch from the sea. Authentic Mangalorean and Udupi delicacies at local eateries.'
    },
    {
      icon: Home,
      title: 'Temple Towns',
      description: 'Udupi Sri Krishna Temple (21km) and countless ancient shrines within easy reach.'
    }
  ]

  return (
    <section id="location" className="py-24 bg-turmeric-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-6">
              Your Gateway to Coastal Karnataka
            </h2>
            <p className="text-wood-700 text-lg mb-4 font-serif">
              Nestled on the coast between Mangalore and Udupi, our homestays sit in
              Yermal Thenka - a quiet village where the Arabian Sea meets coconut groves.
            </p>
            <p className="text-wood-700 text-lg mb-8 font-serif">
              Just 800 meters off NH17, yet a world apart. 45 minutes from Mangalore,
              21km from Udupi. Come for a weekend escape or a week of doing absolutely nothing.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-terracotta-200">
                    <highlight.icon size={24} className="text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-800 mb-1">{highlight.title}</h3>
                    <p className="text-wood-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="/images/coastal-karnataka-beach.jpg"
              alt="Coastal Karnataka beach"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-paper-50 p-4 rounded-xl shadow-lg border border-terracotta-200">
              <div className="flex items-center gap-2">
                <MapPin className="text-terracotta-500" size={20} />
                <span className="font-medium text-wood-800">Yermal Thenka, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Book Directly Section
function WhyBookDirectly() {
  const [ref, isInView] = useInView()

  const benefits = [
    {
      icon: Award,
      title: '20% Better Rates',
      description: 'No platform fees means better prices for you'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp with Vinaya',
      description: 'No middleman, instant responses'
    },
    {
      icon: Heart,
      title: 'Flexible Cancellation',
      description: 'Moderate cancellation policy that works for you'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-turmeric-50 to-paper-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Why Book Directly?
          </h2>
          <p className="text-wood-600 text-lg max-w-2xl mx-auto">
            Skip the middleman and get the best experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`bg-white p-8 rounded-xl shadow-lg border border-terracotta-100 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-terracotta-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={32} className="text-terracotta-600" />
              </div>
              <h3 className="text-xl font-semibold text-wood-800 mb-2">{benefit.title}</h3>
              <p className="text-wood-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Local Guide Section
function LocalGuide() {
  const [ref, isInView] = useInView()

  const guides = [
    {
      emoji: '🍤',
      title: 'Food',
      description: 'Where locals eat (₹50 fish thali that\'ll blow your mind)'
    },
    {
      emoji: '🏖️',
      title: 'Beaches',
      description: 'Tourist vs Local beaches—marked honestly'
    },
    {
      emoji: '🛕',
      title: 'Temples',
      description: 'The famous ones + with best views'
    },
    {
      emoji: '🌄',
      title: 'Auto and taxi on hire',
      description: 'Convenient transport options arranged for you'
    },
    {
      emoji: '🛍️',
      title: 'Shopping',
      description: 'Souvenirs, take homes, not tourist prices'
    }
  ]

  return (
    <section className="py-24 bg-leaf-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Your Local Guide
          </h2>
          <p className="text-leaf-100 text-lg max-w-2xl mx-auto">
            Insider tips from someone who actually lives here
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <div
              key={guide.title}
              className={`bg-leaf-600 p-6 rounded-xl border border-leaf-500 transition-all duration-700 hover:bg-leaf-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{guide.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-leaf-100">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Live Updates Section
function LiveUpdates() {
  const [ref, isInView] = useInView()

  const updates = [
    {
      title: 'Festival Calendar',
      description: 'Udupi Paryaya and other local celebrations',
      icon: Home
    },
    {
      title: 'Kola and Aata',
      description: 'Traditional rituals happening nearby',
      icon: Sun
    },
    {
      title: 'Surfing Updates',
      description: 'Mackerel season and wave conditions',
      icon: Waves
    },
    {
      title: 'Bioluminescence',
      description: 'Live updates on magical beach nights',
      icon: Star
    }
  ]

  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Live Updates
          </h2>
          <p className="text-wood-600 text-lg">
            Stay in the loop with what's happening on the coast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {updates.map((update, index) => (
            <div
              key={update.title}
              className={`bg-white p-6 rounded-xl shadow-lg border border-terracotta-100 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center mb-4">
                <update.icon size={24} className="text-terracotta-600" />
              </div>
              <h3 className="text-lg font-semibold text-wood-800 mb-2">{update.title}</h3>
              <p className="text-wood-600 text-sm">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [ref, isInView] = useInView()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is it really better than Airbnb?',
      answer: 'Honestly? I list there too. But booking direct means I can offer you better rates, more flexibility, and those little extras (like teaching you to make dosas) that platforms don\'t allow. Plus, I\'d rather spend my time with you than paying platform fees.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'Life happens. 7 days notice = full refund. Less than that, we\'ll work something out. I\'m human, not a corporation.'
    },
    {
      question: 'Can pick from the airport be arranged?',
      answer: 'Yes! Mangalore airport is 50km. Cab can be arranged on payment basis.'
    },
    {
      question: 'Is it pet friendly?',
      answer: 'Yes, 4 of my stays are pet friendly. We have hosted many pets from dogs, cats to birds!'
    },
    {
      question: 'I\'m vegetarian. Would I get any options?',
      answer: 'Perfect! Let me know your needs. Coastal Karnataka has amazing vegetarian food, and I\'ve hosted many vegetarians—we\'ll make it work.'
    }
  ]

  return (
    <section className="py-24 bg-paper-50">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-wood-600 text-lg">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-terracotta-100 overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-paper-50 transition-colors"
              >
                <span className="font-semibold text-wood-800 text-lg">{faq.question}</span>
                <ChevronRight
                  className={`text-terracotta-600 transition-transform ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-wood-600 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section with Auto-rotation
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [ref, isInView] = useInView()

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 bg-paper-50">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-16">
            Stories from Our Guests
          </h2>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Decorative rangoli corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 opacity-40">
              <svg viewBox="0 0 48 48" className="w-full h-full text-terracotta-500">
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="36" cy="12" r="2" fill="currentColor"/>
                <circle cx="12" cy="36" r="2" fill="currentColor"/>
                <circle cx="36" cy="36" r="2" fill="currentColor"/>
                <path d="M12 12 Q24 6 36 12 Q42 24 36 36 Q24 42 12 36 Q6 24 12 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 opacity-40 rotate-180">
              <svg viewBox="0 0 48 48" className="w-full h-full text-terracotta-500">
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="36" cy="12" r="2" fill="currentColor"/>
                <circle cx="12" cy="36" r="2" fill="currentColor"/>
                <circle cx="36" cy="36" r="2" fill="currentColor"/>
                <path d="M12 12 Q24 6 36 12 Q42 24 36 36 Q24 42 12 36 Q6 24 12 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>

            <div className="bg-paper-100 rounded-2xl p-8 md:p-12 border border-terracotta-100 transition-all duration-500">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-turmeric-400 text-turmeric-400" />
                ))}
              </div>

              {/* Quote with transition */}
              <blockquote
                key={currentIndex}
                className="font-serif text-xl md:text-2xl text-wood-700 mb-8 italic leading-relaxed animate-fade-in"
              >
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div key={`author-${currentIndex}`} className="animate-fade-in">
                <div className="font-semibold text-wood-800">{testimonial.name}</div>
                <div className="text-wood-500">{testimonial.location}</div>
                <div className="text-terracotta-500 text-sm mt-1">Stayed at {testimonial.property}</div>
              </div>

              {/* Progress bar for auto-rotation */}
              <div className="mt-6 h-1 bg-terracotta-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-terracotta-400 rounded-full transition-all ${isPaused ? '' : 'animate-progress'}`}
                  style={{
                    animation: isPaused ? 'none' : 'progressBar 5s linear infinite',
                  }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-terracotta-100 hover:bg-terracotta-200 rounded-full flex items-center justify-center transition-colors border border-terracotta-200"
              >
                <ChevronLeft className="text-terracotta-700" size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-terracotta-500 w-8' : 'bg-terracotta-200 w-2'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-terracotta-100 hover:bg-terracotta-200 rounded-full flex items-center justify-center transition-colors border border-terracotta-200"
              >
                <ChevronRight className="text-terracotta-700" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function Gallery() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Glimpses of Life Here
          </h2>
          <p className="text-wood-600 text-lg font-serif">
            A day at our coastal homestays
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`image-zoom rounded-xl overflow-hidden transition-all duration-700 border border-terracotta-100 ${
                index === 0 || index === 5 ? 'md:col-span-1 md:row-span-2' : ''
              } ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTA() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-turmeric-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-display text-4xl md:text-6xl mb-6">
          The coast is calling
        </h2>
        <p className="text-xl text-terracotta-100 mb-10 font-serif">
          Pack light. We have everything else - food, stories, and a hammock with your name on it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:vinaya@ashrayastays.com"
            className="bg-paper-50 text-terracotta-700 hover:bg-paper-100 px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Write to Us
          </a>
          <a
            href="tel:+919876543210"
            className="border-2 border-paper-50 text-paper-50 hover:bg-paper-50 hover:text-terracotta-700 px-10 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}

// Traditional Mangalore/Udupi Illustrations Component
function TraditionalIllustrations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {/* Coconut Palm Left */}
      <svg className="absolute left-0 bottom-0 h-64 w-32 text-paper-100" viewBox="0 0 100 200">
        <path d="M50 200 L50 120 Q30 100 20 80 Q40 90 50 85 Q60 90 80 80 Q70 100 50 120" fill="none" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="35" cy="75" rx="15" ry="6" fill="currentColor" transform="rotate(-30 35 75)"/>
        <ellipse cx="65" cy="75" rx="15" ry="6" fill="currentColor" transform="rotate(30 65 75)"/>
        <ellipse cx="50" cy="65" rx="12" ry="5" fill="currentColor"/>
        <circle cx="45" cy="85" r="5" fill="currentColor"/>
        <circle cx="55" cy="85" r="5" fill="currentColor"/>
        <circle cx="50" cy="78" r="4" fill="currentColor"/>
      </svg>

      {/* Temple Gopuram Center */}
      <svg className="absolute left-1/2 -translate-x-1/2 bottom-0 h-48 w-32 text-paper-100" viewBox="0 0 100 150">
        <path d="M30 150 L30 100 L20 100 L50 40 L80 100 L70 100 L70 150" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M35 100 L35 80 L50 55 L65 80 L65 100" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M40 80 L50 65 L60 80" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="50" cy="50" r="4" fill="currentColor"/>
        <line x1="50" y1="46" x2="50" y2="35" stroke="currentColor" strokeWidth="1.5"/>
        {/* Kalash */}
        <path d="M45 35 Q50 30 55 35 Q52 32 50 32 Q48 32 45 35" fill="currentColor"/>
      </svg>

      {/* Coconut Palm Right */}
      <svg className="absolute right-0 bottom-0 h-64 w-32 text-paper-100 scale-x-[-1]" viewBox="0 0 100 200">
        <path d="M50 200 L50 120 Q30 100 20 80 Q40 90 50 85 Q60 90 80 80 Q70 100 50 120" fill="none" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="35" cy="75" rx="15" ry="6" fill="currentColor" transform="rotate(-30 35 75)"/>
        <ellipse cx="65" cy="75" rx="15" ry="6" fill="currentColor" transform="rotate(30 65 75)"/>
        <ellipse cx="50" cy="65" rx="12" ry="5" fill="currentColor"/>
        <circle cx="45" cy="85" r="5" fill="currentColor"/>
        <circle cx="55" cy="85" r="5" fill="currentColor"/>
        <circle cx="50" cy="78" r="4" fill="currentColor"/>
      </svg>

      {/* Kolam/Rangoli Pattern - scattered */}
      <svg className="absolute left-1/4 top-8 w-16 h-16 text-terracotta-400 opacity-30" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="4" fill="currentColor"/>
        <circle cx="16" cy="32" r="2" fill="currentColor"/>
        <circle cx="48" cy="32" r="2" fill="currentColor"/>
        <circle cx="32" cy="16" r="2" fill="currentColor"/>
        <circle cx="32" cy="48" r="2" fill="currentColor"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
        <circle cx="44" cy="20" r="2" fill="currentColor"/>
        <circle cx="20" cy="44" r="2" fill="currentColor"/>
        <circle cx="44" cy="44" r="2" fill="currentColor"/>
        <path d="M20 20 Q32 10 44 20 Q54 32 44 44 Q32 54 20 44 Q10 32 20 20" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>

      <svg className="absolute right-1/4 top-12 w-12 h-12 text-turmeric-400 opacity-20" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
        <circle cx="12" cy="24" r="1.5" fill="currentColor"/>
        <circle cx="36" cy="24" r="1.5" fill="currentColor"/>
        <circle cx="24" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="24" cy="36" r="1.5" fill="currentColor"/>
        <path d="M12 24 A12 12 0 0 1 36 24 A12 12 0 0 1 12 24" stroke="currentColor" strokeWidth="0.75" fill="none"/>
      </svg>

      {/* Fishing Boat */}
      <svg className="absolute left-16 bottom-4 w-20 h-12 text-paper-100" viewBox="0 0 80 48">
        <path d="M10 35 Q40 45 70 35 L65 40 Q40 50 15 40 Z" fill="currentColor" opacity="0.5"/>
        <line x1="40" y1="35" x2="40" y2="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M40 12 L60 25 L40 30" fill="currentColor" opacity="0.3"/>
      </svg>

      {/* Mangalore Tiles Pattern - top border */}
      <div className="absolute top-0 left-0 right-0 h-4 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-b border-terracotta-700/30" style={{
            background: i % 2 === 0 ? 'transparent' : 'rgba(194, 80, 56, 0.1)'
          }}/>
        ))}
      </div>

      {/* Waves at bottom */}
      <svg className="absolute bottom-0 left-0 right-0 h-8 text-paper-100" viewBox="0 0 1200 32" preserveAspectRatio="none">
        <path d="M0 32 Q50 20 100 32 Q150 20 200 32 Q250 20 300 32 Q350 20 400 32 Q450 20 500 32 Q550 20 600 32 Q650 20 700 32 Q750 20 800 32 Q850 20 900 32 Q950 20 1000 32 Q1050 20 1100 32 Q1150 20 1200 32" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    </div>
  )
}

// Footer
function Footer() {
  return (
    <footer id="footer" className="bg-wood-900 text-paper-100 py-16 relative overflow-hidden">
      {/* Traditional Illustrations Background */}
      <TraditionalIllustrations />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <TreePalm className="w-10 h-10 text-terracotta-400" />
                {/* Decorative dot pattern around logo */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-turmeric-400 rounded-full opacity-60"/>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-terracotta-300 rounded-full opacity-60"/>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-terracotta-300 rounded-full opacity-60"/>
              </div>
              <span className="font-display text-3xl">Ashraya Stays</span>
            </div>
            <p className="text-paper-300 mb-6 max-w-md font-serif leading-relaxed">
              Six coastal homes, one host who loves what she does. Located in Yermal
              Thenka between Mangalore and Udupi - where the highway meets the sea.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-terracotta-600 rounded-lg flex items-center justify-center transition-colors border border-wood-700 hover:border-terracotta-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-terracotta-600 rounded-lg flex items-center justify-center transition-colors border border-wood-700 hover:border-terracotta-500">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-4 text-terracotta-300">Get in Touch</h3>
            <div className="space-y-3 text-paper-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-terracotta-300 transition-colors">
                <Phone size={18} />
                +91 98765 43210
              </a>
              <a href="mailto:vinaya@ashrayastays.com" className="flex items-center gap-2 hover:text-terracotta-300 transition-colors">
                <Mail size={18} />
                vinaya@ashrayastays.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-terracotta-400" />
                Yermal Thenka, Udupi District
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-4 text-terracotta-300">Quick Links</h3>
            <div className="space-y-3">
              <a href="#properties" className="block text-paper-300 hover:text-terracotta-300 transition-colors">Our Homes</a>
              <a href="#host" className="block text-paper-300 hover:text-terracotta-300 transition-colors">About Vinaya</a>
              <a href="#testimonials" className="block text-paper-300 hover:text-terracotta-300 transition-colors">Guest Stories</a>
              <a href="#location" className="block text-paper-300 hover:text-terracotta-300 transition-colors">Location</a>
            </div>
          </div>
        </div>

        {/* Decorative Divider - Kolam inspired */}
        <div className="flex items-center justify-center gap-2 py-4 mb-4">
          <div className="h-px bg-wood-700 flex-1 max-w-24"/>
          <svg className="w-8 h-8 text-terracotta-500" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2" fill="currentColor"/>
            <circle cx="8" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
            <circle cx="24" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>
            <circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
            <circle cx="16" cy="24" r="1.5" fill="currentColor" opacity="0.6"/>
          </svg>
          <div className="h-px bg-wood-700 flex-1 max-w-24"/>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-paper-400 text-sm">
              © 2026 Ashraya Stays. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <img src="/images/karnataka-tourism-logo.svg" alt="Karnataka Tourism" className="h-6 w-auto brightness-150" />
              <span className="text-paper-400 text-sm">Approved by Karnataka Tourism</span>
            </div>
          </div>
          <p className="text-paper-500 text-sm font-serif italic">
            "Atithi Devo Bhava" - The guest is God
          </p>
        </div>
      </div>
    </footer>
  )
}

// WhatsApp Chat Widget
function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919995426620"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  )
}

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-paper-50">
      <NavBar scrolled={scrolled} />
      <Hero />
      <LocationBadge />
      <Properties />
      <AboutHost />
      <WhyStayWithUs />
      <WhyBookDirectly />
      <LocalGuide />
      <LocationHighlights />
      <LiveUpdates />
      <Testimonials />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App
