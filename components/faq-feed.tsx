import { fetcher } from '@/lib/utils';
import { GET_FAQS } from '@/links';
import { Faq } from '@/types';
import React from 'react'
import ErrorComponent from './error-component';
import NoResult from './no-result';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Heading from './heading';


type Props = {}

const FaqFeed = async(props: Props) => {
    const faqsRes = await fetcher<{
        faqs: Faq[];
        success: boolean;
        error?: string;
      }>(`${GET_FAQS}?main=true`);
    
      if (!faqsRes.success)
        return (
          <div className="flex items-center justify-center min-h-[1200px]">
            {<ErrorComponent description={faqsRes.error as string} />}
          </div>
        );
    
      const { faqs } = faqsRes;
  return (
    <section className=" container  flex flex-col  ">
        <Heading title='FAQs' />
        {!faqsRes.faqs.length && <NoResult />}
        {!!faqsRes.faqs.length && (
          <Accordion type="multiple" className="mt-12">
            {faqs.map((faq) => (
              <AccordionItem  key={faq.id} value={faq.id}>
                <AccordionTrigger className="py-6 hover:bg-muted hover:no-underline text-start" >{faq.question}</AccordionTrigger>
                <AccordionContent className="py-3 text-muted-foreground text-start">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

      
       

        <Button asChild variant={'siteMain'} className="rounded-md w-[200px]  mt-8"><Link href={'/faq'} className="flex items-center gap-3">Read More<ArrowRight className=""/></Link></Button>
      </section>
  )
}

export default FaqFeed