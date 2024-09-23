import prisma from "@repo/db/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from 'next/navigation'


async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id),
        },
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0,
    };
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id),
        },
    });
    return txns.map((t) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
    }));
}

export default async function Dashboard() {

    const session = await getServerSession(authOptions);
        if (!session?.user) {
            redirect('/api/auth/signin')
        }

    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return (
        <div className="w-screen bg-gray-100 min-h-screen p-6">
            <h1 className="text-4xl text-[#6a51a6] mb-8 font-bold text-center">
                Transfer
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="shadow-lg rounded-lg p-6">
                    <AddMoney />
                </div>
                <div className="shadow-lg rounded-lg p-6">
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                </div>
                <div className="shadow-lg rounded-lg p-6 md:col-span-2">
                    
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    );
}
