import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

function formatClockTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function formatClockDate(date) {
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-between rounded-none border border-slate-200/90 bg-white p-5 shadow-sm">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Jam Digital
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>
        <p
          className="font-mono text-2xl font-bold tracking-tight text-slate-900 tabular-nums sm:text-3xl"
          aria-live="off"
        >
          {formatClockTime(currentTime)}
        </p>
        <p className="text-sm text-slate-500">{formatClockDate(currentTime)}</p>
      </div>

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
        <Clock className="h-6 w-6" aria-hidden="true" />
      </div>
    </div>
  );
}
