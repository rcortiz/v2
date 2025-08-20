import Layout from "@/components/layout/layout";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Layout
      showHeader
      title="Experiences"
      subtitle="A timeline of my career development and experiences"
    >
      <div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="py-5">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="w-full">
                <div className="flex flex-col gap-2 pb-2 md:flex-row md:items-center md:justify-between">
                  <Skeleton className="h-6 w-2/6 md:w-1/4" />
                  <div className="hidden md:ml-auto md:flex md:gap-4">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                  <div className="flex justify-between text-sm text-primary/90 md:justify-end md:gap-4 md:text-base">
                    <Skeleton className="h-5 w-2/6 md:w-1/4" />
                    <Skeleton className="h-5 w-1/4" />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Loading;
