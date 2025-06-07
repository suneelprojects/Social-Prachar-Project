'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/reusedComponents/Loading';
import SubscriptionHeader from './subscription-comp/SubscriptionHeader';
import AffordableEMI from './subscription-comp/AffordableEMI'
import StillConfused from './subscription-comp/StillConfused'
import LearningPlansAndPacks from './subscription-comp/LearningPlansAndPacks'
import Linkedin from '@/app/success-stories/linkedinReviews/linkedin'
import Google from '@/app/success-stories/googleReviews/GoogleReviews'
import SubscriptionFaqs from './subscription-comp/SubscriptionFaqs'

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SubscriptionHeader />
      <AffordableEMI />
      <StillConfused />
      <LearningPlansAndPacks />
      <Linkedin />
      <Google />
      <SubscriptionFaqs />
    </Suspense>
  );
}
