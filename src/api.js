const BACKEND_FALLBACK = 'https://betting-king-backend.onrender.com';

export async function fetchTodayResults() {
  try {
    const res = await fetch('/api/results/today');
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
          return json;
        }
      }
    }
  } catch (e) {
    console.warn('[API] /api/results/today proxy unavailable, falling back:', e.message);
  }

  try {
    const res = await fetch(`${BACKEND_FALLBACK}/api/results/today`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.success && Array.isArray(json.data)) {
        return json;
      }
    }
  } catch (e) {
    console.error('[API] Direct backend fetch failed:', e.message);
  }

  return { success: false, data: [] };
}

export async function fetchMonthlyChart(month, year) {
  try {
    const res = await fetch(`/api/chart/monthly?month=${month}&year=${year}`);
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const json = await res.json();
        if (json && json.success && json.rows) {
          return json;
        }
      }
    }
  } catch (e) {
    console.warn('[API] /api/chart/monthly proxy unavailable, falling back:', e.message);
  }

  try {
    const res = await fetch(`${BACKEND_FALLBACK}/api/chart/monthly?month=${month}&year=${year}`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.success && json.rows) {
        return json;
      }
    }
  } catch (e) {
    console.error('[API] Direct chart fetch failed:', e.message);
  }

  return { success: false, rows: [] };
}


export async function fetchAnnouncement() {
  try {
    const res = await fetch('/api/announcement');
    if (res.ok) {
      const json = await res.json();
      if (json && json.success) return json;
    }
  } catch (e) {}

  try {
    const res = await fetch(`${BACKEND_FALLBACK}/api/announcement`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.success) return json;
    }
  } catch (e) {}

  return { success: false, active: false, text: '' };
}
