import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/navigation';

function DoughnutChart({ title, data }: { title: string; data: number[] }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    const DoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [`오답 ${data[0]}개`, `정답 ${data[1]}개`],
        datasets: [
          {
            data,
            backgroundColor: ['#E74040', '#2DC071'],
          },
        ],
      },
      options: {
        cutout: '75%',
        plugins: {
          legend: {
            onClick: () => {},
            position: 'bottom',
            align: 'center',
            labels: {
              pointStyle: 'circle',
              usePointStyle: true,
            },
          },
        },
      },
    });

    return () => {
      DoughnutChart.destroy();
    };
  }, [router, data]);

  return (
    <div className="m-[2rem] w-[70%] ">
      <h2 className="text-[1.25rem] font-bold text-text_primary">{title}</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

export default DoughnutChart;
