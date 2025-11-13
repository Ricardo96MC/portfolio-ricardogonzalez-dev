import { EdgeServiceInterface } from "@/types/EdgeServiceInterface";

export async function getEdges(): Promise<EdgeServiceInterface[]> {
  const res = await fetch('http://localhost:8080/api/v1/edges', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
      }
    })
    
    const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch edges");
  return data;
}