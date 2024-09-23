import prisma from "@repo/db/client";
import { P2PTransfersFunction } from "../../../components/OnRampTransactionsForTransactionPage";
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

async function getp2pTransfer() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id),
        },
    });
    return txns
        .map((t) => ({
            time: t.timestamp,
            amount: t.amount,
            status: "Success",
            provider: "P2PTransfer",
        }));
}

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect('/api/auth/signin')
      }

    const balance = await getBalance();
    const transactions = await getp2pTransfer();

    return (
        <div className="w-screen bg-gray-100 min-h-screen p-6">
            <h1 className="text-4xl text-[#6a51a6] mb-8 font-bold text-center">
                Transactions
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="shadow-lg rounded-lg p-6 md:col-span-2">
                    <P2PTransfersFunction transactions={transactions} />
                </div>
            </div>
        </div>
    );
}
