import PrivacyPolicy from '@/modules/privacyPolicy'

export const metadata = {
  title: "Gamerge Privacy Policy & Data Protection Info",
  description: "Understand how Gamerge collects, uses, and protects your data. Transparent policies, encrypted info, and full control of your personal data.",
  alternates: {
    canonical: "https://gamerge.ai/privacy-policy",
  },
};


export default function page() {
    return (
        <>
            <PrivacyPolicy />
        </>
    )
}
