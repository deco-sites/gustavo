import { Link } from "../../sections/Header.tsx";
import Label from "./Label.tsx";

export interface Props {
  items: Link[];
}

export function NavigationItems({ items }: Props) {
  return (
    <nav className="flex-1 overflow-y-auto">
      <ul className="py-4">
        {items.map((item, index) => (
          <li key={index} className="px-4 py-2">
            {item.children
              ? (
                <div class="collapse">
                  <input type="checkbox" />
                  <p class="collapse-title text-xl font-medium">
                    <Label label={item.label} icon={item.icon} />
                  </p>
                  <ul className="pl-6 mt-2 collapse-content">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex} className="py-1">
                        <a href="#" className="text-sm">{child}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
              : (
                <a href="#" className="flex items-center">
                  <Label label={item.label} icon={item.icon} />
                </a>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
