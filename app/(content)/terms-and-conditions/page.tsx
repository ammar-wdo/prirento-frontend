import ContentBanner from "@/components/(content banner)/content-banner";
import ErrorComponent from "@/components/error-component";
import { fetcher } from "@/lib/utils";
import { GET_TERMS } from "@/links";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {};

export const revalidate = 86400

const page = async (props: Props) => {
  const res = await fetcher<{
    success: boolean;
    terms: { content: string } 
    error?: string;
  }>(GET_TERMS);

  if (!res.success)
    return (
      <div className="min-h-[700px] flex items-center justify-center">
        <ErrorComponent description={res.error as string} />
      </div>
    );
  return (
    <div>
      <ContentBanner title="Terms and conditions" />
      <section className="container mt-12">

        {/* content */}
        <div className="min-h-[700px]">
            <Editor initialContent={res.terms?.content} />
        </div>
      </section>
    </div>
  );
};

export default page;
