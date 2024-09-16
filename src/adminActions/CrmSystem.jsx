import React from 'react'
import PageHeader from '../components/PageHeader'
import CrmSystemPage from './CrmSystemPage'
import { Box } from '@mui/material'
import { BorderBottom, Search } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../layout/header/right-navigation/SearchBar'
import { StandaloneSearchBox } from '@react-google-maps/api'

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
