import ContentBanner from "@/components/(content banner)/content-banner";
import ErrorComponent from "@/components/error-component";
import { fetcher } from "@/lib/utils";
import { GET_PRIVACY } from "@/links";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {};

const page = async (props: Props) => {
  const res = await fetcher<{
    success: boolean;
    privacy: { content: string } 
    error?: string;
  }>(GET_PRIVACY);

  if (!res.success)
    return (
      <div className="min-h-[700px] flex items-center justify-center">
        <ErrorComponent description={res.error as string} />
      </div>
    );
  return (
    <div>
      <ContentBanner title="Privacy Policy" />
      <section className="container mt-12">

        {/* content */}
        <div>
            <Editor initialContent={res.privacy?.content} />
        </div>
      </section>
    </div>
  );
};

export default page;
