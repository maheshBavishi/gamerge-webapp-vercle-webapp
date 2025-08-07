import Staking from "@/modules/staking";
export const metadata = {
  title: "Suggestion - Crypto Staking Platform | Staking Rewards",
  description: "Gamerge Staking on a crypto gaming platform. Play to earn mobile crypto games in a powerful gamefi ecosystem.",
  alternates: {
    canonical: "https://gamerge.ai/staking",
  },
};
export default function page() {
  return (
    <div>
      <Staking shadowShow />
    </div>
  );
}
