import ListYourToken from '@/modules/listYourToken'

export const metadata = {
  title: "List Your Token on Gamerge – Live in a Day",
  description: "List your token on Gamerge to instantly gain gaming utility. Go live in a day, connect with gamers and elevate your token’s real-world usability.",
  alternates: {
    canonical: "https://gamerge.ai/list-your-token",
  },
};

export default function page() {
  return (
      <ListYourToken/>
  )
}
