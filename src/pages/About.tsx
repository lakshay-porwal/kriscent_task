const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At EventBook, we're dedicated to making event management and booking seamless and enjoyable.
            Our platform connects event organizers with attendees, creating memorable experiences for everyone involved.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Easy event discovery and booking</li>
            <li>Secure payment processing</li>
            <li>Real-time event updates</li>
            <li>Customer support 24/7</li>
            <li>Mobile-friendly experience</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            We are a team of passionate individuals committed to revolutionizing the event booking industry.
            With years of experience in technology and event management, we understand what it takes to
            create successful events.
          </p>
          <p className="text-gray-600">
            Our diverse team brings together expertise in software development, user experience design,
            customer service, and event planning to deliver the best possible platform for our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 