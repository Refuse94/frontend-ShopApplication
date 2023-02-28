import { useState, useEffect } from "react";

/*interface ResponseBase {
  isPending: boolean;
  error: string | null;
}
*/
export function useFetch<T>(url: string): {
  data: T | null;
  isPending: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }

        const data = (await res.json()) as T;
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  if (Array.isArray(data)) {
    return { data, isPending, error };
  }
  return { data, isPending, error };
}
