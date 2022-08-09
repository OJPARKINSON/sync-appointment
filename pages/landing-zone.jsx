import { useRouter } from "next/router";

const LandingZone = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <>
      <h1>loading</h1>
    </>
  );
};

export default LandingZone;
