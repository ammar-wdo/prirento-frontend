import ContentBanner from "@/components/(content banner)/content-banner";
import ErrorComponent from "@/components/error-component";
import NoResult from "@/components/no-result";
import { fetcher } from "@/lib/utils";
import { GET_FAQS } from "@/links";
import { Faq } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {};

const page = async (props: Props) => {
  const faqsRes = await fetcher<{
    faqs: Faq[];
    success: boolean;
    error?: string;
  }>(GET_FAQS);

  if (!faqsRes.success)
    return (
      <div className="flex items-center justify-center min-h-[1200px]">
        {<ErrorComponent description={faqsRes.error as string} />}
      </div>
    );

  const { faqs } = faqsRes;
  return (
    <div>
      <ContentBanner title="FAQs" />

      <section className="mt-12 container min-h-[1200px] flex flex-col pb-12">
        <h1 className="text-4xl font-medium mt-4">Frequently Asked Questions</h1>
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

        <h3 className="capitalize font-semibold txt-xl mt-12">
                Contact us
        </h3>
        <p className="mt-4 max-w-[1100px] font-light">If you have any further questions or require additional assistance not covered in our FAQs, please don&apos;t hesitate to reach out to our dedicated customer service team. We&apos;re here to help!</p>

        <Button asChild variant={'siteMain'} className="rounded-full w-[200px] mx-auto mt-8"><Link href={'/contact-us'} className="flex items-center gap-3">Contact Us <ArrowRight className=""/></Link></Button>
      </section>
    </div>
  );
};

export default page;
