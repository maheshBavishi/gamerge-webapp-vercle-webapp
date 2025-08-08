import CustomerAgreement from '@/modules/customerAgreement'

export const metadata = {
  title: "Gamerge Customer Agreement & Terms of Service",
  description: "Read the Gamerge Customer Agreement outlining service terms, user rights, limitations, legal policies, and conditions for safe platform engagement.",
  alternates: {
    canonical: "https://gamerge.ai/customer-agreement",
  },
};

export default function page() {
  return (
    <div>
      <CustomerAgreement />
    </div>
  )
}
