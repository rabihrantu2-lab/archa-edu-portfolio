export const whatsappNumber = '62895323665266';
export const whatsappDisplay = '0895323665266';
export function whatsappUrl(service?: string) {
  const message = service
    ? `Halo Archa Edu Academy, saya ingin konsultasi untuk jasa ${service}. Apakah slotnya masih tersedia?`
    : 'Halo Archa Edu Academy, saya ingin konsultasi dengan tim. Apakah slotnya masih tersedia?';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function rupiah(value: number) { return `Rp${value.toLocaleString('id-ID')}`; }
export function priceLabel(min: number, max: number) {
  return min === max ? rupiah(min) : `${rupiah(min)}–${rupiah(max)}`;
}
export type Service = { name: string; priceMin: number; priceMax: number; popular?: boolean };
export const categories: { id: string; title: string; description: string; services: Service[] }[] = [
  { id: 'premium', title: 'Akademik Premium', description: 'Konsultasi, review, dan pendampingan penelitian.', services: [
    { name: 'Skripsi', priceMin: 4800000, priceMax: 5000000, popular: true },
    { name: 'Karil', priceMin: 1700000, priceMax: 2000000, popular: true },
    { name: 'Metode Penelitian', priceMin: 1000000, priceMax: 1200000 },
  ] },
  { id: 'kuliah', title: 'Bantuan Kuliah & Tugas', description: 'Pendampingan belajar, persiapan ujian, dan administrasi kuliah.', services: [
    { name: 'Handle Akun UT 1 SMT', priceMin: 800000, priceMax: 1200000 },
    { name: 'UAS TAP', priceMin: 300000, priceMax: 300000 },
    { name: 'UO/UTM', priceMin: 200000, priceMax: 200000 },
    { name: 'Tugas Lab/Praktik', priceMin: 100000, priceMax: 100000 },
    { name: 'UAS THE', priceMin: 50000, priceMax: 50000 },
  ] },
  { id: 'pendukung', title: 'Layanan Pendukung', description: 'Diskusi materi, review tugas, dan penerjemahan.', services: [
    { name: 'Tugas Tuton', priceMin: 30000, priceMax: 50000 },
    { name: 'Diskusi', priceMin: 20000, priceMax: 20000 },
    { name: 'Penerjemah', priceMin: 20000, priceMax: 20000 },
    { name: 'Tugas Sekolah/Kampus/Les', priceMin: 20000, priceMax: 20000 },
  ] },
];

export type TeamMember = {
  id: string; name: string; role: string; initials: string; bio: string;
  image: string | null; imagePosition: string;
};
// Setelah mengunggah foto, ganti image: null dengan path yang dicontohkan.
export const founders: TeamMember[] = [
  { id: 'rabih', name: 'La Mushisyari Rabih Rantu', role: 'Co-Founder & Academic Consultant', initials: 'RR',
    bio: 'Mendampingi konsultasi akademik dan membantu memetakan kebutuhan penelitian Anda.',
    image: null, /* '/images/founders/rabih.jpg' */ imagePosition: '50% 25%' },
  { id: 'aisyah', name: 'Aisyah Rahanur Putri', role: 'Co-Founder & Academic Consultant', initials: 'AP',
    bio: 'Mendampingi konsultasi dan koordinasi layanan agar proses Anda lebih terarah.',
    image: null, /* '/images/founders/aisyah.jpg' */ imagePosition: '50% 25%' },
];
export const supportTeam: TeamMember[] = [
  { id: 'fatimah', name: 'Fatimah Rahanur Putri', role: 'Academic Support Specialist', initials: 'FP',
    bio: 'Membantu komunikasi dan tindak lanjut kebutuhan konsultasi Anda.',
    image: null, /* '/images/team/fatimah.jpg' */ imagePosition: '50% 25%' },
  { id: 'riridia', name: 'Riridia', role: 'Academic Support Specialist', initials: 'R',
    bio: 'Membantu koordinasi layanan dan informasi selama proses pendampingan.',
    image: null, /* '/images/team/riridia.jpg' */ imagePosition: '50% 25%' },
];
