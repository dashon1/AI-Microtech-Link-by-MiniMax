import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">Privacy Policy</h1>
      <p className="font-semibold mb-6">Last updated: March 28, 2026</p>

      <p className="mb-6">AI Microtechlink Inc. ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services, including ReachRecover AI and all related applications.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Name, email address, and contact information you provide when signing up</li>
        <li>Business information provided during onboarding</li>
        <li>Phone numbers used in connection with our services</li>
        <li>Usage data and analytics related to your use of our platform</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">2. SMS and Text Messaging</h2>
      <div className="bg-blue-50 border-l-4 border-pink-500 p-4 my-6 rounded-r">
        <h3 className="font-bold text-gray-900 mb-2">SMS Privacy Policy</h3>
        <p className="text-gray-900 m-0">AI Microtechlink Inc. values your privacy. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages. Such sharing is strictly for service delivery and not for their own marketing purposes.</p>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>To provide and operate our services</li>
        <li>To send automated SMS responses as part of our missed call text-back service</li>
        <li>To communicate with you about your account and our services</li>
        <li>To improve our platform and user experience</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">4. Data Sharing</h2>
      <p className="mb-6">We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (such as Telnyx, Stripe, and Firebase) solely to operate our services, under strict confidentiality agreements.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">5. Data Security</h2>
      <p className="mb-6">We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights</h2>
      <p className="mb-6">You have the right to access, correct, or delete your personal data at any time. Contact us at <a href="mailto:info@aimicrotechlink.com" className="text-blue-500 hover:underline">info@aimicrotechlink.com</a> to make a request.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h2>
      <p className="mb-2">AI Microtechlink Inc.</p>
      <p className="mb-2">Clearwater, Florida</p>
      <p className="mb-2">Email: <a href="mailto:info@aimicrotechlink.com" className="text-blue-500 hover:underline">info@aimicrotechlink.com</a></p>
      <p className="mb-6">Website: aimicrotechlink.com</p>
    </div>
  );
}
