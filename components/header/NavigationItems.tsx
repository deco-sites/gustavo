import { clx } from "../../sdk/clx.ts";
import { Link } from "../../sections/Header.tsx";
import Label from "./Label.tsx";

export interface Props {
  items: Link[];
  class?: string;
}

export function NavigationItems({ items, class: _class = "" }: Props) {
  return (
    <nav
      className={clx(
        _class,
        "flex-1 overflow-y-auto",
      )}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-3">
            {item.children?.length
              ? (
                <div class="collapse rounded-none">
                  <input type="checkbox" />
                  <p class="collapse-title text-sm lg:text-base flex items-center gap-2">
                    <Label label={item.label} icon={item.icon} />
                  </p>
                  <ul className="pl-6 mt-2 collapse-content">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex} className="py-1">
                        <a href={child.href} className="text-sm lg:text-base">
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
              : (
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm lg:text-base"
                >
                  <Label label={item.label} icon={item.icon} />
                </a>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
