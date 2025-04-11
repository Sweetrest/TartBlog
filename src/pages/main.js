'use client'
import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/navigation';
import MainContent from "@/components/MainContent";

const HomePage = () => {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <Layout>
            <MainContent></MainContent>
        </Layout>
    );
};

export default HomePage;