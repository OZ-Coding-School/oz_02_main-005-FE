'use client';
import { Folder, getFolders } from '@/apis/plus';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFolders();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch folders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
