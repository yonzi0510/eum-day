// ═══════════════════════════════════════════
//  Day:음 — centers.js
//  센터 추가 시 이 파일 + app.html + app-homecare.html + index.html
//  4개 파일의 CENTERS를 동일하게 수정 후 GitHub 업로드
// ═══════════════════════════════════════════

var CENTERS = {
  sapgyo:  { name: '삽교주간보호센터',    short: '삽교',    color: '#1F3864', key: '0101', expires: '2026-12-31', pilot: true, type: 'daycenter' },
  center2: { name: '덕산주간보호센터',    short: '덕산',    color: '#0D6E55', key: '0202', expires: '2026-12-31', pilot: true, type: 'daycenter' },
  center3: { name: '내포소망주간보호센터', short: '내포소망', color: '#5C3489', key: '0303', expires: '2026-12-31', pilot: true, type: 'daycenter' },
  homecare1: { name: '삽교방문', short: '삽교방문', color: '#1F3864', key: '1111', expires: '2026-12-31', pilot: true, type: 'homecare' },
};

const ADMIN_CODE = '0508';

// DB 연동 없음 — loadCenters는 호환성용 빈 함수
async function loadCenters() { return true; }
