"use client"

import { Card } from "@repo/ui/card";
import { useState } from "react";

export const OnRampTransactions = ({
    transactions,
}: {
    transactions: {
        time: Date;
        amount: number;
        status: string; // TODO: Can the type of `status` be more specific?
        provider: string;
    }[];
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    // Get current transactions to display
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    if (!transactions.length) {
        return (
            <Card title="Recent Transactions">
                <div className="text-center py-8 text-gray-500">
                    No Recent Transactions
                </div>
            </Card>
        );
    }

    return (
        <Card title="Recent Transactions">
            <div className="pt-2 space-y-4">
                {currentTransactions.map((t, index) => (
                    <div
                        key={index}
                        className="flex justify-between p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                        <div className="flex flex-col">
                            <div className="text-sm font-medium text-gray-800">
                                Received INR
                            </div>
                            <div className="text-slate-600 text-xs">
                                {t.time.toLocaleString()}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-right">
                            <div className={`text-lg font-bold ${t.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                                + Rs {t.amount / 100}
                            </div>
                            <div className="text-xs text-gray-500">
                                via {t.provider}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </Card>
    );
};
