{{#if prop.enum ~}}{{{acceptedValues prop.enum}}}{{/if ~}}
{{#if prop.items.externalDocs ~}}[{{prop.items.externalDocs.description}}]({{prop.items.externalDocs.url}}){{/if ~}}
{{#if prop.externalDocs ~}}[{{prop.externalDocs.description}}]({{prop.externalDocs.url}}){{/if ~}}
{{#if prop.items.anyOf ~}}`anyOf`: {{{linkList prop.items.anyOf}}}{{/if ~}}
{{#if prop.items.oneOf ~}}`oneOf`: {{{linkList prop.items.oneOf}}}{{/if ~}}
