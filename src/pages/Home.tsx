import EventCard from '../components/EventCard';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'AI & Machine Learning Summit 2025',
    date: 'March 15, 2025',
    location: 'Kota, Rajasthan, India',
    description: 'Explore the latest advancements in AI and ML with industry experts. Learn about neural networks, deep learning, and practical applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Web Development Conference 2025',
    date: 'April 20, 2025',
    location: 'Jaipur, Rajasthan, India',
    description: 'Master modern web development with sessions on React, Node.js, and cloud technologies. Perfect for both beginners and experienced developers.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Cybersecurity Workshop 2025',
    date: 'May 10, 2025',
    location: 'Delhi, India',
    description: 'Learn about the latest cybersecurity threats and defense strategies. Hands-on workshops on ethical hacking and security best practices.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Cloud Computing Expo 2025',
    date: 'June 5, 2025',
    location: 'Mumbai, India',
    description: 'Discover cloud solutions from AWS, Azure, and Google Cloud. Learn about serverless architecture, containerization, and cloud security.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    title: 'Mobile App Development Summit 2025',
    date: 'July 15, 2025',
    location: 'Bangalore, India',
    description: 'Explore mobile app development for iOS and Android. Learn about Flutter, React Native, and native development best practices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 6,
    title: 'Data Science Conference 2025',
    date: 'August 20, 2025',
    location: 'Hyderabad, India',
    description: 'Deep dive into data science, big data analytics, and visualization. Learn about Python, R, and advanced statistical methods.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 7,
    title: 'Blockchain & Web3 Summit 2025',
    date: 'September 10, 2025',
    location: 'Chennai, India',
    description: 'Explore blockchain technology, cryptocurrencies, and Web3 development. Learn about smart contracts, DeFi, and NFT development.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Eventoo
          </h1>
          <p className="text-xl text-gray-600">
            Discover and book the best tech events across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 