import { resolve } from 'path';
import React from 'react';

const PaymentAppDashboard =async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

  const Card = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full p-2 mr-4">
            {icon}
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#ebe6e6] p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Using the Card component for each feature */}
        <Card
          title="Easy Payments"
          description="Seamlessly send and receive money with just a few taps on your device."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3z" />
            </svg>
          }
        />

        <Card
          title="Transaction History"
          description="Keep track of all your transactions and monitor your spending habits."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18m-7 4h7" />
            </svg>
          }
        />

        <Card
          title="Secure Transactions"
          description="Enjoy peace of mind with bank-level security and encryption for all your transactions."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v22M4.22 4.22l15.56 15.56M4.22 19.78L19.78 4.22" />
            </svg>
          }
        />

        <Card
          title="Multiple Payment Methods"
          description="Choose from various payment options including credit cards, debit cards, and digital wallets."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3z" />
            </svg>
          }
        />

        <Card
          title="Instant Notifications"
          description="Receive real-time notifications for all your transactions and updates."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12H3m18 0v-2m-18 0v2m18 0v2m-18 0v-2m0 2v-2m0 2h18" />
            </svg>
          }
        />

        <Card
          title="User-Friendly Interface"
          description="Navigate through the app effortlessly with an intuitive design tailored for all users."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default PaymentAppDashboard;
