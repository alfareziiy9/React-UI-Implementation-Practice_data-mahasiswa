import { Mail, MapPin, Phone } from 'lucide-react';

const TABLE_COLUMNS = [
  'NIM',
  'Nama Mahasiswa',
  'No. Hp',
  'Email',
  'Alamat',
  'Program Studi',
  'Tahun Masuk',
];

const PRODI_BADGE_STYLES = {
  Informatika: 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
  'Sistem Informasi': 'bg-sky-50 text-sky-700 ring-sky-600/20',
  Manajemen: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  'Teknik Komputer': 'bg-teal-50 text-teal-700 ring-teal-600/20',
};

const DEFAULT_PRODI_STYLE = 'bg-slate-100 text-slate-700 ring-slate-600/20';

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function StudentTable({ students }) {
  return (
    <section
      aria-labelledby="table-heading"
      className="overflow-hidden rounded-none border border-slate-200/90 bg-white shadow-sm"
    >
      <div className="flex flex-col gap-1 border-b border-slate-200/80 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 id="table-heading" className="text-base font-semibold text-slate-900">
            Tabel Data Mahasiswa
          </h3>
          <p className="text-sm text-slate-500">
            Menampilkan seluruh data mahasiswa aktif yang tersimpan di dalam state.
          </p>
        </div>
        <span className="inline-flex w-fit items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 tabular-nums">
          {students.length} Baris Data
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50/90">
            <tr>
              {TABLE_COLUMNS.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="whitespace-nowrap px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {students.length === 0 ? (
              <tr>
                <td
                  colSpan={TABLE_COLUMNS.length}
                  className="px-6 py-10 text-center text-sm text-slate-500"
                >
                  Belum ada data mahasiswa yang tersedia.
                </td>
              </tr>
            ) : (
              students.map((student) => {
                const prodiStyle =
                  PRODI_BADGE_STYLES[student.programStudi] ?? DEFAULT_PRODI_STYLE;

                return (
                  <tr
                    key={student.nim}
                    className="transition-colors hover:bg-indigo-50/40"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-semibold text-slate-700 tabular-nums">
                      {student.nim}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700"
                        >
                          {getInitials(student.nama)}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {student.nama}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-slate-600 tabular-nums">
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        {student.noHp}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <a
                        href={`mailto:${student.email}`}
                        className="inline-flex items-center gap-1.5 font-medium text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {student.email}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        {student.alamat}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${prodiStyle}`}
                      >
                        {student.programStudi}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-semibold text-slate-700 tabular-nums">
                      <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-slate-700">
                        {student.tahunMasuk}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
