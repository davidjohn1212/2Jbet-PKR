type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders one or more JSON-LD scripts safely for SEO schemas. */
export function JsonLd({ data }: JsonLdProps) {
  const payloads = Array.isArray(data) ? data : [data];

  return (
    <>
      {payloads.map((payload, index) => (
        <script
          // Stable order; content is deterministic per page
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        />
      ))}
    </>
  );
}
