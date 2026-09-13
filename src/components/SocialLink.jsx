export default function SocialLink({ href, label, children }) {
  return (
    <a
      className="icon-button"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}
