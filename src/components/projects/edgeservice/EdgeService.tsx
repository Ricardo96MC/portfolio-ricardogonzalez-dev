"use client";

import { getEdges } from "@/lib/api/edgesService";
import { EdgeServiceInterface } from "../../../types/EdgeServiceInterface";
import { useEffect, useState } from "react";

export default function EdgeService() {

    const [edges, setEdges] = useState<EdgeServiceInterface[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getEdges();
            setEdges(data);
        }
        fetchData();
    }, [])

    return (
        <div className="pt-10 space-y-4">
            <h1 className="text-2xl font-semibold text-[#EAEAEA] mb-4">
                EdgePing Service
            </h1>
            <div className="grid gap-4">
                {edges.map((edge) => (
                    <div
                        key={edge.id}
                        className="p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]"
                    >
                        <p>
                            <strong>Source:</strong> {edge.source}
                        </p>
                        <p>
                            <strong>Target:</strong> {edge.target}
                        </p>
                        <p>
                            <strong>Status:</strong>{" "}
                            <span
                                className={
                                    edge.status === "UP" ? "text-green-400" : "text-red-400"
                                }
                            >
                                {edge.status}
                            </span>
                        </p>
                        <p>
                            <strong>URL:</strong> {edge.url}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}


