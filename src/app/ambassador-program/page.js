import AmbassadorProgram from '@/modules/ambassadorProgram'

export const metadata = {
  title: "Gamerge Ambassador Program | Join, Refer & Earn Rewards",
  description: "Become a Gamerge Ambassador today! Help grow our gamefi community, earn exclusive rewards, early access, and more. Apply now and join the journey. ",
  alternates: {
    canonical: "https://gamerge.ai/ambassador-program",
  },
};

export default function page() {
  return (
    <div>
      <AmbassadorProgram />
    </div>
  )
}
