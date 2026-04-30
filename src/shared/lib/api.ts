const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    next: { revalidate: 3600 },
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    console.error(
      `ERRO NA API: Status ${response.status} na URL ${BASE_URL}${endpoint}`
    );
    throw new Error(`Erro ${response.status}`);
  }

  return response.json();
}
