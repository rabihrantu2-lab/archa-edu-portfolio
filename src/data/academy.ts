export const whatsappNumber = '62895323665266';
export const whatsappDisplay = '0895323665266';
export function whatsappUrl(service?: string) {
  const message = service
    ? `Halo Archa Edu Academy, saya ingin konsultasi untuk jasa ${service}. Apakah slotnya masih tersedia?`
    : 'Halo Archa Edu Academy, saya ingin konsultasi dengan tim. Apakah slotnya masih tersedia?';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function rupiah(value: number) { return `Rp ${value.toLocaleString('id-ID')}`; }
export function priceLabel(min: number, max: number) {
  return min === max ? `Mulai ${rupiah(min)}` : `${rupiah(min)}–${rupiah(max)}`;
}
export type Service = { name: string; priceMin: number; priceMax: number; popular?: boolean };
export const categories: { id: string; title: string; description: string; services: Service[] }[] = [
  { id: 'premium', title: 'Konsultasi & Bimbingan', description: 'Konsultasi masalah akademik dan pendampingan menyeluruh tugas akhir.', services: [
    { name: 'Konsultasi Karil, Metopen, Proyek, BTA & Tesis', priceMin: 100000, priceMax: 100000 },
    { name: 'Bimbingan Tugas Akhir', priceMin: 1000000, priceMax: 1000000, popular: true },
  ] },
  { id: 'sidang', title: 'Persiapan Sidang', description: 'Latihan sidang dan presentasi agar mental dan kesiapanmu terlatih.', services: [
    { name: 'Latihan sidang/persentasi', priceMin: 200000, priceMax: 200000 },
  ] },
  { id: 'naskah', title: 'Naskah & Data', description: 'Parafrase, analisis data, Turnitin, dan pengecekan plagiarisme.', services: [
    { name: 'Parafrase, Analisis data, Turnitin', priceMin: 500000, priceMax: 500000 },
    { name: 'Cek Plagiarisme', priceMin: 100000, priceMax: 100000 },
  ] },
];

export type TeamMember = {
  id: string; name: string; role: string; initials: string; bio: string;
  image: string | null; imagePosition: string;
};
// Setelah mengunggah foto, ganti image: null dengan path yang dicontohkan.
export const founders: TeamMember[] = [
  { id: 'rabih', name: 'LMRR', role: 'Co-Founder & Academic Consultant', initials: 'LMRR',
    bio: 'Mendampingi konsultasi akademik dan membantu memetakan kebutuhan penelitian Anda.',
    image: null, /* '/images/founders/rabih.jpg' */ imagePosition: '50% 25%' },
  { id: 'aisyah', name: 'AYIZ', role: 'Co-Founder & Academic Consultant', initials: 'AYIZ',
    bio: 'Mendampingi konsultasi dan koordinasi layanan agar proses Anda lebih terarah.',
    image: null, /* '/images/founders/aisyah.jpg' */ imagePosition: '50% 25%' },
];
export const supportTeam: TeamMember[] = [
  { id: 'fatimah', name: 'TIMI', role: 'Academic Support Specialist', initials: 'TIMI',
    bio: 'Membantu komunikasi dan tindak lanjut kebutuhan konsultasi Anda.',
    image: null, /* '/images/team/fatimah.jpg' */ imagePosition: '50% 25%' },
  { id: 'riridia', name: 'RIYZ', role: 'Academic Support Specialist', initials: 'RIYZ',
    bio: 'Membantu koordinasi layanan dan informasi selama proses pendampingan.',
    image: null, /* '/images/team/riridia.jpg' */ imagePosition: '50% 25%' },
];
