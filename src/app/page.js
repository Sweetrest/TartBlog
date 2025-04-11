"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/login');
    }, [router]);

    return (
        <div>
            <p>Перенаправляем на страницу авторизации...</p>
        </div>
    );
};

export default HomePage;