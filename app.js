const MENU = [
  { g: "Tổng quan", items: [{ id: "dash", icon: "fa-tachometer-alt", label: "Bảng điều hành đào tạo", roles: ["admin", "teacher", "student"] }] },
  { g: "Sinh viên", items: [
    { id: "students", icon: "fa-user-graduate", label: "Danh sách sinh viên", roles: ["admin", "teacher"] },
    { id: "intake", icon: "fa-door-open", label: "Tiếp nhận đợt thực tập", roles: ["admin"] },
    { id: "profile", icon: "fa-id-card", label: "Hồ sơ sinh viên", roles: ["admin", "teacher", "student"] }
  ]},
  { g: "Tổ chức lớp", items: [
    { id: "org", icon: "fa-university", label: "Trường / lớp / đợt", roles: ["admin"] },
    { id: "rotation", icon: "fa-random", label: "Phân luân phiên", roles: ["admin", "teacher"] },
    { id: "mentors", icon: "fa-user-md", label: "Phân công người hướng dẫn", roles: ["admin"] }
  ]},
  { g: "Lịch & điểm danh", items: [
    { id: "timetable", icon: "fa-calendar-alt", label: "Thời khóa biểu", roles: ["admin", "teacher", "student"] },
    { id: "attendance", icon: "fa-clipboard-check", label: "Điểm danh", roles: ["admin", "teacher", "student"] },
    { id: "leave", icon: "fa-file-medical", label: "Nghỉ phép / vắng có phép", roles: ["admin", "teacher", "student"] }
  ]},
  { g: "Giảng dạy", items: [
    { id: "theory", icon: "fa-chalkboard-teacher", label: "Bài giảng lý thuyết", roles: ["admin", "teacher", "student"] },
    { id: "seminar", icon: "fa-comments", label: "Giao ban / seminar", roles: ["admin", "teacher"] },
    { id: "docs", icon: "fa-book", label: "Tài liệu học tập", roles: ["admin", "teacher", "student"] }
  ]},
  { g: "Đánh giá", items: [
    { id: "skills", icon: "fa-check-double", label: "Đánh giá kỹ năng", roles: ["admin", "teacher", "student"] },
    { id: "logbook", icon: "fa-book-medical", label: "Nhật ký lâm sàng", roles: ["admin", "teacher", "student"] },
    { id: "finalexam", icon: "fa-file-signature", label: "Kiểm tra cuối đợt", roles: ["admin", "teacher"] },
    { id: "feedback", icon: "fa-comment-dots", label: "Phản hồi của sinh viên", roles: ["admin", "student"] }
  ]},
  { g: "Tổng kết", items: [
    { id: "grades", icon: "fa-table", label: "Bảng điểm", roles: ["admin", "teacher", "student"] },
    { id: "export", icon: "fa-print", label: "Xuất biểu mẫu / xác nhận", roles: ["admin"] },
    { id: "stats", icon: "fa-chart-bar", label: "Báo cáo thống kê", roles: ["admin"] }
  ]},
  { g: "Hợp tác", items: [
    { id: "partners", icon: "fa-handshake", label: "Trường đối tác", roles: ["admin"] },
    { id: "teachers", icon: "fa-user-nurse", label: "Giảng viên lâm sàng", roles: ["admin"] }
  ]},
  { g: "Hệ thống", items: [
    { id: "users", icon: "fa-users-cog", label: "Người dùng & phân quyền", roles: ["admin"] },
    { id: "audit", icon: "fa-history", label: "Nhật ký thao tác", roles: ["admin"] },
    { id: "settings", icon: "fa-cog", label: "Cài đặt", roles: ["admin"] }
  ]}
];

const TITLES = {
  dash: ["Bảng điều hành đào tạo", "Tổng quan sinh viên, chuyên cần và việc cần xử lý"],
  students: ["Danh sách sinh viên", "Tìm kiếm, lọc, xuất và mở hồ sơ"],
  intake: ["Tiếp nhận đợt thực tập", "Ghi nhận sinh viên mới theo trường và đợt"],
  profile: ["Hồ sơ sinh viên", "Thông tin, luân phiên, điểm danh, đánh giá"],
  org: ["Trường / lớp / đợt", "Các đợt thực tập đang và sắp diễn ra"],
  rotation: ["Phân luân phiên", "Ma trận tổ × tuần, cảnh báo sĩ số"],
  mentors: ["Phân công người hướng dẫn", "Giảng viên phụ trách từng phòng"],
  timetable: ["Thời khóa biểu", "Buổi giảng, giao ban và ca lâm sàng"],
  attendance: ["Điểm danh", "Sáng / chiều — bấm để đổi trạng thái"],
  leave: ["Nghỉ phép / vắng có phép", "Đơn và trạng thái duyệt"],
  theory: ["Bài giảng lý thuyết", "Nội dung giảng trên khoa"],
  seminar: ["Giao ban / seminar", "Lịch báo cáo ca lâm sàng"],
  docs: ["Tài liệu học tập", "Bài giảng và quy trình kỹ thuật"],
  skills: ["Đánh giá kỹ năng", "Checklist và biểu đồ năng lực"],
  logbook: ["Nhật ký lâm sàng", "Số ca đã thực hiện so với yêu cầu"],
  finalexam: ["Kiểm tra cuối đợt", "Lý thuyết và thực hành"],
  feedback: ["Phản hồi của sinh viên", "Góp ý về buổi giảng và hướng dẫn"],
  grades: ["Bảng điểm", "Điểm thành phần theo tỷ trọng"],
  export: ["Xuất biểu mẫu", "Xác nhận thực tập — bản in"],
  stats: ["Báo cáo thống kê", "Sinh viên theo trường và phân bố điểm"],
  partners: ["Trường đối tác", "Thỏa thuận đào tạo và hạn hợp đồng"],
  teachers: ["Giảng viên lâm sàng", "Người hướng dẫn tại khoa"],
  users: ["Người dùng & phân quyền", "Quản trị, giảng viên, sinh viên"],
  audit: ["Nhật ký thao tác", "Ai đã làm gì, lúc nào"],
  settings: ["Cài đặt", "Tỷ trọng điểm và giao diện"]
};

const STATUS = {
  wait: ["Chờ tiếp nhận", "b-secondary"],
  active: ["Đang thực tập", "b-primary"],
  done: ["Hoàn thành", "b-success"],
  watch: ["Cần theo dõi", "b-warning"],
  stop: ["Dừng / không đạt", "b-danger"]
};
const ATT = {
  present: ["Có mặt", "b-success", "#3ac47d"],
  late: ["Trễ", "b-warning", "#f7b924"],
  leave: ["Vắng có phép", "b-info", "#16aaff"],
  absent: ["Vắng không phép", "b-danger", "#d92550"]
};

const S = {
  role: null,
  user: null,
  page: "dash",
  theme: localStorage.getItem("vltl_theme") || "light",
  mini: false,
  q: "",
  batch: "all",
  school: "all",
  status: "all",
  pageNo: 1,
  sort: "name",
  selected: new Set(),
  openId: null,
  tab: "info",
  loading: false,
  weights: JSON.parse(localStorage.getItem("vltl_weights") || "null") || { ...DB.weights },
  audit: JSON.parse(localStorage.getItem("vltl_audit") || "[]"),
  undo: null,
  charts: []
};

function esc(s) {
  const map = {
    "&": "\u0026amp;",
    "<": "\u0026lt;",
    ">": "\u0026gt;",
    "\"": "\u0026quot;",
    "'": "\u0026#39;"
  };
  return String(s ?? "").replace(/[&<>"']/g, (c) => map[c]);
}
function schoolOf(id) { return DB.schools.find((x) => x.id === id); }
function teacherOf(id) { return DB.teachers.find((x) => x.id === id); }
function groupOf(id) { return DB.groups.find((x) => x.id === id); }
function batchOf(id) { return DB.batches.find((x) => x.id === id); }
function initials(name) { return name.split(" ").filter(Boolean).slice(-2).map((p) => p[0]).join("").toUpperCase(); }
function mask(v, role) { if (role === "admin") return v; return String(v).replace(/.(?=.{3})/g, "•"); }
function logAct(action) {
  S.audit.unshift({ at: new Date().toLocaleString("vi-VN"), who: S.user?.name || "—", action });
  S.audit = S.audit.slice(0, 40);
  localStorage.setItem("vltl_audit", JSON.stringify(S.audit));
}
function toast(msg, kind) {
  const h = document.getElementById("toastHost");
  const d = document.createElement("div");
  d.className = "toast " + (kind || "");
  d.textContent = msg;
  h.appendChild(d);
  setTimeout(() => d.remove(), 2800);
}
function confirmBox(msg) {
  return new Promise((resolve) => {
    const host = document.getElementById("modalHost");
    host.innerHTML = `<div class="modal-mask"><div class="modal" role="dialog" aria-modal="true">
      <h3 style="margin:0 0 8px">Xác nhận</h3>
      <p>${esc(msg)}</p>
      <div style="display:flex;gap:8px;justify-content:flex-end">
        <button class="btn ghost" id="cNo">Hủy</button>
        <button class="btn danger" id="cYes">Đồng ý</button>
      </div></div></div>`;
    host.querySelector("#cNo").onclick = () => { host.innerHTML = ""; resolve(false); };
    host.querySelector("#cYes").onclick = () => { host.innerHTML = ""; resolve(true); };
  });
}
function visibleStudents() {
  let list = DB.students.slice();
  if (S.role === "teacher") list = list.filter((s) => s.teacher === "t1");
  if (S.role === "student") list = list.filter((s) => s.id === "SV1001");
  if (S.batch !== "all") list = list.filter((s) => s.batch === S.batch);
  if (S.school !== "all") list = list.filter((s) => s.school === S.school);
  if (S.status !== "all") list = list.filter((s) => s.status === S.status);
  const q = S.q.trim().toLowerCase();
  if (q) list = list.filter((s) => (s.name + s.id + (schoolOf(s.school)?.name || "") + s.klass).toLowerCase().includes(q));
  list.sort((a, b) => S.sort === "score" ? b.score - a.score : a.name.localeCompare(b.name, "vi"));
  return list;
}
function totalScore(s) {
  const w = S.weights;
  const skillAvg = Object.values(s.skills).reduce((a, b) => a + b, 0) / Object.values(s.skills).length;
  const skill10 = (skillAvg / 5) * 10;
  const theory = Math.min(10, s.score);
  const exam = Math.min(10, +(s.score - 0.3).toFixed(1));
  const attitude = Math.min(10, 6 + s.att / 25);
  const att = s.att / 10;
  const sum = att * w.att + attitude * w.attitude + skill10 * w.skill + theory * w.theory + exam * w.exam;
  return +(sum / 100).toFixed(1);
}

function killCharts() { S.charts.forEach((c) => c.destroy()); S.charts = []; }

function layout() {
  const sb = document.getElementById("sidebar");
  const groups = MENU.map((g) => {
    const items = g.items.filter((it) => it.roles.includes(S.role));
    if (!items.length) return "";
    return `<div class="nav-group">${esc(g.g)}</div>` + items.map((it) =>
      `<button class="nav-link ${S.page === it.id ? "active" : ""}" data-page="${it.id}" aria-label="${esc(it.label)}">
        <i class="fas ${it.icon}"></i><span>${esc(it.label)}</span></button>`
    ).join("");
  }).join("");
  sb.innerHTML = `<div class="brand"><img src="logo.png" alt="Logo bệnh viện" onerror="this.style.display='none'">
    <div class="brand-text"><strong>Bệnh viện Y học cổ truyền TP.HCM</strong><small>Khoa VLTL – PHCN</small></div></div>
    <nav class="side-scroll" aria-label="Menu chính">${groups}</nav>`;
  sb.querySelectorAll("[data-page]").forEach((b) => b.onclick = () => go(b.dataset.page));

  const [title, sub] = TITLES[S.page] || ["", ""];
  document.getElementById("pageTitle").innerHTML = `<div class="page-ico"><i class="fas fa-hospital"></i></div>
    <div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div>`;
  document.getElementById("whoName").textContent = S.user.name;
  document.getElementById("whoRole").textContent = S.user.roleLabel;
  document.getElementById("avatar").textContent = initials(S.user.name);
  const notes = S.audit.slice(0, 3);
  document.getElementById("bellDot").textContent = String(Math.min(9, DB.students.filter((s) => s.status === "watch" || s.logDone < s.logNeed).length));
  document.getElementById("content").innerHTML = `<div class="print-head"><strong>BỆNH VIỆN Y HỌC CỔ TRUYỀN TP. HỒ CHÍ MINH</strong><span>Khoa Vật lý trị liệu – Phục hồi chức năng</span><div>${esc(title)}</div></div>` + renderPage();
  bindPage();
  document.body.classList.toggle("sidebar-mini", S.mini);
}

function go(page) {
  S.page = page;
  S.pageNo = 1;
  document.body.classList.remove("sidebar-open");
  location.hash = "#/" + page;
  S.loading = true;
  document.getElementById("content").innerHTML = `<div class="card"><div class="card-b"><div class="skel"></div><div class="skel"></div><div class="skel"></div></div></div>`;
  setTimeout(() => { S.loading = false; layout(); }, 180);
}

function widget(icon, cls, num, label) {
  return `<div class="widget"><div class="w-ico ${cls}"><i class="fas ${icon}"></i></div><div><b>${num}</b><span>${label}</span></div></div>`;
}

function renderDash() {
  const list = visibleStudents();
  const active = list.filter((s) => s.status === "active").length;
  const schools = new Set(list.map((s) => s.school)).size;
  const soonEnd = DB.batches.filter((b) => b.status === "running").length;
  const att = list.length ? Math.round(list.reduce((a, s) => a + s.att, 0) / list.length) : 0;
  const incomplete = list.filter((s) => s.logDone < s.logNeed || s.status === "watch").length;
  const absentToday = list.filter((s) => ["absent", "leave"].includes(DB.attMarks[s.id]?.["T2Sáng"]));
  return `
    <div class="widget-row">
      ${widget("fa-user-graduate", "p", active, "Sinh viên đang thực tập")}
      ${widget("fa-university", "i", schools, "Trường đang có mặt")}
      ${widget("fa-hourglass-half", "w", soonEnd, "Đợt đang chạy / sắp kết")}
      ${widget("fa-percentage", "s", att + "%", "Chuyên cần tuần này")}
      ${widget("fa-folder-open", "d", incomplete, "Hồ sơ chưa hoàn tất")}
      ${widget("fa-user-nurse", "p", DB.teachers.length, "Giảng viên đang hướng dẫn")}
    </div>
    <div class="filters no-print">
      <select class="field" id="fBatch">${batchOptions()}</select>
      <select class="field" id="fSchool">${schoolOptions()}</select>
      <button class="btn sm" id="todayBtn">Hôm nay</button>
    </div>
    <div class="grid-2">
      <div>
        <div class="card"><div class="card-h">Sinh viên theo trường</div><div class="card-b"><canvas id="chSchool" height="140"></canvas></div></div>
        <div class="card"><div class="card-h">Chuyên cần theo tuần</div><div class="card-b"><canvas id="chAtt" height="120"></canvas></div></div>
      </div>
      <div>
        <div class="card"><div class="card-h">Lịch hôm nay</div><div class="card-b"><ul class="timeline">${DB.agenda.map((a) => `<li><div><b>${a.time}</b></div><div class="tl-dot"></div><div><b>${esc(a.title)}</b><div style="color:var(--muted)">${esc(a.place)} · ${esc(a.who)}</div></div></li>`).join("")}</ul></div></div>
        <div class="card"><div class="card-h">Sinh viên vắng hôm nay</div><div class="card-b">${absentToday.length ? absentToday.slice(0, 6).map((s) => `<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>${esc(s.name)}</span><span class="badge ${ATT[DB.attMarks[s.id]["T2Sáng"]][1]}">${ATT[DB.attMarks[s.id]["T2Sáng"]][0]}</span></div>`).join("") : "<span class='badge b-success'>Không có vắng</span>"}</div></div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card"><div class="card-h">Phân bố theo phòng luân phiên</div><div class="card-b"><canvas id="chRoom" height="140"></canvas></div></div>
      <div class="card"><div class="card-h">Phân bố điểm tổng kết</div><div class="card-b"><canvas id="chScore" height="140"></canvas></div></div>
    </div>
    <div class="card"><div class="card-h">Cần xử lý</div><div class="card-b">
      ${list.filter((s) => s.logDone < s.logNeed).slice(0, 4).map((s) => `<div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:8px;align-items:center"><span>${esc(s.name)} — thiếu logbook (${s.logDone}/${s.logNeed})</span><button class="btn sm" data-open="${s.id}">Xử lý</button></div>`).join("") || "Không có việc tồn."}
    </div></div>
    <div class="card"><div class="card-h">Phân luân phiên hiện tại <span class="no-print" style="font-weight:400;text-transform:none">Kéo tên giữa các phòng</span></div><div class="card-b"><div class="rooms" id="roomBoard">${DB.groups.map((g) => roomBox(g, list)).join("")}</div></div></div>
    <div class="card no-print"><div class="card-h">Chú giải trạng thái</div><div class="card-b legend">
      ${Object.values(STATUS).map((s) => `<span class="badge ${s[1]}">${s[0]}</span>`).join("")}
      ${Object.values(ATT).map((s) => `<span class="badge ${s[1]}">${s[0]}</span>`).join("")}
    </div></div>`;
}
function roomBox(g, list) {
  const t = teacherOf(g.teacher);
  const members = list.filter((s) => s.group === g.id);
  return `<div class="room" data-drop="${g.id}"><h4>${esc(g.name)}</h4><div style="color:var(--muted);font-size:.75rem">${esc(g.tech)} · ${esc(t.name)} · ${members.length}/${g.cap}</div>
    ${members.map((s) => `<span class="chip" draggable="true" data-sid="${s.id}">${esc(s.name.split(" ").slice(-2).join(" "))}</span>`).join("")}
    ${members.length > g.cap ? `<div class="badge b-danger" style="margin-top:6px">Vượt sĩ số</div>` : ""}</div>`;
}
function batchOptions() {
  return `<option value="all">Mọi đợt</option>` + DB.batches.map((b) => `<option value="${b.id}" ${S.batch === b.id ? "selected" : ""}>${esc(b.name)}</option>`).join("");
}
function schoolOptions() {
  return `<option value="all">Mọi trường</option>` + DB.schools.map((s) => `<option value="${s.id}" ${S.school === s.id ? "selected" : ""}>${esc(s.short)}</option>`).join("");
}

function renderStudents() {
  const all = visibleStudents();
  const size = 8;
  const pages = Math.max(1, Math.ceil(all.length / size));
  if (S.pageNo > pages) S.pageNo = pages;
  const rows = all.slice((S.pageNo - 1) * size, S.pageNo * size);
  return `<div class="card"><div class="card-h">Danh sách <span>${all.length} sinh viên</span></div><div class="card-b">
    <div class="filters no-print">
      <input class="field" id="q2" placeholder="Tìm tên, mã, trường..." value="${esc(S.q)}">
      <select class="field" id="fBatch">${batchOptions()}</select>
      <select class="field" id="fSchool">${schoolOptions()}</select>
      <select class="field" id="fStatus">
        <option value="all">Mọi trạng thái</option>
        ${Object.entries(STATUS).map(([k, v]) => `<option value="${k}" ${S.status === k ? "selected" : ""}>${v[0]}</option>`).join("")}
      </select>
      <button class="btn sm secondary" id="expCsv">Xuất Excel</button>
      <button class="btn sm ghost" id="impBtn">Nhập Excel</button>
      <button class="btn sm danger" id="delSel">Xóa đã chọn</button>
    </div>
    <div class="table-wrap"><table class="data as-cards"><thead><tr>
      <th></th><th>Mã SV</th><th>Họ tên</th><th>Ngày sinh</th><th>Trường / lớp</th><th>Đợt</th><th>Tổ</th><th>Người HD</th><th>Chuyên cần</th><th>Điểm</th><th>Trạng thái</th>
    </tr></thead><tbody>
    ${rows.map((s) => `<tr class="clickable" data-open="${s.id}">
      <td data-label=""><input type="checkbox" class="pick" data-id="${s.id}" ${S.selected.has(s.id) ? "checked" : ""}></td>
      <td data-label="Mã">${esc(s.id)}</td>
      <td data-label="Họ tên"><b>${esc(s.name)}</b></td>
      <td data-label="Ngày sinh">${S.role === "student" ? "••/••/••••" : esc(s.dob)}</td>
      <td data-label="Trường">${esc(schoolOf(s.school).short)} · ${esc(s.klass)}</td>
      <td data-label="Đợt">${esc(batchOf(s.batch).name)}</td>
      <td data-label="Tổ">${esc(groupOf(s.group).name)}</td>
      <td data-label="HD">${esc(teacherOf(s.teacher).name)}</td>
      <td data-label="Chuyên cần">${s.att}%</td>
      <td data-label="Điểm"><b>${totalScore(s)}</b></td>
      <td data-label="TT"><span class="badge ${STATUS[s.status][1]}">${STATUS[s.status][0]}</span></td>
    </tr>`).join("")}
    </tbody></table></div>
    <div class="filters" style="margin-top:10px">
      <button class="btn sm ghost" id="prevP" ${S.pageNo <= 1 ? "disabled" : ""}>Trước</button>
      <span>Trang ${S.pageNo}/${pages}</span>
      <button class="btn sm ghost" id="nextP" ${S.pageNo >= pages ? "disabled" : ""}>Sau</button>
    </div>
  </div></div>`;
}

function renderProfile(id) {
  const s = DB.students.find((x) => x.id === (id || S.openId)) || visibleStudents()[0];
  if (!s) return `<div class="card"><div class="card-b">Không có hồ sơ.</div></div>`;
  S.openId = s.id;
  const tabs = [["info", "Thông tin"], ["rot", "Luân phiên"], ["att", "Điểm danh"], ["skill", "Đánh giá"], ["log", "Logbook"], ["score", "Điểm"], ["note", "Ghi chú"]];
  let body = "";
  if (S.tab === "info") body = `<p><b>${esc(s.name)}</b> · ${esc(s.id)}</p><p>Trường: ${esc(schoolOf(s.school).name)}</p><p>Lớp: ${esc(s.klass)} · Đợt: ${esc(batchOf(s.batch).name)}</p><p>Ngày sinh: ${S.role === "admin" ? esc(s.dob) : "ẩn một phần"}</p><p>SĐT: ${esc(mask(s.phone, S.role))} · CCCD: ${esc(mask(s.cccd, S.role))}</p>`;
  if (S.tab === "rot") body = `<p>Hiện tại: <b>${esc(groupOf(s.group).name)}</b> — ${esc(groupOf(s.group).tech)}</p><p>Người hướng dẫn: ${esc(teacherOf(s.teacher).name)}</p>`;
  if (S.tab === "att") body = `<p>Tỷ lệ chuyên cần: <b>${s.att}%</b></p>` + Object.entries(DB.attMarks[s.id]).map(([k, v]) => `<span class="badge ${ATT[v][1]}" style="margin:2px">${k}: ${ATT[v][0]}</span>`).join(" ");
  if (S.tab === "skill") body = Object.entries(s.skills).map(([k, v]) => `<div style="margin-bottom:6px">${esc(k)} <div class="progress"><i style="width:${v * 20}%"></i></div></div>`).join("");
  if (S.tab === "log") body = `<p>${s.logDone}/${s.logNeed} ca</p><div class="progress"><i style="width:${Math.round(s.logDone / s.logNeed * 100)}%"></i></div>`;
  if (S.tab === "score") body = `<p>Điểm tổng kết: <b>${totalScore(s)}</b> / 10</p><p>Điểm thành phần gần đúng theo tỷ trọng ở Cài đặt.</p>`;
  if (S.tab === "note") body = `<textarea class="field" id="noteBox" rows="4">${esc(s.note)}</textarea><div style="margin-top:8px"><button class="btn sm" id="saveNote">Lưu ghi chú</button></div>`;
  return `<div class="card"><div class="card-h">${esc(s.name)} <span class="badge ${STATUS[s.status][1]}">${STATUS[s.status][0]}</span></div><div class="card-b">
    <div class="tabs">${tabs.map(([k, l]) => `<button class="${S.tab === k ? "on" : ""}" data-tab="${k}">${l}</button>`).join("")}</div>
    ${body}
  </div></div>`;
}

function renderAttendance() {
  const list = visibleStudents().slice(0, 12);
  const cols = [];
  DB.weekDays.forEach((d) => DB.sessions.forEach((ss) => cols.push(d + ss)));
  return `<div class="card"><div class="card-h">Điểm danh tuần này</div><div class="card-b">
    <div class="legend" style="margin-bottom:8px">${Object.values(ATT).map((a) => `<span class="badge ${a[1]}">${a[0]}</span>`).join("")}</div>
    <div style="overflow:auto"><div class="att-grid" style="min-width:860px">
      <div></div>${cols.map((c) => `<div style="text-align:center;color:var(--muted)">${c}</div>`).join("")}
      ${list.map((s) => `<div>${esc(s.name.split(" ").slice(-2).join(" "))}</div>` + cols.map((c) => {
        const v = (DB.attMarks[s.id] && DB.attMarks[s.id][c]) || "present";
        return `<button class="att-cell" style="background:${ATT[v][2]}" data-sid="${s.id}" data-slot="${c}" aria-label="${esc(s.name)} ${c}">${ATT[v][0][0]}</button>`;
      }).join("")).join("")}
    </div></div>
    <p style="color:var(--muted)">Bấm ô để xoay: Có mặt → Trễ → Có phép → Không phép. Chuyên cần được tính lại.</p>
  </div></div>`;
}

function renderRotation() {
  const weeks = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"];
  return `<div class="card"><div class="card-h">Ma trận luân phiên</div><div class="card-b table-wrap"><table class="data matrix"><thead><tr><th>Sinh viên</th>${weeks.map((w) => `<th>${w}</th>`).join("")}</tr></thead><tbody>
    ${visibleStudents().slice(0, 16).map((s, i) => `<tr><td>${esc(s.name)}</td>${weeks.map((_, w) => {
      const g = (Object.keys(s.skills).length + i + w) % 6;
      const gr = DB.groups[g];
      return `<td class="g${g}">${esc(gr.name)}</td>`;
    }).join("")}</tr>`).join("")}
  </tbody></table>
  <p>Ô tô màu theo phòng. Nếu một phòng vượt sĩ số ở bảng kéo-thả trang điều hành, hệ thống gắn cảnh báo.</p>
  </div></div>`;
}

function renderGrades() {
  const rows = visibleStudents();
  return `<div class="card"><div class="card-h">Bảng điểm thành phần</div><div class="card-b table-wrap"><table class="data as-cards"><thead><tr>
    <th>Sinh viên</th><th>Chuyên cần ${S.weights.att}%</th><th>Thái độ ${S.weights.attitude}%</th><th>Kỹ năng ${S.weights.skill}%</th><th>Lý thuyết ${S.weights.theory}%</th><th>Kiểm tra ${S.weights.exam}%</th><th>Tổng</th>
  </tr></thead><tbody>
  ${rows.slice(0, 15).map((s) => `<tr>
    <td data-label="SV">${esc(s.name)}</td>
    <td data-label="CC">${(s.att / 10).toFixed(1)}</td>
    <td data-label="TĐ">${Math.min(10, 6 + s.att / 25).toFixed(1)}</td>
    <td data-label="KN">${((Object.values(s.skills).reduce((a, b) => a + b, 0) / 7 / 5) * 10).toFixed(1)}</td>
    <td data-label="LT">${s.score.toFixed(1)}</td>
    <td data-label="KT">${Math.min(10, s.score - 0.3).toFixed(1)}</td>
    <td data-label="Tổng"><b>${totalScore(s)}</b></td>
  </tr>`).join("")}
  </tbody></table></div></div>`;
}

function renderSimpleTable(headers, rows) {
  return `<div class="card"><div class="card-b table-wrap"><table class="data as-cards"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderPage() {
  const list = visibleStudents();
  switch (S.page) {
    case "dash": return renderDash();
    case "students": return renderStudents();
    case "profile": return renderProfile();
    case "intake": return `<div class="card"><div class="card-h">Tiếp nhận</div><div class="card-b">
      <div class="filters"><input class="field" id="inName" placeholder="Họ tên"><select class="field" id="inSchool">${DB.schools.map((s) => `<option value="${s.id}">${esc(s.short)}</option>`).join("")}</select><select class="field" id="inBatch">${DB.batches.map((b) => `<option value="${b.id}">${esc(b.name)}</option>`).join("")}</select><button class="btn" id="inAdd">Thêm vào danh sách</button></div>
      <p style="color:var(--muted)">Dữ liệu mẫu chỉ lưu trên trình duyệt cho đến khi tải lại trang.</p></div></div>`;
    case "org": return renderSimpleTable(["Đợt", "Trường", "Lớp", "Từ ngày", "Đến ngày", "Trạng thái"], DB.batches.map((b) => `<tr><td>${esc(b.name)}</td><td>${esc(schoolOf(b.school).name)}</td><td>${esc(b.klass)}</td><td>${b.start}</td><td>${b.end}</td><td><span class="badge ${b.status === "running" ? "b-primary" : "b-warning"}">${b.status === "running" ? "Đang chạy" : "Sắp bắt đầu"}</span></td></tr>`).join(""));
    case "rotation": return renderRotation();
    case "mentors": return renderSimpleTable(["Phòng", "Kỹ thuật", "Sĩ số tối đa", "Người hướng dẫn"], DB.groups.map((g) => `<tr><td>${esc(g.name)}</td><td>${esc(g.tech)}</td><td>${g.cap}</td><td>${esc(teacherOf(g.teacher).name)}</td></tr>`).join(""));
    case "timetable": return `<div class="card"><div class="card-h">Lịch hôm nay</div><div class="card-b"><ul class="timeline">${DB.agenda.map((a) => `<li><div><b>${a.time}</b></div><div class="tl-dot"></div><div><b>${esc(a.title)}</b><div>${esc(a.place)} · ${esc(a.who)}</div></div></li>`).join("")}</ul></div></div>`;
    case "attendance": return renderAttendance();
    case "leave": return renderSimpleTable(["Sinh viên", "Buổi", "Lý do", "Trạng thái"], list.filter((s) => Object.values(DB.attMarks[s.id]).includes("leave")).slice(0, 8).map((s) => `<tr><td>${esc(s.name)}</td><td>Trong tuần</td><td>Ốm / việc riêng</td><td><span class="badge b-info">Có phép</span></td></tr>`).join("") || `<tr><td colspan="4">Không có đơn.</td></tr>`);
    case "theory": return renderSimpleTable(["Bài", "Số tiết", "Người dạy"], DB.lessons.map((l) => `<tr><td>${esc(l.title)}</td><td>${l.hours}</td><td>${esc(l.owner)}</td></tr>`).join(""));
    case "seminar": return `<div class="card"><div class="card-b"><p><b>Thứ Tư 09:30</b> — Seminar vận động trị liệu, hội trường nhỏ.</p><p><b>Thứ Sáu 15:00</b> — Báo cáo ca lâm sàng đau vai gáy.</p></div></div>`;
    case "docs": return `<div class="card"><div class="card-b"><p>Nội quy thực tập, checklist QTKT, bài giảng PDF nằm trên Drive của khoa (bản thật).</p><p>Bản demo không gắn file bệnh nhân.</p><button class="btn" onclick="window.print()">In trang này</button></div></div>`;
    case "skills": return `<div class="grid-2"><div class="card"><div class="card-h">Radar năng lực (SV mẫu)</div><div class="card-b"><canvas id="radar" height="220"></canvas></div></div><div>${renderProfile(list[0]?.id)}</div></div>`;
    case "logbook": return `<div class="card"><div class="card-h">Logbook</div><div class="card-b">${list.slice(0, 10).map((s) => `<div style="margin-bottom:10px"><b>${esc(s.name)}</b> ${s.logDone}/${s.logNeed}<div class="progress"><i style="width:${Math.round(s.logDone / s.logNeed * 100)}%;background:${s.logDone >= s.logNeed ? "var(--success)" : "var(--warning)"}"></i></div></div>`).join("")}</div></div>`;
    case "finalexam": return `<div class="card"><div class="card-b"><p>Lý thuyết: trắc nghiệm trên bộ đề của từng đối tượng. Thực hành: bảng kiểm QTKT.</p><p>Điểm demo lấy từ dữ liệu mẫu, chưa nối Google Apps Script.</p></div></div>`;
    case "feedback": return `<div class="card"><div class="card-b"><textarea class="field" id="fb" rows="4" placeholder="Góp ý về buổi thực hành..."></textarea><div style="margin-top:8px"><button class="btn" id="sendFb">Gửi phản hồi</button></div></div></div>`;
    case "grades": return renderGrades();
    case "export": return `<div class="card"><div class="card-h">Xác nhận thực tập</div><div class="card-b">
      <p style="text-align:center"><b>BỆNH VIỆN Y HỌC CỔ TRUYỀN TP. HỒ CHÍ MINH</b><br>Khoa VLTL – PHCN</p>
      <p>Xác nhận sinh viên đã hoàn thành thực tập tại khoa theo đợt được chọn. Điểm thực hành để trống khi chưa chấm.</p>
      <button class="btn no-print" onclick="window.print()">In biểu mẫu</button></div></div>`;
    case "stats": return `<div class="grid-2"><div class="card"><div class="card-h">Theo trường</div><div class="card-b"><canvas id="chSchool" height="160"></canvas></div></div><div class="card"><div class="card-h">Phân bố điểm</div><div class="card-b"><canvas id="chScore" height="160"></canvas></div></div></div>`;
    case "partners": return renderSimpleTable(["Trường", "Liên hệ", "SĐT", "Hạn thỏa thuận", "SV trong năm"], DB.schools.map((s) => {
      const soon = s.until < "2026-12-31";
      return `<tr><td>${esc(s.name)}</td><td>${esc(s.contact)}</td><td>${esc(mask(s.phone, S.role))}</td><td>${s.until} ${soon ? `<span class="badge b-warning">Sắp hết hạn</span>` : ""}</td><td>${s.yearCount}</td></tr>`;
    }).join(""));
    case "teachers": return renderSimpleTable(["Họ tên", "Phòng", "Chuyên môn"], DB.teachers.map((t) => `<tr><td>${esc(t.name)}</td><td>${esc(t.room)}</td><td>${esc(t.spec)}</td></tr>`).join(""));
    case "users": return `<div class="card"><div class="card-b"><p><span class="badge b-danger">Quản trị viên</span> toàn quyền khoa.</p><p><span class="badge b-primary">Giảng viên</span> chỉ sinh viên mình hướng dẫn, điểm danh và đánh giá.</p><p><span class="badge b-info">Sinh viên</span> chỉ lịch, điểm danh, logbook và điểm của mình.</p></div></div>`;
    case "audit": return renderSimpleTable(["Thời điểm", "Người", "Thao tác"], (S.audit.length ? S.audit : [{ at: "—", who: "—", action: "Chưa có thao tác trong phiên này." }]).map((a) => `<tr><td>${esc(a.at)}</td><td>${esc(a.who)}</td><td>${esc(a.action)}</td></tr>`).join(""));
    case "settings": return `<div class="card"><div class="card-h">Tỷ trọng điểm (%)</div><div class="card-b">
      ${[["att", "Chuyên cần"], ["attitude", "Thái độ"], ["skill", "Kỹ năng"], ["theory", "Lý thuyết"], ["exam", "Kiểm tra"]].map(([k, l]) => `<label style="display:block;margin-bottom:8px">${l}<input class="field wgt" data-k="${k}" type="number" min="0" max="100" value="${S.weights[k]}"></label>`).join("")}
      <button class="btn" id="saveW">Lưu tỷ trọng</button>
      <button class="btn ghost" id="toggleTheme">Đổi sáng / tối</button>
    </div></div>`;
    default: return "";
  }
}

function drawCharts() {
  if (typeof Chart === "undefined") return;
  killCharts();
  const list = visibleStudents();
  const bySchool = DB.schools.map((sc) => list.filter((s) => s.school === sc.id).length);
  const make = (id, cfg) => {
    const el = document.getElementById(id);
    if (!el) return;
    S.charts.push(new Chart(el, cfg));
  };
  make("chSchool", { type: "bar", data: { labels: DB.schools.map((s) => s.short), datasets: [{ data: bySchool, backgroundColor: "#3f6ad8" }] }, options: { plugins: { legend: { display: false } } } });
  make("chAtt", { type: "line", data: { labels: ["T1", "T2", "T3", "T4"], datasets: [{ data: [88, 91, 86, list.length ? Math.round(list.reduce((a, s) => a + s.att, 0) / list.length) : 0], borderColor: "#3ac47d", tension: 0.3 }] }, options: { plugins: { legend: { display: false } } } });
  make("chRoom", { type: "bar", data: { labels: DB.groups.map((g) => g.name), datasets: [{ label: "SV", data: DB.groups.map((g) => list.filter((s) => s.group === g.id).length), backgroundColor: "#16aaff" }] }, options: { plugins: { legend: { display: false } } } });
  const bins = [0, 0, 0, 0];
  list.forEach((s) => { const t = totalScore(s); bins[t < 5 ? 0 : t < 7 ? 1 : t < 8.5 ? 2 : 3]++; });
  make("chScore", { type: "bar", data: { labels: ["<5", "5–7", "7–8.5", "≥8.5"], datasets: [{ data: bins, backgroundColor: ["#d92550", "#f7b924", "#16aaff", "#3ac47d"] }] }, options: { plugins: { legend: { display: false } } } });
  const sample = list[0];
  if (sample && document.getElementById("radar")) {
    make("radar", { type: "radar", data: { labels: Object.keys(sample.skills), datasets: [{ label: sample.name, data: Object.values(sample.skills), backgroundColor: "rgba(63,106,216,.2)", borderColor: "#3f6ad8" }] }, options: { scales: { r: { suggestedMin: 0, suggestedMax: 5 } } } });
  }
}

function bindPage() {
  drawCharts();
  const fb = document.getElementById("fBatch");
  const fs = document.getElementById("fSchool");
  if (fb) fb.onchange = () => { S.batch = fb.value; layout(); };
  if (fs) fs.onchange = () => { S.school = fs.value; layout(); };
  const fst = document.getElementById("fStatus");
  if (fst) fst.onchange = () => { S.status = fst.value; layout(); };
  const q2 = document.getElementById("q2");
  if (q2) q2.oninput = () => { S.q = q2.value; S.pageNo = 1; layout(); };
  document.querySelectorAll("[data-open]").forEach((el) => el.addEventListener("click", (e) => {
    if (e.target.classList?.contains("pick")) return;
    S.openId = el.dataset.open; S.tab = "info"; S.page = "profile"; layout();
  }));
  document.querySelectorAll(".pick").forEach((c) => c.onclick = (e) => { e.stopPropagation(); c.checked ? S.selected.add(c.dataset.id) : S.selected.delete(c.dataset.id); });
  document.querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => { S.tab = b.dataset.tab; layout(); });
  const prev = document.getElementById("prevP");
  const next = document.getElementById("nextP");
  if (prev) prev.onclick = () => { S.pageNo--; layout(); };
  if (next) next.onclick = () => { S.pageNo++; layout(); };
  const exp = document.getElementById("expCsv");
  if (exp) exp.onclick = () => {
    const rows = [["Ma", "Ho ten", "Truong", "Diem"]].concat(visibleStudents().map((s) => [s.id, s.name, schoolOf(s.school).short, totalScore(s)]));
    const blob = new Blob([rows.map((r) => r.join(",")).join("\n")], { type: "text/csv" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "sinh_vien.csv"; a.click();
    logAct("Xuất danh sách sinh viên"); toast("Đã xuất CSV", "ok");
  };
  const imp = document.getElementById("impBtn");
  if (imp) imp.onclick = () => toast("Bản demo: nhập Excel sẽ kiểm tra cột Họ tên, Ngày sinh, Trường. Dòng thiếu họ tên bị báo lỗi.", "");
  const del = document.getElementById("delSel");
  if (del) del.onclick = async () => {
    if (!S.selected.size) return toast("Chưa chọn dòng", "bad");
    if (!(await confirmBox("Xóa " + S.selected.size + " sinh viên khỏi danh sách mẫu?"))) return;
    const ids = [...S.selected];
    S.undo = DB.students.filter((s) => ids.includes(s.id));
    DB.students = DB.students.filter((s) => !ids.includes(s.id));
    S.selected.clear();
    logAct("Xóa sinh viên " + ids.join(", "));
    toast("Đã xóa. Bấm Hoàn tác trên header nếu cần.", "ok");
    layout();
  };
  document.querySelectorAll(".att-cell").forEach((b) => b.onclick = () => {
    if (S.role === "student") return toast("Sinh viên chỉ được xem", "bad");
    const order = ["present", "late", "leave", "absent"];
    if (!DB.attMarks[b.dataset.sid]) DB.attMarks[b.dataset.sid] = {};
    const cur = DB.attMarks[b.dataset.sid][b.dataset.slot] || "present";
    DB.attMarks[b.dataset.sid][b.dataset.slot] = order[(order.indexOf(cur) + 1) % 4];
    const s = DB.students.find((x) => x.id === b.dataset.sid);
    const marks = Object.values(DB.attMarks[s.id]);
    s.att = Math.round(marks.filter((m) => m === "present" || m === "late").length / marks.length * 100);
    logAct("Điểm danh " + s.name);
    layout();
  });
  document.querySelectorAll(".chip").forEach((ch) => {
    ch.ondragstart = (e) => { e.dataTransfer.setData("text", ch.dataset.sid); ch.classList.add("dragging"); };
  });
  document.querySelectorAll("[data-drop]").forEach((box) => {
    box.ondragover = (e) => e.preventDefault();
    box.ondrop = (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text");
      const s = DB.students.find((x) => x.id === id);
      const g = groupOf(box.dataset.drop);
      if (!s || !g) return;
      const n = DB.students.filter((x) => x.group === g.id).length;
      if (n >= g.cap) toast("Phòng đã đủ sĩ số", "bad");
      s.group = g.id; s.teacher = g.teacher;
      logAct("Chuyển " + s.name + " sang " + g.name);
      toast("Đã chuyển phòng", "ok");
      layout();
    };
  });
  const note = document.getElementById("saveNote");
  if (note) note.onclick = () => {
    const s = DB.students.find((x) => x.id === S.openId);
    s.note = document.getElementById("noteBox").value;
    logAct("Sửa ghi chú " + s.name); toast("Đã lưu ghi chú", "ok");
  };
  const add = document.getElementById("inAdd");
  if (add) add.onclick = () => {
    const name = document.getElementById("inName").value.trim();
    if (!name) return toast("Thiếu họ tên", "bad");
    DB.students.unshift({
      id: "SV" + (2000 + DB.students.length), name, female: false, dob: "01/01/2003",
      phone: "0900000000", cccd: "079000000000", school: document.getElementById("inSchool").value,
      klass: "Mới", batch: document.getElementById("inBatch").value, group: "g0", teacher: "t1",
      status: "wait", att: 100, score: 0, skills: Object.fromEntries(DB.techniques.map((t) => [t, 0])),
      logNeed: 12, logDone: 0, note: ""
    });
    DB.attMarks[DB.students[0].id] = {};
    logAct("Tiếp nhận " + name); toast("Đã thêm sinh viên", "ok"); go("students");
  };
  const sendFb = document.getElementById("sendFb");
  if (sendFb) sendFb.onclick = () => { logAct("Gửi phản hồi"); toast("Đã ghi nhận phản hồi", "ok"); };
  const sw = document.getElementById("saveW");
  if (sw) sw.onclick = () => {
    let sum = 0;
    document.querySelectorAll(".wgt").forEach((el) => { S.weights[el.dataset.k] = +el.value; sum += +el.value; });
    if (sum !== 100) return toast("Tổng tỷ trọng phải bằng 100", "bad");
    localStorage.setItem("vltl_weights", JSON.stringify(S.weights));
    logAct("Đổi tỷ trọng điểm"); toast("Đã lưu", "ok");
  };
  const tg = document.getElementById("toggleTheme");
  if (tg) tg.onclick = () => document.getElementById("themeBtn").click();
  const today = document.getElementById("todayBtn");
  if (today) today.onclick = () => { S.batch = "all"; toast("Đang xem số liệu tuần hiện tại"); layout(); };
}

function enter(role) {
  const map = {
    admin: { name: "BS.CKI Trần Cồng Hùng", roleLabel: "Quản trị viên" },
    teacher: { name: "CN. Nguyễn Bình", roleLabel: "Giảng viên" },
    student: { name: "Nguyễn Văn An", roleLabel: "Sinh viên" }
  };
  S.role = role;
  S.user = { ...map[role], role };
  localStorage.setItem("vltl_role", role);
  document.getElementById("login").style.display = "none";
  document.getElementById("shell").style.display = "flex";
  logAct("Đăng nhập vai trò " + map[role].roleLabel);
  go("dash");
}

function bootLogin() {
  document.getElementById("login").innerHTML = `<div class="login-wrap"><div class="login-card">
    <div class="login-side">
      <img src="logo.png" alt="" width="56" height="56" onerror="this.style.display='none'">
      <h2 style="margin:12px 0 4px">Khoa VLTL – PHCN</h2>
      <p>Bệnh viện Y học cổ truyền TP. Hồ Chí Minh<br>Quản lý đào tạo lâm sàng</p>
      <p style="color:#6c757d">Chọn vai trò để xem đúng menu. Mật khẩu demo: <b>1111</b></p>
    </div>
    <form class="login-form" id="loginForm">
      <h3 style="margin-top:0">Đăng nhập</h3>
      <div class="role-pick">
        <button type="button" data-role="admin" class="on">Quản trị viên — BS.CKI Trần Cồng Hùng</button>
        <button type="button" data-role="teacher">Giảng viên lâm sàng</button>
        <button type="button" data-role="student">Sinh viên thực tập</button>
      </div>
      <label style="display:block;margin-top:14px">Mật khẩu<input class="field" id="pw" type="password" placeholder="••••"></label>
      <button class="btn" style="margin-top:12px;width:100%" type="submit">Vào hệ thống</button>
    </form></div></div>`;
  let role = "admin";
  document.querySelectorAll("[data-role]").forEach((b) => b.onclick = () => {
    role = b.dataset.role;
    document.querySelectorAll("[data-role]").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
  });
  document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("pw").value !== "1111") return toast("Sai mật khẩu demo (1111)", "bad");
    enter(role);
  };
}

function init() {
  document.body.classList.toggle("theme-dark", S.theme === "dark");
  bootLogin();
  document.getElementById("menuBtn").onclick = () => {
    if (window.innerWidth < 768) document.body.classList.toggle("sidebar-open");
    else { S.mini = !S.mini; layout(); }
  };
  document.getElementById("backdrop").onclick = () => document.body.classList.remove("sidebar-open");
  document.getElementById("themeBtn").onclick = () => {
    S.theme = S.theme === "dark" ? "light" : "dark";
    localStorage.setItem("vltl_theme", S.theme);
    document.body.classList.toggle("theme-dark", S.theme === "dark");
  };
  document.getElementById("logoutBtn").onclick = () => {
    S.role = null; document.getElementById("shell").style.display = "none"; document.getElementById("login").style.display = "block";
  };
  document.getElementById("undoBtn").onclick = () => {
    if (!S.undo?.length) return toast("Không có thao tác để hoàn tác", "bad");
    DB.students.push(...S.undo); S.undo = null; toast("Đã hoàn tác", "ok"); layout();
  };
  document.getElementById("globalSearch").addEventListener("input", (e) => { S.q = e.target.value; if (S.role && S.page !== "students") go("students"); else if (S.role) layout(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault(); document.getElementById("globalSearch").focus();
    }
  });
  document.getElementById("fab").onclick = () => { if (S.role) go("attendance"); };
  window.addEventListener("hashchange", () => {
    const p = location.hash.replace("#/", "");
    if (p && TITLES[p] && S.role && p !== S.page) { S.page = p; layout(); }
  });
}
document.addEventListener("DOMContentLoaded", init);
