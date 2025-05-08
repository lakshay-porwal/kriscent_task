import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            We're here to help with any questions about our events, booking process, or special accommodations.
            Feel free to reach out through any of the following channels:
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-indigo-600 text-xl mr-4" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+91 9376389275</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-indigo-600 text-xl mr-4" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">eventoo@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-indigo-600 text-xl mr-4" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-gray-600">
                  <a 
                    href="https://linkedin.com/company/eventoopage" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    eventoopage
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
          <p className="text-gray-600 mb-4">
            Our support team is available Monday through Friday, 9:00 AM to 6:00 PM IST.
          </p>
          <p className="text-gray-600">
            For urgent inquiries outside of business hours, please email us and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 