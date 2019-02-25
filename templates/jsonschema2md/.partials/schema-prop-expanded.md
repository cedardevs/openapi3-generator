
## {{> schemaPropName}}

{{#if prop.description}}
{{prop.description}}
{{/if}}

### Values

#### Type:
{{> schemaPropType }}

{{#if defaultDefined}}
#### Default:
{{{prop.default}}}
{{/if}}

{{#if prop.format}}
#### Format:
{{{prop.format}}}
{{/if}}

#### Accepted Values:
{{#if prop.enum }}
  {{#each prop.enum}}
* {{.}}
  {{/each}}
{{/if }}
{{#if prop.items.externalDocs }}
* [{{prop.items.externalDocs.description}}]({{prop.items.externalDocs.url}})
{{/if }}
{{#if prop.externalDocs }}
* [{{prop.externalDocs.description}}]({{prop.externalDocs.url}})
{{/if }}

{{#if prop.items.description }}
* {{prop.items.description}}
{{/if }}

{{#if prop.items.anyOf}}
* Any Of:
{{#each prop.items.anyOf}}
  - [{{this.externalDocs.description}}]({{this.externalDocs.url}})
{{/each}}
{{/if }}

{{#if prop.items.oneOf}}
* One Of:
{{#each prop.items.oneOf}}
  - [{{this.externalDocs.description}}]({{this.externalDocs.url}})
{{/each}}
{{/if }}
