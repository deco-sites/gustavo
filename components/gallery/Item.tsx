import Image from "apps/website/components/Image.tsx";
import { Color as ColorWidget, ImageWidget } from "apps/admin/widgets.ts";
import { lighten } from "../../sections/Theme/Theme.tsx";
import Color from "npm:colorjs.io@0.5.2";
import { toValue } from "../../sections/Theme/Theme.tsx";

/** @title {{{title}}} {{{description}}} */
export interface Props {
  title: string;
  description: string;
  backgroundColor: ColorWidget;
  href: string;
  image: {
    main: ImageWidget;
    secondary?: ImageWidget;
  };
}

const Item = (
  { backgroundColor, href, image, title, description }: Props,
) => {
  return (
    <a
      href={href}
      class="relative overflow-hidden lg:group"
      style={{
        backgroundColor: `oklch(${
          toValue(
            new Color(lighten(backgroundColor, 0.9)),
          ).toString().replace(
            "deg",
            "",
          )
        })`,
      }}
    >
      <div class="p-2 lg:p-5 flex items-center justify-between flex-wrap gap-2 lg:gap-0 text-base">
        <h3 class="text-sm">{title}</h3>
        <p class="text-xs">{description}</p>
      </div>
      <div class="px-2 lg:px-5">
        <Image
          src={image.main}
          height={360}
          width={360}
          alt={`${title} ${description}`}
          class="w-full relative z-10"
        />
        {image.secondary && (
          <Image
            src={image.secondary}
            height={360}
            width={360}
            alt={`${title} ${description}`}
            class="w-full relative z-20 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
    </a>
  );
};

export default Item;
