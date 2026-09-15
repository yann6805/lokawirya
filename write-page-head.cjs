const fs = require('fs');

const PAGE = `import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Clock,
  CheckCircle2,
  LayoutDashboard,
  Star,
  TrendingUp,
  User,
} from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { DashboardLayout, type DashboardMenuItem } from '../components/DashboardLayout';
import { mockWorkers } from '../data/mockWorkers';
import { RatingModal } from './dashboard/RatingModal';
import { PaymentSimulationModal } from './dashboard/PaymentSimulationModal';
import { computeMatchScore } from './dashboard/match';
import {
  getAllRequests,
  updateRequest,
  type ProjectRequest,
  type RequestStatus,
} from '../data/projectRequests';
import type { Worker } from '../types';

type WorkerTab = 'ringkasan' | 'permintaan-masuk' | 'proyek' | 'profil';

const menu: DashboardMenuItem[] = [
  { id: 'ringkasan', label: 'Ringkasan', icon: LayoutDashboard },
  { id: 'permintaan-masuk', label: 'Permintaan Masuk', icon: Clock },
  { id: 'proyek', label: 'Proyek', icon: Briefcase },
  { id: 'profil', label: 'Profil', icon: User },
];

const monthlyTrend = [
  { label: 'Mar', value: 1 },
  { label: 'Apr', value: 2 },
  { label: 'Mei', value: 1 },
  { label: 'Jun', value: 3 },
  { label: 'Jul', value: 2 },
  { label: 'Agu', value: 4 },
];

const statusBadgeClass: Record<RequestStatus, string> = {
  'Menunggu': 'bg-warning/15 text-[#9A6400]',
  'Diterima': 'bg-primary/30 text-[#4C7A00]',
  'Ditolak': 'bg-gray-border/50 text-gray-dark',
  'Selesai belum dirating': 'bg-primary/20 text-[#4C7A00]',
  'Selesai sudah dirating': 'bg-primary/20 text-[#4C7A00]',
};

function getActiveWorker(): Worker {
  try {
    const raw = localStorage.getItem('lokawirya_registration');
    if (raw) {
      const reg = JSON.parse(raw) as {
        role?: string;
        worker?: { id?: string; name?: string; location?: string };
      };
      const saved = reg.worker;
      if (reg.role === 'tenaga-terampil' && saved?.id) {
        const matched = mockWorkers.find((w) => w.id === saved.id);
        if (matched) {
          return {
            ...matched,
            name: saved.name || matched.name,
            location: saved.location || matched.location,
          };
        }
      }
    }
  } catch {
    // abaikan data tidak valid, lanjut ke fallback
  }
  return mockWorkers[0];
}

const rupiah = (n: number) => \`Rp\${n.toLocaleString('id-ID')}\`;

export default function DashboardTenagaTerampilPage() {
  const [activeTab, setActiveTab] = useState<WorkerTab>('ringkasan');
  const [requests, setRequests] = useState<ProjectRequest[]>([]);
  const [activeWorker, setActiveWorker] = useState<Worker>(getActiveWorker);
  const [ratingTarget, setRatingTarget] = useState<ProjectRequest | null>(null);
  const [paymentTarget, setPaymentTarget] = useState<ProjectRequest | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setRequests(getAllRequests());
  }, []);

  useEffect(() => {
    setActiveWorker(getActiveWorker());
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const myId = activeWorker.id;

  const incomingRequests = useMemo(
    () => requests.filter((r) => r.workerId === myId && r.status === 'Menunggu'),
    [requests, myId],
  );

  const acceptedProjects = useMemo(
    () => requests.filter((r) => r.workerId === myId && r.status === 'Diterima'),
    [requests, myId],
  );

  const finishedProjects = useMemo(
    () =>
      requests.filter((r) => r.workerId === myId && r.status.startsWith('Selesai')),
    [requests, myId],
  );

  const completedCount = useMemo(
    () => finishedProjects.filter((r) => r.status === 'Selesai sudah dirating').length,
    [finishedProjects],
  );

  const handleAccept = (req: ProjectRequest) => {
    setRequests(updateRequest(req.id, { status: 'Diterima' }));
    showToast(\`Permintaan "\${req.title}" diterima.\`);
  };

  const handleReject = (req: ProjectRequest) => {
    setRequests(updateRequest(req.id, { status: 'Ditolak' }));
    showToast(\`Permintaan "\${req.title}" ditolak.\`);
  };

  const handleMarkDone = (req: ProjectRequest) => {
    setRequests(updateRequest(req.id, { status: 'Selesai belum dirating' }));
    showToast(\`"\${req.title}" ditandai selesai. Beri rating untuk menyelesaikan.\`);
  };

  const handleSubmitRating = (rating: number, comment: string) => {
    if (!ratingTarget) return;
    setRequests(
      updateRequest(ratingTarget.id, {
        status: 'Selesai sudah dirating',
        rating,
        comment,
      }),
    );
    showToast('Rating berhasil dikirim. Terima kasih!');
    setRatingTarget(null);
  };

  const handlePaymentFinished = () => {
    if (!paymentTarget) return;
    setRequests(updateRequest(paymentTarget.id, { isPaid: true }));
    showToast('Pembayaran berhasil dicatat.');
    setPaymentTarget(null);
  };

  const canPay = (status: RequestStatus) => status === 'Selesai belum dirating';

  const matchScoreFor = (req: ProjectRequest) =>
    computeMatchScore(activeWorker, [], req.location || activeWorker.location);

  return (
    <>
      <DashboardLayout
        user={{
          name: activeWorker.name,
          roleLabel: 'Tenaga Terampil',
          initials: activeWorker.name.slice(0, 2).toUpperCase(),
        }}
        menu={menu}
        activeTab={activeTab}
        onNavigate={(id) => setActiveTab(id as WorkerTab)}
        onLogout={() => {
          localStorage.removeItem('lokawirya_registration');
          window.location.href = '/';
        }}
        title="Dashboard Tenaga Terampil"
        notificationCount={incomingRequests.length}
      >
`;

fs.writeFileSync('src/pages/DashboardTenagaTerampilPage.tsx', PAGE);
console.log('wrote ' + PAGE.length + ' bytes (head)');
