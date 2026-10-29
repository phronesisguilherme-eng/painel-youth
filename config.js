// Painel Youth — ligação com o seu banco no Supabase.
// No Supabase: Project Settings > API (ou "Connect"). Copie os dois valores e cole entre as aspas.
// A "anon public key" pode ficar aqui: quem protege os dados é o login + a lista de membros do banco.
window.YOUTH_CONFIG = {
  supabaseUrl: 'https://hqwordzrvpiulivgfmpc.supabase.co',        // ex.: https://abcdefgh.supabase.co
  supabaseAnonKey: 'sb_publishable_LTEZJ26-ndd4Pc4ptj5GVQ_XvXlDR6z', // começa com eyJ...
  // Chave PÚBLICA das notificações no celular (pode ficar aqui; a privada fica só no Supabase).
  vapidPublicKey: 'BBsPClkvmDegEVWjAqrrP0ASLmOL2chUuRcGVTEaGLH38q3EjaytVlC4XLUay5w_5Vz1M7JRszOMJ4oUl9DsEas'
};
if (/COLE-AQUI/.test(window.YOUTH_CONFIG.supabaseUrl)) window.YOUTH_CONFIG.supabaseUrl = '';
