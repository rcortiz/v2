import {
  FaArrowsRotate,
  FaAws,
  FaCertificate,
  FaShopify,
} from "react-icons/fa6";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const icons = {
  aws: FaAws,
  scrum: FaArrowsRotate,
  shopify: FaShopify,
};

const CertificationCard = ({
  title,
  issuer,
  focus,
  icon,
  description,
  index,
}) => {
  const CertificationIcon = icons[icon] || FaCertificate;

  return (
    <Card asChild className="flex h-full flex-col">
      <article>
        <CardHeader className="p-5 pb-4">
          <div className="mb-2 flex items-start justify-between gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-base border-2 border-primary bg-primary text-primary-foreground">
              <CertificationIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <code className="text-xs text-primary/50">
              {String(index + 1).padStart(2, "0")}
            </code>
          </div>
          <h2 className="text-lg leading-snug">{title}</h2>
          <p className="text-sm text-primary/65">Issued by {issuer}</p>
        </CardHeader>
        <CardContent className="flex-1 px-5 pb-5">
          <p className="font-inter text-[14px] text-primary/75">{description}</p>
        </CardContent>
        <CardFooter className="gap-2 border-t-2 border-primary px-5 py-3">
          <FaCertificate className="h-3.5 w-3.5" aria-hidden="true" />
          <code className="text-xs">{focus}</code>
        </CardFooter>
      </article>
    </Card>
  );
};

export default CertificationCard;
