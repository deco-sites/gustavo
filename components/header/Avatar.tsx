import { ImageWidget } from "apps/admin/widgets.ts";

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
    <div className="p-4">
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-2"
      />
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
}
