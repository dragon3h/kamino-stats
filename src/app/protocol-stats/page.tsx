import { getData } from "../services/api/get-data";
import { URL } from "../constants/api-constants";

export default async function ProtocolStats() {
  const tvlData = getData(URL.TVL);
  const allTimeVolumeData = getData(URL.ALL_TIME_VOLUME);
  const allTimeFeesAndRewardsData = getData(URL.ALL_TIME_FEES_AND_REWARDS);

  const [tvl, allTimeVolume, allTimeFeesAndRewards] = await Promise.all([
    tvlData,
    allTimeVolumeData,
    allTimeFeesAndRewardsData,
  ]);

  const infoPanelClass =
    "flex-none basis-1/4 rounded-lg bg-indigo-800 opacity-90 hover:opacity-100 shadow-xl min-w-[150px] p-1.5 h-40 m-2";
  const infoPanelHeaderClass = "text-1.5xl pb-10 text-center";
  const infoPanelValueClass = "text-1.5xl text-center lining-nums";

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className="">
      <h1 className="text-4xl text-center p-10">Protocol Stats page</h1>
      <div className="flex flex-wrap justify-around min-w-[30%]">
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>TVL</h2>
          <p className={infoPanelValueClass}>{USDollar.format(tvl?.tvl) || 0}</p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL TIME FEES</h2>
          <p className={infoPanelValueClass}>
            {USDollar.format(allTimeFeesAndRewards?.totalUsd) || 0}
          </p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL TIME VOLUME</h2>
          <p className={infoPanelValueClass}>{USDollar.format(allTimeVolume?.volumeUsd) || 0}</p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL SOMETHING</h2>
          <p className={infoPanelValueClass}>0</p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL SOMETHING</h2>
          <p className={infoPanelValueClass}>0</p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL SOMETHING</h2>
          <p className={infoPanelValueClass}>0</p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL SOMETHING</h2>
          <p className={infoPanelValueClass}>0</p>
        </div>
        <div className={infoPanelClass}>
          <h2 className={infoPanelHeaderClass}>ALL SOMETHING</h2>
          <p className={infoPanelValueClass}>0</p>
        </div>
      </div>
    </main>
  );
}
