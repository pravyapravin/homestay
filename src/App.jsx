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
    name: 'Aaransh Nilaya',
    tagline: 'Where the beach meets your doorstep',
    description: 'A breathtaking beachfront bungalow with modern comfort, rustic interiors, and a unique feeling of spaciousness. The beach is just a minute away.',
    capacity: 6,
    bedrooms: 3,
    price: 4500,
    image: 'https://a0.muscache.com/im/pictures/29a4d8ad-4ea1-4f6c-bd78-920bd3351e8a.jpg',
    amenities: ['wifi', 'parking', 'garden', 'kitchen']
  },
  {
    id: 2,
    name: 'Beach Bungalow',
    tagline: 'Surrounded by coconut trees, steps from the sea',
    description: 'A peaceful place where you can enjoy, relax and have fun. The bungalow is surrounded by coconut trees and the beach is just a minute walk.',
    capacity: 7,
    bedrooms: 3,
    price: 3500,
    image: 'https://a0.muscache.com/im/pictures/9045f2d6-c285-482e-a79c-6ec9621aa0f2.jpg',
    amenities: ['wifi', 'parking', 'kitchen', 'terrace']
  },
  {
    id: 3,
    name: 'Seetha Villa',
    tagline: 'Traditional charm, modern comfort',
    description: 'A spacious villa with traditional Mangalorean architecture, tiled roof, and a beautiful sit-out verandah overlooking the garden.',
    capacity: 8,
    bedrooms: 4,
    price: 5500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    amenities: ['wifi', 'parking', 'kitchen', 'garden']
  },
  {
    id: 4,
    name: 'Coconut Grove Cottage',
    tagline: 'Nestled in nature, close to the waves',
    description: 'An intimate cottage perfect for couples or small families. Wake up to birdsong and fall asleep to the sound of waves.',
    capacity: 4,
    bedrooms: 2,
    price: 2800,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    amenities: ['wifi', 'garden', 'breakfast', 'parking']
  },
  {
    id: 5,
    name: 'Karavali House',
    tagline: 'The coast in its full glory',
    description: 'Our heritage home with wooden beams, antique furniture, and a courtyard. Experience old-world coastal Karnataka hospitality.',
    capacity: 6,
    bedrooms: 3,
    price: 4000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    amenities: ['wifi', 'parking', 'heritage', 'kitchen']
  },
  {
    id: 6,
    name: 'Sunset Retreat',
    tagline: 'Where every evening is golden',
    description: 'Perched with stunning sunset views, this cozy retreat offers the perfect blend of privacy and proximity to the beach.',
    capacity: 4,
    bedrooms: 2,
    price: 3200,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80',
    amenities: ['wifi', 'terrace', 'parking', 'kitchen']
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Ramesh & Lakshmi',
    location: 'Mangalore',
    text: "We were looking for a quiet escape close to home. What a discovery! Aaransh Nilaya felt like stepping into a dream. The beach at our doorstep, filter coffee in the morning - pure bliss.",
    rating: 5,
    property: 'Aaransh Nilaya'
  },
  {
    id: 2,
    name: 'The Shetty Family',
    location: 'Mumbai',
    text: "Vinaya is an incredible host! The kids loved the beach and we loved the home-cooked food. Already planning our next visit. This is how homestays should be.",
    rating: 5,
    property: 'Beach Bungalow'
  },
  {
    id: 3,
    name: 'Arun K.',
    location: 'Chennai',
    text: "As a solo traveler, I loved the simplicity and warmth. Vinaya's recommendations for hidden beaches and local eateries were spot on. This is the real Karnataka.",
    rating: 5,
    property: 'Coconut Grove Cottage'
  },
  {
    id: 4,
    name: 'Priya & Karthik',
    location: 'Bangalore',
    text: "We spent our anniversary at Sunset Retreat. No fancy amenities, just peace, great food, and each other. The neer dosa breakfast was heaven! We'll be back.",
    rating: 5,
    property: 'Sunset Retreat'
  }
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80', alt: 'Coastal Karnataka waves' },
  { url: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80', alt: 'Coconut palms' },
  { url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80', alt: 'Traditional food' },
  { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', alt: 'Fishing boats' },
  { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80', alt: 'Temple architecture' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Village path' }
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Karnataka coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-turmeric-300 text-lg mb-4 animate-fade-in-up font-serif tracking-wide">
          Yermal Thenka, Coastal Karnataka
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 animate-fade-in-up leading-tight">
          Where every road leads home
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up animation-delay-200 font-light">
          Six coastal havens between Mangalore & Udupi, just 800 meters from the highway
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <a
            href="#properties"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-xl"
          >
            Explore Our Homes
          </a>
          <a
            href="#host"
            className="border-2 border-white text-white hover:bg-white hover:text-wood-800 px-8 py-4 rounded-lg text-lg font-medium transition-all"
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
            {/* Host Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-terracotta-200 to-turmeric-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-terracotta-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl text-white font-display">V</span>
                  </div>
                  <p className="text-wood-600 font-serif">Vinaya</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-terracotta-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="font-semibold">7+ Years Hosting</span>
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
      className={`bg-paper-50 rounded-xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl border border-terracotta-100 ${
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
        <div className="absolute top-4 right-4 bg-paper-50/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-terracotta-200">
          <span className="font-semibold text-wood-800">₹{property.price.toLocaleString()}</span>
          <span className="text-wood-600 text-sm">/night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl text-wood-800 mb-1">{property.name}</h3>
        <p className="text-terracotta-500 font-serif italic mb-3">{property.tagline}</p>
        <p className="text-wood-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4 text-wood-700">
          <div className="flex items-center gap-1">
            <Users size={18} />
            <span className="text-sm">{property.capacity} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span className="text-sm">{property.bedrooms} rooms</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex gap-3">
          {property.amenities.map(amenity => {
            const Icon = amenityIcons[amenity]
            return Icon ? (
              <div
                key={amenity}
                className="w-8 h-8 bg-leaf-50 rounded-lg flex items-center justify-center border border-leaf-200"
                title={amenity}
              >
                <Icon size={16} className="text-leaf-700" />
              </div>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}

// Properties Section
function Properties() {
  const [ref, isInView] = useInView()

  return (
    <section id="properties" className="py-24 bg-paper-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-wood-800 mb-4">
            Our Homes, Your Retreat
          </h2>
          <p className="text-wood-600 text-lg max-w-2xl mx-auto font-serif">
            Six unique coastal homes, each with its own character. From beachfront
            bungalows to heritage houses - pick the one that calls to you.
          </p>
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
      icon: Heart,
      title: 'Home-cooked Meals',
      description: 'Authentic Mangalorean cuisine - neer dosa, fish curry, and filter coffee that your grandmother would approve of.'
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
              Yermal Thenka, Udupi District
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
              src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80"
              alt="Coastal Karnataka landscape"
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

// Testimonials Section
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isInView] = useInView()

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

          <div className="relative">
            <div className="bg-paper-100 rounded-2xl p-8 md:p-12 border border-terracotta-100">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-turmeric-400 text-turmeric-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl text-wood-700 mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-wood-800">{testimonial.name}</div>
                <div className="text-wood-500">{testimonial.location}</div>
                <div className="text-terracotta-500 text-sm mt-1">Stayed at {testimonial.property}</div>
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
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-terracotta-500 w-6' : 'bg-terracotta-200'
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

// Footer
function Footer() {
  return (
    <footer id="footer" className="bg-wood-900 text-paper-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TreePalm className="w-8 h-8 text-terracotta-400" />
              <span className="font-display text-2xl">Ashraya Stays</span>
            </div>
            <p className="text-paper-300 mb-6 max-w-md font-serif">
              Six coastal homes, one host who loves what she does. Located in Yermal
              Thenka between Mangalore and Udupi - where the highway meets the sea.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-wood-700 rounded-lg flex items-center justify-center transition-colors border border-wood-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-wood-700 rounded-lg flex items-center justify-center transition-colors border border-wood-700">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 text-paper-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-paper-50 transition-colors">
                <Phone size={18} />
                +91 98765 43210
              </a>
              <a href="mailto:vinaya@ashrayastays.com" className="flex items-center gap-2 hover:text-paper-50 transition-colors">
                <Mail size={18} />
                vinaya@ashrayastays.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Yermal Thenka, Udupi District
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#properties" className="block text-paper-300 hover:text-paper-50 transition-colors">Our Homes</a>
              <a href="#host" className="block text-paper-300 hover:text-paper-50 transition-colors">About Vinaya</a>
              <a href="#testimonials" className="block text-paper-300 hover:text-paper-50 transition-colors">Guest Stories</a>
              <a href="#location" className="block text-paper-300 hover:text-paper-50 transition-colors">Location</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-wood-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper-400 text-sm">
            © 2024 Ashraya Stays. All rights reserved.
          </p>
          <p className="text-paper-500 text-sm font-serif italic">
            "Where travel becomes real"
          </p>
        </div>
      </div>
    </footer>
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
      <AboutHost />
      <Properties />
      <WhyStayWithUs />
      <LocationHighlights />
      <Testimonials />
      <Gallery />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
