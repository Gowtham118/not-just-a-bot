import { TopBar } from "../components/TopBar";
import Sidebar from "../components/SideBar";
import { useBalances } from "../hooks/useBalances";
import { Balances } from "../components/Balances";
import { Transactions } from "../components/Transactions";
import { useTransactions } from "../hooks/useTransactions";
import LineChartComponent from "../components/Charts";
import { useChartData } from "../hooks/useChartData";
import { useState } from "react";
import { Chat } from "../chat/Chat";

export const Dashboard = () => {
  const [currentDashboard, setCurrentDashboard] = useState("home");
  const balances = useBalances();
  const transactions = useTransactions();
  const chartData = useChartData();

  return (
    <div className="bg-[#18181a]">
      <TopBar />
      <div className="flex">
        <Sidebar setCurrentDashboard={setCurrentDashboard} />
        {currentDashboard == "home" && (
          <div className="w-[80%]">
            <Chat />
          </div>
        )}
        {currentDashboard === "overview" && (
          <div className="w-[80%]">
            <div>{balances && <Balances balances={balances} />}</div>
            <div className="h-[700px]">
              <div className="p-6 text-xl font-bold text-light-grey">
                USD Value Trend Over Time:-
              </div>
              {chartData && <LineChartComponent data={chartData} />}
            </div>
          </div>
        )}
        {currentDashboard === "transactions" && transactions && (
          <Transactions transactions={transactions} />
        )}
      </div>
    </div>
  );
};
