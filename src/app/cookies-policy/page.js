import CookiesPolicy from '@/modules/cookiesPolicy'
export const metadata = {
  title: "Gamerge Cookies Policy | Enhance Experience & Control",
  description: "Gamerge’s Cookies Policy—learn how we use essential, functional, analytical & marketing cookies to improve your experience and how you can manage them.",
  alternates: {
    canonical: "https://gamerge.ai/cookies-policy",
  },
};
export default function page() {
  return (
    <>
      <CookiesPolicy />
    </>
  )
}
