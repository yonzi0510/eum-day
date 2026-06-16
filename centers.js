// ═══════════════════════════════════════════
//  Day:음 — centers.js
//  CENTERS는 Supabase DB에서 로드됩니다.
//  이 파일은 로드 헬퍼만 포함합니다.
// ═══════════════════════════════════════════

const SUPABASE_URL = 'https://lujzhilzhiktrlidhpxs.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Vbzkn1OLZbLe-EgrvlACEA_5RjfHnS9';
const ADMIN_CODE   = '0508';

// CENTERS는 loadCenters() 후 채워짐
let CENTERS = {};

async function loadCenters() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/centers?select=*`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });
    if (!res.ok) throw new Error('centers 로드 실패');
    const rows = await res.json();
    CENTERS = {};
    rows.forEach(r => {
      CENTERS[r.id] = {
        name:    r.name,
        short:   r.short,
        color:   r.color,
        key:     r.key,
        expires: r.expires,
        pilot:   r.pilot,
        type:    r.type
      };
    });
    return true;
  } catch(e) {
    console.error('centers 로드 오류:', e);
    // 폴백: 하드코딩 기본값
    CENTERS = {
      sapgyo:  { name: '삽교주간보호센터',    short: '삽교',    color: '#1F3864', key: '0101', expires: '2026-12-31', pilot: true, type: 'daycenter' },
      center2: { name: '덕산주간보호센터',    short: '덕산',    color: '#0D6E55', key: '0202', expires: '2026-12-31', pilot: true, type: 'daycenter' },
      center3: { name: '내포소망주간보호센터', short: '내포소망', color: '#5C3489', key: '0303', expires: '2026-12-31', pilot: true, type: 'daycenter' },
    };
    return false;
  }
}
