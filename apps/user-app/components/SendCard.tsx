"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSend = async () => {
        setLoading(true);
        setSuccess(false);
        try {
            await p2pTransfer(number, Number(amount) * 100);
            setSuccess(true); // Show success message
        } catch (error) {
            console.error("Error sending money:", error);
            // Optionally handle the error state here
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <Card title="Send">
                {success ? (
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-green-600">Money Sent!</h2>
                        <p className="text-gray-600">You have successfully sent ₹{amount} to {number}.</p>
                    </div>
                ) : (
                    <div className="min-w-72 pt-2 space-y-4">
                        <TextInput
                            placeholder={"Number"}
                            label="Number"
                            onChange={(value) => setNumber(value)}
                        />
                        <TextInput
                            placeholder={"Amount"}
                            label="Amount"
                            onChange={(value) => setAmount(value)}
                        />
                        <div className="flex justify-center pt-4">
                            <div className={`relative ${loading ? "cursor-not-allowed" : ""}`}>
                                <Button onClick={handleSend}>
                                    {loading ? "Sending..." : "Send"}
                                </Button>
                                {loading && (
                                    <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg"></div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}
