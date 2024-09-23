"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button"; // Assuming you have this component
import { TextInput } from "@repo/ui/textinput"; // Adjust the import path as needed

export const P2PTransfer = () => {
    const [amount, setAmount] = useState(0);
    const [toNumber, setToNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleTransfer = async () => {
        const response = await fetch('/api/p2pTransfers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to: toNumber, amount }),
        });

        const data = await response.json();
        setMessage(data.message);
        if (response.ok) {
            // Optionally, reset the form or do other state updates
            setAmount(0);
            setToNumber("");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Send Money</h2>
            <TextInput
                label="Recipient Phone Number"
                placeholder="Enter phone number"
                onChange={setToNumber}
            />
            <TextInput
                label="Amount"
                placeholder="Enter amount"
                onChange={(value) => setAmount(Number(value))}
            />
            <Button onClick={handleTransfer}>Send</Button>
            {message && <div className="mt-2">{message}</div>}
        </div>
    );
};
