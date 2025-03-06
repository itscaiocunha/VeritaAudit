// dashboardService.ts
export const fetchDashboardStats = async () => {
  try {
    const response = await fetch('https://backend-verita-audit.vercel.app/api/dashboard/card');
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do dashboard');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro no fetchDashboardStats:', error);
    throw error;
  }
};