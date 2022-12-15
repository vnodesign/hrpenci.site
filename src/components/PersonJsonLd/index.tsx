const schemaDataPerson =
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "HR Documention",
  "url": "https://hr.penci.me",
  "image": "https://hr.penci.me/D7858306-BC38-4E7B-B7FE-0767CA0E5025.png",
  "sameAs": [
    "https://www.facebook.com/groups/xomhr",
    "https://github.com/vnodesign",
    "https://hr.penci.me"
  ]
}

export function PersonJsonLd() {
  return (
    <script
      key="person-json"
      type="application/json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataPerson) }}
    />
  )
}
