import { useRouter } from "next/router";

const LandingZone = () => {
  const router = useRouter();
  console.log({ query: router.query });
  return (
    <>
      <h1>loading</h1>
    </>
  );
};

export default LandingZone;
