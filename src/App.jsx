import { useState } from 'react';
import { GraduationCap, Users } from 'lucide-react';
import { INITIAL_STUDENTS } from './data/studentsData';
import LiveClock from './components/LiveClock';
import StudentTable from './components/StudentTable';

export default function App() {
  const [students] = useState(INITIAL_STUDENTS);
  const totalProdi = new Set(students.map((student) => student.programStudi)).size;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/70 via-slate-50 to-slate-100/70 px-4 py-8 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-3 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/20">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Student Management
              </h1>
              <h2 className="mt-1 text-base font-medium text-slate-600">
                Daftar Data Mahasiswa
              </h2>
            </div>
          </div>

          <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/20">
            React Hooks &bull; State &amp; Live Clock
          </span>
        </header>

        <section
          aria-label="Ringkasan Data dan Waktu"
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div className="flex items-center justify-between rounded-none border border-slate-200/90 bg-white p-5 shadow-sm">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Jumlah Mahasiswa
              </p>
              <p className="text-2xl font-bold tracking-tight text-slate-900 tabular-nums sm:text-3xl">
                {students.length}{' '}
                <span className="text-base font-semibold text-slate-600">
                  Mahasiswa
                </span>
              </p>
              <p className="text-sm text-slate-500">
                Tersebar di {totalProdi} program studi terdaftar
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <LiveClock />
        </section>

        <StudentTable students={students} />
      </main>
    </div>
  );
}
