import Layout from "@/components/layout/layout";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="A highlights of what I've designed and built"
    >
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex w-full justify-stretch py-2 md:w-[370px] md:px-6 md:py-6"
            >
              <div className="flex grow flex-col rounded-base border-2 border-primary bg-card text-card-foreground shadow shadow-dark dark:shadow-light">
                <div className="flex flex-col space-y-1.5 p-6">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
                <div className="flex-1 p-6 pb-10 pt-0">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-full" />
                  <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 pt-0">
                  <Skeleton className="h-10 w-28" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Loading;
