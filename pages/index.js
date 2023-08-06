import { TestnetCard } from "@/components/TestnetCard";

export default function Home({ data }) {
  return (
    <div>
      <main className="mx-14 my-10 gap-6 flex flex-col">
        {data.testnet.map((testNet) => (
          <TestnetCard
            key={testNet.id}
            name={testNet.name}
            status={testNet.status}
            offChainActors={testNet.testnet_off_chain_actors}
            chains={testNet.testnet_chains}
            updatedAt={testNet.updated_at}
          ></TestnetCard>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/data");
  const { data } = await response.json();
  return { props: { data } };
}
