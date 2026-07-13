import { ref, watchEffect, toValue, type MaybeRefOrGetter } from "vue";

export function useFetch<T>(url: MaybeRefOrGetter<string>) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  async function execute() {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(toValue(url));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data.value = await res.json();
    } catch (e: any) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  watchEffect(() => {
    // re‑fetch whenever the url changes
    execute();
  });

  return { data, error, loading, refetch: execute };
}
