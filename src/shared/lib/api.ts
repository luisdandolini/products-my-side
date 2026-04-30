const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    console.error(
      `ERRO NA API: Status ${response.status} na URL ${BASE_URL}${endpoint}`
    );

    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `Erro ${response.status}`);
  }

  return response.json();
}
