import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your event booking has been successfully submitted. We'll send you a confirmation email shortly.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600">
            If you have any questions or need to make changes to your booking, please don't hesitate to contact us.
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 