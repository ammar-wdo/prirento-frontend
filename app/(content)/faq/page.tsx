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
      <ContentBanner title="FAQ" />

      <section className="mt-12 container min-h-[1200px]">
        <h3 className="text-xl font-medium mt-4">Frequently Asked Questions</h3>
        {!faqsRes.faqs.length && <NoResult />}
        {!!faqsRes.faqs.length && (
          <Accordion type="multiple" className="mt-12">
            {faqs.map((faq) => (
              <AccordionItem  key={faq.id} value={faq.id}>
                <AccordionTrigger className="py-6 hover:bg-muted hover:no-underline px-3" >{faq.question}</AccordionTrigger>
                <AccordionContent className="p-3 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <h3 className="capitalize font-semibold txt-xl mt-12">
                Contact us
        </h3>
        <p className="mt-4">If you have any further questions or require additional assistance not covered in our FAQs, please don't hesitate to reach out to our dedicated customer service team. We're here to help!</p>
      </section>
    </div>
  );
};

export default page;
