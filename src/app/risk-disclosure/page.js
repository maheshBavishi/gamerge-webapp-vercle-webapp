import RiskDisclosure from '@/modules/riskDisclosure'


export const metadata = {
  title: "Gamerge Risk Disclosure & Crypto Game Warnings",
  description: "Understand the risks of crypto gaming on Gamerge—volatility, security, loss, and regulations. Play responsibly and protect your crypto assets.",
  alternates: {
    canonical: "https://gamerge.ai/risk-disclosure",
  },
};

export default function page() {
  return (
    <div>
      <RiskDisclosure />
    </div>
  )
}
