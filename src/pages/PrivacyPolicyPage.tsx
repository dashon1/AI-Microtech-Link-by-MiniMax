import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">Privacy Policy</h1>
      <p className="font-semibold mb-6">Last updated: April 8, 2026</p>

      <p className="mb-6">AI Microtechlink Inc. ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services, including HIT — Health Intelligence Tracker, ReachRecover AI, and all related applications.</p>

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

      <h2 className="text-xl font-bold mt-8 mb-4">5. HIT — Health Intelligence Tracker App Data</h2>
      <p className="mb-4">The HIT — Health Intelligence Tracker app (com.aimicrotechlink.hit) stores all health journal data — including symptom logs, medication records, meal entries, and AI chat history — exclusively on your device using your device's local storage. This data is not transmitted to or stored on our servers.</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Health logs, symptom entries, and medication records: stored locally on your device only</li>
        <li>AI analysis results: generated on-demand via Google Gemini API and not retained by us</li>
        <li>Camera images used for medication scanning: processed in-session only and not stored remotely</li>
        <li>You may delete all app data at any time using the "Wipe All System Data" option in Settings</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">6. Data Retention</h2>
      <p className="mb-4">We retain your personal information only as long as necessary to provide our services and fulfill the purposes described in this policy:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Account data</strong> (name, email, contact info): retained for the duration of your account and deleted within 30 days of account closure upon request</li>
        <li><strong>Usage and analytics data</strong>: retained for up to 24 months to improve our services, then deleted or anonymized</li>
        <li><strong>SMS communication records</strong>: retained for up to 12 months for compliance and service operation purposes</li>
        <li><strong>HIT — Health Intelligence Tracker data</strong>: stored locally on your device only — we do not retain it; you control it entirely and can delete it at any time from within the app</li>
        <li><strong>Support communications</strong>: retained for up to 3 years for dispute resolution and quality assurance</li>
      </ul>
      <p className="mb-6">To request early deletion of your data, contact us at <a href="mailto:info@aimicrotechlink.com" className="text-blue-500 hover:underline">info@aimicrotechlink.com</a>.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">7. Data Security</h2>
      <p className="mb-6">We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">8. Your Rights</h2>
      <p className="mb-6">You have the right to access, correct, or delete your personal data at any time. Contact us at <a href="mailto:info@aimicrotechlink.com" className="text-blue-500 hover:underline">info@aimicrotechlink.com</a> to make a request.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
      <p className="mb-2">AI Microtechlink Inc.</p>
      <p className="mb-2">Clearwater, Florida</p>
      <p className="mb-2">Email: <a href="mailto:info@aimicrotechlink.com" className="text-blue-500 hover:underline">info@aimicrotechlink.com</a></p>
      <p className="mb-6">Website: aimicrotechlink.com</p>
    </div>
  );
}
