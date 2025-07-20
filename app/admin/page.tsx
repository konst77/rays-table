'use client';

import AdminNav from './component/AdminNav';
import NewsletterGenerator from './component/NewsletterGenerator';

function page() {
    return (
        <div>
            <AdminNav />
            <NewsletterGenerator />
        </div>
    )
}

export default page