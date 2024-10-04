import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  photo: ImageWidget;
  name: string;
  description: string;
}

export function Avatar({
  photo,
  name,
  description,
}: Props) {
  return (
    <div className="flex gap-2 items-center flex-start">
      <Image
        src={photo}
        alt={name}
        width={50}
        height={50}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
      />
      <div>
        <h2 className="text-sm font-medium">{name}</h2>
        <p className="text-xs text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
