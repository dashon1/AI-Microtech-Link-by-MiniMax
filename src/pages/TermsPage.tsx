import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">Terms and Conditions</h1>
      <p className="font-semibold mb-6">Last updated: March 28, 2026</p>

      <p className="mb-6">These Terms and Conditions govern your use of AI Microtech Link's services, including ReachRecover AI and all related applications. By using our services, you agree to these terms.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">1. Services</h2>
      <p className="mb-6">AI Microtech Link provides AI-powered business automation services including automated SMS text-back systems, lead recovery tools, and related SaaS applications.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">2. SMS Messaging Terms</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>By using our SMS services, you agree to receive automated text messages as part of the service you subscribed to.</li>
        <li>Message and data rates may apply.</li>
        <li>Message frequency varies based on your usage and settings.</li>
        <li>You may opt out at any time by replying STOP to any message.</li>
        <li>Reply HELP for help or contact us at info@aimicrotechlink.com.</li>
        <li>Consent to receive SMS messages is not a condition of purchase.</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">3. User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>You are responsible for ensuring your use of our services complies with applicable laws and regulations.</li>
        <li>You may not use our services to send spam, unsolicited messages, or any content that violates carrier guidelines.</li>
        <li>You must obtain proper consent from your end users before sending them SMS messages through our platform.</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">4. Subscriptions and Billing</h2>
      <p className="mb-6">Subscription fees are billed monthly. You may cancel at any time. Refunds are not provided for partial billing periods.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
      <p className="mb-6">AI Microtech Link shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">6. Changes to Terms</h2>
      <p className="mb-6">We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h2>
      <p className="mb-2">AI Microtech Link</p>
      <p className="mb-2">Clearwater, Florida</p>
      <p className="mb-2">Email: <a href="mailto:info@aimicrotechlink.com" className="text-blue-500 hover:underline">info@aimicrotechlink.com</a></p>
      <p className="mb-6">Website: aimicrotechlink.com</p>
    </div>
  );
}
