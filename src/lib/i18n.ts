export type Locale = 'en' | 'id';

interface Translations {
  nav: { dashboard: string; transactions: string; budget: string; analytics: string; settings: string; collapse: string; expand: string; };
  dashboard: { title: string; subtitle: string; totalBalance: string; monthlyIncome: string; monthlyExpenses: string; savingsRate: string; cashflowTitle: string; budgetOverview: string; recentTransactions: string; viewAll: string; vsLastMonth: string; };
  transactions: { title: string; subtitle: string; addNew: string; search: string; filter: string; export: string; import: string; noData: string; deleteConfirm: string; editTransaction: string; amount: string; category: string; date: string; description: string; account: string; type: string; income: string; expense: string; recurring: string; allCategories: string; allAccounts: string; dateRange: string; amountRange: string; clearFilters: string; showing: string; of: string; entries: string; previous: string; next: string; };
  budget: { title: string; subtitle: string; remaining: string; spent: string; of: string; overBudget: string; onTrack: string; warning: string; goal: string; deadline: string; daysLeft: string; progress: string; comingSoon: string; };
  analytics: { title: string; subtitle: string; comingSoon: string; };
  settings: { title: string; subtitle: string; comingSoon: string; };
  common: { save: string; cancel: string; delete: string; edit: string; add: string; close: string; loading: string; error: string; success: string; confirm: string; currency: string; language: string; theme: string; noResults: string; search: string; };
}

const en: Translations = {
  nav: { dashboard: 'Dashboard', transactions: 'Transactions', budget: 'Budget & Goals', analytics: 'Analytics', settings: 'Settings', collapse: 'Collapse sidebar', expand: 'Expand sidebar' },
  dashboard: { title: 'Dashboard', subtitle: 'Welcome back, here is your financial summary', totalBalance: 'Total Balance', monthlyIncome: 'Monthly Income', monthlyExpenses: 'Monthly Expenses', savingsRate: 'Savings Rate', cashflowTitle: 'Cashflow Overview', budgetOverview: 'Budget Overview', recentTransactions: 'Recent Transactions', viewAll: 'View All', vsLastMonth: 'vs last month' },
  transactions: { title: 'Transaction Ledger', subtitle: 'Manage and track your financial activities', addNew: 'Add Transaction', search: 'Search transactions...', filter: 'Filters', export: 'Export CSV', import: 'Import CSV', noData: 'No transactions found.', deleteConfirm: 'Are you sure you want to delete this transaction?', editTransaction: 'Edit Transaction', amount: 'Amount', category: 'Category', date: 'Date', description: 'Description', account: 'Account', type: 'Type', income: 'Income', expense: 'Expense', recurring: 'Recurring', allCategories: 'All Categories', allAccounts: 'All Accounts', dateRange: 'Date Range', amountRange: 'Amount Range', clearFilters: 'Clear Filters', showing: 'Showing', of: 'of', entries: 'entries', previous: 'Previous', next: 'Next' },
  budget: { title: 'Budget Shield & Goals', subtitle: 'Take control of your spending and savings', remaining: 'Remaining', spent: 'Spent', of: 'of', overBudget: 'Over Budget', onTrack: 'On Track', warning: 'Warning', goal: 'Goal', deadline: 'Deadline', daysLeft: 'days left', progress: 'Progress', comingSoon: 'Budget features coming soon in Phase 2.' },
  analytics: { title: 'Analytics & AI Reports', subtitle: 'Deep insights into your financial health', comingSoon: 'Analytics features coming soon in Phase 3.' },
  settings: { title: 'Settings & Wallet Matrix', subtitle: 'Configure your HelloDit experience', comingSoon: 'Settings features coming soon in Phase 3.' },
  common: { save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit', add: 'Add', close: 'Close', loading: 'Loading...', error: 'An error occurred.', success: 'Success!', confirm: 'Confirm', currency: 'Currency', language: 'Language', theme: 'Theme', noResults: 'No results found', search: 'Search...' }
};

const id: Translations = {
  nav: { dashboard: 'Dasbor', transactions: 'Transaksi', budget: 'Anggaran & Tujuan', analytics: 'Analitik', settings: 'Pengaturan', collapse: 'Tutup bilah sisi', expand: 'Buka bilah sisi' },
  dashboard: { title: 'Dasbor', subtitle: 'Selamat datang kembali, ini ringkasan keuangan Anda', totalBalance: 'Total Saldo', monthlyIncome: 'Pemasukan Bulanan', monthlyExpenses: 'Pengeluaran Bulanan', savingsRate: 'Tingkat Tabungan', cashflowTitle: 'Ringkasan Arus Kas', budgetOverview: 'Ringkasan Anggaran', recentTransactions: 'Transaksi Terakhir', viewAll: 'Lihat Semua', vsLastMonth: 'vs bulan lalu' },
  transactions: { title: 'Buku Transaksi', subtitle: 'Kelola dan lacak aktivitas keuangan Anda', addNew: 'Tambah Transaksi', search: 'Cari transaksi...', filter: 'Penyaring', export: 'Ekspor CSV', import: 'Impor CSV', noData: 'Tidak ada transaksi ditemukan.', deleteConfirm: 'Apakah Anda yakin ingin menghapus transaksi ini?', editTransaction: 'Edit Transaksi', amount: 'Jumlah', category: 'Kategori', date: 'Tanggal', description: 'Deskripsi', account: 'Akun', type: 'Tipe', income: 'Pemasukan', expense: 'Pengeluaran', recurring: 'Berulang', allCategories: 'Semua Kategori', allAccounts: 'Semua Akun', dateRange: 'Rentang Tanggal', amountRange: 'Rentang Jumlah', clearFilters: 'Hapus Penyaring', showing: 'Menampilkan', of: 'dari', entries: 'entri', previous: 'Sebelumnya', next: 'Selanjutnya' },
  budget: { title: 'Anggaran & Tujuan', subtitle: 'Kendalikan pengeluaran dan tabungan Anda', remaining: 'Sisa', spent: 'Terpakai', of: 'dari', overBudget: 'Melebihi Anggaran', onTrack: 'Sesuai Rencana', warning: 'Peringatan', goal: 'Tujuan', deadline: 'Tenggat Waktu', daysLeft: 'hari lagi', progress: 'Kemajuan', comingSoon: 'Fitur anggaran akan hadir pada Fase 2.' },
  analytics: { title: 'Analitik & Laporan AI', subtitle: 'Wawasan mendalam tentang kesehatan keuangan Anda', comingSoon: 'Fitur analitik akan hadir pada Fase 3.' },
  settings: { title: 'Pengaturan & Matriks Dompet', subtitle: 'Konfigurasi pengalaman HelloDit Anda', comingSoon: 'Fitur pengaturan akan hadir pada Fase 3.' },
  common: { save: 'Simpan', cancel: 'Batal', delete: 'Hapus', edit: 'Edit', add: 'Tambah', close: 'Tutup', loading: 'Memuat...', error: 'Terjadi kesalahan.', success: 'Berhasil!', confirm: 'Konfirmasi', currency: 'Mata Uang', language: 'Bahasa', theme: 'Tema', noResults: 'Tidak ada hasil ditemukan', search: 'Cari...' }
};

const dictionaries = { en, id };

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale] || dictionaries['en'];
}

export function t(locale: Locale, keyPath: string): string {
  const dictionary = getTranslations(locale) as any;
  const keys = keyPath.split('.');
  let result = dictionary;
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      return keyPath;
    }
  }
  return typeof result === 'string' ? result : keyPath;
}
