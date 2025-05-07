import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongoose",
  "mongodb",
  "tailwindcss",
  "liquid",
  "shopify",
  "bootstrap",
  "swipperdotjs",
  "amazonaws",
  "nginx",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "shadcnui",
  "magicui",
  "wordpress",
  "wix",
  "netlify",
  "styledcomponents",
  "reactrouterdom",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
