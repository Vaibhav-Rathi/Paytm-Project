import { Card } from "@repo/ui/card";

export const BalanceCard = ({ amount, locked }: {
    amount: number;
    locked: number;
}) => {
    return (
        <Card title={"Balance"}>
            <div className="bg-gray-50 rounded-lg p-4 shadow-md">
                <div className="flex justify-between items-center border-b border-slate-300 pb-2">
                    <div className="text-gray-700 font-semibold">
                        Unlocked Balance
                    </div>
                    <div className="text-gray-900 font-bold">
                        {amount / 100} INR
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-slate-300 py-2">
                    <div className="text-gray-700 font-semibold">
                        Total Locked Balance
                    </div>
                    <div className="text-gray-900 font-bold">
                        {locked / 100} INR
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-slate-300 py-2">
                    <div className="text-gray-700 font-semibold">
                        Total Balance
                    </div>
                    <div className="text-gray-900 font-bold">
                        {(locked + amount) / 100} INR
                    </div>
                </div>
            </div>
        </Card>
    );
};
