import { Dropdown } from "@/components/Dropdown";
import { TestnetAlert } from "@/components/TestnetAlert";
import { TestnetCard } from "@/components/TestnetCard";
import AllStatus from "../public/icons/all_status.svg";
import { useState } from "react";

export default function Home({ data }) {
  const [filterStatus, setfilterStatus] = useState(undefined);
  const [sortKey, setSortKey] = useState("");

  const statusFilterItems = [
    ...new Set(data.testnet.map((testnet) => testnet.status)),
  ].map((status) => ({
    item: status,
    itemView: <TestnetAlert status={status}></TestnetAlert>,
  }));

  return (
    <div className="flex flex-col">
      <div className="sticky top-[60px] bg-secondary-300 mx-14 pt-10 pb-5 flex justify-between">
        <span className="font-bold text-2xl">
          Testnets ({data.testnet?.length ?? 0})
        </span>
        <Dropdown
          title={"Filter by"}
          items={[
            {
              item: undefined,
              itemView: (
                <div className="flex gap-2 items-center text-accent-neutral pl-1">
                  <AllStatus className="fill-accent-neutral"></AllStatus>
                  <span className="text-sm font-medium">All</span>
                </div>
              ),
            },
            ...statusFilterItems,
          ]}
          onChange={(newFilterStatus) => {
            setfilterStatus(newFilterStatus);
          }}
        ></Dropdown>
      </div>
      <main className="mx-14 gap-6 flex flex-col">
        {data.testnet
          .filter((testNet) => {
            if (filterStatus) {
              return testNet.status === filterStatus;
            }
            return true;
          })
          .sort((testnet1, testnet2) => {
            if (testnet1["status"] === testnet2["status"]) {
              return 0;
            } else if (testnet1["status"] < testnet2["status"]) {
              return -1;
            } else {
              return 1;
            }
          })
          .map((testNet) => (
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
