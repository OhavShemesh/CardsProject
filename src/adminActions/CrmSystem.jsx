import React from 'react'
import PageHeader from '../components/PageHeader'
import CrmSystemPage from './CrmSystemPage'

export default function CrmSystem() {
    return (
        <>
            <PageHeader
                title="CRM System"
                subtitle="Hello Admin, on this page you can delete users, change their status, and view all users. (Search is working here too)."
            />
            <CrmSystemPage />
        </>
    )
}
