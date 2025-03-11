'use client';

import BaseAskCookbook from '@cookbookdev/docsbot/react';

const COOKBOOK_PUBLIC_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNiZWQ1M2ZlZWFiYmU4NWVmYzc1MzciLCJpYXQiOjE3MTUyMDM0MTEsImV4cCI6MjAzMDc3OTQxMX0.yEcjTKRIR1TBGxXr854N5iNw5WTuXI_ihmk75YXDc74';

export default function AskCookbook() {
  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
}
