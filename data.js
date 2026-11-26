/* Dữ liệu giả lập — không phải hồ sơ thật. */
const DB = (() => {
  const schools = [
    { id: "s1", name: "ĐH Y khoa Phạm Ngọc Thạch", short: "PNT", contact: "ThS. Lê Minh Khoa", phone: "0901•••221", email: "daotao@pnt.edu.vn", until: "2027-06-30", yearCount: 18 },
    { id: "s2", name: "ĐH Y Dược TP.HCM", short: "UMP", contact: "CN. Trần Hà My", phone: "0903•••884", email: "thuctap@ump.edu.vn", until: "2026-12-15", yearCount: 12 },
    { id: "s3", name: "ĐH Quốc tế Hồng Bàng", short: "HIU", contact: "ThS. Phạm Quốc Bảo", phone: "0918•••440", email: "vltl@hiu.vn", until: "2027-03-01", yearCount: 9 },
    { id: "s4", name: "CĐ Y tế Bình Dương", short: "CDYD", contact: "CN. Võ Thị Lan", phone: "0982•••119", email: "cdyd.bd@edu.vn", until: "2026-11-30", yearCount: 7 }
  ];
  const teachers = [
    { id: "t1", name: "CN. Nguyễn Bình", room: "P.201-202", spec: "Điện trị liệu" },
    { id: "t2", name: "CN. Lê Trọng Duy", room: "P.204-206", spec: "Siêu âm trị liệu" },
    { id: "t3", name: "CN. Phạm Phương", room: "P.208-209", spec: "Vận động trị liệu" },
    { id: "t4", name: "CN. Hồ Quyên", room: "P.200", spec: "Hoạt động trị liệu" },
    { id: "t5", name: "BS. Trần Tuấn", room: "Phòng châm cứu", spec: "Châm cứu" },
    { id: "t6", name: "CN. Đỗ Thanh Tú", room: "Phòng xoa bóp", spec: "Xoa bóp bấm huyệt" }
  ];
  const groups = [
    { id: "g0", name: "P.201-202", tech: "Điện trị liệu", teacher: "t1", cap: 8 },
    { id: "g1", name: "P.204-206", tech: "Siêu âm trị liệu", teacher: "t2", cap: 6 },
    { id: "g2", name: "P.208-209", tech: "Vận động trị liệu", teacher: "t3", cap: 8 },
    { id: "g3", name: "P.200", tech: "Hoạt động trị liệu", teacher: "t4", cap: 6 },
    { id: "g4", name: "Phòng châm cứu", tech: "Châm cứu / điện châm", teacher: "t5", cap: 6 },
    { id: "g5", name: "Phòng xoa bóp", tech: "Xoa bóp bấm huyệt", teacher: "t6", cap: 6 }
  ];
  const batches = [
    { id: "b1", name: "Đợt 10–11/2026", school: "s1", klass: "VLTL K2022", start: "2026-10-01", end: "2026-11-30", status: "running" },
    { id: "b2", name: "Đợt 06–12/2026", school: "s3", klass: "PHCN K2023", start: "2026-06-01", end: "2026-12-02", status: "running" },
    { id: "b3", name: "Đợt 01/2027", school: "s2", klass: "YHCT K2023", start: "2027-01-05", end: "2027-02-28", status: "soon" }
  ];
  const techniques = ["Điện trị liệu", "Siêu âm trị liệu", "Vận động trị liệu", "Hoạt động trị liệu", "Xoa bóp bấm huyệt", "Châm cứu", "Điện châm"];
  const ho = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý"];
  const dem = ["Văn", "Thị", "Minh", "Ngọc", "Thanh", "Anh", "Quốc", "Hữu", "Đức", "Thúy"];
  const ten = ["An", "Bình", "Chi", "Dung", "Giang", "Hà", "Khoa", "Linh", "Mai", "Nam", "Oanh", "Phúc", "Quân", "Sơn", "Trang", "Uyên", "Việt", "Xuân", "Yến", "Long", "Nhi", "Hiếu", "Khanh", "Thảo", "Đạt", "My", "Tú", "Hằng", "Khôi", "Lan"];
  function rnd(i) { const x = Math.sin(i * 999) * 10000; return x - Math.floor(x); }
  const students = [];
  for (let i = 0; i < 30; i++) {
    const school = schools[i % 4];
    const batch = batches[i % 3 === 2 && i > 20 ? 2 : i % 2];
    const group = groups[i % 6];
    const female = i % 3 !== 0;
    const name = `${ho[i % ho.length]} ${female ? "Thị" : dem[i % dem.length]} ${ten[i]}`;
    const dd = String((i % 27) + 1).padStart(2, "0");
    const mm = String((i % 12) + 1).padStart(2, "0");
    const status = batch.status === "soon" ? "wait" : rnd(i + 3) > 0.85 ? "watch" : "active";
    const att = Math.round(70 + rnd(i + 8) * 30);
    const score = +(5 + rnd(i + 2) * 4.6).toFixed(1);
    const skills = {};
    techniques.forEach((t, k) => { skills[t] = 1 + Math.floor(rnd(i * 7 + k) * 5); });
    const logNeed = 12;
    const logDone = Math.min(logNeed, Math.floor(rnd(i + 5) * 14));
    students.push({
      id: "SV" + String(1001 + i),
      name, female,
      dob: `${dd}/${mm}/200${i % 4}`,
      phone: "09" + String(10000000 + Math.floor(rnd(i) * 89999999)).slice(0, 8),
      cccd: "079" + String(200000000 + i * 137).slice(0, 9),
      school: school.id, klass: batch.klass, batch: batch.id,
      group: group.id, teacher: group.teacher,
      status, att, score, skills, logNeed, logDone,
      note: i % 11 === 0 ? "Cần bổ sung sổ tay lâm sàng" : ""
    });
  }
  const weekDays = ["T2", "T3", "T4", "T5", "T6"];
  const sessions = ["Sáng", "Chiều"];
  const attMarks = {};
  students.forEach((s, i) => {
    attMarks[s.id] = {};
    weekDays.forEach((d, di) => sessions.forEach((ss, si) => {
      const r = rnd(i * 20 + di * 3 + si);
      attMarks[s.id][d + ss] = r > 0.92 ? "absent" : r > 0.84 ? "leave" : r > 0.78 ? "late" : "present";
    }));
  });
  const agenda = [
    { time: "07:30", title: "Giao ban sáng", place: "Phòng họp khoa", who: "BS.CKI Trần Cồng Hùng" },
    { time: "08:00", title: "Thực hành điện trị liệu", place: "P.201-202", who: "CN. Nguyễn Bình" },
    { time: "09:30", title: "Seminar vận động trị liệu", place: "Hội trường nhỏ", who: "CN. Phạm Phương" },
    { time: "13:30", title: "Ca lâm sàng đau vai gáy", place: "P.208-209", who: "BS. Trần Tuấn" },
    { time: "15:00", title: "Chấm checklist siêu âm", place: "P.204-206", who: "CN. Lê Trọng Duy" }
  ];
  const lessons = [
    { id: "L1", title: "An toàn điện trị liệu", hours: 2, owner: "CN. Nguyễn Bình" },
    { id: "L2", title: "Nguyên lý siêu âm trị liệu", hours: 2, owner: "CN. Lê Trọng Duy" },
    { id: "L3", title: "Đánh giá tầm vận động", hours: 3, owner: "CN. Phạm Phương" },
    { id: "L4", title: "Chỉ định châm cứu cơ bản", hours: 2, owner: "BS. Trần Tuấn" }
  ];
  const weights = { att: 10, attitude: 10, skill: 40, theory: 20, exam: 20 };
  return { schools, teachers, groups, batches, techniques, students, attMarks, weekDays, sessions, agenda, lessons, weights };
})();
